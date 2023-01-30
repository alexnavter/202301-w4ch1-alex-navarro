import Title from "../Title/Title";

function App() {
  const appTitle = "The pointing gentlemen";

  return (
    <div className="container">
      <header className="main-header">
        <Title title={appTitle} />
      </header>
    </div>
  );
}

export default App;
