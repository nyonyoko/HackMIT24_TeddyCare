import React from 'react';

const AppointmentList: React.FC = () => {
  const appointments = [
    { time: '09:00 AM', patient: 'Yiyun (Leo) Yao', reason: 'Annual Checkup' },
    { time: '10:30 AM', patient: 'Faith Villarreal', reason: 'Follow-up' } ];

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