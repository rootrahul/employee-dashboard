import { useSelector } from "react-redux";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import { selectUser } from "./features/userSlice";

const App = () => {
  const user = useSelector(selectUser);

  return <>{user ? <Dashboard /> : <Login />}</>;
};

export default App;
