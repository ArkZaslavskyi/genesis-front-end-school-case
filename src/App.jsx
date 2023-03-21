import { CoursePage } from "pages/CoursePage";
import { Courses } from "pages/Courses";
import { Route, Routes } from "react-router-dom";
import GlobalStyle from "theme/Globalstyle";
import { Layout } from "./Layout";

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Layout />} >
        {/* ... path="/" element={<Layout />} */}
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:courseId" element={<CoursePage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
