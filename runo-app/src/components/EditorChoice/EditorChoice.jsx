import { useEffect } from "react";
import { useState } from "react";
import "./EditorChoice.css";

const EditorChoice = () => {
  const [options, setOption] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await fetch("http://localhost:3000/editor-choice");
      const data = await res.json();

      setOption(data);
    })();
  }, []);

  return (
    <section>
      <div className="container">
        <h2 style={{color:"#495057", marginBottom: "60px"}}>Editor`s Pick</h2>
        <div className="choice-cards">
          {options.map((option) => (
            <div className="choice-card" key={option.id}>
              <div>
                <div>
                  <img src={option.image} style={{borderRadius: "5px"}} alt="" />
                  <h3
                    style={{
                      fontSize: "10px",
                      position: "absolute",
                      top: "10%",
                      right: "10%",
                      margin: "1rem 0rem",
                      padding: ".5rem .5rem",
                      textTransform: "uppercase",
                      border: "1 px solid #fff",
                      borderRadius: ".8rem",
                      backgroundColor: "rgba(255, 255, 255, 0.15)",
                      width: "fitcontent",
                    }}
                  >
                    {option.category}
                  </h3>
                </div>
                <div className="choice-txt">
                  <h3 style={{ fontSize: "12px" }}>{option.date}</h3>
                  <h2 style={{ fontSize: "18px" }}>{option.title}</h2>
                  <p style={{ fontSize: "12px" }}>{option.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EditorChoice;
