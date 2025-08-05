import React from "react";
import { Row } from "react-bootstrap";
import Pageheader from "../../layouts/layoutcomponents/Pageheader";


const Emptypage = () => {
  return (
    <div>
      <Pageheader homepage='Empty page' activepage='Pages' page='Empty page' />
      <Row>

      </Row>
    </div>
  )
}

export default Emptypage