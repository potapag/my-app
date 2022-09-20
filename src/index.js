import React from "react";
import ReactDOM from "react-dom/client";

// const element = <h1>hello world</h1>

// console.log(element);
// reactDom.createRoot(element, document.getElementById("root"));
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
            <React.StrictMode>
                <h1>hello world</h1>
            </React.StrictMode>
);