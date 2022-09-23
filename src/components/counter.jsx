import React, {useState} from "react";

const Counter = (props) => {
    const [value, setCount] = useState(props.value);

    const formatValue = () => {
        return value === 0 ? "empty" : value;
    };

    const getBadeClasses = () => {
        let classes = "badge m-2 ";
        classes += value === 0 ? "bg-warning" : "bg-primary";
        return classes;
    }

    const hemdleIncrement = () => {
        setCount((prevState) => prevState + 1);
    };

    const hemdleDecrement = () => {
        setCount((prevState) => prevState - 1);
    };

    return (
        <div>
            <span>{props.name}</span>
            <span className={getBadeClasses()}>{formatValue()}</span>
            <button 
                className="btn btn-primary btn-sm m-2" 
                onClick={hemdleIncrement}
            >
                +
            </button>
            <button 
                className="btn btn-primary btn-sm m-2" 
                onClick={hemdleDecrement}
            >
                -
            </button>
            <button className="btn btn-danger btn-sm m-2" onClick={() => props.onDelete(props.id)}>Delete</button>
        </div>
    );
};

export default Counter;