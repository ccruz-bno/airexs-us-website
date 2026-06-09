# Engineering Workspace UI Kit

## Structure
This directory contains an applied UI kit that demonstrates a dashboard/workspace layout using the HVAC engineering design system. It uses React and JSX via Babel standalone to compose a functional application shell.
The main entry point is `index.html`, which imports modular files from the `components/` directory.

## Components
The kit is modularized into distinct, source-backed role components found in `ui_kits/app/components/`:
- `App.jsx`: The root application shell that composes the overall layout.
- `Sidebar.jsx`: The navigation sidebar featuring branding and primary actions.
- `AssistantsList.jsx`: The list/rail component for selecting projects or engineering consultations.
- `ChatArea.jsx`: The main workspace displaying the conversation, logs, or technical data.
- `MessageBubble.jsx`: The message component for agent/user interactions within the workspace.
- `InputBar.jsx`: The input/composer bar for submitting queries or commands.

## Usage
1. Open `index.html` in the Open Design canvas. It acts as a runnable browser entry, loading React, Babel, and `../../colors_and_type.css`.
2. The application will mount and render the composed interface dynamically.
3. Future agents can copy these components to replicate the layout structure and styling choices defined by the design system's CSS variables.

## Design Notes
The UI kit applies the core design system principles practically:
- Structural neutrals (`--color-dark-1`, `--color-dark-2`) provide depth and hierarchy to the sidebar and main workspace areas.
- Technical accents (`--color-primary-yellow`, `--color-primary-cyan`) are used sparingly to indicate active elements, primary actions, or interactive buttons.
- The interface strictly adheres to the typography rules using the Poppins font family.

## Source Notes
The components and structure map the extracted source tokens and intent from the AirexsUS B2B site onto standard workspace roles. They serve as a concrete reference based on authentic source material for applying the design system to complex application layouts.