import NewsMiniCard from "../NewsMiniCard";

function NewsGrid(props) {
  const { newsArr } = props;
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          width: "100%",
          boxShadow: "0 0 5px 0 rgba(0, 0, 0, 0.2)",
          borderRadius: "8px",
          margin: "1rem 0",
        }}
      >
        {newsArr?.map((news, index) => {
          return (
            <div
              key={index}
              style={{
                display: "flex",
                gap: "1px",
                flexDirection: "column",
              }}
            >
              <NewsMiniCard full news={news} />
              <div
                style={{
                  width: "100%",
                  background: "rgba(0, 0, 0, 0.1)",
                  height: "1px",
                  display: index === newsArr.length - 1 ? "none" : "",
                }}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default NewsGrid;
