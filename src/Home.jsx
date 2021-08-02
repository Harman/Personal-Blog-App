import { auth } from "./firebase";
import { Redirect } from "react-router-dom";
import Posts from "./Posts";
import Create from "./Create";

let Home = (props) => {
  return (
    <div>
      {props.user ? (
        <>
          <h1>{props.user.displayName}</h1>
          <button
            onClick={() => {
              auth.signOut();
              <Redirect to="/login" />;
            }}
            type="submit"
            className="btn btn-primary m-4"
          >
            Logout
          </button>

          <Posts uid={props.user.uid}/>
          <Create uid={props.user.uid}/>


          {/* <p>Email: {props.user.email}</p>
          <p>{props.user.uid}</p> */}
        </>
      ) : (
        <Redirect to="/login" />
      )}
    </div>
  );
};

export default Home;
