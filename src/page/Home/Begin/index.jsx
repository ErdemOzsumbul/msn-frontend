import NewsMiniCard from "@/component/NewsMiniCard";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./index.css";
function Begin() {
  const news = useSelector(state => state.news.items);
  const navigate = useNavigate();
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div className="begin-left">
            <Swiper
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "0.5rem",
                overflow: "hidden",
              }}
              modules={[Navigation, Pagination]}
              navigation
              pagination
              loop
            >
              {news?.slice(0, 11).map((item, idx) => {
                return (
                  <SwiperSlide
                    key={idx}
                    onClick={() => navigate(`/details/${item._id}`)}
                  >
                    <div
                      style={{
                        width: "100%",
                        height: "100%",
                        position: "relative",
                      }}
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        style={{
                          width: "100%",
                          height: "100%",
                        }}
                      />
                      <div
                        style={{
                          position: "absolute",
                          bottom: "0",
                          width: "100%",
                          padding: "1rem",
                          background: "rgba(0,0,0,0.5)",
                          color: "#fff",
                        }}
                      >
                        <div
                          style={{
                            fontSize: "1.25rem",
                            fontWeight: "600",
                            width: "100%",
                          }}
                        >
                          {item.title}
                        </div>
                        <div
                          style={{
                            fontSize: "0.875rem",
                            fontWeight: "300",
                            width: "100%",
                          }}
                        >
                          {item.source}
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
          <div className="begin-right">
            <div
              style={{
                width: "100%",
                position: "relative",
                borderRadius: "0.5rem",
                boxShadow: "0 0 10px rgba(0,0,0,0.1)",
                overflow: "hidden",
                aspectRatio: "1/1",
              }}
            >
              <img
                src={news?.[39]?.image || ""}
                style={{
                  width: "100%",
                  height: "100%",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: "0",
                  width: "100%",
                  padding: "1rem",
                  background: "rgba(0,0,0,0.5)",
                  color: "#fff",
                }}
              >
                <div
                  style={{
                    fontSize: "1rem",
                    fontWeight: "600",
                    width: "100%",
                  }}
                >
                  {news?.[39]?.title || ""}
                </div>
                <div
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: "300",
                    width: "100%",
                  }}
                >
                  {news?.[39]?.source || ""}
                </div>
              </div>
            </div>
            <NewsMiniCard full shadow news={news?.[11] || []} />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <NewsMiniCard shadow news={news?.[12] || []} />
          <NewsMiniCard shadow news={news?.[13] || []} />
          <NewsMiniCard shadow news={news?.[14] || []} />
          <NewsMiniCard shadow news={news?.[15] || []} />
          <NewsMiniCard shadow news={news?.[16] || []} />
          <NewsMiniCard shadow news={news?.[17] || []} />
        </div>
      </div>
    </>
  );
}

export default Begin;
