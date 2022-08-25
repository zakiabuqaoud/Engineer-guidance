import './App.css';
import HomePage from "./pages/UserPages/HomePage/HomePage";
import {BrowserRouter,Routes,Route, Navigate} from "react-router-dom";
import AboutPage from "./pages/UserPages/AboutPage/AboutPage";
import ContactWithAdminPage from "./pages/UserPages/ContactWithAdminPage/ContactWithAdminPage";
import SWEngMajorPage from "./pages/UserPages/SWEngMajorPage/SWEngMajorPage";
import MecEngMajorPage from "./pages/UserPages/MecEngMajorPage/MecEngMajorPage";
import SWMaterialsPage from "./pages/UserPages/SWMaterialsPage/SWMaterialsPage";
import MecMaterialsPage from "./pages/UserPages/MecMaterialsPage/MecMaterialsPage";
import MaterialPage from "./pages/UserPages/MaterialPage/MaterialPage";
import LoginPage from "./pages/AuthPages/LoginPage/LoginPage";
import RegisterPage from "./pages/AuthPages/RegisterPage/RegisterPage";
import GeneralPlanPage from "./pages/StudentPages/GeneralPlanPage/GeneralPlanPage";
import MyPlanPage from "./pages/StudentPages/MyPlanPage/MyPlanPage";
import StudentSubjectsPage from "./pages/StudentPages/StudentSubjectsPage/StudentSubjectsPage";
import HelpPage from "./pages/StudentPages/HelpPage/HelpPage";
import ProfilePage from "./pages/StudentPages/ProfilePage/ProfilePage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import AdminProfilePage from "./pages/AdminPages/AdminProfilePage/AdminProfilePage";
import AdminLoginPage from "./pages/AdminPages/AdminLoginPage/AdminLoginPage";
import MajorsManagementPage from "./pages/AdminPages/MajorsManagementPage/MajorsManagementPage";
import SubMajorsManagementPage from "./pages/AdminPages/SubMajorsManagementPage/SubMajorsManagementPage";
import SubjectsManagementPage from "./pages/AdminPages/SubjectsManagementPage/SubjectsManagementPage";
import StudentsManagementPage from "./pages/AdminPages/StudentsManagementPage/StudentsManagementPage";
import AdminsManagementPage from "./pages/AdminPages/AdminsManagementPage/AdminsManagementPage";
function App() {
  return (
   <BrowserRouter>
   <Routes>
       {/* User Routes 8pages*/}
       <Route path="/" element={<HomePage/>}/>
       <Route path="/home" element={ <Navigate to="/" replace />}/>
       <Route path="/about" element={<AboutPage/>}/>
       <Route path="/contact-with-admin" element={<ContactWithAdminPage/>}/>
       <Route path="/major/:id" element={<SWEngMajorPage/>}/>{/*Bilal*/}
       <Route path="/mec-eng-major" element={<MecEngMajorPage/>}/>{/*Bilal*/}
       <Route path="/sw-materials" element={<SWMaterialsPage/>}/>
       <Route path="/mec-materials" element={<MecMaterialsPage/>}/>
       <Route path="/sw-material/:id" element={<MaterialPage/>}/>
       <Route path="/mec-material/:id" element={<MaterialPage/>}/>

       {/* Auth Routes 2pages*/}
       <Route path="/login" element={<LoginPage/>}/>
       <Route path="/register" element={<RegisterPage/>}/>

       {/* Student Routes 5pages*/}
       <Route path="/general-plan/:id" element={<GeneralPlanPage/>}/>
       <Route path="/my-plan/:id" element={<MyPlanPage/>}/>
       <Route path="/student-subjects/:id" element={<StudentSubjectsPage/>}/>
       <Route path="/help" element={<HelpPage/>}/>
       <Route path="/student-profile/:id" element={<ProfilePage/>}/>

       {/* Admin Routes 7pages*/}
       <Route path="/admin-profile/:id" element={<AdminProfilePage/>}/>
       <Route path="/admin-login" element={<AdminLoginPage/>}/>
       <Route path="/majors-management" element={<MajorsManagementPage/>}/>
       <Route path="/sub-majors-management" element={<SubMajorsManagementPage/>}/>
       <Route path="/subjects-management" element={<SubjectsManagementPage/>}/>
       <Route path="/students-management" element={<StudentsManagementPage/>}/>
       <Route path="/admins-management" element={<AdminsManagementPage/>}/>

       {/* Not Found 1page*/}
       <Route path="*" element={<NotFoundPage/>}/>

   </Routes>

   </BrowserRouter>

  );
}

export default App;
