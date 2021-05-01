import PropTypes from "prop-types";
import Button from "./Button";

const Header = () => {
  return (
    <header className="header">
      <h1>Task Tracker</h1>
      <Button color="blue" text="Hello" />
    </header>
  );
};

Header.defaultProps = {
  // you can define default props here
  // title: 'Task Tracker'
};

// type checking
Header.propTypes = {
  title: PropTypes.string.isRequired,
};

const headerStyle = {
  //   color: "grey",
  //   backgroundColor: "#424242",
};

export default Header;
