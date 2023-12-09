import backgroundImg2 from "../../assets/images/background-image2.png";
const Info = () => {
  return (
    <>
      <article>
        <div
          style={{

            position: "relative",
            backgroundImage: `url(${backgroundImg2})`,
            backgroundSize: "cover",
            minHeight: "20rem",
            minWidth: "20rem",
            color: "#fff",
            marginBottom: "5rem",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              textAlign: "center",
            }}
          >
            <h4
              style={{
              display: "inline-block",
                margin: "1rem 0rem",
                padding: ".5rem 1.2rem",
                fontSize: "1rem",
                textTransform: "uppercase",
                border: "1 px solid #fff",
                borderRadius: ".8rem",
                backgroundColor: "rgba(255, 255, 255, 0.15)",
                width: "fitcontent",
                color: "#fff",
              }}
            >
              FASHION
            </h4>
            <h2>Richird Norton photorealistic rendering as real photos</h2>
            <p>
              Progressively incentivize cooperative systems through technically
              sound functionalities. The credibly productivate seamless data.
            </p>
            <span>—</span>
            <p>08.08.2021</p>
          </div>
        </div>
      </article>
    </>
  );
};

export default Info;
