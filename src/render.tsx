import * as React from "react";
import * as ReactDOM from "react-dom";

const RenderApp: React.FC = () => {
    return <h2>Hello React</h2>;
}


ReactDOM.render(<RenderApp />, document.getElementById("root"));

