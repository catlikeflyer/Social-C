import React, { useContext, useEffect, useState } from "react";
import { auth, db } from "../firebase";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState();
  const [groupID, setGroupID] = useState();
  const [todos, setTodos] = useState([]);

  const onTodos = async (groupID) => {
    return db
      .collection("todos")
      .where("groupID", "==", groupID)
      .get()
      .then((querySnapshot) => {
        var todoList = [];
        querySnapshot.forEach((doc) => {
          todoList.push(doc.data());
        });
        setTodos(todoList);
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });
  };

  const signup = (email, password) => {
    return auth.createUserWithEmailAndPassword(email, password);
  };

  const login = (email, password) => {
    return auth.signInWithEmailAndPassword(email, password);
  };

  const logout = () => {
    return auth.signOut();
  };

  const getUserGroup = async (currentUser) => {
    const groupID = await db
      .collection("users")
      .doc(currentUser.email)
      .get()
      .then((doc) => {
        console.log(doc.data());
        setGroupID(doc.data().groupID);
      });

    return groupID;
  };

  useEffect(() => {
    const unsub = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
      if (user) {
        getUserGroup(user);
        //onTodos(groupID);
      }
    });

    return unsub;
  });

  const value = {
    currentUser,
    signup,
    login,
    logout,
    groupID,
    todos,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
