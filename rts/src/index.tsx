import ReactDOM from "react-dom";
import GuestList from "./state/GuestList";
import UserSearch from "./state/UserSearch";
import EventComponents from "./events/EventComponents";

const App = () => {
  return (
    <div>
      {/*<GuestList />*/}
      {/*<UserSearch />*/}
        <EventComponents />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
