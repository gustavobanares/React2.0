import { useState } from "react";
import "./App.css";
import FirstComponent from "./components/FirstComponent";
import TemplateExpressions from "./components/TemplateExpressions";
import MyComponent from "./components/Mycomponent";
import Events from "./components/Events";
import Challenge from "./components/Challenge";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Hello World 2</h1>
      <FirstComponent />
      <TemplateExpressions />
      <MyComponent />
      <Events />
      <Challenge />
    </>
  );
}

export default App;
