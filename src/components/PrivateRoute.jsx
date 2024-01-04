import { Navigate, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";

const PrivateRoute = () => {
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (user) => {
        setCurrentUser(user);
        setLoading(false);
      },
      (error) => {
        console.error(error);
        setLoading(false);
      }
    );

    return () => unsubscribe;
  }, []);

  if (loading) {
    return null;
  }

  return currentUser ? (
    <Outlet />
  ) : (
    <Navigate to="/login" replace={true}></Navigate>
  );
};

export default PrivateRoute;
