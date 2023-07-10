import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import { UserContextProvider } from "./context/UserContext";
import axios from "axios";

axios.defaults.withCredentials = true
function App() {
  return (
    <div className="App">
      <UserContextProvider>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/signup" element={<SignUpPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
      </Routes>
      </UserContextProvider>
     
    </div>
  );
}

export default App;
