
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from "./page/user/Main";
import DashboardAdmin from "./page/admin/DashboardAdmin";
import RentalHome from "./page/user/RentalHome";
import RentailHomeDetail from "./page/user/RentailHomeDetail";
import About from "./page/user/About";
import Contact from "./page/user/Contact";
import Login from "./page/login/Login";
import { useState } from "react";
import { getCurrentAdmin, getCurrentRentaler, getCurrentUser } from "./services/fetch/ApiUtils";
import { ACCESS_TOKEN } from "./constants/Connect";
import LoadingIndicator from "./common/LoadingIndicator";
import { useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Signup from "./page/signup/Signup";
import OAuth2RedirectHandler from './oauth2/OAuth2RedirectHandler';
import NotFound from './common/NotFound';
import DashboardRentaler from './page/rentaler/DashboardRentaler';
import LoginRentaler from './page/login/LoginRentaler';
import LoginAdmin from './page/login/LoginAdmin';
import SignupRentaler from './page/signup/SignupRentaler';
import ForgotPassword from './common/ForgotPassword';
import ResetPassword from './common/ResetPassword';
import SuccessConfirmed from './common/SuccessConfirmed';
import AddRoom from './page/rentaler/AddRoom';
import RoomManagement from './page/rentaler/RoomManagement';
import EditRoom from './page/rentaler/EditRoom';
import ContractManagement from './page/rentaler/ContractManagement';
import AddContract from './page/rentaler/AddContract';
import EditContract from './page/rentaler/EditContract';
import MaintenceManagement from './page/rentaler/MaintenceManagement';
import AddMaintence from './page/rentaler/AddMaintence';
import EditMaintenance from './page/rentaler/EditMaintence';
import RequierManagement from './page/rentaler/RequierManagement';



function App() {

  const [authenticated, setAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [currentUser, setCurrentUser] = useState(null);
  const [role, setRole] = useState('');
  const [loading, setLoading] = useState(true);

  const loadCurrentlyLoggedInUser = () => {
    getCurrentUser()
      .then(response => {
        setCurrentUser(response);
        setUsername(response.name);
        setRole(response.roles[0].name);
        setAuthenticated(true);
        setLoading(false);
        console.log(response)
        console.log({ authenticated, username, currentUser, role, loading });
      }).catch(error => {
        setLoading(false);
      });
  }

  const loadCurrentlyLoggedInRetanler = () => {
    getCurrentRentaler()
      .then(response => {
        setCurrentUser(response);
        setUsername(response.name);
        setRole(response.roles[0].name);
        setAuthenticated(true);
        setLoading(false);
        console.log({ authenticated, username, currentUser, role, loading });
      }).catch(error => {
        setLoading(false);
      });
  }

  const loadCurrentlyLoggedInAdmin = () => {
    getCurrentAdmin()
      .then(response => {
        setCurrentUser(response);
        setUsername(response.name);
        setRole(response.roles[0].name);
        setAuthenticated(true);
        setLoading(false);
        console.log({ authenticated, username, currentUser, role, loading });
      }).catch(error => {
        setLoading(false);
      });
  }

  const handleLogout = () => {
    localStorage.removeItem(ACCESS_TOKEN);
    setAuthenticated(false);
    setCurrentUser(null);
    toast.success("Bạn đăng xuất thành công!!!");
    window.location.reload()
  }

  useEffect(() => {
    loadCurrentlyLoggedInUser();
    loadCurrentlyLoggedInRetanler();
    loadCurrentlyLoggedInAdmin();
  }, []);

  if (loading) {
    return <LoadingIndicator />
  }

  console.log({ authenticated, username, currentUser, role, loading });
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Main authenticated={authenticated} currentUser={currentUser} onLogout={handleLogout} />} />
          <Route exact path="/rental-home" element={<RentalHome authenticated={authenticated} currentUser={currentUser} onLogout={handleLogout} />} />
          <Route exact path="/rental-home/:id" element={<RentailHomeDetail authenticated={authenticated} currentUser={currentUser} onLogout={handleLogout} />} />
          <Route exact path="/about-us" element={<About authenticated={authenticated} currentUser={currentUser} onLogout={handleLogout} />} />
          <Route exact path="/contact" element={<Contact authenticated={authenticated} currentUser={currentUser} onLogout={handleLogout} />} />
          <Route exact path="/forgot-password" element={<ForgotPassword />} />
          <Route exact path="/reset-password/:email" element={<ResetPassword />} />
          <Route exact path="/success-comfirmed/:email" element={<SuccessConfirmed />} />
          <Route exact path="/login" element={<Login authenticated={authenticated} />} />
          <Route exact path="/login-rentaler" element={<LoginRentaler authenticated={authenticated} currentUser={currentUser} role={role} />} />
          <Route exact path="/login-admin" element={<LoginAdmin authenticated={authenticated} currentUser={currentUser} role={role} />} />
          <Route exact path="/signup" element={<Signup authenticated={authenticated} currentUser={currentUser} role={role} />} />
          <Route exact path="/signup-rentaler" element={<SignupRentaler authenticated={authenticated} />} />
          {/* ADMIN */}
          <Route exact path="/admin" element={<DashboardAdmin authenticated={authenticated} currentUser={currentUser} role={role} onLogout={handleLogout}/>} />
          {/* RENTALER */}
          <Route exact path="/rentaler" element={<DashboardRentaler authenticated={authenticated} currentUser={currentUser} role={role} onLogout={handleLogout}/>} />
          <Route exact path="/rentaler/add-room" element={<AddRoom authenticated={authenticated} currentUser={currentUser} role={role} onLogout={handleLogout}/>} />
          <Route exact path="/rentaler/edit-room/:id" element={<EditRoom authenticated={authenticated} currentUser={currentUser} role={role} onLogout={handleLogout}/>} />
          <Route exact path="/rentaler/add-contract" element={<AddContract authenticated={authenticated} currentUser={currentUser} role={role} onLogout={handleLogout}/>} />
          <Route exact path="/rentaler/edit-contract/:id" element={<EditContract authenticated={authenticated} currentUser={currentUser} role={role} onLogout={handleLogout}/>} />
          <Route exact path="/rentaler/add-maintenance" element={<AddMaintence authenticated={authenticated} currentUser={currentUser} role={role} onLogout={handleLogout}/>} />
          <Route exact path="/rentaler/edit-maintenance/:id" element={<EditMaintenance authenticated={authenticated} currentUser={currentUser} role={role} onLogout={handleLogout}/>} />
          <Route exact path="/rentaler/contract-management" element={<ContractManagement authenticated={authenticated} currentUser={currentUser} role={role} onLogout={handleLogout}/>} />
          <Route exact path="/rentaler/room-management" element={<RoomManagement authenticated={authenticated} currentUser={currentUser} role={role} onLogout={handleLogout}/>} />
          <Route exact path="/rentaler/maintenance-management" element={<MaintenceManagement authenticated={authenticated} currentUser={currentUser} role={role} onLogout={handleLogout}/>} />
          <Route exact path="/rentaler/request-management" element={<RequierManagement authenticated={authenticated} currentUser={currentUser} role={role} onLogout={handleLogout}/>} />
          <Route path="/oauth2/redirect" element={<OAuth2RedirectHandler />}/>
          <Route component={NotFound}></Route>
        </Routes>
        <Routes>
          
        </Routes>
      </Router>


      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>

  );
}

export default App;
