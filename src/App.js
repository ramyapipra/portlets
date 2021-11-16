import './App.css';
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import Dashboard from './dashboard/Dashboard';
const AppRouter = () => {
  let routes = useRoutes([
    { path: "/", element: <Dashboard /> },
  ]);
  return routes;
}
function App() {
  return (
    <div className="App">
      <Router >
        <AppRouter />
      </Router >
    </div>
  );
}

export default App;
