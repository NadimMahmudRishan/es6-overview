import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Sunglass from "./components/sunglass/sunglass";
import Watch from "./components/watch/Watch";
function App() {
  const [watches, setWatches] = useState([]);
  useEffect(() => {
    fetch("watches.json")
      .then((res) => res.json())
      .then((data) => setWatches(data));
  }, []);
  return (
    <>
      {/* <div>
        <p>Nadim mahmud rishan</p>
        <Sunglass></Sunglass>
      </div> */}

      <div>
        {watches.map((watch) => (
          <Watch key={watch.id} watch={watch}></Watch>
        ))}
        ;
      </div>
    </>
  );
}

export default App;
