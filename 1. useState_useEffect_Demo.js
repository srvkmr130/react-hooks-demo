import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [userId, setUserId] = useState("1");
  const [data, setData] = useState([]);

  // 1. useEffect is always called after Render
  useEffect(() => {
    console.log("Called after Render");
    const url = `https://jsonplaceholder.typicode.com/posts?userId=${userId}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log("Data", data);
        setData(data);
      });
  }, [userId]); // 2. passing [userId] will behave as component will update , whenever userId 
  //will change it will render the component , while [] ( empty array) will behave as component did mount


  useEffect(() => {
    document.addEventListener("mousemove", onMouseMove);

    // 3. return in useEffect will behave as component will unmount
    return () => document.removeEventListener("mousemove", onMouseMove);
  });

  function onMouseMove(e) {
    // 4. log x coordinate of current mouse pointer
    console.log(e.ClientX);
  }
  return (
    <div>
    // to get the posts of userID 2 , click this button , by default for userId = 1 , the posts are loaded
      <button onClick={() => setUserId("2")}>User Id: 2</button>

      {data.map((user) => (
        <p> {user.title}</p>
      ))}
    </div>
  );
}

export default App;
