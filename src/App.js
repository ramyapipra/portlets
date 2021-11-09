import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,
  Routes,
  Route,
  useRoutes ,useHistory } from "react-router-dom";
import Dashboard from './Dashboard/dashboard';


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
