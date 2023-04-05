import React from "react";
import { Form } from "react-bootstrap";

export default function Menu({ location, setLocation }) {
  return (
    <Form.Select
      style={{ width: "200px", margin: "50px" }}
      className="w=20px"
      aria-label="Default select example"
      value={location}
      onChange={(e) => setLocation(e.target.value)}
    >
      {!location && <option>Open this select menu</option>}
      <option value="London">London</option>
      <option value="München">München</option>
    </Form.Select>
  );
}
