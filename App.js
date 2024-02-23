import React from "react";
import ReactDOM from "react-dom/client";

const jsxHeading = <h1 id="heading">My React using JSX</h1>;

const title = <h1 className="heading">My react Functional Component Title</h1>

const number = 10000;

const FunctionalComponent = () => (
<div>
    {title}
    {number}
    <h1 className="heading">My react Functional Component</h1>
</div>
)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<FunctionalComponent/>);


