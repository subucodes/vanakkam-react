import React from "react";
import ReactDOM from "react-dom/client";

// JSX - is a HTML like syntax ; it is not part of React
const jsxHeading = <h1 className="heading">Vanakkam JS using JSX</h1>;
const root = ReactDOM.createRoot(document.getElementById("root"));

//React functional component: function that returns a react elements or JSX code
const Title = ()=> <h1>This is a title</h1>
const HeadingComponent = ()=> (
    <div>
    <Title/>
    {Title()}
    <h1 className="heading">This is subbu</h1>
    </div>
    
    )

root.render(<HeadingComponent/>);

