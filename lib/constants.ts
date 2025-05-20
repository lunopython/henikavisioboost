export const COMPANY_NAME = 'Henika Group';
export const COMPANY_TAGLINE = 'Produits d’exportation premium';
export const COMPANY_DESCRIPTION = 'Exportateur premium d’épices, fruits, légumes et produits en raphia vers les marchés mondiaux';

export const NAVIGATION_ITEMS = [
  { name: 'Accueil', href: '/' },
  { name: 'Catalogue', href: '/products' },
  { name: 'À propos', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export const SOCIAL_LINKS = [
  { name: 'Facebook', href: 'https://facebook.com', icon: 'facebook' },
  { name: 'Twitter', href: 'https://twitter.com', icon: 'twitter' },
  { name: 'Instagram', href: 'https://instagram.com', icon: 'instagram' },
  { name: 'LinkedIn', href: 'https://linkedin.com', icon: 'linkedin' },
];

export const PRODUCT_CATEGORIES = [
  { 
    id: 'spices',
    name: 'Épices & Herbes',
    description: 'Épices et herbes de qualité premium directement sourcées auprès des agriculteurs',
    image: 'https://images.pexels.com/photos/4198714/pexels-photo-4198714.jpeg'
  },
  {
    id: 'produce',
    name: 'Produits Frais',
    description: 'Fruits et légumes frais cultivés avec des pratiques durables',
    image: '/images/g1.jpg'
  },
  {
    id: 'raffia',
    name: 'Produits en Raphia',
    description: 'Produits en raphia faits à la main par des artisans qualifiés',
    image: '/images/g2.jpg'
  },
  {
    id: 'decorative',
    name: 'Articles Décoratifs',
    description: 'Articles décoratifs uniques qui allient tradition et design moderne',
    image: '/images/g3.jpg'
  },
];

export const PRODUCTS = [
  {
    id: 1,
    name: 'Poivre Noir Premium',
    category: 'spices',
    description: 'Poivre noir cueilli à la main avec un arôme et un goût riches',
    image: '/images/g4.jpg',
    featured: true,
  },
  {
    id: 2,
    name: 'Curcuma Bio',
    category: 'spices',
    description: 'Racines et poudre de curcuma bio à haute teneur en curcumine',
    image: '/images/g5.jpg',
    featured: true,
  },
  {
    id: 3,
    name: 'Mangues de Qualité Export',
    category: 'produce',
    description: 'Mangues sucrées et juteuses de qualité export',
    image: '/images/g6.jpg',
    featured: true,
  },
  {
    id: 4,
    name: 'Paniers en Raphia Tissés à la Main',
    category: 'raffia',
    description: 'Paniers en raphia durables et magnifiques tissés par des artisans locaux',
    image: '/images/g2.jpg',
    featured: true,
  },
  {
    id: 5,
    name: 'Gousses de Cardamome',
    category: 'spices',
    description: 'Gousses de cardamome verte aromatiques avec une saveur intense',
    image: '/images/g4.jpg',
    featured: false,
  },
  {
    id: 6,
    name: 'Avocats Premium',
    category: 'produce',
    description: 'Avocats crémeux et nutritifs cultivés dans des conditions idéales',
    image: '/images/g5.jpg',
    featured: false,
  },
  {
    id: 7,
    name: 'Décorations Murales en Raphia',
    category: 'decorative',
    description: 'Décorations murales élégantes en raphia pour un intérieur moderne',
    image: '/images/g6.jpg',
    featured: false,
  },
  {
    id: 8,
    name: 'Bâtons de Cannelle Exotiques',
    category: 'spices',
    description: 'Cannelle de qualité premium avec un profil aromatique doux',
    image: '/images/g3.jpg',
    featured: false,
  },
];

export const TEAM_MEMBERS = [
  {
    name: 'Elena Nguyen',
    role: 'Fondatrice & PDG',
    bio: 'Avec plus de 15 ans dans le commerce mondial, Elena a fondé GlobalHarvest pour promouvoir des pratiques d’exportation durables.',
    image: 'https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg'
  },
  {
    name: 'James Wilson',
    role: 'Responsable des Opérations',
    bio: 'James supervise notre chaîne d’approvisionnement et garantit que la qualité des produits répond aux normes internationales.',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg'
  },
  {
    name: 'Sarah Okafor',
    role: 'Assurance Qualité',
    bio: 'Sarah met en œuvre des processus de contrôle qualité rigoureux dans toutes les catégories de produits.',
    image: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg'
  },
  {
    name: 'Miguel Rodriguez',
    role: 'Ventes Internationales',
    bio: 'Miguel développe des relations avec des partenaires mondiaux pour étendre notre présence sur le marché.',
    image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg'
  }
];

export const EXPORT_DESTINATIONS = [
  { country: 'États-Unis', percentage: 28 },
  { country: 'Union Européenne', percentage: 32 },
  { country: 'Moyen-Orient', percentage: 18 },
  { country: 'Asie', percentage: 15 },
  { country: 'Australie', percentage: 7 },
];

export const HERO_SLIDES = [
  {
    id: 1,
    title: 'Épices Premium',
    subtitle: 'Directement des agriculteurs aux marchés mondiaux',
    image: '/images/3.jpg',
    cta: 'Découvrez Nos Épices'
  },
  {
    id: 2,
    title: 'Produits Frais',
    subtitle: 'Fruits et légumes de qualité fraîche',
    image: '/images/1.jpg',
    cta: 'Voir Produits Frais'
  },
  {
    id: 3,
    title: 'Raphia Artisanal',
    subtitle: 'Fabriqué à la main avec des techniques traditionnelles',
    image: '/images/2.jpg',
    cta: 'Découvrez le Raphia'
  }
];