import Title from "../Title/Title";

function App() {
  const appTitle = "The pointing gentlemen";

  return (
    <div className="App">
      <header className="App-header">
        <Title title={appTitle} />
      </header>
    </div>
  );
}

export default App;
