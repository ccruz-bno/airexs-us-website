const ChatArea = () => {
  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', background: 'var(--primary-white)' }}>
      <div style={{
        padding: '1.5rem',
        borderBottom: '1px solid #E5E5E5',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <h2 style={{ margin: 0, fontSize: '1.25rem', fontWeight: 'var(--font-weight-semibold)' }}>Site Layout #1021</h2>
        <span style={{ color: 'var(--secondary-gray)', fontSize: '0.875rem' }}>Active Session</span>
      </div>
      
      <div style={{ flex: 1, overflowY: 'auto', padding: '2rem' }}>
        <window.MessageBubble 
          role="user" 
          text="Can we verify the duct collision margins for the third floor main line?" 
        />
        <window.MessageBubble 
          role="agent" 
          text="I've reviewed the structural plans. There is a 4-inch clearance gap currently modeled. For international standards compliance, we should adjust this to 6 inches minimum to ensure maximum efficiency." 
        />
      </div>

      <window.InputBar />
    </div>
  );
};

window.ChatArea = ChatArea;
