import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { TbBrandOpenSource } from "react-icons/tb";
import FixedBar from "../../component/FixedBar";
import { useSelector } from "react-redux";

function Details() {
  const user = useSelector((state) => state.user);
  const [details, setDetails] = useState(null);
  const params = useParams();

  useEffect(() => {
    async function handleDetails() {
      const res = await axios.get(`/api/details`, {
        params: {
          id: params.id,
        },
      });
      setDetails(res.data);
    }
    handleDetails();
  }, [params]);

  return (
    <>
      {user.email && <FixedBar />}
      <div>
        <div
          className="container"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem",
            }}
          >
            <img src={details?.image} alt={details?.title} />
            <div
              style={{
                display: "flex",
                gap: "0.5rem",
                alignItems: "center",
              }}
            >
              <TbBrandOpenSource color="red" /> {details?.source}
            </div>
          </div>
          <h1
            style={{
              width: "750px",
              maxWidth: "100%",
              textAlign: "center",
            }}
          >
            {details?.title}
          </h1>
          <p
            style={{
              fontSize: "1.25rem",
              width: "750px",
              maxWidth: "100%",
            }}
          >
            {details?.description}
          </p>
        </div>
      </div>
    </>
  );
}

export default Details;
