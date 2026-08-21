import React from "react";
import ReactDOM from "react-dom/client";

function Book(props) {
    return (
        <div>
            <img
                src={props.image}
                width="150px"
                height="200px"
            />

            <h2>{props.name}</h2>
            <h3>Price: ${props.price}</h3>

            <button>Add To Cart</button>
        </div>
    );
}

function App() {
    return (
        <div>

            <Book
                name="The Alchemist"
                price="475"
                image="https://covers.openlibrary.org/b/title/The%20Alchemist-M.jpg"
            />

            <Book
                name="Atomic Habits"
                price="599"
                image="https://covers.openlibrary.org/b/title/Atomic%20Habits-M.jpg"
            />

            <Book
                name="Rich Dad Poor Dad"
                price="399"
                image="https://covers.openlibrary.org/b/title/Rich%20Dad%20Poor%20Dad-M.jpg"
            />

        </div>
    );
}

const parent = document.getElementById("root");

ReactDOM.createRoot(parent).render(<App />);