// required for deployment
import Routes from "./Routes/index";
import { Provider } from "react-redux";
import store from "./Store";

function App() {
  return (
    <>
      <Provider store={store}>
        <Routes />
      </Provider>
    </>
  );
}

export default App;
