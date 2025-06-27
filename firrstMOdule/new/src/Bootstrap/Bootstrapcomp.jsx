import React from "react";
import { Button } from "react-bootstrap";
import {Alert} from 'react-bootstrap';

const Bootstrapcomp = () => {
  return (
    <div>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="success">Success</Button>
      <Button variant="warning">Warning</Button>
      <Button variant="danger">Danger</Button>
      <Button variant="info">Info</Button>
      <Button variant="light">Light</Button>
      <Button variant="dark">Dark</Button>
      <Button variant="link">Link</Button>
      <Alert variant="danger">hello how are youu</Alert>
    </div>
  );
};

export default Bootstrapcomp;
