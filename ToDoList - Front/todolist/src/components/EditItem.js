import React from "react";
import Button from "./Button";

const EditItem = ({ onEdit, currentText, closeEditMenu }) => {
  const [text, setText] = React.useState([]);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!text) {
      return;
    }
    onEdit({ text });
    setText("");
    closeEditMenu();
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <input
          type="text"
          placeholder={currentText}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <input type="submit" value="Save Changes" className="edit-btn" />
      <br></br>
      <Button
        color="firebrick"
        text="Close Edit Menu"
        onClick={closeEditMenu}
      />{" "}
    </form>
  );
};

export default EditItem;
