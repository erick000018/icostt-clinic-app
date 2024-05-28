/*
Tablas Principales
Pacientes (Patients):

Contiene información sobre los pacientes.
Doctores (Doctors):

Contiene información sobre los médicos y otros proveedores de servicios de salud.
Servicios Médicos (MedicalServices):

Contiene información sobre los diferentes servicios médicos disponibles.
Citas Médicas (Appointments):

Contiene información sobre las citas programadas entre pacientes y proveedores de servicios.

Servicios Médicos y Citas Médicas:

Una cita médica puede involucrar uno o varios servicios médicos.
Un servicio médico puede ser parte de muchas citas médicas.

CREATE TABLE MedicalServices (
    ServiceID INT PRIMARY KEY,
    ServiceName VARCHAR(100),
    Description TEXT,
    Cost DECIMAL(10, 2)
);
CREATE TABLE Appointments (
    AppointmentID INT PRIMARY KEY,
    PatientID INT,
    DoctorID INT,
    AppointmentDate DATETIME,
    Notes TEXT,
    FOREIGN KEY (PatientID) REFERENCES Patients(PatientID),
    FOREIGN KEY (DoctorID) REFERENCES Doctors(DoctorID)
);

CREATE TABLE AppointmentServices (
    AppointmentID INT,
    ServiceID INT,
    PRIMARY KEY (AppointmentID, ServiceID),
    FOREIGN KEY (AppointmentID) REFERENCES Appointments(AppointmentID),
    FOREIGN KEY (ServiceID) REFERENCES MedicalServices(ServiceID)
);
//servapp ==> AppointmentServiceDetails
CREATE TABLE AppointmentServiceDetails (
    AppointmentServiceID INT PRIMARY KEY,
    AppointmentID INT,
    ServiceID INT,
    ServiceDate DATETIME,
    Quantity INT,
    Notes TEXT,
    FOREIGN KEY (AppointmentID) REFERENCES Appointments(AppointmentID),
    FOREIGN KEY (ServiceID) REFERENCES MedicalServices(ServiceID)
);
Explicación de los Campos
AppointmentServiceID: Clave primaria única para identificar cada detalle de servicio de cita.
AppointmentID: ID de la cita a la que está asociado el servicio.
ServiceID: ID del servicio proporcionado durante la cita.
ServiceDate: Fecha y hora en que se proporcionó el servicio (si es diferente de la fecha de la cita general).
Quantity: Cantidad del servicio proporcionado (útil si un servicio puede proporcionarse en múltiplos).
Notes: Notas adicionales sobre el servicio proporcionado.


*/
import { Component } from '@angular/core';
import { servappList } from './servapp.mock';

export interface Tile {
    color: string;
    cols: number;
    rows: number;
    text: string;
  }
@Component({
  selector: 'app-servapp',
  templateUrl: './servapp.component.html',
  styleUrls: ['./servapp.component.css']
})
export class ServappComponent {
    
    servappList = servappList;

    tiles: Tile[] = [
        {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
        {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
        {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
        {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
      ];  

      displayedColumns: string[] = ['servappID', 'appointmentID', 'serviceID', 'serviceDate','quantity','notes'];
      dataSource = servappList;      

}
