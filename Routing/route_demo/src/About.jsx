import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

export default function About() {

  const [n1, setN1] = useState(0);
  const [n2, setN2] = useState(0);
  const [ans, setAns] = useState(0);

  const add = () => {
    setAns(Number(n1) + Number(n2));
  };

  return (
    <>
      <Form.Control
        type="number"
        onChange={(e) => setN1(e.target.value)}
        placeholder="Enter Number 1"
      />
      <br />

      <Form.Control
        type="number"
        onChange={(e) => setN2(e.target.value)}
        placeholder="Enter Number 2"
      />
      <br />

      <Button variant="danger" onClick={add}>Sum</Button>

      <h1>{ans}</h1>
    </>
  );
}
