import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";

import Row from "react-bootstrap/Row";

import "./App.css";
import BookForm from "./components/BookForm";

function App() {
  return (
    <>
      <div className="container my-5">
        <h1 className="text-center text-light mb-4">Booking Form</h1>

        <div className="mx-auto" style={{ maxWidth: "600px" }}>
          <BookForm />
        </div>
      </div>
    </>
  );
}

export default App;
