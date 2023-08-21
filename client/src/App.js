import React, { useEffect, useState } from "react";
import memories from "./images/memories.png";
import Form from "./components/form/Form";
import Posts from "./components/posts/Posts";
import "./Styles.css";
import { useDispatch } from "react-redux";
import { getPosts } from "./actions/Posts";

function App() {
  const dispatch = useDispatch();
  const [currentId, setCurrentId] = useState(null);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <div className="container mt-5">
      <div className="main">
        <h2>Memories</h2>
        <img src={memories} alt="memories" width={40} />
      </div>
      <div className="row post_section">
        <div className="col-12 col-md-7">
          <Posts setCurrentId={setCurrentId} />
        </div>
        <div className="col-12 col-md-5">
          <Form currentId={currentId} setCurrentId={setCurrentId} />
        </div>
      </div>
    </div>
  );
}

export default App;
