import { Route, Routes } from "react-router-dom";
import { Layout } from "./Layout";

function App() {
  return (
    <>
      <h1>Hi, Genesis!</h1>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="courses" />
          <Route path="courses/:courseId" />
        </Route>
      </Routes>
    </>
  );
}

export default App;
