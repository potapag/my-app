import React, {useState} from "react";

const Counter = () => {
    const [count, setCount] = useState(0);
    const [tags, setTags] = useState(['tag1', 'tag2', 'tag3']);

    const formatCount = () => {
        return count === 0 ? "empty" : count;
    };

    const getBadeClasses = () => {
        let classes = "badge m-2 ";
        classes += count === 0 ? "bg-warning" : "bg-primary";
        return classes;
    }

    const hemdleIncrement = () => {
        setCount((prevState) => prevState + 1);
    };

    const hemdleDecrement = () => {
        setCount((prevState) => prevState - 1);
    };

    const hendleTagChange = (id) => {
        setTags(prevState => prevState.filter(tag => tag !== id));
    };

    const renderTags = () => {
        return (
            tags.length !== 0 &&
            tags.map(tag => (
                <li 
                    key={tag} 
                    className="btn btn-primary btn-sm m-2"
                    onClick={() => hendleTagChange(tag)}
                >
                    {tag}
                </li>
            ))
        )
    };
    if (tags.length !== 0) {
        return <ul>
                {renderTags()}
            </ul>
    }

    return (
        <>
            <span className={getBadeClasses()}>{formatCount()}</span>
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
        </>
    );
};

export default Counter;