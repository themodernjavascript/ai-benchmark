import React from "react";

const Buttons = ({
  prepend, 
  insert, 
  append, 
  drop, 
  remove, 
  N, 
  count 
}) => (
  <div>
    <button 
      onClick={prepend} 
      className="pulse"
    >
      Prepend {N} nodes
    </button>
    <button 
      onClick={insert} 
      className="pulse"
    >
      Insert {N} nodes
    </button>
    <button 
      onClick={append} 
      className="pulse"
    >
      Append {N} nodes
    </button>
    <button 
      onClick={drop} 
      className="pulse"
    >
      Drop all nodes
    </button>
    <button 
      onClick={remove} 
      className="pulse"
    >
      Remove 1 node
    </button>
  </div>
);

export default Buttons;
