import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout/Layout";
import PopTopics from "./components/PopTopics/PopTopics";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<PopTopics />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
