
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Home from "./pages/home/Home";
import SignIn from "./pages/signIn/SignIn";
import Signup from "./pages/signup/Signup";
import AddBusiness from "./pages/addBusiness/AddBusiness";
import Onboarding from "./pages/Onboarding/Onboarding";
// import Index from "./pages/pricing/Pricing"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/signin" element={<SignIn/>} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/addbusiness" element={<AddBusiness/>} />
      <Route path="/onboarding" element={<Onboarding/>} />
    </Routes>
    </BrowserRouter>
    // <Index/>

  );
}

export default App;
