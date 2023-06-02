import { FaSquare, FaCheckSquare } from "react-icons/fa";

const Item = ({ item, onCheck }) => {
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
        onClick={() => onCheck(item._id, !item.completed)}
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
        onClick={() => onCheck(item._id, !item.completed)}
      />
    );
  }
  return (
    <div
      className={selectedClassName}
      onClick={() => onCheck(item._id, !item.completed)}
    >
      <h3>
        {item.text}
        {checkIcon}
      </h3>
    </div>
  );
};

export default Item;
