import { FaSquare, FaCheckSquare, FaRegTrashAlt, FaPen } from "react-icons/fa";

const Item = ({ item, onCheck, onDelete, onEdit }) => {
  let selectedClassName;
  let checkIcon;
  let checkStyle;

  if (item.completed) {
    selectedClassName = "tickedItem";
    checkStyle = {
      color: "green",
      cursor: "pointer",
    };
    checkIcon = (
      <FaCheckSquare
        style={checkStyle}
        onClick={(event) => {
          event.stopPropagation();
          onCheck(item._id, !item.completed);
        }}
      />
    );
  } else {
    selectedClassName = "item";
    checkStyle = {
      color: "grey",
      cursor: "pointer",
    };
    checkIcon = (
      <FaSquare
        style={checkStyle}
        onClick={(event) => {
          event.stopPropagation();
          onCheck(item._id, !item.completed);
        }}
      />
    );
  }
  const deleteIcon = (
    <FaRegTrashAlt
      style={{
        color: "Red",
        cursor: "pointer",
      }}
      onClick={(event) => {
        event.stopPropagation();
        onDelete(item._id);
      }}
    />
  );

  const editIcon = (
    <FaPen
      style={{
        color: "Black",
        cursor: "pointer",
      }}
      onClick={(event) => {
        event.stopPropagation();
        onEdit(item._id, item.text);
      }}
    />
  );
  return (
    <div
      className={selectedClassName}
      onClick={() => onCheck(item._id, !item.completed)}
    >
      <h3>
        {deleteIcon}
        {editIcon}
        {item.text}
        {checkIcon}
      </h3>
    </div>
  );
};

export default Item;
