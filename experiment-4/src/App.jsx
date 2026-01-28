import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import LocalStateCounter from "./components/CounterLocalState";
import CounterContextParent from "./components/CounterGlobalContextParent";
import CounterContextProvider from "./components/context/CounterGlobalContextAPI";
import CounterReduxParent from "./components/context/CounterGlobalReduxParent";
import { Provider } from "react-redux";
import { store } from "./store/store.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <LocalStateCounter cno={1} />
      <LocalStateCounter cno={2} />

      <CounterContextProvider>
        <CounterContextParent cno="1" />
        <CounterContextParent cno="2" />
      </CounterContextProvider>

      <Provider store={store}>
        <CounterReduxParent cno="1" />
        <CounterReduxParent cno="2" />
      </Provider>
    </>
  );
}

export default App;
