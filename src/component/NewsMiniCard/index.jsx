import { TbBrandOpenSource } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import "./index.css";
function NewsMiniCard(props) {
  const { full, shadow, news } = props;
  const navigate = useNavigate();
  return (
    <>
      <div
        style={{
          boxShadow: shadow ? "0 0 10px 0 rgba(0, 0, 0, 0.1)" : "",
          width: full ? "100% " : "30%",
          minWidth: full ? "100%" : "",
          cursor: "pointer",
        }}
        className="news-mini-card"
        onClick={() => navigate(`/details/${news?._id}`)}
      >
        <div
          style={{
            width: "max-content",
          }}
        >
          <img
            src={news?.image || "https://via.placeholder.com/150"}
            alt="news"
            style={{
              width: "75px",
              height: "75px",
              objectFit: "cover",
              borderRadius: "8px",
            }}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
            flex: 1,
            overflow: "hidden",
          }}
        >
          <div
            style={{
              overflow: "hidden",
              flex: 1,
              WebkitLineClamp: 2,
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
            }}
          >
            {news?.title || "No Data"}
          </div>
          <div
            style={{
              fontSize: "0.8rem",
              display: "flex",
              gap: "0.5rem",
              alignItems: "center",
            }}
          >
            <TbBrandOpenSource color="red" />
            {news?.source || "No Data"}
          </div>
        </div>
      </div>
    </>
  );
}

export default NewsMiniCard;
