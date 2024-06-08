import { TbBrandOpenSource } from "react-icons/tb";
import { useNavigate } from "react-router-dom";

function NewsCard(props) {
  const navigate = useNavigate();
  const { news } = props;
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          padding: "1rem",
          boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.1)",
          borderRadius: "8px",
          width: "100%",
          maxWidth: "300px",
          minHeight: "325px",
          margin: " 1rem 0",
        }}
        onClick={() => navigate(`/details/${news?._id}`)}
      >
        <img
          src={news?.image || "https://via.placeholder.com/150"}
          alt="news"
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            justifyContent: "space-between",
            flex: 1,
          }}
        >
          <div
            style={{
              height: "3rem",
            }}
          >
            {news?.title || "No Data"}
          </div>
          <div
            style={{
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

export default NewsCard;
