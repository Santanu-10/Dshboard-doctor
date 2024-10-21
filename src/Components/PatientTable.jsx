import React from 'react';
import { Table, Button } from 'react-bootstrap';

const PatientTable = () => {
  const patients = [
    { id: '#P-00014', checkin: '29/02/2020, 12:42 AM', name: 'Clive Siauw', doctor: 'Dr. Samantha', disease: 'Sleep Problem', status: 'New Patient', room: 'AB-004' },
    { id: '#P-00015', checkin: '29/02/2020, 12:42 AM', name: 'Bella Simatupang', doctor: 'Dr. Olivia Jean', disease: 'Hearing Loss', status: 'Recovered', room: 'AB-008' },
    // Add more patients
  ];

  return (
    <div className="table-responsive p-3">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Patient ID</th>
            <th>Date Check in</th>
            <th>Patient Name</th>
            <th>Doctor Assigned</th>
            <th>Disease</th>
            <th>Status</th>
            <th>Room No</th>
          </tr>
        </thead>
        <tbody>
          {patients.map((patient, index) => (
            <tr key={index}>
              <td>{patient.id}</td>
              <td>{patient.checkin}</td>
              <td>{patient.name}</td>
              <td>{patient.doctor}</td>
              <td>{patient.disease}</td>
              <td>
                <Button variant={patient.status === 'Recovered' ? 'success' : 'primary'} size="sm">
                  {patient.status}
                </Button>
              </td>
              <td>{patient.room}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default PatientTable;
