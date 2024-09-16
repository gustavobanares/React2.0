import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import FirstComponent from "./components/FirstComponent";
import TemplateExpressions from "./components/TemplateExpressions";
import MyComponent from "./components/Mycomponent";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Hello World 2</h1>
      <FirstComponent />
      <TemplateExpressions />
      <MyComponent />
    </>
  );
}

export default App;
