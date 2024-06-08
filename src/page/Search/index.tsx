import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useTranslation } from "react-i18next";

function Search() {
  const [data, setData] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const { t } = useTranslation();

  const arr = [
    t("sport"),
    t("topStories"),
    t("turkey"),
    t("world"),
    t("entertainment"),
    t("bussiness"),
    t("sci/tech"),
  ];

  useEffect(() => {
    if (!searchParams.has("query")) return;
    async function handleSearch() {
      const res = await axios.get(`/api/filter/all`, {
        params: {
          query: searchParams.get("query"),
        },
      });
      setData(res.data);
    }
    handleSearch();
  }, [searchParams]);

  return (
    <>
      <div>
        <div
          style={{
            display: "flex",
            gap: "1rem",
          }}
        >
          <div>{t("news")}</div>
          <div
            style={{
              display: "flex",
              gap: "1rem",
            }}
          >
            {arr.map((item, index) => (
              <div
                key={index}
                style={{
                  border: "1px solid black",
                  padding: "0.25rem 0.5rem",
                  borderRadius: "1rem",
                  cursor: "pointer",
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
        <div
          style={{
            margin: "1rem 0",
          }}
        >
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
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
            }}
          >
            {data?.slice(0, 11).map((item, idx) => {
              return (
                <SwiperSlide key={idx}>
                  <a
                    href={`/details/${item._id}`}
                    style={{
                      width: "450px",
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
                  </a>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default Search;
