import "./App.css";
import image from "./image-qr-code.png"

function App() {
  return (
    <div className="container">
      <div className="App">
        <img src={image} alt="qr code" />
        <h1>Scan this code to gain access to the code-base</h1>
        <p>
          This is a qr code component I designed using HTML, CSS and React. This
          can be used in any React application.
        </p>
      </div>
    </div>
  );
}

export default App;
