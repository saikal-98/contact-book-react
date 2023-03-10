import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";

function ContactCard({ item, handleDelete, handleEdit }) {
  return (
    <Card style={{ width: "18rem", br: "5px" }}>
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {item.surname}
        </Card.Subtitle>
        <Card.Text>{item.email}</Card.Text>
        <Card.Text> +(996){item.phoneNumber}</Card.Text>
        <Button onClick={() => handleDelete(item.id)} variant="primary">
          Delete
        </Button>
        <Button onClick={() => handleEdit(item.id)} variant="dark">
          Edit
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ContactCard;
