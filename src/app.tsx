import Pages from "@/pages";
// index.js
import microApp from "@micro-zoe/micro-app";
import { useEffect } from "react";
function App() {
  useEffect(() => {
    microApp.start();
  }, []);
  return (
    <div className="App">
      <Pages />
    </div>
  );
}

export default App;
