import EditorChoice from "../EditorChoice/EditorChoice";
import Info from "../Info/Info";
import TopicCart from "./TopicCart";

const PopTopics = () => {
  return (
    <>
      <section>
        <div className="container">
          <h2 style={{ marginTop: "2rem", marginBottom: "2rem", color: "#495057" }}>
            Popular Topics
          </h2>

          <div style={{ display: "flex",  justifyContent: "space-between", marginBottom: "2rem"  }}>
            <ul style={{ display: "flex", color: "#495057", gap: "1.2rem"}}>
              <li>All</li>
              <li>Adventure</li>
              <li>Travel</li>
              <li>Fashion</li>
              <li>Technology</li>
              <li>Branding</li>
            </ul>
            <h4>View All</h4>
          </div>
          <TopicCart />
          <Info />
          <EditorChoice />
        </div>
      </section>
    </>
  );
};

export default PopTopics;
