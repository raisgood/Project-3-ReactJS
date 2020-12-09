

/*import React from "react";
import { render } from "react-dom";
import { HashRouter, Route, Link } from "react-router-dom";

const About = () => <div>About</div>;
const Todos = () => <div>Todos</div>;
const Contact = ({ match }) => <div>{match.params.id}</div>;

const Info = ({ match }) => {
  return (
    <div>
      <ul>
        <li>
          <Link to={match.url + "/phone"}>About</Link>
        </li>
        <li>
          <Link to={match.url + "/email"}>To Do</Link>
        </li>
        <li>
          <Link to={match.url + "/address"}>Contact</Link>
        </li>
      </ul>
      <hr />
      <Route
        path={match.url + "/phone"}
        render={(props) => <div>Phone: 123 456 7890</div>}
      />
      <Route
        path={match.url + "/email"}
        render={(props) => <div>Email: email@email.com</div>}
      />
      <Route
        path={match.url + "/address"}
        render={(props) => <div>Address: 123 Address</div>}
      />
    </div>
  );
};

const App = () => (
  <HashRouter>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/users/abc">Users: abc</Link>
        </li>
      </ul>
      <hr />
      <Route exact path="/" component={About} />
      <Route path="/about" component={Todos} />
      <Route path="/users/:id" component={Contact} />
      <Route path="/info" component={Info} />
    </div>
  </HashRouter>
);

render(<App />, document.getElementById("root"));*/
