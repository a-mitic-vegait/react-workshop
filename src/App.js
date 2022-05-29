import React from "react";
import StateComponent from "./hooks/state";
import "./styles.css";
import { render } from "react-dom";
import EffectComponent from "./hooks/effect";
import ContextComponent from "./hooks/context";
import RefComponent from "./hooks/ref";
import MemoComponent from "./hooks/memo";
import CallbackComponent from "./hooks/callback";
import ImperativeHandleComponent from "./hooks/imperativeHandle";
import LayoutEffectComponent from "./hooks/layoutEffect";

const App = () => {
  return (
    <div className="App">
      <StateComponent />
      <hr />
      <EffectComponent />
      <hr />
      <ContextComponent />
      <hr />
      <RefComponent />
      <hr />
      <MemoComponent />
      <hr />
      <CallbackComponent />
      <hr />
      <LayoutEffectComponent />
      <hr />
      <ImperativeHandleComponent />
    </div>
  );
};

render(<App />, document.getElementById("root"));
