const InputBar = () => {
  return (
    <div style={{ padding: '1.5rem', borderTop: '1px solid #E5E5E5', background: 'var(--primary-white)' }}>
      <div style={{
        display: 'flex',
        border: '1px solid #E5E5E5',
        borderRadius: 'var(--radius-md)',
        overflow: 'hidden',
        background: '#FAFAFA'
      }}>
        <input 
          type="text" 
          placeholder="Ask about structural clearances..." 
          style={{
            flex: 1,
            padding: '1rem',
            border: 'none',
            background: 'transparent',
            outline: 'none',
            fontFamily: 'inherit'
          }}
        />
        <button style={{
          background: 'var(--primary-cyan)',
          color: 'var(--primary-white)',
          border: 'none',
          padding: '0 1.5rem',
          fontWeight: 'var(--font-weight-medium)',
          cursor: 'pointer'
        }}>
          Send
        </button>
      </div>
    </div>
  );
};

window.InputBar = InputBar;
