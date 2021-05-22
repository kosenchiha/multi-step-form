import { BrowserRouter, Link } from "react-router-dom";
import Routes from "./routes";
import { urls } from "./routes/urls";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Link to={urls.user}>User</Link> <br></br>
          <Link to={urls.privacy}>Privacy</Link> <br></br>
          <Link to={urls.done}>Done</Link> <br></br>
        </div>

        <Routes />
      </BrowserRouter>
    </div>
  );
};

export default App;
