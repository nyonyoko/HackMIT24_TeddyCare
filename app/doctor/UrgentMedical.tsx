import React from 'react';

const UrgentMedical: React.FC = () => {
  return (
    <div className="round" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px', backgroundColor: 'var(--milky-way)' }}>
      <span>Patient Name</span>
      <span style={{ color: '#ff6b6b' }}>Heart Arrhythmia</span>
    </div>
  );
};

export default UrgentMedical;