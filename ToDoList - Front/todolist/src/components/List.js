import loadingGif from "../loading.gif";
import Item from "./Item";
import PropTypes from "prop-types";

const List = ({ items, onCheck }) => {
  console.log("items", items);
  if (!items || items.length === 0)
    return <img src={loadingGif} alt="loading" className="center"></img>;

  return (
    <>
      {items.map((item) =>
        item ? <Item Key={item.ID} item={item} onCheck={onCheck} /> : ""
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

// Old version:

// export function List({ items }) {
//   console.log("items", items);
//   if (!items || items.length === 0) return <div>loading...</div>;

//   return (
//     <div>
//       {/* <h2>Tasks To Complete:</h2> */}
//       {items.map((item) => (!item.completed ? <h3>{item.text}</h3> : ""))}

//       {items.map((item) =>
//         item.completed ? (
//           <h3 style={{ textDecoration: "line-through" }}>{item.text}</h3>
//         ) : (
//           ""
//         )
//       )}
//     </div>

//     // <div>
//     //   <div>{items[0].text}</div>
//     //   <div>{items[1].text}</div>
//     // </div>
//   );
// }
