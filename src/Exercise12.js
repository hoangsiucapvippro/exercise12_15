import React, { useState } from "react";

function Exercise12() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const handleClick = () => {
    setIsVisible(!isVisible);
  };

  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleSubmit = () => {
    if (todo.trim() !== "") {
      setTodos([...todos, todo]);
      setTodo("");
    }
  };

  const handleDelete = (index) => {
    const newTodos = todos.filter((item, i) => i !== index);
    setTodos(newTodos);
  };

  const [color, setColor] = useState("white");

  const handleColor = (e) => {
    setColor(e.target.value);
  };

  const [search, setSearch] = useState("");

  const fruits = ["Apple", "Banana", "Orange", "Mango", "Watermelon"];

  const searchFruit = fruits.filter((item) =>
    item.toLowerCase().includes(search.toLowerCase()),
  );

  const [items, setItems] = useState([
    "Apple",
    "Banana",
    "Orange",
    "Mango",
    "Watermelon",
  ]);

  const [draggingItem, setDraggingItem] = useState(null);

  const handleDragStart = (index) => {
    setDraggingItem(index);
  };

  const handleDrop = (index) => {
    const newItems = [...items];

    const draggedItem = newItems.splice(draggingItem, 1)[0];

    newItems.splice(index, 0, draggedItem);

    setItems(newItems);
  };

  const handleDragEnd = () => {
    setDraggingItem(null);
  };

  return (
    <div>
      <h1>Exercise 12</h1>
      <hr />
      <div>
        <button onClick={() => setCount(count + 1)}>Increase</button>
        <p>{count}</p>
      </div>
      <hr />
      <div>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <p>Input text: {text}</p>
      </div>
      <hr />
      <div>
        <button onClick={handleClick}>{isVisible ? "Hide" : "Show"}</button>
        {isVisible && <p>Toggle me</p>}
      </div>
      <hr />
      <div>
        <div>
          <input
            type="text"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
          <button onClick={handleSubmit}>Add</button>
        </div>
        <div>
          <h3>Todos List</h3>
          <ul>
            {todos.map((item, index) => (
              <li key={index}>
                {item}
                <button onClick={() => handleDelete(index)}>Delete</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <hr />
      <div>
        <select value={color} onChange={handleColor}>
          <option value="white">White</option>
          <option value="red">Red</option>
          <option value="blue">Blue</option>
          <option value="green">Green</option>
          <option value="yellow">Yellow</option>
        </select>
        <div
          style={{
            width: "300px",
            height: "200px",
            backgroundColor: color,
            marginTop: "20px",
          }}
        ></div>
      </div>
      <hr />
      <div>
        <h3>Search Fruit</h3>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <ul>
          {searchFruit.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <hr />
      <div>
        <h2>Drag and Drop List</h2>

        <ul>
          {items.map((item, index) => (
            <li
              key={index}
              draggable
              onDragStart={() => handleDragStart(index)}
              onDragOver={(e) => e.preventDefault()}
              onDrop={() => handleDrop(index)}
              onDragEnd={handleDragEnd}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Exercise12;
