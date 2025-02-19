import { useState } from "react";

const AddTodo = ({addTodo})=>{

  const [input, setInput] = useState('');

  const handleAdd = () => {
    addTodo(input);
    setInput('');
  }
  return(
    <div className="add-todo">
      <input
        onChange={(e) => {setInput(e.target.value)}}
        value={input}
        className="add-input"
        type="text"
      />

      <button onClick={handleAdd} className="add-button">
        Add todo
      </button>
    </div>
  )
}

export default AddTodo;
