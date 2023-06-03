// import MyRoutes from "./frontend/routes/Routes";
import { BrowserRouter } from "react-router-dom";
import MyRoutes from "./frontend/routes/MyRoutes";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MyRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
