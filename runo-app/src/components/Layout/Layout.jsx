import { Outlet } from "react-router-dom";
import img1 from "../../assets/images/facebook.png";
import img2 from "../../assets/images/twitter.png";
import img3 from "../../assets/images/youtube.png";
import img4 from "../../assets/images/pinterest.png";
import img5 from "../../assets/images/behance.png";
import search_icon from "../../assets/images/search_icon.png";
import backgroundImg from "../../assets/images/background-image1.png";
import "./Layout.css";

const Layout = () => {
  return (
    <>
      <header>
        <nav
          style={{
            backgroundImage: `url(${backgroundImg})`,
            backgroundSize: "cover",
            minHeight: "23rem",
            minWidth: "20rem",
          }}
        >
          <div className="container">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                background: " rgba(0,0,0,0.20)",
                padding: "15px 0px",
              }}
            >
              <h1>RUNO</h1>

              <div style={{ display: "flex" }}>
                <ul
                  className="nav-lists"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1.7rem",
                    color: "#fff",
                  }}
                >
                  <li>Home</li>
                  <li>Article</li>
                  <li>Contact</li>
                  <li>About Us</li>
                  <li>
                    <span>|</span>
                  </li>
                </ul>
                <ul
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.8rem",
                    color: "#fff",
                  }}
                >
                  <div className="social-icon" style={{ marginLeft: "0.5rem" }}>
                    <img src={img1} />
                  </div>
                  <div className="social-icon">
                    <img src={img2} />
                  </div>
                  <div className="social-icon">
                    <img src={img3} />
                  </div>
                  <div className="social-icon">
                    <img src={img4} />
                  </div>
                  <div className="social-icon">
                    <img src={img5} />
                  </div>
                  <span>|</span>
                </ul>
                <div className="icon" style={{ marginLeft: "0.5rem" }}>
                  <img src={search_icon} alt="" />
                </div>
              </div>
            </div>

            <div
              style={{
                position: "absolute",
                top: "35%",
                transform: "translate(-50%, -50%)",
                left: "35%",
                color: "#fff",
                display: "flex",
                flexDirection: "column",
                gap: "1.2rem",
              }}
            >
              <div
                style={{
                  border: "1 px solid #fff",
                  borderRadius: ".8rem",
                  backgroundColor: "rgba(255, 255, 255, 0.15)",
                  width: "fit-content",
                }}
              >
                <h4 style={{ margin: ".5rem 1rem" }}>ADVENTURE</h4>
              </div>
              <h2>Richird Norton photorealistic rendering as real photos</h2>
              <div style={{ display: "flex" }}>
                <p>08.08.2021</p>
                <span style={{ marginLeft: "0.2rem", marginRight: "0.2rem" }}>
                  {" "}
                  —{" "}
                </span>
                <p>
                  Progressively incentivize cooperative systems through
                  technically sound functionalities. The credibly productivate
                  seamless data.
                </p>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <section>
          <div className="container">
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                backgroundColor: "#212529",
                color: "#fff",
                padding: "100px 0px",
              }}
            >
              <ul className="footerGap">
                <li>
                  <h3>Contact the Publisher</h3>
                </li>
                <li>mike@runo.com</li>
                <li>+944 450 904 505</li>
              </ul>
              <ul className="footerGap">
                <li>
                  <h3>Explorate</h3>
                </li>
                <li>About</li>
                <li>Partners</li>
                <li>Job Opportunities</li>
                <li>Advertise</li>
                <li>Membership</li>
              </ul>
              <ul className="footerGap">
                <li>
                  <h3>Headquarter</h3>
                </li>
                <li>191 Middleville Road, NY 1001, Sydney Australia</li>
              </ul>
              <ul className="footerGap">
                <li>
                  <h3>Connections</h3>
                </li>
                <div style={{ display: "flex" }}>
                  <div className="social-icon">
                    <img src={img1} />
                  </div>
                  <div className="social-icon">
                    <img src={img2} />
                  </div>
                  <div className="social-icon">
                    <img src={img3} />
                  </div>
                  <div className="social-icon">
                    <img src={img4} />
                  </div>
                  <div className="social-icon">
                    <img src={img5} />
                  </div>
                </div>
              </ul>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                backgroundColor: "#343A40",
                color: "#fff",
                padding: "20px 0",
              }}
            >
              <h6>2021 | RUNO Publisher Studio</h6>
              <h6>Subscribe Now</h6>
            </div>
          </div>
        </section>
      </footer>
    </>
  );
};

export default Layout;
