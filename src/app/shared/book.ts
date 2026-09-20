export interface Book {
  id: number;
  title: string;
  author: string;
  category: string;
  description: string;
  cover: string;
}

export const BOOKS: Book[] = [
  { id: 1, title: 'El Principito', author: 'Antoine de Saint-Exupéry', category: 'Ficción', description: 'Una historia inolvidable sobre amistad, imaginación y mirar más allá de lo evidente.', cover: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=240' },
  { id: 2, title: 'Hábitos Atómicos', author: 'James Clear', category: 'Desarrollo', description: 'Pequeños cambios cotidianos pueden transformar resultados importantes.', cover: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=240' },
  { id: 3, title: 'Breve historia del tiempo', author: 'Stephen Hawking', category: 'Ciencia', description: 'Un recorrido accesible por el universo, el tiempo y sus grandes preguntas.', cover: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=240' }
];
