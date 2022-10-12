import "./App.css";
import Dashboard from "pages/dashboard";
import Store from "./store";

function App() {
  return (
    <div>
      <Store>
        <Dashboard />
      </Store>
    </div>
  );
}

export default App;