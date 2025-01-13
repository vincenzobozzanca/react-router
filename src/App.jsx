import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { ChiSiamo } from "./pages/ChiSiamo";
import { PostList } from "./pages/PostList";
import { PostDetail } from "./pages/PostDetail";
import Dashboard from "./pages/Dashboard";

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
			<Route path="/PostList/:id" element={<PostDetail />}/>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
