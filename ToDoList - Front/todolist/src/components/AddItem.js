import React from "react";

const AddItem = ({ onAdd }) => {
  const [text, setText] = React.useState([]);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!text) {
      alert("Please add text to your item");
      return;
    }
    onAdd({ text });
    setText("");
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <input
          type="text"
          placeholder="Add New Item"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>

      <input type="submit" value="Save" className="btn btn-block" />
    </form>
  );
};

export default AddItem;
