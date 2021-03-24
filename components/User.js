import React from "react";
import { useStore } from "../store/store";
import { addUser, updateUser } from "../store/actions/user.actions";

const User = () => {
  const [state, dispatch] = useStore();
  const { user } = state;
  return (
    <div>
      <button
        onClick={() => {
          dispatch(addUser({ name: "Ram", contact: "8748961773" }));
        }}
      >
        Add User
      </button>

      <button
        onClick={() => {
          dispatch(updateUser({ name: "Murthy", contact: "8748961773" }));
        }}
      >
        Update User
      </button>

      <br />
      <br />
      <h5>{user?.name}</h5>
      <h5>{user?.contact}</h5>
    </div>
  );
};

export default User;
