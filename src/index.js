import React from "react";
import reactDom from "react-dom";
// import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import Counter from "./components/counter";

// React 17


const App = () => {
    return <Counter />;
};

reactDom.render(<App />, document.getElementById("root"));

// React 18
// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(
//             <React.StrictMode>
//                 <h1>hello world</h1>
//             </React.StrictMode>
// );