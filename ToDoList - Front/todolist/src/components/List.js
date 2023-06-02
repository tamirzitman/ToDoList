import loadingGif from "../loading.gif";
import Item from "./Item";
import PropTypes from "prop-types";

const List = ({ items, onCheck }) => {
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
  onCheck: PropTypes.func,
  items: PropTypes.array,
};

export default List;
