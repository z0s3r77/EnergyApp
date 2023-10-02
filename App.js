import {Provider, useDispatch, useSelector} from "react-redux";
import {store} from "./src/store/store";
import {Home} from "./src/screens/Home";

export default function App() {

  return (
      <Provider store={store}>
        <Home/>
      </Provider>
  );
}
