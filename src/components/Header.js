import logo from "../images/logo.svg";
import PropTypes from "prop-types";
import { FaTimes } from 'react-icons/fa'
import { Button } from "./Button";
//props: js object which we're passing parent component(in app.js) to child component
//It is an object which stores the value of attributes of a tag and work similar to the HTML attributes.

export const Header = (props) => {
  //or instead of (props) -> ({title})

  return (
    <header className="App-header">
        <div>
          <img src={logo} alt="logo" className="App-logo" />{' '}
          <span>{props.title}</span>{/* here -> {title} */}
        </div>
        <Button text={props.showAdd ? <FaTimes /> : 'Add'} onClick={props.onAdd} />
    </header>
  );
};

//default props
Header.defaultProps = {
  title: "Task Tracker", //default value for props argument
};

//checking the types passed in the props object against a specification we set beforehand and to raise a warning(in browser console) if the types passed don't match the types expected.
Header.propTypes = {
  title: PropTypes.string.isRequired, //type of title is set string here if we pass number in title then it'll show an error in console
  //.isRequired: if we don't set any value or default value for title it'll show an error in console. i.e it is mandatory to pass value in title
};
