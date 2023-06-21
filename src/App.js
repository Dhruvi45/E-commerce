import { BrowserRouter } from "react-router-dom";
import MyRoutes from "./frontend/routes/MyRoutes";
import './App.css'
import { ToastContainer } from 'react-toastify';
function App() {
  return (
    <div className="App">
      <ToastContainer />
      <BrowserRouter>
        <MyRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
