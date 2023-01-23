import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ name }) => {
  const onClick = () => {
    console.log("Clicked!");
  };
  return (
    <header className="header">
      <div>
        <h1>Task Tracker</h1>
        <h2>Built בס"ד by {name}</h2>
      </div>
      <Button color="green" text="Add" onClick={onClick} />
    </header>
  );
};

Header.defaultProps = {
  name: "Ploni Almoni",
};

Header.propTypes = {
  name: PropTypes.string.isRequired,
};
export default Header;
