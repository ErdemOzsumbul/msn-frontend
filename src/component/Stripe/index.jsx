import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { SiMicrosoftoutlook } from "react-icons/si";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { MdOutlineSportsBasketball } from "react-icons/md";
import { FaSkype } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { SiMicrosoftstore } from "react-icons/si";
import { IoMapSharp } from "react-icons/io5";
import { GrOnedrive } from "react-icons/gr";
import { SiMicrosoftonenote } from "react-icons/si";
import { TbBrandOffice } from "react-icons/tb";

const arr = [
  {
    icon: <SiMicrosoftoutlook size={30} />,
    title: "Outlook.com",
    url: "https://outlook.live.com/",
  },
  {
    icon: <FaFacebookSquare size={30} />,
    title: "Facebook",
    url: "https://www.facebook.com/",
  },
  {
    icon: <FaTwitter size={30} />,
    title: "Twitter",
    url: "https://twitter.com/",
  },
  {
    icon: <MdOutlineSportsBasketball size={30} />,
    title: "Spor",
    url: "https://www.sporx.com/",
  },
  {
    icon: <FaSkype size={30} />,
    title: "Skype",
    url: "https://www.skype.com/en/",
  },
  {
    icon: <TbBrandOffice size={30} />,
    title: "Office",
    url: "https://www.office.com/",
  },
  {
    icon: <FaShoppingCart size={30} />,
    title: "Alışveriş",
    url: "https://www.amazon.com/",
  },
  {
    icon: <SiMicrosoftstore size={30} />,
    title: "Microsoft Store",
    url: "https://www.microsoft.com/tr-tr/store/b/home",
  },
  {
    icon: <IoMapSharp size={30} />,
    title: "Haritalar",
    url: "https://www.bing.com/maps",
  },
  {
    icon: <GrOnedrive size={30} />,
    title: "OneDrive",
    url: "https://onedrive.live.com/about/tr-tr/signin/",
  },
  {
    icon: <SiMicrosoftonenote size={30} />,
    title: "OneNote",
    url: "https://www.onenote.com/",
  },
];

function Stripe() {
  return (
    <>
      <div
        style={{
          padding: "1rem",
          borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
        }}
      >
        <Swiper
          spaceBetween={75}
          modules={[Navigation]}
          navigation
          style={{ padding: "0 2rem" }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 5,
            },
          }}
        >
          {arr.map((item, index) => (
            <SwiperSlide key={index}>
              <a
                href={item.url}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: "flex",
                  gap: "0.5rem",
                  width: "max-content",
                  alignItems: "center",
                }}
              >
                <div>{item.icon}</div>
                <div
                  style={{
                    width: "max-content",
                  }}
                >
                  {item.title}
                </div>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

export default Stripe;
