// ['id', 'fecha', 'hora', 'servicio','cliente','dr'];
export const citaList: Cita[] = [
      // { id: 1, fechaText: new Date('2024-06-01'), hora: '10:00 AM', servicio: 'Consulta general', cliente: 'Juan Pérez', dr:  'Silva Merced'},
      { id: 1, fechaText: '2023-06-02', hora: '10:00 AM', servicio: 'Consulta general', cliente: 'Juan Pérez', dr:  'Silva Merced'},
      { id: 2, fechaText: '2023-06-02', hora: '11:00 AM', servicio: 'Control', cliente: 'María López', dr: 'Lopez Marco' },
      { id: 3, fechaText: '2023-06-02', hora: '12:00 PM', servicio: 'Consulta general', cliente: 'Carlos García', dr: 'Silva Merced' }
    ];


export interface Cita {
    id: number;
    // fecha: Date;
    fechaText: string;
    hora: string;
    servicio: string;
    cliente: string;
    dr: string;
  }