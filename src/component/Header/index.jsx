import { useNavigate } from "react-router-dom";
import { AiOutlineUser } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../../redux";
import Settings from "../Settings";
import Notification from "../Notification";
import { useTranslation } from "react-i18next";
import { CiSearch } from "react-icons/ci";
import { Bounce, toast } from "react-toastify";

function Header() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    if (e.target.value === "") return navigate("/");
    navigate("/search?query=" + e.target.value);
  };
  console.log(user?.email, user?.name, user?.surname);
  return (
    <>
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "1rem 0",
        }}
      >
        <div
          onClick={() => {
            navigate("/");
          }}
          style={{
            cursor: "pointer",
            fontSize: "1.5rem",
            fontWeight: "500",
          }}
        >
          msn
        </div>
        <div
          style={{
            width: "100%",
            maxWidth: "300px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <input
            type="text"
            placeholder={t("search")}
            style={{
              padding: "0.5rem",
              borderRadius: "0.5rem 0 0 0.5rem",
              border: "none",
              outline: "none",
              boxShadow: "0 0 5px rgba(0, 0, 0, 0.1)",
              width: "100%",
            }}
            onChange={handleSearch}
          />
          <div
            style={{
              padding: "0.5rem 1rem",
              background: "#3393DF",
              borderRadius: "0 0.5rem  0.5rem 0",
            }}
          >
            <CiSearch size={25} color="#fff" />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            gap: "1rem",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            onClick={() => {
              if (user.email) {
                dispatch(userActions.logout());
                localStorage.clear("email");
                localStorage.clear("name");
                localStorage.clear("surname");
                localStorage.clear("picture");
                toast.success("Çıkış Yapıldı.", {
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
                navigate("/");
                return;
              }
              navigate("/login");
            }}
            style={{
              cursor: "pointer",
              borderRadius: "100dvw",
              border: "1px solid #000",
              height: "30px",
              width: "30px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {user.email && user.name && user.surname ? (
              user.picture ? (
                <img
                  src={user.picture}
                  alt="user"
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "100dvw",
                  }}
                />
              ) : (
                user.name[0] + user.surname[0]
              )
            ) : (
              <AiOutlineUser />
            )}
          </div>

          <Notification />
          <Settings />
        </div>
      </div>
    </>
  );
}

export default Header;
