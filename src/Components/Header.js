import PropTypes from "prop-types";

const Header = ({ title }) => {
  return (
    <header>
      <h1 style={headerStyle}>Task Tracker</h1>
      <h4>{title}</h4>
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
  color: "grey",
  backgroundColor: "#424242",
};

export default Header;
