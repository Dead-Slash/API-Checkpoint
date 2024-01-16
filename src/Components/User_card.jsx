import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import React from "react";
import { useDispatch } from "react-redux";
import { DeleteUser } from "../redux/Action";
import Edit_user from "./Edit_user";

function User_card({ user }) {
  const dispatch = useDispatch();
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={user.image} />
      <Card.Body>
        <Card.Title>{user.name} </Card.Title>
        <Card.Text>{user.email}</Card.Text>
        <Card.Text>{user.gender}</Card.Text>
        <Button variant="danger" onClick={() => dispatch(DeleteUser(user._id))}>
          {" "}
          Delete
        </Button>
        <Edit_user user={user} />
      </Card.Body>
    </Card>
  );
}

export default User_card;
