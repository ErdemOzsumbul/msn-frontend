import { FaRegBell } from "react-icons/fa";
import "./index.css";
import { useEffect, useState } from "react";
import { DateTime } from "luxon";
import axios from "axios";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom/dist";
import { FaRegNewspaper } from "react-icons/fa";

function Notification() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const [notification, setNotification] = useState([]);
  useEffect(() => {
    async function handleNotification() {
      try {
        const res = await axios.get("/api/notification");
        console.log(res.data);
        setNotification(res.data.reverse());
      } catch (error) {
        console.error(error);
      }
    }
    handleNotification();
  }, []);
  return (
    <>
      <div
        style={{
          position: "relative",
          display: "flex",
          zIndex: "10",
        }}
        className="notification-wrapper"
      >
        <FaRegBell />
        <div
          style={{
            padding: "1rem 0",
            position: "absolute",
            top: "100%",
            right: "0",
          }}
          className="notification-dropdown"
        >
          <div
            style={{
              background: "#fff",
              width: "300px",
              borderRadius: "0.5rem",
              boxShadow: "0 0 5px rgba(0, 0, 0, 0.1)",
            }}
          >
            <div
              style={{
                padding: "0.5rem 1rem",
              }}
            >
              {t("notifications")}
            </div>
            <div
              style={{
                width: "100%",
                height: "1px",
                background: "rgba(0, 0, 0, 0.1)",
              }}
            />
            <div
              style={{
                padding: "1rem",
                fontSize: "0.75rem",
              }}
            >
              {notification?.map((item, idx) => {
                const now = DateTime.now();
                const date = DateTime.fromSeconds(item.timestamp / 1000);
                const diff = now.diff(date, ["hours"]);
                return (
                  <div
                    style={{
                      display: "flex",
                      gap: "0.5rem",
                      alignItems: "center",
                      marginBottom: "0.5rem",
                    }}
                    key={idx}
                    onClick={() => navigate("/details/" + item._id)}
                  >
                    <div>
                      <div
                        style={{
                          width: "30px",
                          height: "30px",
                        }}
                      >
                        <FaRegNewspaper size={21} />
                      </div>
                    </div>
                    <div>
                      <div
                        style={{
                          color: "rgba(0, 0, 0, 0.75)",
                          fontSize: "0.75rem",
                        }}
                      >
                        {t("bestNews")}
                      </div>
                      <div
                        style={{
                          flex: "1",
                          overflow: "hidden",
                          WebkitLineClamp: 2,
                          display: "-webkit-box",
                          WebkitBoxOrient: "vertical",
                        }}
                      >
                        {item.title}
                      </div>
                      <div
                        style={{
                          color: "rgba(0, 0, 0, 0.75)",
                          fontSize: "0.75rem",
                        }}
                      >
                        {diff.hours.toFixed(0)} {t("hoursago")}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Notification;
