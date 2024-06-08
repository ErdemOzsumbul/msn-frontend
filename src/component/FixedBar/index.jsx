import { BiSolidLike } from "react-icons/bi";
import { BiSolidDislike } from "react-icons/bi";
import { FaShareSquare } from "react-icons/fa";
import { ImHeadphones } from "react-icons/im";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { useParams } from "react-router-dom/dist";
import { Bounce, toast } from "react-toastify";

function FixedBar() {
  const params = useParams();

  const handleCopy = (id) => {
    navigator.clipboard.writeText(
      "https://msn-frontend-erdemozsumbul.vercel.app/details/" + params.id
    );
    toast.success("Link Kopyalandı.", {
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
  };
  return (
    <>
      <div
        style={{
          position: "absolute",
          bottom: "1rem",
          left: "2rem",
          filter: "drop-shadow(0 0 1rem rgba(0,0,0,0.2))",
          gap: "1rem",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            background: "#fff",
            height: "3rem",
            width: "3rem",
            display: "flex",
            gap: "1rem",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "0.5rem",
            cursor: "pointer",
          }}
        >
          <ImHeadphones size={21} />
        </div>
        <div
          style={{
            background: "#fff",
            height: "3rem",
            width: "3rem",
            display: "flex",
            gap: "1rem",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
            borderRadius: "0.5rem",
          }}
        >
          <BiSolidLike size={23} />
        </div>
        <div
          style={{
            background: "#fff",
            height: "3rem",
            width: "3rem",
            display: "flex",
            gap: "1rem",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
            borderRadius: "0.5rem",
          }}
        >
          <BiSolidDislike size={23} />
        </div>
        <div
          style={{
            background: "#fff",
            height: "3rem",
            width: "3rem",
            display: "flex",
            gap: "1rem",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
            borderRadius: "0.5rem",
          }}
          onClick={handleCopy}
        >
          <FaShareSquare />
        </div>
        <div
          style={{
            background: "#fff",
            height: "3rem",
            width: "3rem",
            display: "flex",
            gap: "1rem",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
            borderRadius: "0.5rem",
          }}
        >
          <HiOutlineDotsVertical size={21} />
        </div>
      </div>
    </>
  );
}

export default FixedBar;
