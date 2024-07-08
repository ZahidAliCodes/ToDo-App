import React, { useState } from "react";
import List from "./To-do-List";

function ToDo() {
    const [inputList, setInputList] = useState("");
    const [items, setItems] = useState([]);

    const itemEvent = (event) => {
        setInputList(event.target.value);
    };

    const listOfItems = () => {
        setItems((oldItems) => {
            return [...oldItems, inputList];
        });
        setInputList("");
    };

    const deleteItems = (id) => {
        setItems((oldItems) => {
            return oldItems.filter((arrElem, index) => {
                return index !== id;
            });
        });
    };

    return (
        <div className="toDo-main">
            <div className="toDo-center">
                <h1>ToDO List</h1>
                <br />
                <div className="input-section">
                    <input type="text" placeholder="Add a item" value={inputList} onChange={itemEvent} />
                    <button onClick={listOfItems}>+</button>
                </div>
                <ol>
                    {items.map((itemval, index) => {
                        return <List id={index} key={index} text={itemval} onSelect={deleteItems} />;
                    })}
                </ol>
            </div>
        </div>
    );
}

export default ToDo;
