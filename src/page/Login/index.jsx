import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useFormik } from "formik";
import md5 from "md5";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { userActions } from "../../redux";
import { useDispatch } from "react-redux";
import CustomInput from "../../component/CustomInput";
import "./index.css";
import { Bounce, toast } from "react-toastify";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = async (values) => {
    try {
      const res = await axios.post("/api/auth/login", {
        name: values.name,
        surname: values.surname,
        email: values.email,
        password: md5(values.password),
      });
      dispatch(userActions.login(res.data));
      localStorage.setItem("email", res.data.email);
      localStorage.setItem("name", res.data.name);
      localStorage.setItem("surname", res.data.surname);
      localStorage.setItem("picture", res.data.picture);
      navigate("/");
      toast.success("Giriş Başarılı.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    } catch (error) {
      console.error(error);
      toast.error("E-mail ya da şifre yanlış.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .min(8, "Minimum 8 characters")
        .required("Required"),
    }),
    onSubmit: handleSubmit,
  });

  return (
    <>
      <form
        onSubmit={formik.handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          border: "1px solid  rgba(0,0,0,0.1)",
          padding: "1rem",
          width: "300px",
          margin: "auto",
          marginTop: "1rem",
          borderRadius: "5px",
          boxShadow: "0 0 5px 0 rgba(0,0,0,0.1)",
        }}
      >
        <div className="modal-header">Giriş Yap</div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          <CustomInput
            id="email"
            name="email"
            placeholder="E-Posta"
            onChange={formik.handleChange}
            error={formik.submitCount === 0 || !formik.errors.email}
            invalid={
              formik.values.email &&
              formik.errors.email &&
              formik.touched.email &&
              formik.touched.email &&
              formik.submitCount > 0
            }
            errorMsg={formik.errors.password}
          />
          <CustomInput
            id="password"
            name="password"
            placeholder="Şifre"
            type="password"
            onChange={formik.handleChange}
            error={formik.submitCount === 0 || !formik.errors.password}
            invalid={
              formik.values.password &&
              formik.errors.password &&
              formik.touched.password &&
              formik.touched.password &&
              formik.submitCount > 0
            }
            errorMsg={formik.errors.password}
          />
        </div>
        <button className="modal-btn-submit">Giriş Yap</button>
        <GoogleButton />
        <div className="modal-auth-footer">
          <div className="modal-auth-footer-text">Hesabınız yok mu?</div>
          <div
            className="modal-auth-footer-btn"
            onClick={() => navigate("/register")}
          >
            Kayıt Ol
          </div>
        </div>
      </form>
    </>
  );
}

const GoogleButton = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogin = useGoogleLogin({
    onSuccess: async (response) => {
      try {
        const res = await axios.post("/api/auth/googlelogin", {
          code: response.code,
        });
        localStorage.setItem("email", res.data.email);
        localStorage.setItem("name", res.data.name);
        localStorage.setItem("surname", res.data.surname);
        res.data.picture && localStorage.setItem("picture", res.data.picture);
        dispatch(userActions.login(res.data));
        navigate("/");
      } catch (error) {
        console.log(error);
      }
    },
    onError: () => {
      console.error("error");
    },
    flow: "auth-code",
  });

  return (
    <>
      <div
        onClick={handleLogin}
        style={{
          width: "100%",
          height: "50px",
          borderRadius: "5px",
          backgroundColor: "#fff",
          border: "1px solid #e0e0e0",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "0.5rem",
          cursor: "pointer",
        }}
      >
        <div>
          <FcGoogle size={25} />
        </div>
        <div>
          <span style={{ color: "#000" }}>Google ile Giriş Yap</span>
        </div>
      </div>
    </>
  );
};

export default Login;
