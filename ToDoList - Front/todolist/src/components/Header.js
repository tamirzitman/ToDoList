import PropTypes from "prop-types";
import Button from "./Button";

const Header = (props) => {
  const onClick = (event) => {
    console.log(event);
  };
  return (
    <header className="header">
      <h1> {props.title}</h1>
      <Button color="green" text="Add" onClick={onClick} />
    </header>
  );
};

Header.defaultProps = {
  title: "My To Do List App",
};

// Making the code more robust
Header.propTypes = {
  title: PropTypes.string.isRequired,
};

// CSS in JS:
//.....
// <h1 style={headingStyle}> {props.title}</h1>;
//.....
// const headingStyle = {
//   color: "White",
//   backgroundColor: "Black",
// };

export default Header;
