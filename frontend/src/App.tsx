import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./Layout/Layout";
import Register from "./pages/Register";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout> <p>Home page</p></Layout>} />
        <Route path="/search" element={<Layout> <p>search page</p></Layout>} />
        <Route path="/register" element={<Layout><Register/></Layout>} />
        <Route path="*" element={<Navigate to = "/" />} />
      </Routes>
    </Router>
  );
};

export default App;
