import React from "react";

const AddItem = (onAdd) => {
  const [text, setText] = React.useState([]);

  const onSubmit = (e) => {
    e.preverntDefault();
    if (!text) {
      alert("please add text to your item");
      return;
    }
    onAdd({ text });
    setText("");
  };

  return (
    <from className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <input
          type="text"
          placeholder="Add New Item"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      {/* <div className="form-control">
        <label>Item</label>
        <input type="text" placeholder="Add New Item"></input>
      </div> */}
      <input type="submit" value="Save" className="btn btn-block" />
    </from>
  );
};

export default AddItem;
