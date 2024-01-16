import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useDispatch } from "react-redux";
import { Adduser } from "../redux/Action";
import axios from "axios";

function Add_user() {
  const [show, setShow] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState([]);
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();

  const Add = async () => {
    const formatdata = new FormData();
    formatdata.append("file", image);
    formatdata.append("upload_preset", "ml_default");
    if (image.length === undefined) {
      await axios
        .post("https://api.cloudinary.com/v1_1/doz46nowq/upload", formatdata)
        .then((res) => {
          console.log(res);
          dispatch(
            Adduser({ name, email, image: res.data.url, password, gender })
          );
        });
    } else {
      dispatch(
        Adduser({
          name,
          email,
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI-zdgAbQzq7MT96qxzOJ4P5_PymbUK_F_34mjuhv_Erm--DWnq7zWESt3FpHNNbU8ZTs&usqp=CAU",
          password,
          gender,
        })
      );
    }

    handleClose();
  };

  return (
    <>
      <Button
        variant="dark"
        style={{ marginLeft: 50, marginTop: 10 }}
        onClick={handleShow}
      >
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                onChange={(e) => setEmail(e.target.value)}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Name"
                autoFocus
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Image</Form.Label>
              <Form.Control
                type="file"
                accept="image/*"
                placeholder="Image URL"
                autoFocus
                onChange={(e) => setImage(e.target.files[0])}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                autoFocus
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label> Gender</Form.Label>
              <select
                style={{ marginLeft: 10 }}
                onChange={(e) => setGender(e.target.value)}
              >
                <option value={"Male"}>Male</option>
                <option value={"Female"}>Female</option>
              </select>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
          <Button variant="dark" onClick={Add}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Add_user;
