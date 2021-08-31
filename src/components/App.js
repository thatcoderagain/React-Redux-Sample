import logo from '../assets/images/logo.svg';
import '../styles/App.css';

import { connect } from "react-redux";
import setAuth from "../store/actions/auth";

function App(props) {
  props.setAuth("Gaurav");
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. {props.auth}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        setAuth: (user) => dispatch(setAuth(user)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
