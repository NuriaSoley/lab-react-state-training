import "./App.css";
import ClickablePicture from "./ClickablePicture";
import Counter from "./components/Counter";
import LikeButton from "./components/LikeButton";

function App() {
  return (
    <div className="App">
      <h1> LAB | React Training</h1>

      <LikeButton/>
    <br />
    <br />
      <Counter/>
    
    <br />
    <br />

    <ClickablePicture/>

    </div>
  );
}

export default App;
