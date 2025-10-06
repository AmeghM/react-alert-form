import React, { useEffect, useState } from "react";

import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

function BookForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    checkin: "",
    checkout: "",
    guests: 1,
    roomType: "",
  });

  const formSubmit = () => {
    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.checkin ||
      !formData.checkout ||
      !formData.guests ||
      !formData.roomType
    ) {
      alert(" Please fill all the fields");

      return;
    } else {
      alert(
        ` Hotel Booking Details:
        Name: ${formData.name}
        Email: ${formData.email}
        Phone: ${formData.phone}
        Check-in: ${formData.checkin}
        Check-out: ${formData.checkout}
        Guests: ${formData.guests}
        Room Type: ${formData.roomType}`
      );
    }
  };
  const clearInput = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      checkin: "",
      checkout: "",
      guests: 1,
      roomType: "",
    });
  };

  useEffect(() => {
    console.log("User Input Updated:", formData);
  }, [formData]);
  return (
    <>
      <div className=" bg-light bg-opacity-50 rounded shadow-lg p-4">
        <Form className=" ">
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
          </Form.Group>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="phone">
              <Form.Label>Phone: </Form.Label>
              <Form.Control
                type="tel"
                placeholder="Enter Phone"
                pattern="[0-9]{10}"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
              />
            </Form.Group>

            <Form.Group as={Col} controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="checkin">
              <Form.Label>Check-in:</Form.Label>
              <Form.Control
                type="date"
                placeholder=""
                value={formData.checkin}
                onChange={(e) =>
                  setFormData({ ...formData, checkin: e.target.value })
                }
              />
            </Form.Group>

            <Form.Group as={Col} controlId="checkout">
              <Form.Label>Check-out:</Form.Label>
              <Form.Control
                type="date"
                placeholder=""
                value={formData.checkout}
                onChange={(e) =>
                  setFormData({ ...formData, checkout: e.target.value })
                }
              />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="guests">
              <Form.Label>Guests: </Form.Label>
              <Form.Control
                type="number"
                min={1}
                value={formData.guests}
                onChange={(e) =>
                  setFormData({ ...formData, guests: e.target.value })
                }
              />
            </Form.Group>

            <Form.Group as={Col} controlId="roomType">
              <Form.Label>Room Type:</Form.Label>
              <Form.Select
                name="roomType"
                value={formData.roomType}
                onChange={(e) =>
                  setFormData({ ...formData, roomType: e.target.value })
                }
              >
                <option value="">Choose...</option>
                <option value="Single">Single</option>
                <option value="Double">Double</option>
                <option value="Suite">Suite</option>
              </Form.Select>
            </Form.Group>
          </Row>

          <div className="d-flex justify-content-end mt-3">
            <p
              className="text-danger fw-semibold mb-0"
              style={{ cursor: "pointer", fontSize: "18px" }}
              onClick={clearInput}
            >
              Clear form
            </p>
          </div>

          <div className="d-grid gap-2 mt-2">
            <Button variant="primary" size="lg" onClick={formSubmit}>
              Submit
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
}

export default BookForm;
