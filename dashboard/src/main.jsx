import { Fragment } from "react";
import ReactDOM from "react-dom/client";

import "./index.scss";
import "react-phone-input-2/lib/style.css";
import "react-phone-input-2/lib/bootstrap.css";
import "react-loading-skeleton/dist/skeleton.css";
import "bootstrap/dist/js/bootstrap.js"

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Scrolltotop from "./Scrolltotop";
import Dashboard from "./pages/Dashboard/Dashboard";
import Lockscreen from "./components/authentication/Lockscreen";

import Underconstruction from "./components/authentication/Underconstruction";
import Error400 from "./components/authentication/errorpages/Error400";
import Error401 from "./components/authentication/errorpages/Error401";
import Error403 from "./components/authentication/errorpages/Error403";
import Error404 from "./components/authentication/errorpages/Error404";
import Error500 from "./components/authentication/errorpages/Error500";
import Error503 from "./components/authentication/errorpages/Error503";

import App from "./layouts/App";
import Custompage from "./layouts/Custompage";
import ProtectedRoutes from "./context/ProtectedRoutes";

import Login from "./pages/Authentication/Login";
import Register from "./pages/Authentication/Register";
import Forgotpassword from "./pages/Authentication/Forgotpassword";
import VerifyEmailSwal from "./pages/Authentication/verifyEmailSwal";
import VerifyEmailConfirm from "./pages/Authentication/VerifyEmailConfirm";
import ForgotpasswordSwal from "./pages/Authentication/ForgotPasswordSwal";
import ResetPassword from "./pages/Authentication/ResetPassword";

import Profile from "./pages/Profile/Profile";
import Editprofile from "./pages/Profile/Editprofile";

