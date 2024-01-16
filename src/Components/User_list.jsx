import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetUsers } from "../redux/Action";
import User_card from "./User_card";

function User_list() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetUsers());
  }, [dispatch]);
  const users = useSelector((state) => state.users);
  console.log(users);
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: 10,
        justifyContent: "center",
        marginTop: 20,
      }}
    >
      {users.map((e) => (
        <User_card user={e} key={e._id} />
      ))}
    </div>
  );
}

export default User_list;
