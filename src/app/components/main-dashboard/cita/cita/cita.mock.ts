
export const citaList: Cita[] = [
      { id: 1, fecha: new Date('2024-06-01'), hora: '10:00 AM', cliente: 'Juan Pérez', motivo: 'Consulta general' },
      { id: 2, fecha: new Date('2024-06-02'), hora: '11:00 AM', cliente: 'María López', motivo: 'Control' },
      { id: 3, fecha: new Date('2024-06-03'), hora: '12:00 PM', cliente: 'Carlos García', motivo: 'Chequeo anual' }
    ];


export interface Cita {
    id: number;
    fecha: Date;
    hora: string;
    cliente: string;
    motivo: string;
  }