import Userlist from "./pages/Users/Userlist";
import ViewUser from "./pages/Users/ViewUser";
import EditUser from "./pages/Users/EditUser";
import CreateUser from "./pages/Users/CreateUser";
import Statuslist from "./pages/Status/StatusList";
import CreateStatus from "./pages/Status/CreateStatus";
import EditStatus from "./pages/Status/EditStatus";
import ViewStatus from "./pages/Status/ViewStatus";
import CategoryList from "./pages/Category/Categorylist";
import EditCategory from "./pages/Category/EditCategory";
import CreateCategory from "./pages/Category/CreateCategory";
import ViewCategory from "./pages/Category/ViewCategory";
import Enquiry from "./pages/Enquiry/Enquiry";
import ViewEnquiry from "./pages/Enquiry/ViewEnquiry";
import ArchiveEnquiry from "./pages/Enquiry/ArchiveEnquiry";
import ViewArchive from "./pages/Enquiry/ViewArchive";
import CreateProperty from "./pages/Property/CreateProperty";
import PropertyList from "./pages/Property/PropertyList";
import AccessDenied from "./pages/AccessDenied/AccessDenied";
import ViewProperty from "./pages/Property/ViewProperty";
import Analytics from "./pages/Analytics/Analytics";
import { GoogleOAuthProvider } from "@react-oauth/google";
import OTPLogin from "./pages/Authentication/Test";
import LegalPrivacyPolicy from "./pages/Legal/LegalPrivacyPolicy";
import LegalTermsAndConditions from "./pages/Legal/LegalTermsAndConditions";
import Legaldisclaimer from "./pages/Legal/LegalDisclaimers";
import LegalCancleationPolicy from "./pages/Legal/LegalCancelationPolicy";
import Blogs from "./pages/Blogs/Blogs";
import CreateBlog from "./pages/Blogs/CreateBlog";
import EditBlog from "./pages/Blogs/EditBlog";
import BlogCategory from "./pages/Blogs/Category/BlogCategory";
import Tags from "./pages/Blogs/Tags/Tags";
import CreateBlogCategory from "./pages/Blogs/Category/CreateBlogCategory";
import EditBlogCategory from "./pages/Blogs/Category/EditBlogCategory";
import ViewBlog from "./pages/Blogs/ViewBlog";
import BlogSeo from "./pages/Blogs/SEO/blogSeo";
import YourProperty from "./pages/Property/YourProperty";
import Events from "./pages/Events/Events";
import CreateEvent from "./pages/Events/CreateEvent";
import EventView from "./pages/Events/EventView";
import UpdateEvent from "./pages/Events/UpdateEvent";
import Searches from "./pages/Searches/Searches";
import SearchView from "./pages/Searches/SearchView";
import Exam from "./pages/Exam/Exam";
import CreateExam from "./pages/Exam/CreateExam";
import ViewExam from "./pages/Exam/ViewExam";
import EditExam from "./pages/Exam/EditExam";
import SoftDeletedExam from "./pages/Exam/SoftDeletedExam";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Fragment>
    <GoogleOAuthProvider clientId={import.meta.env.VITE_OAUTH}>
      <HelmetProvider>
        <BrowserRouter>
          <Scrolltotop />
          <Routes>
            <Route path={`/`} element={<Custompage />}>

              <Route path="*" element={<Error404 />} />

              <Route index element={<ProtectedRoutes><Login /></ProtectedRoutes>} />
              <Route path={`/register`} element={<ProtectedRoutes><Register /></ProtectedRoutes>} />
              <Route path={`/verify-email/send/:email`} element={<ProtectedRoutes><VerifyEmailSwal /></ProtectedRoutes>}/>
              <Route path={`/verify-email/:token`}element={<ProtectedRoutes><VerifyEmailConfirm /></ProtectedRoutes>}/>
              <Route path={`/forgot-password`} element={<ProtectedRoutes><Forgotpassword /></ProtectedRoutes>} />
              <Route path={`/forgot-password/send/:email`}element={<ProtectedRoutes><ForgotpasswordSwal /></ProtectedRoutes>}/>
              <Route path="/reset-password/:token" element={<ProtectedRoutes><ResetPassword /></ProtectedRoutes>} />

              <Route path={`/lockscreen`} element={<Lockscreen />} />
              <Route path={`/comming-soon`}element={<Underconstruction />}/>
              <Route path={`/errorpages/error400`} element={<Error400 />} />
              <Route path={`/errorpages/error401`} element={<Error401 />} />
              <Route path={`/errorpages/error403`} element={<Error403 />} />
              <Route path={`/errorpages/error500`} element={<Error500 />} />
              <Route path={`/errorpages/error503`} element={<Error503 />} />

              <Route path={`/test`} element={<OTPLogin />} />
            </Route>

            {/* //main route */}
            <Route path={`/dashboard`} element={<App />}>
            <Route index element={<ProtectedRoutes><Dashboard/></ProtectedRoutes>} />
            <Route path="/dashboard/access-denied" element={<AccessDenied/>} />
            <Route path="/dashboard/analytics/:objectId" element={<Analytics/>}/>
              <Route path="/dashboard/profile" element={<ProtectedRoutes><Profile /></ProtectedRoutes>} />
              <Route path="/dashboard/profile/:objectId"element={<ProtectedRoutes><Editprofile /></ProtectedRoutes>}/>

              <Route path="/dashboard/user"element={<ProtectedRoutes><Userlist /></ProtectedRoutes>}/>
              <Route path="/dashboard/user/create"element={<ProtectedRoutes><CreateUser /></ProtectedRoutes>}/>
              <Route path="/dashboard/user/view/:objectId"element={<ProtectedRoutes><ViewUser /></ProtectedRoutes>}/>
              <Route path="/dashboard/user/edit/:objectId"element={<ProtectedRoutes><EditUser /></ProtectedRoutes>}/>

              <Route path="/dashboard/status"element={<ProtectedRoutes><Statuslist /></ProtectedRoutes>}/>
              <Route path="/dashboard/status/create"element={<ProtectedRoutes><CreateStatus /></ProtectedRoutes>}/>
              <Route path="/dashboard/status/view/:objectId"element={<ProtectedRoutes><ViewStatus /></ProtectedRoutes>}/>
              <Route path="/dashboard/status/edit/:objectId"element={<ProtectedRoutes><EditStatus /></ProtectedRoutes>}/>

              <Route path="/dashboard/exam"element={<ProtectedRoutes><Exam /></ProtectedRoutes>}/>
              <Route path="/dashboard/exam/create"element={<ProtectedRoutes><CreateExam /></ProtectedRoutes>}/>
              <Route path="/dashboard/exam/view/:objectId"element={<ProtectedRoutes><ViewExam /></ProtectedRoutes>}/>
              <Route path="/dashboard/exam/edit/:objectId"element={<ProtectedRoutes><EditExam /></ProtectedRoutes>}/>
              <Route path="/dashboard/exam/soft"element={<ProtectedRoutes><SoftDeletedExam /></ProtectedRoutes>}/>

              <Route path="/dashboard/category"element={<ProtectedRoutes><CategoryList/></ProtectedRoutes>}/>
              <Route path="/dashboard/category/create"element={<ProtectedRoutes><CreateCategory /></ProtectedRoutes>}/>
              <Route path="/dashboard/category/view/:objectId"element={<ProtectedRoutes><ViewCategory /></ProtectedRoutes>}/>
              <Route path="/dashboard/category/edit/:objectId"element={<ProtectedRoutes><EditCategory /></ProtectedRoutes>}/>

              <Route path="/dashboard/property" element={<ProtectedRoutes><PropertyList/></ProtectedRoutes>}/>
              <Route path="/dashboard/property/create" element={<ProtectedRoutes><CreateProperty/></ProtectedRoutes>}/>
              <Route path="/dashboard/property/view/:objectId" element={<ProtectedRoutes><ViewProperty/></ProtectedRoutes>}/>
              <Route path="/dashboard/property/your" element={<ProtectedRoutes><YourProperty/></ProtectedRoutes>}/>

              <Route path="/dashboard/enquiry" element={<ProtectedRoutes><Enquiry/></ProtectedRoutes>}/>
              <Route path="/dashboard/enquiry/view/:objectId" element={<ProtectedRoutes><ViewEnquiry/></ProtectedRoutes>}/>
              <Route path="/dashboard/enquiry/archive" element={<ProtectedRoutes><ArchiveEnquiry/></ProtectedRoutes>}/>
              <Route path="/dashboard/enquiry/archive/view/:objectId" element={<ProtectedRoutes><ViewArchive/></ProtectedRoutes>}/>

              <Route path="/dashboard/legal/privacy-policy" element={<ProtectedRoutes><LegalPrivacyPolicy/></ProtectedRoutes>}/>
              <Route path="/dashboard/legal/terms-and-conditions" element={<ProtectedRoutes><LegalTermsAndConditions/></ProtectedRoutes>}/>
              <Route path="/dashboard/legal/disclaimer" element={<ProtectedRoutes><Legaldisclaimer/></ProtectedRoutes>}/>
              <Route path="/dashboard/legal/cancelation-policy" element={<ProtectedRoutes><LegalCancleationPolicy/></ProtectedRoutes>}/>

              <Route path="/dashboard/blogs" element={<ProtectedRoutes><Blogs/></ProtectedRoutes>} />
              <Route path="/dashboard/blogs/create" element={<ProtectedRoutes><CreateBlog/></ProtectedRoutes>} />
              <Route path="/dashboard/blogs/view/:objectId" element={<ProtectedRoutes><ViewBlog/></ProtectedRoutes>} />
              <Route path="/dashboard/blogs/edit/:objectId" element={<ProtectedRoutes><EditBlog/></ProtectedRoutes>} />
              <Route path="/dashboard/blogs/category" element={<ProtectedRoutes><BlogCategory/></ProtectedRoutes>} />
              <Route path="/dashboard/blogs/category/create" element={<ProtectedRoutes><CreateBlogCategory/></ProtectedRoutes>} />
              <Route path="/dashboard/blogs/category/edit/:objectId" element={<ProtectedRoutes><EditBlogCategory/></ProtectedRoutes>} />
              <Route path="/dashboard/blogs/tags" element={<ProtectedRoutes><Tags/></ProtectedRoutes>} />
              <Route path="/dashboard/blogs/seo/:objectId" element={<ProtectedRoutes><BlogSeo/></ProtectedRoutes>} />
              
              <Route path="/dashboard/searches" element={<ProtectedRoutes><Searches/></ProtectedRoutes>} />
              <Route path="/dashboard/search/:objectId" element={<ProtectedRoutes><SearchView/></ProtectedRoutes>} />

              <Route path="/dashboard/events" element={<ProtectedRoutes><Events/></ProtectedRoutes>}/>
              <Route path="/dashboard/events/create" element={<ProtectedRoutes><CreateEvent/></ProtectedRoutes>}/>
              <Route path="/dashboard/events/view/:objectId" element={<ProtectedRoutes><EventView/></ProtectedRoutes>}/>
              <Route path="/dashboard/events/edit/:objectId" element={<ProtectedRoutes><UpdateEvent/></ProtectedRoutes>}/>
            </Route>
          </Routes>
        </BrowserRouter>
      </HelmetProvider>
    </GoogleOAuthProvider>
  </Fragment>
);
