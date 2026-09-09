import type { Project } from '@/types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Soledad del Desierto',
    category: 'landscapes',
    year: '2024',
    slug: 'desert-solitude',
    coverImage: 'https://images.unsplash.com/photo-1733496637708-9470e9c8cfe2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI3Njk1NjB8&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Una exploración de la belleza austera y la silenciosa majestuosidad del suroeste americano. Esta serie captura el juego de luz, sombra y antiguas formaciones geológicas que definen el paisaje desértico.',
    client: 'National Geographic',
    camera: 'Hasselblad X2D 100C',
    location: 'Arizona & Utah',
    images: [
      { id: '1-1', src: 'https://images.unsplash.com/photo-1610142004358-e4e987e4c5af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI3Njk1NjF8&ixlib=rb-4.1.0&q=80&w=1080', alt: 'Cañón del desierto a la hora dorada', aspectRatio: 'landscape' },
      { id: '1-2', src: 'https://images.unsplash.com/photo-1705321217071-b1b6672fa23c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI3Njk1NjF8&ixlib=rb-4.1.0&q=80&w=1080', alt: 'Dunas de arena a la luz de la mañana', aspectRatio: 'portrait' },
      { id: '1-3', src: 'https://images.unsplash.com/photo-1727319384541-8b96ca1526e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI3Njk1NjF8&ixlib=rb-4.1.0&q=80&w=1080', alt: 'Formaciones rocosas bajo un cielo estrellado', aspectRatio: 'landscape' },
      { id: '1-4', src: 'https://images.unsplash.com/photo-1725986951716-75fb278ecaec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI3Njk1NjJ8&ixlib=rb-4.1.0&q=80&w=1080', alt: 'Vista del desierto al atardecer', aspectRatio: 'square' },
    ]
  },
  {
    id: '2',
    title: 'Retratos Urbanos',
    category: 'portraits',
    year: '2024',
    slug: 'urban-portraits',
    coverImage: 'https://images.unsplash.com/photo-1761069234906-a7c77124f641?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI3Njk1NjJ8&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Una serie de retratos que celebra la diversidad y el carácter de los habitantes de la ciudad. Cada sujeto fue fotografiado en su lugar urbano favorito, revelando la conexión íntima entre las personas y su entorno.',
    client: 'The New York Times Magazine',
    camera: 'Canon EOS R5',
    location: 'New York City',
    images: [
      { id: '2-1', src: 'https://images.unsplash.com/photo-1559123988-ebd5228736b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI3Njk1NjJ8&ixlib=rb-4.1.0&q=80&w=1080', alt: 'Retrato de un joven en entorno urbano', aspectRatio: 'portrait' },
      { id: '2-2', src: 'https://images.unsplash.com/photo-1628173422874-0d18ff5bfb83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI3Njk1NjN8&ixlib=rb-4.1.0&q=80&w=1080', alt: 'Retrato profesional con luz natural', aspectRatio: 'portrait' },
      { id: '2-3', src: 'https://images.unsplash.com/photo-1581329318020-a226e3713ea8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI3Njk1NjN8&ixlib=rb-4.1.0&q=80&w=1080', alt: 'Retrato callejero espontáneo', aspectRatio: 'square' },
      { id: '2-4', src: 'https://images.unsplash.com/photo-1651464416004-60ae4e4846d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI3Njk1NjR8&ixlib=rb-4.1.0&q=80&w=1080', alt: 'Retrato con fondo urbano', aspectRatio: 'portrait' },
    ]
  },
  {
    id: '3',
    title: 'Visiones Arquitectónicas',
    category: 'architecture',
    year: '2023',
    slug: 'architectural-visions',
    coverImage: 'https://images.unsplash.com/photo-1758543437543-6d61ca0fd530?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI3Njk1NjR8&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Arquitectura moderna capturada a través de una lente minimalista. Esta serie se centra en formas geométricas, materialidad y la interacción de la estructura con la luz natural.',
    client: 'Architectural Digest',
    camera: 'Sony A7R V',
    location: 'International',
    images: [
      { id: '3-1', src: 'https://images.unsplash.com/photo-1762344682624-176d89eb3bfe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI3Njk1NjR8&ixlib=rb-4.1.0&q=80&w=1080', alt: 'Fachada de edificio moderno de cristal', aspectRatio: 'portrait' },
      { id: '3-2', src: 'https://images.unsplash.com/photo-1690927324729-bcf7d2b3ecac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI3Njk1NjV8&ixlib=rb-4.1.0&q=80&w=1080', alt: 'Interior arquitectónico con luz natural', aspectRatio: 'landscape' },
      { id: '3-3', src: 'https://images.unsplash.com/photo-1752756351017-bbe91e0439a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI3Njk1NjV8&ixlib=rb-4.1.0&q=80&w=1080', alt: 'Estructura de hormigón geométrica', aspectRatio: 'square' },
      { id: '3-4', src: 'https://images.unsplash.com/photo-1748940644273-47564655923f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI3Njk1NjV8&ixlib=rb-4.1.0&q=80&w=1080', alt: 'Edificio contemporáneo al anochecer', aspectRatio: 'landscape' },
    ]
  },
  {
    id: '4',
    title: 'Moda Vanguardista',
    category: 'editorial',
    year: '2023',
    slug: 'fashion-forward',
    coverImage: 'https://images.unsplash.com/photo-1682232568244-edbb92614c2a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI3Njk1NjZ8&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Una serie editorial que explora la moda contemporánea a través de composiciones audaces e iluminación dramática. Fotografiado en locación y en estudio.',
    client: 'Vogue',
    camera: 'Phase One XF IQ4',
    location: 'New York & Paris',
    images: [
      { id: '4-1', src: 'https://images.unsplash.com/photo-1730724620317-2b806898bdda?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI3Njk1NjZ8&ixlib=rb-4.1.0&q=80&w=1080', alt: 'Retrato editorial de moda', aspectRatio: 'portrait' },
      { id: '4-2', src: 'https://images.unsplash.com/photo-1704137892949-e480ceaebe24?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI3Njk1Njd8&ixlib=rb-4.1.0&q=80&w=1080', alt: 'Modelo con iluminación dramática', aspectRatio: 'portrait' },
      { id: '4-3', src: 'https://images.unsplash.com/photo-1631970283992-6b57250a4a29?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI3Njk1Njd8&ixlib=rb-4.1.0&q=80&w=1080', alt: 'Fotografía de moda en entorno urbano', aspectRatio: 'landscape' },
      { id: '4-4', src: 'https://images.unsplash.com/photo-1540513325222-55b3afd3ed5b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI3Njk1Njh8&ixlib=rb-4.1.0&q=80&w=1080', alt: 'Retrato editorial de moda', aspectRatio: 'portrait' },
    ]
  },
  {
    id: '5',
    title: 'Historias de Montaña',
    category: 'documentary',
    year: '2023',
    slug: 'mountain-stories',
    coverImage: 'https://images.unsplash.com/photo-1742260765447-239ed006350a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI3Njk1Njh8&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Serie documental que sigue a comunidades de montaña y su relación con el cambiante entorno alpino. Un proyecto de un año que documenta la vida en altitud.',
    client: 'Personal Project',
    camera: 'Fujifilm GFX 100 II',
    location: 'Swiss Alps',
    images: [
      { id: '5-1', src: 'https://images.unsplash.com/photo-1680287327539-9467451a8b81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI3Njk1Njh8&ixlib=rb-4.1.0&q=80&w=1080', alt: 'Paisaje de montaña al amanecer', aspectRatio: 'landscape' },
      { id: '5-2', src: 'https://images.unsplash.com/photo-1621765808360-5b2ea25d147a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI3Njk1Njl8&ixlib=rb-4.1.0&q=80&w=1080', alt: 'Pueblo alpino en invierno', aspectRatio: 'landscape' },
      { id: '5-3', src: 'https://images.unsplash.com/photo-1721960778604-6a814f039347?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI3Njk1Njl8&ixlib=rb-4.1.0&q=80&w=1080', alt: 'Picos de montaña entre la niebla', aspectRatio: 'portrait' },
      { id: '5-4', src: 'https://images.unsplash.com/photo-1654362248566-6804dbcc5bdc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI3Njk1Njl8&ixlib=rb-4.1.0&q=80&w=1080', alt: 'Amanecer sobre la cordillera', aspectRatio: 'landscape' },
    ]
  },
  {
    id: '6',
    title: 'Luz Costera',
    category: 'landscapes',
    year: '2022',
    slug: 'coastal-light',
    coverImage: 'https://images.unsplash.com/photo-1669908752972-e04c3b65e855?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI3Njk1Njl8&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'El estado de ánimo siempre cambiante de la costa capturado a través de diferentes estaciones y condiciones meteorológicas. Una meditación sobre la luz, el agua y el tiempo.',
    location: 'Pacific Northwest',
    camera: 'Nikon Z9',
    images: [
      { id: '6-1', src: 'https://images.unsplash.com/photo-1619508126123-3586ee993858?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI3Njk1NzB8&ixlib=rb-4.1.0&q=80&w=1080', alt: 'Olas del océano al atardecer', aspectRatio: 'landscape' },
      { id: '6-2', src: 'https://images.unsplash.com/photo-1566303060899-999a74200af8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI3Njk1NzB8&ixlib=rb-4.1.0&q=80&w=1080', alt: 'Costa rocosa en la niebla matinal', aspectRatio: 'landscape' },
      { id: '6-3', src: 'https://images.unsplash.com/photo-1762686185418-2bffbb8d8fea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI3Njk1NzB8&ixlib=rb-4.1.0&q=80&w=1080', alt: 'Playa a la hora dorada', aspectRatio: 'landscape' },
      { id: '6-4', src: 'https://images.unsplash.com/photo-1594927058779-aa4c1b5804a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI3Njk1NzF8&ixlib=rb-4.1.0&q=80&w=1080', alt: 'Acantilados costeros con luz dramática', aspectRatio: 'portrait' },
    ]
  },
  {
    id: '7',
    title: 'Sesiones de Estudio',
    category: 'portraits',
    year: '2022',
    slug: 'studio-sessions',
    coverImage: 'https://images.unsplash.com/photo-1616267624976-b45d3a7bac73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI3Njk1NzF8&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Retratos de estudio controlados que enfatizan la forma, la luz y la expresión. Un enfoque clásico para sujetos contemporáneos.',
    client: 'Various Editorial',
    camera: 'Hasselblad H6D-100c',
    location: 'New York Studio',
    images: [
      { id: '7-1', src: 'https://images.unsplash.com/photo-1616267624976-b45d3a7bac73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI3Njk1NzF8&ixlib=rb-4.1.0&q=80&w=1080', alt: 'Retrato de estudio con iluminación dramática', aspectRatio: 'portrait' },
      { id: '7-2', src: 'https://images.unsplash.com/photo-1551536548-4de53e534e3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI3Njk1NzJ8&ixlib=rb-4.1.0&q=80&w=1080', alt: 'Retrato clásico con luz suave', aspectRatio: 'portrait' },
      { id: '7-3', src: 'https://images.unsplash.com/photo-1449247709967-d4461a6a6103?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI3Njk1NzJ8&ixlib=rb-4.1.0&q=80&w=1080', alt: 'Retrato con fondo minimalista', aspectRatio: 'square' },
      { id: '7-4', src: 'https://images.unsplash.com/photo-1758521233019-e53cb9ce77b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI3Njk1NzJ8&ixlib=rb-4.1.0&q=80&w=1080', alt: 'Retrato de estudio contemporáneo', aspectRatio: 'portrait' },
    ]
  },
  {
    id: '8',
    title: 'Luces de la Ciudad',
    category: 'editorial',
    year: '2022',
    slug: 'city-lights',
    coverImage: 'https://images.unsplash.com/photo-1582210413269-f0bf6d13f58f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI3Njk1NzN8&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Paisajes urbanos nocturnos y la energía eléctrica de la vida de la ciudad después del anochecer. Largas exposiciones y luz ambiental crean una calidad onírica.',
    client: 'Adobe Creative Cloud',
    camera: 'Sony A7S III',
    location: 'Tokyo & New York',
    images: [
      { id: '8-1', src: 'https://images.unsplash.com/photo-1617293134227-0ec282f3ed89?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI3Njk1NzN8&ixlib=rb-4.1.0&q=80&w=1080', alt: 'Calle de la ciudad de noche con luces de neón', aspectRatio: 'landscape' },
      { id: '8-2', src: 'https://images.unsplash.com/photo-1643124859906-b5f7ef3e210d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI3Njk1NzN8&ixlib=rb-4.1.0&q=80&w=1080', alt: 'Horizonte urbano al anochecer', aspectRatio: 'landscape' },
      { id: '8-3', src: 'https://images.unsplash.com/photo-1761870033405-d1474ec5dae9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI3Njk1NzR8&ixlib=rb-4.1.0&q=80&w=1080', alt: 'Fotografía nocturna de arquitectura urbana', aspectRatio: 'portrait' },
      { id: '8-4', src: 'https://images.unsplash.com/photo-1701012292510-83de4283ef1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI3Njk1NzR8&ixlib=rb-4.1.0&q=80&w=1080', alt: 'Centro de la ciudad de noche con estelas de luz', aspectRatio: 'landscape' },
    ]
  }
];

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find(project => project.slug === slug);
};

export const getProjectsByCategory = (category: string): Project[] => {
  if (category === 'all') return projects;
  return projects.filter(project => project.category === category);
};

export const getFeaturedProjects = (): Project[] => {
  return projects.slice(0, 4);
};

export const getAdjacentProjects = (currentSlug: string): { prev: Project | null; next: Project | null } => {
  const currentIndex = projects.findIndex(p => p.slug === currentSlug);
  return {
    prev: currentIndex > 0 ? projects[currentIndex - 1] : null,
    next: currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null
  };
};
