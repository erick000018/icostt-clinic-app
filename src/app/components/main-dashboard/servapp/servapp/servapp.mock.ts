

  export const servappList: Servapp[] = [
    {
        servappID: 1,
        appointmentID: 100,
        serviceID: 10,
        serviceDate: new Date('2024-06-01T10:15:00'),
        quantity: 1,
        notes: 'Consulta general realizada'
      },
      {
        servappID: 2,
        appointmentID: 100,
        serviceID: 20,
        serviceDate: new Date('2024-06-01T10:30:00'),
        quantity: 1,
        notes: 'Análisis de sangre realizado'
      },
      {
        servappID: 3,
        appointmentID: 101,
        serviceID: 10,
        serviceDate: new Date('2024-06-02T11:00:00'),
        quantity: 1,
        notes: 'Consulta de seguimiento realizada'
      }
  ];

  //export interface AppointmentServiceDetails {
export interface Servapp {    
  servappID: number;
  appointmentID: number;
  serviceID: number;
  serviceDate: Date;
  quantity: number;
  notes: string;
}