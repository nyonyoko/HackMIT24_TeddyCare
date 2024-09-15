import { clerkClient } from '@clerk/clerk-sdk-node';
import Link from 'next/link';
import React from 'react';

const PatientList: React.FC = async () => {
  const orgs = await clerkClient.organizations.getOrganizationList();

  if (!orgs) {
    return <div>No organizations found</div>
  }

  const patientOrg = orgs.data.find(org => org.slug === 'patient')

  if (!patientOrg) {
    return <div>No patient organization found</div>
  }

  const users = await clerkClient.organizations.getOrganizationMembershipList({
    organizationId: patientOrg.id
  })

  return (
    <div style={{ height: '100%', overflowY: 'auto' }}>
      {users.data.map((user, index) => (
        <Link 
          href={`/doctor/patient-info/${user.publicUserData?.userId}`} 
          key={index}
        >
          <button
            className="round"
            style={{
              display: 'block',
              width: '100%',
              padding: '10px',
              margin: '5px 0',
              textAlign: 'left',
              border: 'none',
              cursor: 'pointer',
              fontSize: '20px',
              backgroundColor: 'var(--milky-way)',
            }}
          > 
            {user.publicUserData?.firstName} {user.publicUserData?.lastName}
          </button>
        </Link>
      ))}
    </div>
  );
};

export default PatientList;