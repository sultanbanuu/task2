import { useState } from "react";
import "./PopTopics.css";
import { useEffect } from "react";

const TopicCart = () => {
  const [carts, setCart] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await fetch("http://localhost:3000/topics");
      const data = await res.json();

      setCart(data);
    })();
  }, []);
  return (
    <>
      <article>
        <div className="cards">
          {carts.map((cart) => (
            <>
              <div className="card" key={cart.id}>
                <div>
                  <div>
                    <img src={cart.image} alt="" />
                    <div
                      style={{
                        color: "#fff",
                      }}
                    >
                      <h3
                        style={{
                          position: "absolute",
                          top: "10%",
                          left: "70%",
                          transform: "translate(-50%, -50%)",
                          margin: "1rem 0rem",
                          padding: ".5rem 0rem",
                          fontSize: "1rem",
                          textTransform: "uppercase",
                          border: "1 px solid #fff",
                          borderRadius: ".8rem",
                          backgroundColor: "rgba(255, 255, 255, 0.15)",
                          width: "fitcontent",
                        }}
                      >
                        {cart.category}
                      </h3>
                    </div>
                  </div>
                </div>
                <h5 style={{ color: "#6C757D" }}>{cart.date}</h5>
                <h3 style={{ color: "#495057" }}>
                  <strong>{cart.title}</strong>
                </h3>
                <p style={{ color: "#6C757D" }}>{cart.description}</p>
              </div>
            </>
          ))}
        </div>
      </article>
    </>
  );
};

export default TopicCart;
