import { useEffect, useState } from "react";
import { firestore } from "./firebase";

function Posts(props) {
  let [blogs, setPosts] = useState([]);

  useEffect(() => {
    let f = async () => {
      await firestore.collection("blogs").onSnapshot((querySnapshot) => {
        let temp = [];

        querySnapshot.forEach((doc) => {
            let data = doc.data();
          if (data.uid == props.uid) {
            let obj = {
              id: doc.id,
              data: data,
            };
            temp.push(obj);
          }
        });
        setPosts(temp);
      });
    };

    f();
  }, []);

  if (blogs.length === 0) return <div></div>;

  return (
    <div className="App">
      <ul>
        {" "}
        {blogs.map((el) => {
          return <li key={el.id}>{el.data.title}</li>;
        })}
      </ul>
    </div>
  );
}

export default Posts;
