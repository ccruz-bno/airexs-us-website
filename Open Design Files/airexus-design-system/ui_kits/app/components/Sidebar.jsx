const Sidebar = () => {
  return (
    <aside style={{
      width: '240px',
      background: 'var(--secondary-dark1)',
      color: 'var(--primary-white)',
      display: 'flex',
      flexDirection: 'column',
      borderRight: '1px solid var(--secondary-dark2)',
      flexShrink: 0
    }}>
      <div style={{ padding: '1.5rem', borderBottom: '1px solid var(--secondary-dark2)' }}>
        <img 
          src="../../assets/Imagotipo-_-Descripcio_n-Blanco.svg" 
          alt="Logo" 
          style={{ width: '100%', maxWidth: '160px' }}
        />
      </div>
      <nav style={{ flex: 1, padding: '1.5rem 1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <div style={{ padding: '0.5rem 1rem', borderRadius: 'var(--radius-sm)', background: 'rgba(255,255,255,0.05)', color: 'var(--primary-cyan)', fontWeight: 'var(--font-weight-medium)' }}>
          HVAC Planner
        </div>
        <div style={{ padding: '0.5rem 1rem', borderRadius: 'var(--radius-sm)', color: 'var(--secondary-gray)', cursor: 'pointer' }}>
          Duct Specifications
        </div>
        <div style={{ padding: '0.5rem 1rem', borderRadius: 'var(--radius-sm)', color: 'var(--secondary-gray)', cursor: 'pointer' }}>
          Consultation Logs
        </div>
      </nav>
      <div style={{ padding: '1rem', borderTop: '1px solid var(--secondary-dark2)' }}>
        <button style={{
          width: '100%',
          background: 'var(--gradient-yellow-cyan)',
          color: 'var(--primary-black)',
          padding: '0.75rem',
          borderRadius: 'var(--radius-md)',
          border: 'none',
          fontWeight: 'var(--font-weight-semibold)',
          cursor: 'pointer'
        }}>New Project</button>
      </div>
    </aside>
  );
};

window.Sidebar = Sidebar;
