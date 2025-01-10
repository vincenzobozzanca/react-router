import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { HomePage } from "./components/HomePage";
import { ChiSiamo } from "./components/ChiSiamo";
import { PostList } from "./components/PostList";
import Dashboard from "./components/Dashboard";

// Main App Component App
function App() {
  return (
    <>
      {/* Wrappo tutto nel router */}
      <Router>
        {/* Dentro al componente Routes faccio le rotte */}
        <Routes>
          {/* Faccio rotta a componente OutLet  */}
          <Route element={<Dashboard />}>
            {/* Homepage component rendered at base URL */}
            <Route path="/" element={<HomePage />} />
            <Route path="/ChiSiamo" element={<ChiSiamo />} />
            <Route path="/PostList" element={<PostList />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
