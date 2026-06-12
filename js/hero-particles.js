/**
 * Hero Particles — 3D Perspective Wave Grid
 * Renders a uniform grid of dots on a perspective plane with undulating
 * sine-wave terrain, inspired by Ref-BG-Motion-1.mov.
 *
 * Uses a simplified perspective-plane projection (no full 3D camera)
 * for reliability and performance. The grid is viewed from above-forward,
 * like looking at a rolling landscape from a height.
 *
 * Features:
 *   • Uniform grid projected with perspective (vanishing point at horizon)
 *   • Multiple overlapping sine waves create organic terrain motion
 *   • 60 % yellow (#FFE900) / 40 % cyan (#2B99D1) colour split
 *   • Dot size & opacity scale with perspective depth
 *   • Wave height displaces dots vertically on screen
 *   • No glow — clean solid dots only
 *   • IntersectionObserver pauses off-screen
 *   • Responsive grid density
 *   • Throttled to ~30 fps
 */

(function () {
  'use strict';

  /* ── Configuration ───────────────────────────────────────── */
  const CFG = {
    // Grid resolution
    cols:        220,
    rows:        120,
    colsMobile:  110,
    rowsMobile:  65,
    mobileBreak: 768,

    // Perspective plane layout (fractions of canvas size)
    horizonY:  0.28,   // horizon line — top of the wave field (0 = top)
    bottomY:   1.15,   // bottom of the field (>1 = extends below canvas)
    horizonXSpread: 0.25, // horizontal spread at the horizon (fraction of width)
    bottomXSpread:  0.70, // horizontal spread at the bottom

    // Dot sizing
    dotSizeNear: 1.6,
    dotSizeFar:  0.3,

    // Opacity
    alphaNear: 0.48,
    alphaFar:  0.05,

    // Wave parameters — multiple sine layers for organic undulation
    waves: [
      { amp: 45,  fx: 0.025, fz: 0.030, sx:  0.012, sz:  0.008, px: 0,    pz: 0    },
      { amp: 25,  fx: 0.040, fz: 0.015, sx: -0.008, sz:  0.014, px: 1.3,  pz: 0.7  },
      { amp: 15,  fx: 0.015, fz: 0.050, sx:  0.005, sz: -0.010, px: 2.8,  pz: 1.9  },
    ],

    // Colours
    colorYellow: { r: 255, g: 233, b: 0  },   // #FFE900
    colorCyan:   { r: 43,  g: 153, b: 209 },  // #2B99D1
    yellowRatio: 0.60,

    // Performance
    frameInterval: 1000 / 30,
  };

  /* ── Wave height at normalised grid position (gx 0..1, gz 0..1) ── */
  function waveHeight(gx, gz, time) {
    // Scale to larger world units for wave frequency
    const wx = gx * 1000;
    const wz = gz * 1000;
    let h = 0;
    for (let i = 0; i < CFG.waves.length; i++) {
      const w = CFG.waves[i];
      h += w.amp * Math.sin(
        wx * w.fx + w.px + time * w.sx +
        wz * w.fz + w.pz + time * w.sz
      );
    }
    return h;
  }

  /* ── Init for a single hero section ────────────────────── */
  function initHeroParticles(section) {
    const canvas = document.createElement('canvas');
    canvas.className = 'hero-particles-canvas';
    canvas.setAttribute('aria-hidden', 'true');
    section.insertBefore(canvas, section.firstChild);

    const ctx = canvas.getContext('2d');
    let cw, ch, dpr;
    let cols, rows;
    let dotColors = [];   // pre-assigned colour per dot
    let isVisible = true;
    let lastFrame  = 0;
    let time       = 0;

    /* Pre-assign colours so they don't flicker every frame */
    function assignColors() {
      dotColors = [];
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const spatialBias = (c / cols) * 0.2;
          dotColors.push((Math.random() + spatialBias) < CFG.yellowRatio + 0.1);
        }
      }
    }

    function resize() {
      cw  = section.offsetWidth;
      ch  = section.offsetHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width  = cw * dpr;
      canvas.height = ch * dpr;
      canvas.style.width  = cw + 'px';
      canvas.style.height = ch + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      cols = cw < CFG.mobileBreak ? CFG.colsMobile : CFG.cols;
      rows = cw < CFG.mobileBreak ? CFG.rowsMobile : CFG.rows;
      assignColors();
    }

    function draw() {
      ctx.clearRect(0, 0, cw, ch);

      const horizY  = ch * CFG.horizonY;
      const botY    = ch * CFG.bottomY;
      const spanY   = botY - horizY;

      const cY = CFG.colorYellow;
      const cC = CFG.colorCyan;
      let idx = 0;

      // Draw back-to-front (row 0 = far/horizon, row rows-1 = near/bottom)
      for (let r = 0; r < rows; r++) {
        // t: 0 = horizon (far), 1 = bottom (near)
        const t = r / (rows - 1);

        // Use a power curve so rows near the horizon are more compressed
        // (perspective foreshortening)
        const tPersp = t * t;  // quadratic foreshortening

        // Base Y position for this row
        const baseY = horizY + tPersp * spanY;

        // Horizontal spread widens with depth
        const xSpread = CFG.horizonXSpread + t * (CFG.bottomXSpread - CFG.horizonXSpread);
        const rowLeft  = cw * (0.5 - xSpread);
        const rowRight = cw * (0.5 + xSpread);
        const rowWidth = rowRight - rowLeft;

        // Dot size & alpha scale with depth
        const dotSize = CFG.dotSizeFar + t * (CFG.dotSizeNear - CFG.dotSizeFar);
        const baseAlpha = CFG.alphaFar + t * (CFG.alphaNear - CFG.alphaFar);

        for (let c = 0; c < cols; c++) {
          const gx = c / (cols - 1);   // 0..1 across grid
          const gz = t;                 // 0..1 into depth

          // Screen X — evenly spaced within the perspective-spread row
          const sx = rowLeft + gx * rowWidth;

          // Wave displacement (vertical on screen, scaled by perspective)
          const wh = waveHeight(gx, gz, time);
          // Scale wave displacement: stronger near camera, subtle far away
          const waveScale = 0.3 + t * 0.7;
          const sy = baseY - wh * waveScale;

          // Clipping
          if (sy < -10 || sy > ch + 10 || sx < -10 || sx > cw + 10) {
            idx++;
            continue;
          }

          // Opacity: boost for dots on wave crests (higher wh = crest)
          const heightBoost = Math.max(0, wh) / 60 * 0.15;
          const alpha = Math.min(1, baseAlpha + heightBoost);

          // Colour
          const isYellow = dotColors[idx];
          let cr, cg, cb;
          if (isYellow) {
            cr = cY.r; cg = cY.g; cb = cY.b;
          } else {
            cr = cC.r; cg = cC.g; cb = cC.b;
          }

          ctx.beginPath();
          ctx.arc(sx, sy, dotSize, 0, 6.2832);
          ctx.fillStyle = 'rgba(' + cr + ',' + cg + ',' + cb + ',' + alpha.toFixed(2) + ')';
          ctx.fill();

          idx++;
        }
      }
    }

    function loop(ts) {
      requestAnimationFrame(loop);
      if (ts - lastFrame < CFG.frameInterval) return;
      lastFrame = ts;
      if (!isVisible) return;

      time += 1;
      draw();
    }

    // Visibility
    const obs = new IntersectionObserver(
      (entries) => { entries.forEach(e => { isVisible = e.isIntersecting; }); },
      { threshold: 0 }
    );
    obs.observe(section);

    // Resize
    let rt;
    window.addEventListener('resize', () => {
      clearTimeout(rt);
      rt = setTimeout(resize, 200);
    });

    // Boot
    resize();
    requestAnimationFrame(loop);
  }

  /* ── Auto-init ─────────────────────────────────────────── */
  function init() {
    document.querySelectorAll('.hero-bg, .about-hero-bg').forEach(initHeroParticles);
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
