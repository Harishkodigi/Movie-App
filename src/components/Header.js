import { LOGO_URL } from "../utils/constant";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "./createSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/")
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, displayName, email } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser);
        navigate("/");
      }
    });
  }, []);
  return (
    <div className="absolute  px-8 py-2 bg-gradient-to-b from-black z-10 w-full flex justify-between">
      <img className="w-48" src={LOGO_URL} alt="logo" />
      {user && (
        <div className="flex ">
          <img
            className="w-14 h-14 p-2 m-2"
            src="https://upload.wikimedia.org/wikipedia/commons/7/70/User_icon_BLACK-01.png"
            alt="userLogo"
          />
          <button onClick={handleSignOut} className="font-bold text-yellow-100">
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
