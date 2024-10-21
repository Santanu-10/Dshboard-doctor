import React from 'react';
import { ListGroup } from 'react-bootstrap';

const Sidebar = () => {
  return (
    <div className="bg-light vh-100 p-3">
      <h4>Welly</h4>
      <ListGroup variant="flush">
        <ListGroup.Item>Dashboard</ListGroup.Item>
        <ListGroup.Item>Patient</ListGroup.Item>
        <ListGroup.Item>Patient Details</ListGroup.Item>
        <ListGroup.Item>Doctor</ListGroup.Item>
        {/* Add other menu items here */}
      </ListGroup>
    </div>
  );
};

export default Sidebar;
