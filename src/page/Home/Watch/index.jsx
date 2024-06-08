import NewsCard from "../../../component/NewsCard";
import NewsGrid from "../../../component/NewsGrid";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { IoIosArrowForward } from "react-icons/io";

function Watch() {
  const news = useSelector(state => state.news.items);
  const { t } = useTranslation();

  const arr = [
    {
      title: t("news"),
      url: "https://www.cnnturk.com/",
    },
    {
      title: t("sport"),
      url: "https://www.sporx.com/",
    },
  ];

  return (
    <>
      <div
        style={{
          display: "flex",
          margin: "1rem 0",
          gap: "1rem",
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
          {t("watch")}
          <IoIosArrowForward size={30} />
        </b>
        <div
          style={{
            display: "flex",
            gap: "1rem",
          }}
        >
          {arr.map(item => (
            <div key={item.title}>
              <a
                href={item.url}
                target="_blank"
                rel="noreferrer"
                style={{
                  fontSize: "0.75rem",
                  color: "#999",
                }}
              >
                {item.title}
              </a>
            </div>
          ))}
        </div>
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
            <NewsCard news={news?.[22] || []} />
          </SwiperSlide>
          <SwiperSlide
            style={{
              height: "max-content",
              padding: " 0.125rem 0",
            }}
          >
            <NewsCard news={news?.[23] || []} />
          </SwiperSlide>
          <SwiperSlide
            style={{
              height: "max-content",
              padding: " 0.125rem 0",
            }}
          >
            <NewsGrid newsArr={news ? news.slice(24, 27) : []} />
          </SwiperSlide>
          <SwiperSlide
            style={{
              height: "max-content",
              padding: " 0.125rem 0",
            }}
          >
            <NewsCard news={news?.[28] || []} />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}

export default Watch;
