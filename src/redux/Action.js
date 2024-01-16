import axios from "axios";
import { GETUSERS } from "./Aciontype";

export const GetUsers = () => async (dispatch) => {
  try {
    await axios
      .get("http://192.168.2.14:4556/api/user/get")
      .then((res) => dispatch({ type: GETUSERS, payload: res.data.getuser }));
  } catch (error) {
    console.log(error);
  }
};

export const DeleteUser = (id) => async (dispatch) => {
  try {
    await axios
      .delete("http://192.168.2.14:4556/api/user/delete/" + id)
      .then((res) => dispatch(GetUsers()));
  } catch (error) {
    console.log(error);
  }
};

export const Adduser = (data) => async (dispatch) => {
  try {
    await axios
      .post("http://192.168.2.14:4556/api/user/add", data)
      .then((res) => dispatch(GetUsers()));
  } catch (error) {
    console.log(error);
  }
};

export const Edituser = (data, id) => async (dispatch) => {
  try {
    await axios
      .put("http://192.168.2.14:4556/api/user/update/" + id, data)
      .then((res) => dispatch(GetUsers()));
  } catch (error) {
    console.log(error);
  }
};
