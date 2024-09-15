import React from 'react';

const AppointmentList: React.FC = () => {
  const appointments = [
    { time: '09:00 AM', patient: 'John Doe', reason: 'Annual Checkup' },
    { time: '10:30 AM', patient: 'Jane Smith', reason: 'Follow-up' },
    { time: '02:00 PM', patient: 'Mike Johnson', reason: 'Consultation' },
    { time: '03:30 PM', patient: 'Emily Brown', reason: 'Vaccination' },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div>
        <h3>Today</h3>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {appointments.slice(0, 2).map((apt, index) => (
            <li key={index} className="round" style={{ marginBottom: '10px', padding: '10px', backgroundColor: 'var(--milky-way)' }}>
              <strong>{apt.time}</strong> - {apt.patient}: {apt.reason}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AppointmentList;