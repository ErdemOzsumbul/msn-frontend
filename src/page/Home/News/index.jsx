import NewsCard from "../../../component/NewsCard";
import NewsGrid from "../../../component/NewsGrid";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import { IoIosArrowForward } from "react-icons/io";

function News() {
  const news = useSelector(state => state.news.items);
  const { t } = useTranslation();

  const arr = [
    {
      title: t("breakingNews"),
      url: "https://www.cnnturk.com/son-dakika",
    },
    {
      title: t("columnNews"),
      url: "https://www.cnnturk.com/yazarlar",
    },
    {
      title: t("weather"),
      url: "https://www.cnnturk.com/hava-durumu",
    },
    {
      title: t("world"),
      url: "https://www.cnnturk.com/dunya",
    },
    {
      title: t("scienceAndTechnology"),
      url: "https://www.cnnturk.com/bilim-teknoloji",
    },
    {
      title: t("sport"),
      url: "https://www.cnnturk.com/spor",
    },
  ];
  return (
    <>
      <div
        style={{
          display: "flex",
          gap: "1rem",
          margin: "1rem 0",
        }}
      >
        <b
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "0.25rem",
          }}
        >
          {t("news")}
          <IoIosArrowForward size={30} />
        </b>
        <Swiper
          spaceBetween={10}
          modules={[Navigation]}
          style={{ width: "100%" }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 4,
            },
            1024: {
              slidesPerView: 7,
            },
          }}
        >
          {arr.map((item, index) => {
            return (
              <SwiperSlide
                key={index}
                style={{
                  width: "max-content !important",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <a
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    fontSize: "0.75rem",
                    color: "#999",
                  }}
                >
                  <b>{item.title}</b>
                </a>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div
        style={{
          display: "flex",
          gap: "1rem",
        }}
      >
        <Swiper
          spaceBetween={10}
          modules={[Navigation]}
          navigation
          style={{ padding: "0 4rem", width: "100%" }}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
        >
          <SwiperSlide
            style={{
              height: "max-content",
              padding: " 0.125rem 0",
            }}
          >
            <NewsCard news={news?.[18] || []} />
          </SwiperSlide>
          <SwiperSlide
            style={{
              height: "max-content",
              padding: " 0.125rem 0",
            }}
          >
            <NewsCard news={news?.[19] || []} />
          </SwiperSlide>
          <SwiperSlide
            style={{
              height: "max-content",
              padding: " 0.125rem 0",
            }}
          >
            <NewsGrid newsArr={news ? news.slice(20, 23) : []} />
          </SwiperSlide>
          <SwiperSlide
            style={{
              height: "max-content",
              padding: " 0.125rem 0",
            }}
          >
            <NewsCard news={news?.[21] || []} />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}

export default News;
