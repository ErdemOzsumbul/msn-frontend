import { useEffect } from "react";
import Begin from "./Begin";
import Fun from "./Fun";
import News from "./News";
import Sport from "./Sport";
import Watch from "./Watch";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { newsActions } from "../../redux";

function Home() {
  const dispatch = useDispatch();
  const news = useSelector(state => state.news.items);

  useEffect(() => {
    async function handleNews() {
      const res = await axios.get("/api/news");
      console.log(res.data);

      dispatch(newsActions.update(res.data));
    }
    if (news.length !== 0) return;
    handleNews();
  }, []);
  return (
    <>
      <div>
        <Begin />
        <div
          style={{
            width: "100%",
            background: "rgba(0, 0, 0, 0.1)",
            height: "1px",
            margin: "1rem 0",
          }}
        />
        <News />
        <div
          style={{
            width: "100%",
            background: "rgba(0, 0, 0, 0.1)",
            height: "1px",
            margin: "1rem 0",
          }}
        />
        <Watch />{" "}
        <div
          style={{
            width: "100%",
            background: "rgba(0, 0, 0, 0.1)",
            height: "1px",
            margin: "1rem 0",
          }}
        />
        <Sport />{" "}
        <div
          style={{
            width: "100%",
            background: "rgba(0, 0, 0, 0.1)",
            height: "1px",
            margin: "1rem 0",
          }}
        />
        <Fun />
      </div>
    </>
  );
}

export default Home;
