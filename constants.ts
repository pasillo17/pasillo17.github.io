import { Artist, Release, Service, FAQItem, EquipmentItem, Course } from './types';

export const COURSES: Course[] = [
  {
    id: 1,
    title: 'CÓMO GRABARTE CORRECTAMENTE',
    description: 'Aprende las técnicas esenciales para capturar voces de calidad profesional desde tu home studio.',
    price: '$15.000',
    image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=2070&auto=format&fit=crop',
    features: ['Configuración de micrófono', 'Acústica básica', 'Niveles de ganancia', 'Tips de interpretación', 'Cadena de voces de Ableton y FL Studio'],
    ctaLink: '#',
  },
  {
    id: 2,
    title: 'BEATMAKING DESDE CERO',
    description: 'Domina el arte de crear instrumentales que golpeen fuerte. Desde la idea inicial hasta el beat final.',
    price: '$20.000',
    image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=2070&auto=format&fit=crop',
    features: ['Estructura de beats', 'Selección de sonidos', 'Drum patterns', 'Melodías pegadizas'],
    ctaLink: '#',
  },
  {
    id: 3,
    title: 'LANZAMIENTO DIGITAL',
    description: 'La guía definitiva para subir tu música a Spotify, Apple Music y todas las plataformas digitales.',
    price: '$12.000',
    image: 'https://images.unsplash.com/photo-1614680376593-902f74cf0d41?q=80&w=1974&auto=format&fit=crop',
    features: ['Distribuidoras digitales', 'Fechas de lanzamiento', 'Pitch a playlists', 'Estrategia de redes'],
    ctaLink: '#',
  },
  {
    id: 4,
    title: 'REGISTRO EN SADAIC',
    description: 'Protege tus derechos de autor y cobra las regalías que te corresponden. Paso a paso.',
    price: '$10.000',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop',
    features: ['Formularios necesarios', 'Trámites online', 'Cobro de regalías', 'Derechos de autor'],
    ctaLink: '#',
  },
];

