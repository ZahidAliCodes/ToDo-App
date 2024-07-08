import React from "react";

function List(props) {
    return (
        <>
            <div className="flex">
                <i
                    className="fa-solid fa-x"
                    onClick={() => {
                        props.onSelect(props.id);
                    }}
                ></i>
                <li> {props.text} </li>
            </div>
        </>
    );
}

export default List;
