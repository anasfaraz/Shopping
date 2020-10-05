import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
//import { Button } from "@material-ui/core";
import SignIn from "./SignIn";

function ModalLogin(props) {
  const [key, setKey] = useState("SignIn");
  return (
    <Modal {...props}>
      <div style={{ padding: "10px", marginTop: "10px" }}>
        <SignIn />
      </div>
    </Modal>
  );
}

export default ModalLogin;
