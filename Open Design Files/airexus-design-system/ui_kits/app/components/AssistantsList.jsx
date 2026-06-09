const AssistantsList = () => {
  return (
    <div style={{
      width: '280px',
      background: '#FAFAFA',
      borderRight: '1px solid #E5E5E5',
      display: 'flex',
      flexDirection: 'column',
      flexShrink: 0
    }}>
      <div style={{ padding: '1.5rem 1rem', borderBottom: '1px solid #E5E5E5', fontWeight: 'var(--font-weight-semibold)' }}>
        Consultations
      </div>
      <div style={{ flex: 1, overflowY: 'auto' }}>
        {[1, 2, 3].map(i => (
          <div key={i} style={{
            padding: '1rem',
            borderBottom: '1px solid #E5E5E5',
            cursor: 'pointer',
            background: i === 1 ? 'var(--primary-white)' : 'transparent'
          }}>
            <div style={{ fontWeight: 'var(--font-weight-medium)', marginBottom: '0.25rem' }}>Site Layout #{1020 + i}</div>
            <div style={{ fontSize: '0.875rem', color: 'var(--secondary-gray)' }}>Awaiting thermal review...</div>
          </div>
        ))}
      </div>
    </div>
  );
};

window.AssistantsList = AssistantsList;
