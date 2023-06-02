import loadingGif from "../loading.gif";
import Item from "./Item";
import PropTypes from "prop-types";

const List = ({ items, onCheck, onDelete, onEdit }) => {
  if (!items || items.length === 0)
    return <img src={loadingGif} alt="loading" className="center"></img>;

  return (
    <>
      {items.map((item) =>
        item ? (
          <Item
            key={item._id}
            item={item}
            onCheck={(ID, asCompleted) => onCheck(ID, asCompleted)}
            onDelete={(ID) => onDelete(ID)}
            onEdit={(ID, text) => onEdit(ID, text)}
          />
        ) : (
          ""
        )
      )}
    </>
  );
};

// Making the code more robust
List.propTypes = {
  items: PropTypes.array,
  onCheck: PropTypes.func,
  onDelete: PropTypes.func,
  onEdit: PropTypes.func,
};

export default List;
