import ReactDOM from "react-dom/client";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import App from "./App.jsx";

import axios from "axios";
import redux from "./redux";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "@/assets/css/reset.css";
import "@/assets/css/index.css";
import "@/assets/css/container.css";

import "react-toastify/dist/ReactToastify.css";

import "./i18n";
import { ToastContainer } from "react-toastify";

axios.defaults.baseURL = "https://msn-backend-erdemozsumbul.vercel.app";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <Provider store={redux}>
      <GoogleOAuthProvider clientId="460521152311-v3r1tcd7acl709o4phnsnfhkjq864mpt.apps.googleusercontent.com">
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </GoogleOAuthProvider>
    </Provider>
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
      theme="light"
    />
  </>
);
