import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";
import md5 from "md5";
import CustomInput from "../../component/CustomInput";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const handleSubmit = async values => {
    try {
      const res = await axios.post("/api/auth/register", {
        name: values.name,
        surname: values.surname,
        email: values.email,
        password: md5(values.password),
        province: values.province,
        district: values.district,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      surname: "",
      email: "",
      password: "",
      passwordRepeat: "",
      province: "",
      district: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      surname: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .min(8, "Minimum 8 characters")
        .required("Required"),
      passwordRepeat: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Required"),
      province: Yup.string().required("Required"),
      district: Yup.string().required("Required"),
    }),
    onSubmit: value => handleSubmit(value),
  });
  return (
    <>
      <form
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
        onSubmit={formik.handleSubmit}
      >
        <div className="modal-header">Hesap Oluştur</div>
        <CustomInput
          id="name"
          name="name"
          placeholder="Adınız"
          onChange={formik.handleChange}
          error={formik.submitCount === 0 || !formik.errors.email}
          invalid={
            formik.values.name &&
            formik.errors.name &&
            formik.touched.name &&
            formik.touched.name &&
            formik.submitCount > 0
          }
          errorMsg={formik.errors.name}
        />
        <CustomInput
          id="surname"
          name="surname"
          placeholder="Soyadınız "
          onChange={formik.handleChange}
          error={formik.submitCount === 0 || !formik.errors.email}
          invalid={
            formik.values.surname &&
            formik.errors.surname &&
            formik.touched.surname &&
            formik.touched.surname &&
            formik.submitCount > 0
          }
          errorMsg={formik.errors.surname}
        />
        <CustomInput
          id="email"
          name="email"
          placeholder="E-posta"
          onChange={formik.handleChange}
          error={formik.submitCount === 0 || !formik.errors.email}
          invalid={
            formik.values.email &&
            formik.errors.email &&
            formik.touched.email &&
            formik.touched.email &&
            formik.submitCount > 0
          }
          errorMsg={formik.errors.email}
        />
        <CustomInput
          id="password"
          name="password"
          placeholder="Şifre"
          type="password"
          onChange={formik.handleChange}
          error={formik.submitCount === 0 || !formik.errors.email}
          invalid={
            formik.values.password &&
            formik.errors.password &&
            formik.touched.password &&
            formik.touched.password &&
            formik.submitCount > 0
          }
          errorMsg={formik.errors.password}
        />
        <CustomInput
          id="passwordRepeat"
          name="passwordRepeat"
          placeholder="Şifre tekrar "
          type="password"
          onChange={formik.handleChange}
          error={formik.submitCount === 0 || !formik.errors.email}
          invalid={
            formik.values.passwordRepeat &&
            formik.errors.passwordRepeat &&
            formik.touched.passwordRepeat &&
            formik.touched.passwordRepeat &&
            formik.submitCount > 0
          }
          errorMsg={formik.errors.passwordRepeat}
        />
        <CustomInput
          id="province"
          name="province"
          placeholder="İl"
          type=""
          onChange={formik.handleChange}
          error={formik.submitCount === 0 || !formik.errors.email}
          invalid={
            formik.values.province &&
            formik.errors.province &&
            formik.touched.province &&
            formik.touched.province &&
            formik.submitCount > 0
          }
          errorMsg={formik.errors.province}
        />
        <CustomInput
          id="district"
          name="district"
          placeholder="İlçe"
          type=""
          onChange={formik.handleChange}
          error={formik.submitCount === 0 || !formik.errors.email}
          invalid={
            formik.values.district &&
            formik.errors.district &&
            formik.touched.district &&
            formik.touched.district &&
            formik.submitCount > 0
          }
          errorMsg={formik.errors.district}
        />
        <button className="modal-btn-submit">Kaydol</button>
        <div className="modal-auth-footer">
          <div className="modal-auth-footer-text">Hesabınız var mı?</div>
          <div
            className="modal-auth-footer-btn"
            onClick={() => navigate("/login")}
          >
            Giriş Yap
          </div>
        </div>
      </form>
    </>
  );
}

export default Register;
