import Header from "../Header";
import Nav from "../Nav";
import Stripe from "../Stripe";
import { Outlet } from "react-router-dom";

function Wrapper() {
  return (
    <>
      <div style={{ background: "#D5D4D0", width: "100dvw" }}>
        <div className="container">
          <div
            style={{
              background: "white",
              padding: " 0 3rem",
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
              paddingBottom: "5rem",
              minHeight: "100dvh",
            }}
          >
            <Header />
            <Stripe />
            <Nav />
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}

export default Wrapper;
