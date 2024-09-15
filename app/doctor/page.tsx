import { useUser } from '@clerk/nextjs';
import PatientList from './PatientList';
import AppointmentList from './AppointmentList';
import UrgentMedical from './UrgentMedical';
import Welcome from './welcome'


export default function DoctorPage() {

  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Doctor Dashboard</title>
      <link rel="stylesheet" href="styles.css" />
      <div className="main-container">
        <div className="heading flex" id="name-heading" style={{ fontWeight: 900 }}>
          <Welcome/>
        </div>
        <div className="flex" style={{ height: "calc(100vh - 200px)" }}>
          <div className="box-section fifty" style={{ display: 'flex', flexDirection: 'column' }}>
            <h1>Patients</h1>
            <div style={{ flexGrow: 1, overflow: 'hidden' }}>
              <PatientList />
            </div>
          </div>
          <div className="flex column fifty">
            <div className="box-section flex-grow" style={{ maxHeight: "100%" }}>
              <h1>Upcoming Appointments</h1>
              <AppointmentList />
            </div>
            <div className="box-section flex-grow">
              <h1>Urgent Medical</h1>
              <UrgentMedical />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
