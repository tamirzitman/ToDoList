import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title, onReveal, showAdd }) => {
  return (
    <header className="header">
      <h1> {title}</h1>
      <Button
        color={showAdd ? "firebrick" : "Green"}
        text={showAdd ? "Close" : "Add"}
        onClick={onReveal}
      />
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

export default Header;
