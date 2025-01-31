interface Review {
  id: number;
  name: string;
  rating: number;
  comment: string;
  createdAt: string;
}

export const getInitialReviews = (): Review[] => [
  {
    id: 1,
    name: 'Javier Martín',
    rating: 5,
    comment:
      'Limpieza de fachada impecable: Increíble trabajo eliminando la pintura vieja de la fachada de mi local. Todo el proceso fue rápido y sin dañar la pared. ¡Totalmente recomendado!',
    createdAt: '2024-08-15T10:30:00Z',
  },
  {
    id: 2,
    name: 'Carlos Rodríguez',
    rating: 5,
    comment:
      'Restauración de barco perfecta: Mi velero tenía óxido y pintura deteriorada, pero después del servicio de Eco Laser Clean quedó como nuevo. ¡Gran profesionalismo y rapidez!',
    createdAt: '2024-05-14T14:45:00Z',
  },
  {
    id: 3,
    name: 'Marta López',
    rating: 5,
    comment:
      'Eliminación de óxido con láser: Llamé para eliminar grafitis en la persiana de mi negocio y en menos de una hora estaba impecable. Atención rápida y un equipo muy amable.',
    createdAt: '2024-07-13T09:15:00Z',
  },
  {
    id: 4,
    name: 'Laura Fernández',
    rating: 5,
    comment:
      'Servicio rápido y eficiente: Llamé para eliminar grafitis en la persiana de mi negocio y en menos de una hora estaba impecable. Atención rápida y un equipo muy amable.',
    createdAt: '2024-02-12T16:20:00Z',
  },
];
