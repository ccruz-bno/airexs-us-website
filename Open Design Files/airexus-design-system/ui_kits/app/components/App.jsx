const App = () => {
  return (
    <div style={{ display: 'flex', width: '100%', height: '100%' }}>
      <Sidebar />
      <AssistantsList />
      <ChatArea />
    </div>
  );
};

window.App = App;
