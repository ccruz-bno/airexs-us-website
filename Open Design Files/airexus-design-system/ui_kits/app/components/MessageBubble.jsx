const MessageBubble = ({ role, text }) => {
  const isAgent = role === 'agent';
  return (
    <div style={{
      display: 'flex',
      gap: '1rem',
      marginBottom: '1.5rem',
      flexDirection: isAgent ? 'row' : 'row-reverse'
    }}>
      <div style={{
        width: '32px',
        height: '32px',
        borderRadius: 'var(--radius-full)',
        background: isAgent ? 'var(--primary-cyan)' : 'var(--secondary-dark2)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'var(--primary-white)',
        flexShrink: 0
      }}>
        {isAgent ? 'A' : 'U'}
      </div>
      <div style={{
        background: isAgent ? '#F9F9F9' : 'var(--secondary-dark1)',
        color: isAgent ? 'var(--primary-black)' : 'var(--primary-white)',
        padding: '1rem 1.5rem',
        borderRadius: 'var(--radius-lg)',
        maxWidth: '75%',
        lineHeight: '1.5',
        border: isAgent ? '1px solid #E5E5E5' : 'none'
      }}>
        {text}
      </div>
    </div>
  );
};

window.MessageBubble = MessageBubble;