export const ARTISTS: Artist[] = [
  { id: 1, name: 'PERRO PRIMO', image: 'https://images.genius.com/48c0592003df8d21754490892c9199f9.640x640x1.jpg' },
  { id: 2, name: 'L-GANTE', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/L-Gante_Conferencia_de_prensa_%2851861017602%29.jpg/960px-L-Gante_Conferencia_de_prensa_%2851861017602%29.jpg' },
  { id: 3, name: 'DOBLE P', image: 'https://robertoramasso.com/wp-content/uploads/doble-p-papu-ramasso-productora-1.png' },
  { id: 4, name: 'ROZE', image: 'https://cdn-images.dzcdn.net/images/artist/92d12480de5acda429f3406925ee5ed9/500x500-000000-80-0-0.jpg' },
];

export const RELEASES: Release[] = [
  { 
    id: 1, 
    title: 'FOUR POLO SESSION #1', 
    artist: 'DsD',
    image: 'https://cdn-images.dzcdn.net/images/cover/f32fe11db036c8bf7561cd8aa83d7142/1900x1900-000000-80-0-0.jpg',
    link: 'https://youtu.be/KyTDV8blbwA?si=30y6AjfaW3YvjZUj&t=43',
    color: '#8B5CF6', // Violeta
    audio: 'https://dl.dropboxusercontent.com/scl/fi/bvmcdkzcxcn51dl3w7g1y/Opacalas.mp3?rlkey=41p7m93tr7fuhtsp6fy84zcqr'
  },
  { 
    id: 2, 
    title: 'MALDITO VISIONARIO', 
    artist: 'ELESEJOTA',
    image: 'https://i.ytimg.com/vi/PSZP9V_f-M0/maxresdefault.jpg',
    link: 'https://youtu.be/PSZP9V_f-M0?si=LmO8oSnN7vyjiRLT&t=5',
    color: '#EF4444', // Rojo
    audio: 'https://dl.dropboxusercontent.com/scl/fi/ilbsne2z7bf688ueyd2u7/Maldito-Visionario.mp3?rlkey=4jdoad331jg9yn6iuiq0y5yl7'
  },
  { 
    id: 3, 
    title: 'SPONSOR', 
    artist: 'PERRO PRIMO',
    image: 'https://cdn-images.dzcdn.net/images/cover/b8572f6092ff34f1b6f5f839d8a57350/0x1900-000000-80-0-0.jpg',
    link: 'https://youtu.be/LOIeIhnaTNA?si=DRbI446wur2WpL4Q',
    color: '#FFFFFF', // Blanco
    audio: 'https://dl.dropboxusercontent.com//scl/fi/vy2fky9ehoawopijex3hd/Sponsor-Chica-Bandida.mp3?rlkey=sv5taso707nrrmw9q9kvjon2f'
  },
  { 
    id: 4, 
    title: 'CUANDO TE SIENTAS SOLA', 
    artist: 'FRAN23',
    image: 'https://yt3.googleusercontent.com/5IZC067ZbUEQcasBNqcit_RPQKcECGfdOyNCDnMA_2fxP472tkzSSChSwTpbHPdaxqdCfbjZ=s900-c-k-c0x00ffffff-no-rj',
    link: 'https://www.youtube.com/watch?v=f3vcl7wrAhU',
    color: '#FACC15', // Amarillo
    audio: 'https://dl.dropboxusercontent.com/scl/fi/10vdnlmxybomm9etr1uwi/Cuando-te-sientas-sola.mp3?rlkey=2n9bt0cs1r4qbf2p1gq5eqznf'
  },
  {
    id: 11,
    title: 'A CHILLAR A OTRA PARTE REMIX',
    artist: 'EL TECLA X BANDIDO X SANTIAGO CAÑETE',
    image: 'https://i.scdn.co/image/ab67616d0000b2732edcf6c0efe49cfdd01ed693',
    link: 'https://youtu.be/OkMbl-L3_6Y?si=rvAnXXMNU1y2qBYa',
    color: '#F97316', // Naranja Atardecer
    audio: 'https://dl.dropboxusercontent.com/scl/fi/vdo139v0qu0kljcn4c0dj/El-Tecla-BANDIDO-Santiago-Ca-ete-ft-JCKC-A-Chillar-a-Otra-Parte-Remix-Video-Oficial.mp3?rlkey=41xmnlpa7oky80x3lg7m7ey9d'
  },
  { 
    id: 5, 
    title: 'AMOR FALLIDO', 
    artist: 'FRAN23 X RAMA VELAZQUEZ',
    image: 'https://i.ytimg.com/vi/oBjOarVGh1Y/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLD85pPOgYZuhXFBp1MxbXRgmyVdHQ',
    link: 'https://www.youtube.com/watch?v=oBjOarVGh1Y',
    color: '#FFE4BC', // Cremita
    audio: 'https://dl.dropboxusercontent.com/scl/fi/ymwatpdloqywdlfpg2q8s/AMOR-FALLIDO-Fran23-ft-Rama-velazquez.mp3?rlkey=somx0x5e6fvnr5c0mvpbk2zxh'
  },
  { 
    id: 6, 
    title: 'NIKA', 
    artist: 'PERRO PRIMO',
    image: 'https://i.ytimg.com/vi/LOIeIhnaTNA/sddefault.jpg',
    link: 'https://youtu.be/LOIeIhnaTNA?si=TvTj6L0WfnNmbIjk',
    color: '#06b6d4', // Azul verdoso
    audio: 'https://dl.dropboxusercontent.com/scl/fi/o9y6eg4k58cbdg2vle76p/Perro-Primo-DT.Bilardo-Karim-ABL-NiKA-Video-Oficial-RKT-420.mp3?rlkey=fb8lmdkf4obt1g6k5zdv59nnx'
  },
  {
    id: 7,
    title: 'FACULTAD',
    artist: 'ALMAX X ROGGERO ALEX X VILL MENEDO',
    image: 'https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/a8/5f/b3/a85fb35c-81a4-f217-7401-2e05e51d770b/199891161843_cover.jpg/1200x630bb.jpg',
    link: 'https://www.youtube.com/watch?v=sPaxiGz3Je0',
    color: '#F97316', // Naranja
    audio: 'https://dl.dropboxusercontent.com/scl/fi/icot74ro8ju33gbbtwd93/ALMAX-Roggero-Alex-Vill-Menedo-Facultad.mp3?rlkey=ummf3idsen2bjqmhwen1kzu24'
  },
  {
    id: 8,
    title: 'LA LLUVIA',
    artist: 'DIAVLERO',
    image: 'https://cdn-images.dzcdn.net/images/cover/6d4f2b52335f6b6a43f8f5876bacbead/1900x1900-000000-80-0-0.jpg',
    link: '#',
    color: '#3B82F6', // Blue
    audio: 'https://dl.dropboxusercontent.com/scl/fi/vncl2fsxjzj0vx3dmlekx/La-Lluvia.mp3?rlkey=z5zhzxvu5vxeacweeot68a820'
  },
  {
    id: 9,
    title: 'PERDIDO EN ALCOHOL',
    artist: '18 KILATES X ROZE',
    image: 'https://i.scdn.co/image/ab67616d0000b273b686c0c4089d39660516eae5',
    link: 'https://youtu.be/9DllhYE6Lz4?si=eGDvOlot_0GlQx4C',
    color: '#FFFFFF', // Neon Blanco
    audio: 'https://dl.dropboxusercontent.com/scl/fi/2ub20wu81e62zmbtjmivg/18-Kilates-X-Roze-Perdido-en-Alcohol-prod.-JCKC-Video-Oficial.mp3?rlkey=u7sd8kq5z6hkruumb763i4fjt'
  },
  {
    id: 10,
    title: 'LO PROFUNDO DEL DESEO',
    artist: 'GARÇA',
    image: 'https://lh3.googleusercontent.com/KsUIG0TTgtnBhZ-scpMQ7dvOTO84Mvv3yWZvHsEzsVoEWTG8Ob_fIDRjRbCiJRUqLvs9d0luJlDxZkYs=w544-h544-l90-rj',
    link: 'https://open.spotify.com/intl-es/track/2E4brvUocf0PROT7CdDLN3?si=689fc80036a4403c',
    color: '#D1D5DB', // Gris Metal Plateado
    audio: 'https://dl.dropboxusercontent.com/scl/fi/zxmduth41raug3tts8oyq/Gar-a-Lo-Profundo-Del-Deseo-Master-44-24.mp3?rlkey=6jwtur0ggibruf76k7rulo7uq'
  },
];

export const SERVICES: Service[] = [
  {
    id: 'basic',
    title: 'BÁSICO',
    subtitle: 'Ideal para grabaciones vocales rápidas',
    price: '$70.000',
    priceUnit: '/sesión',
    ctaText: 'RESERVAR',
    icon: 'mic',
    features: ['2 Horas de Grabación', 'Edición de Voces', 'Mezcla Creativa','Master Final'],
  },
  {
    id: 'standard',
    title: 'ESTÁNDAR',
    subtitle: 'Producción completa para singles',
    price: '$120.000',
    priceUnit: '/track',
    ctaText: 'RESERVAR',
    recommended: true,
    icon: 'waveform',
    features: ['4 Horas de Grabación', 'Coach Vocal', 'Beat personalizado (opción de exclusividad)', 'Mezcla y Master'],
  },
  {
    id: 'premium',
    title: 'PREMIUM',
    subtitle: 'Para resultados de otro planeta',
    price: '$300.000',
    priceUnit: '/track',
    ctaText: 'RESERVAR',
    icon: 'disc',
    features: ['6 Horas de Grabación', 'Beat Exclusivo', 'Mezcla Creativa', 'Video Sesion en el Estudio', 'Sesión de Fotos', 'Plan Básico de Lanzamiento'],
  },
  {
    id: 'deluxe',
    title: 'DELUXE',
    subtitle: 'Jugá en las grandes ligas',
    price: 'CONSULTAR',
    priceUnit: '/proyecto',
    ctaText: 'APLICAR',
    icon: 'crown',
    features: ['Producción Musical Completa', 'Creación de Contenido', 'Mastering DT.Bilardo', 'Estrategia de Lanzamiento', 'Distribución Digital', 'Videoclip Oficial'],
  },
];

export const FAQS: FAQItem[] = [
  {
    id: 1,
    question: '¿Se puede pagar en cuotas?',
    answer: 'Sí, ofrecemos la posibilidad de abonar los planes Estándar y Premium en dos pagos. La entrega del material finalizado se realiza únicamente una vez pagada la totalidad del servicio.',
  },
  {
    id: 2,
    question: '¿Que significa que el beat es licenciado?',
    answer: 'Podés subir y monetizar tu canción sin ningún problema. El beat no pasa a ser tuyo, pero sí tenés el permiso para usarlo y lanzar tu tema con total tranquilidad.',
  },
  {
    id: 3,
    question: '¿Ofrecen servicios de Contenido y Videoclip?',
    answer: 'Sí. Trabajamos en conjunto con @FourPolo para llevar tu idea a otro nivel y convertirla en una peli + hit. Escribinos y lo armamos a medida.',
  },
];

export const EQUIPMENT: EquipmentItem[] = [
  {
    id: 1,
    title: 'MEZCLAS LISTAS PARA PLATAFORMAS',
    description: 'Sonido optimizado para competir en el entorno digital actual.',
    icon: 'settings',
  },
  {
    id: 2,
    title: 'FOCO EN EL ARTISTA',
    description: 'Cada sesión está pensada para potenciar el sonido y la visión del artista.',
    icon: 'ear',
  },
  {
    id: 3,
    title: 'VIBE & CONFORT',
    description: 'Iluminación LED personalizable para crear el ambiente perfecto para tu creatividad.',
    icon: 'light',
  },
];