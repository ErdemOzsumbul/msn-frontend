import { BiSolidLike } from "react-icons/bi";
import { BiSolidDislike } from "react-icons/bi";
import { FaShareSquare } from "react-icons/fa";
import { ImHeadphones } from "react-icons/im";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { useParams } from "react-router-dom/dist";
import { Bounce, toast } from "react-toastify";
import { useState } from "react";
import { MdOutlineFavorite } from "react-icons/md";
import { MdFavoriteBorder } from "react-icons/md";

function FixedBar() {
  const [status, setStatus] = useState(null);
  const [fav, setFav] = useState(false);
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
          position: "fixed",
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
            background: fav ? "green" : "#fff",
            height: "3rem",
            width: "3rem",
            display: "flex",
            gap: "1rem",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "0.5rem",
            cursor: "pointer",
          }}
          onClick={() => setFav((prv) => !prv)}
        >
          {fav ? (
            <MdOutlineFavorite size={21} color="#fff" />
          ) : (
            <MdFavoriteBorder size={21} />
          )}
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
            borderRadius: "0.5rem",
            cursor: "pointer",
          }}
        >
          <ImHeadphones size={21} />
        </div>
        <div
          style={{
            background: status == "dislike" ? "green" : "#fff",
            color: status == "dislike" ? "#fff" : "#000",
            height: "3rem",
            width: "3rem",
            display: "flex",
            gap: "1rem",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
            borderRadius: "0.5rem",
            transition: "ease-in-out 0.3s",
          }}
          onClick={() =>
            setStatus((prv) => (prv == "dislike" ? null : "dislike"))
          }
        >
          <BiSolidLike size={23} />
        </div>
        <div
          style={{
            background: status == "like" ? "red" : "#fff",
            color: status == "like" ? "#fff" : "",
            height: "3rem",
            width: "3rem",
            display: "flex",
            gap: "1rem",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
            borderRadius: "0.5rem",
            transition: "ease-in-out 0.3s",
          }}
          onClick={() => setStatus((prv) => (prv == "like" ? null : "like"))}
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
