import NewsCard from "../../../component/NewsCard";
import NewsGrid from "../../../component/NewsGrid";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { IoIosArrowForward } from "react-icons/io";

function Fun() {
  const news = useSelector(state => state.news.items);
  const { t } = useTranslation();

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
          {t("fun")}
          <IoIosArrowForward size={30} />
        </b>
        <div
          style={{
            fontSize: "0.75rem",
            color: "#999",
          }}
        >
          {t("celebrities")}
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
            <NewsCard news={news?.[36] || []} />
          </SwiperSlide>
          <SwiperSlide
            style={{
              height: "max-content",
              padding: " 0.125rem 0",
            }}
          >
            <NewsCard news={news?.[37] || []} />
          </SwiperSlide>
          <SwiperSlide
            style={{
              height: "max-content",
              padding: " 0.125rem 0",
            }}
          >
            <NewsGrid newsArr={news ? news.slice(38, 41) : []} />
          </SwiperSlide>
          <SwiperSlide
            style={{
              height: "max-content",
              padding: " 0.125rem 0",
            }}
          >
            <NewsCard news={news?.[42] || []} />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}

export default Fun;
