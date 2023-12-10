import "./App.css";
import { useState } from "react";
import values from "./Data/values";
import AddVideo from "./component/AddVideo";
import VideoList from "./component/VideoList";

function App() {
  console.log("Render App");
  const [value, setValue] = useState(values);

  function addValues(newValue) {
    setValue([...value, { ...newValue, id: value.length + 1 }]);
  }

  return (
    <div className="App" onClick={() => console.log("App")}>
      <AddVideo addNewValue={addValues}></AddVideo>
      <VideoList values={value}></VideoList>
    </div>
  );
}

export default App;
