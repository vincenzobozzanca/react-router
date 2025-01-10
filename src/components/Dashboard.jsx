import { Outlet, NavLink } from "react-router-dom";

// Considerando che questo elemento viene renderizzato sempre
// This is where i have to create the links for swithing route
function Dashboard() {
  return (
    <div>
      <h1>Menu di navigazione</h1>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/ChiSiamo">Chi Siamo</NavLink>
          </li>
          <li>
            <NavLink to="/PostList">Lista Post</NavLink>
          </li>
        </ul>
      </nav>
      {/* Outlet controlla url e fa il rendering della rotta giusta */}
      <Outlet />
    </div>
  );
}

export default Dashboard;
