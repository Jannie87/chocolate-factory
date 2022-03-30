import "./PaymentOptions.css";
import { Modal, Button, Form } from "react-bootstrap";
import React, { useState } from "react";
import Mastercard from "../../assets/Mastercard-logo.png";

function PaymentOptionMastercard() {
  const [show, setShow] = useState(false);

  const [checked, setChecked] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const log = () => {
    console.log("hello");
  };

  const handleChange = (event: any) => {
    const name = event.target.name;
    const value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;
    setChecked(!checked);
  };

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event: any) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  // if (checked === false) {
  //   return (
  //     <div className="payment-button-container">
  //       <Form.Check
  //         required
  //         label="Choose payment option"
  //         feedback="You must choose a shipping option"
  //         feedbackType="invalid"
  //         name="payment"
  //         type="radio"
  //         onClick={handleShow}
  //         checked={checked}
  //         onChange={handleChange}
  //       />
  //       <Button className="btn btn-light" variant="primary">
  //         <img className="img-style" src={Mastercard} alt="" />
  //       </Button>
  //     </div>
  //   );
  // } else {
  return (
    <div>
      <Form.Group
        className="mb-3"
        controlId="formGridCardNr"
        style={{ paddingLeft: "1rem", paddingTop: "1rem", width: "25%" }}
      >
        <Form.Label className="payment-label" for="frmCCNum">
          Card Number
        </Form.Label>
        <Form.Control
          required
          placeholder="Card number"
          name="cardnumber"
          id="frmCCNum"
          autoComplete="cc-number"
          className="payment-input"
        />
        <Form.Control.Feedback type="invalid">
          Please provide a card number.
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group
        className="mb-3"
        controlId="formGridCardExpDate"
        style={{ paddingLeft: "1rem", width: "25%" }}
      >
        <Form.Label className="payment-label" for="frmCCExp">
          Expiration Date
        </Form.Label>{" "}
        <br />
        <Form.Control
          placeholder="MM-YYYY"
          name="cc-exp"
          id="frmCCExp"
          required
          autoComplete="cc-exp"
          className="payment-input"
        />
        <Form.Control.Feedback type="invalid">
          Please provide an expiration date.
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group
        className="mb-3"
        controlId="formGridCardExpDate"
        style={{ paddingLeft: "1rem", width: "25%" }}
      >
        <Form.Label className="payment-label" for="frmCCCVC">
          CVC
        </Form.Label>
        <Form.Control
          name="cvc"
          id="frmCCCVC"
          required
          autoComplete="cc-csc"
          placeholder="CVC"
          className="payment-input"
        />
        <Form.Control.Feedback type="invalid">
          Please provide a CVC.
        </Form.Control.Feedback>
        <Form.Text className="text-muted">
          Enter your card information to pay using Mastercard.
        </Form.Text>
      </Form.Group>
    </div>
  );
}

// return (
//   <>
//     <div className="payment-button-container">
//       <Form.Check
//         required
//         label="Choose payment option"
//         feedback="You must choose a shipping option"
//         feedbackType="invalid"
//         name="payment"
//         type="radio"
//         onClick={handleShow}
//         checked={checked}
//       />
//       <Button className="btn btn-light" variant="primary">
//         <img className="img-style" src={Mastercard} alt="" />
//       </Button>
//     </div>

//     {/* <Modal show={show} onHide={handleClose}>
//       <Modal.Header closeButton>
//         <Modal.Title>Pay with Mastercard</Modal.Title>
//       </Modal.Header>
//       <Modal.Body> */}
//     <div show={show}>
//       <Form
//         show={show}
//         onHide={handleClose}
//         noValidate
//         validated={validated}
//         onSubmit={handleSubmit}
//       >
//         <Form.Group className="mb-3" controlId="formGridCardNr">
//           <Form.Control required type="" placeholder="Card number" />
//           <Form.Control.Feedback type="invalid">
//             Please provide a card number.
//           </Form.Control.Feedback>
//         </Form.Group>
//         <Form.Group className="mb-3" controlId="formGridCardExpDate">
//           <input required type="date" />
//           <Form.Control.Feedback type="invalid">
//             Please provide an expiration date.
//           </Form.Control.Feedback>
//           <Form.Text className="text-muted"> Expiration date</Form.Text>
//         </Form.Group>
//         <Form.Group className="mb-3" controlId="formGridCardExpDate">
//           <Form.Control required type="" placeholder="CVC" />
//           <Form.Control.Feedback type="invalid">
//             Please provide a CVC.
//           </Form.Control.Feedback>
//           <Form.Text className="text-muted">
//             Enter your card information to pay using Mastercard.
//           </Form.Text>
//         </Form.Group>
//       </Form>
//     </div>
//     <Button variant="secondary" onClick={handleClose}>
//       Close
//     </Button>
//     <Button
//       className="margin-left"
//       type="submit"
//       variant="primary"
//       onClick={handleSubmit}
//     >
//       Save
//     </Button>
//     {/* </Modal.Body>
//     </Modal> */}
//   </>
// );

export default PaymentOptionMastercard;
