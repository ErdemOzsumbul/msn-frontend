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

import "./i18n";

axios.defaults.baseURL = "http://localhost:5000";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <Provider store={redux}>
      <GoogleOAuthProvider clientId="460521152311-v3r1tcd7acl709o4phnsnfhkjq864mpt.apps.googleusercontent.com">
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </GoogleOAuthProvider>
    </Provider>
  </>
);
