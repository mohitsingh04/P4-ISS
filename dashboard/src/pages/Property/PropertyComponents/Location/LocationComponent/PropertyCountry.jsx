import { Form } from "react-bootstrap";

export default function PropertyCountry({ location }) {
  return (
    <div>
      <Form.Group>
        <Form.Label>Country</Form.Label>
        <div className="input-group">
          <Form.Control value={location?.property_country || "N/A"} disabled />
        </div>
      </Form.Group>
    </div>
  );
}
