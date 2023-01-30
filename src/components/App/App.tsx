import Button from "../Button/Button";
import Info from "../Info/Info";
import Title from "../Title/Title";

function App() {
  const appTitle = "The pointing gentlemen";
  const infoText = "0 gentlemen pointing at you";

  return (
    <>
      <div className="container">
        <header className="main-header">
          <Title title={appTitle} />
        </header>

        <section className="controls">
          <Info text={infoText} />
          <Button />
        </section>
      </div>
    </>
  );
}

export default App;
