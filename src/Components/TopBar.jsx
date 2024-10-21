import React from 'react';
import { Navbar, Form, FormControl, Button } from 'react-bootstrap';

const TopBar = () => {
  return (
    <Navbar bg="light" className="px-4">
      <Form inline>
        <FormControl type="text" placeholder="Search here..." className="mr-sm-2" />
      </Form>
      <div className="ml-auto">
        <Button variant="primary" className="mr-2">+New Patient</Button>
        <Button variant="secondary">Filter Date</Button>
      </div>
    </Navbar>
  );
};

export default TopBar;
