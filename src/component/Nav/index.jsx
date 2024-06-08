import { useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { useTranslation } from "react-i18next";
import { Navigation } from "swiper/modules";
function Nav() {
  const [weather, setWeather] = useState(null);
  const { t } = useTranslation();

  const arr = [
    {
      title: t("sport"),
      url: "https://www.sporx.com/",
    },
    {
      title: t("finance"),
      url: "https://www.bloomberght.com/",
    },
    {
      title: t("news"),
      url: "https://www.hurriyet.com.tr/",
    },
    {
      title: t("fun"),
      url: "https://www.milliyet.com.tr/",
    },

    {
      title: t("automobile"),
      url: "https://www.arabam.com/",
    },
    {
      title: t("lifeStyle"),
      url: "https://www.milliyet.com.tr/",
    },
    {
      title: t("weather"),
      url: "https://www.mgm.gov.tr/",
    },
  ];

  useEffect(() => {
    async function weather() {
      try {
        const res = await axios.get("/api/weather");
        console.log(res.data);
        setWeather(res.data);
      } catch (error) {
        console.error(error);
      }
    }
    weather();
  }, []);

  return (
    <>
      <div
        style={{
          display: "flex",
          gap: "1rem",
          padding: "1rem",
        }}
      >
        {weather && (
          <div
            style={{
              display: "flex",
              gap: "0.25rem",
              alignItems: "center",
              width: "175px",
            }}
          >
            <img
              src={`http://openweathermap.org/img/w/${weather.icon}.png`}
              alt="weather"
              style={{
                width: "50px",
                height: "50px",
              }}
            />
            <span
              style={{
                fontSize: "1rem",
                color: "#999",
                width: "max-content",
              }}
            >
              {weather.temp.toFixed(0)} °C Izmir
            </span>
          </div>
        )}
        <Swiper
          style={{
            display: "flex",
            gap: "2rem",
            width: "100%",
            alignItems: "center",
          }}
          loop
          spaceBetween={20}
          breakpoints={{
            475: {
              slidesPerView: 2,
            },

            640: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 7,
            },
          }}
        >
          {arr.map((item, idx) => (
            <SwiperSlide
              key={idx}
              style={{
                width: "max-content",
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
          ))}
        </Swiper>
      </div>
    </>
  );
}

export default Nav;
