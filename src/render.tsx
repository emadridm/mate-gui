import * as React from "react";
import * as ReactDOM from "react-dom";

const RenderApp: React.FC = () => {
  return (
    <>
      <h1>Hello React</h1>
      <h2>jajaja</h2>
    </>
  );
};

ReactDOM.render(<RenderApp />, document.getElementById("root"));
