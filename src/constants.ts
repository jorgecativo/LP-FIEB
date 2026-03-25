import { 
  Users, 
  Calendar, 
  MapPin, 
  Clock, 
  Video, 
  FileText, 
  Handshake, 
  Award, 
  Globe, 
  Instagram, 
  Linkedin, 
  Twitter, 
  Facebook,
  ChevronLeft,
  ChevronRight,
  Menu,
  X,
  Mic,
  Presentation,
  Laptop,
  Network,
  Youtube,
  Mail,
  GraduationCap
} from 'lucide-react';

export const ICONS = {
  Users,
  Calendar,
  MapPin,
  Clock,
  Video,
  FileText,
  Handshake,
  Award,
  Globe,
  Instagram,
  Linkedin,
  Twitter,
  Facebook,
  ChevronLeft,
  ChevronRight,
  Menu,
  X,
  Mic,
  Presentation,
  Laptop,
  Network,
  Youtube,
  Mail,
  GraduationCap
};

export const SOCIAL_LINKS = [
  { name: 'Facebook', href: 'https://www.facebook.com/fieb2026/', icon: 'Facebook' },
  { name: 'Instagram', href: 'https://www.instagram.com/fieb_oficial/', icon: 'Instagram' },
  { name: 'X', href: 'https://x.com/fieb_oficial/', icon: 'Twitter' },
  { name: 'Youtube', href: 'https://www.youtube.com/channel/UCgfsnQPakPnTchxsrVxqM_g?sub_confirmation=1', icon: 'Youtube' },
  { name: 'Newsletter', href: 'https://fiebnews.substack.com/', icon: 'Mail' },
];

export const LOGO_URL = "https://fieb.net.br/wp-content/uploads/2024/08/Logo-FIEB-Manaus.png";

export const PARTNERS_LOGOS = [
  { name: 'SISTEBIB', src: 'https://i.pinimg.com/736x/e4/83/78/e4837809daf1ab271d7b667b1fa58a5f.jpg', category: 'Realização' },
  { name: 'UFAM', src: 'https://i.pinimg.com/736x/e9/5b/23/e95b234447832eda3dfad7876e32b341.jpg', category: 'Realização' },
  { name: 'INPA', src: 'https://i.pinimg.com/736x/38/7f/f1/387ff1327bd5603b20fbda5b01613332.jpg', category: 'Instituição Parceira' },
  { name: 'IFAL', src: 'https://i.pinimg.com/736x/bd/9c/06/bd9c067ef85a23f605ce5761a7aac374.jpg', category: 'Instituição Parceira' },
  { name: 'CODEM', src: 'https://i.pinimg.com/736x/39/c9/43/39c943d911d6af53008e0e29241d45db.jpg', category: 'Instituição Parceira' },
  { name: 'IFAM', src: 'https://i.pinimg.com/736x/69/0a/f6/690af64825be51eb74c9fe531384df07.jpg', category: 'Instituição Apoiadora' },
  { name: 'UNIFOR', src: 'https://i.pinimg.com/736x/db/2a/e6/db2ae6e73461c171c74143b39c571d31.jpg', category: 'Instituição Apoiadora' },
  { name: 'Lépidus Tecnologia', src: 'https://i.pinimg.com/736x/32/18/6e/32186eb1c85620a39af0a87be49c2789.jpg', category: 'Apoio Ouro' },
  { name: 'FAPEAM', src: 'https://www.fapeam.am.gov.br/wp-content/uploads/2015/08/marca-horizontal-colorida.png', category: 'Financiamento' },
];

export type Language = 'pt' | 'en' | 'es';

export const TRANSLATIONS = {
  pt: {
    nav: {
      home: 'Inicial',
      about: 'Sobre',
      program: 'Programação',
      submissions: 'Submissões',
      partners: 'Empresas Apoiadoras',
      useful: 'Úteis',
      sub: {
        about: [
          { label: 'Comissão Organizadora', href: 'https://fieb.net.br/comissao-organizadora/' },
          { label: 'Local', href: 'https://fieb.net.br/local/' },
          { label: 'Contato', href: 'https://fieb.net.br/contato/' },
          { label: 'Edições anteriores', href: 'https://fieb.net.br/edicoes-anteriores/' },
        ],
        program: [
          { label: 'Ver Programação', href: '#programacao' },
          { label: 'Pessoas Convidadas', href: '#pessoas-convidadas' }
        ],
        submissions: [
          { label: 'Chamada para Submissão', href: 'https://drive.google.com/file/d/1v2J5bXtUY8_kmE7fqea9QGugQ5PCx4-C/view?usp=sharing' },
          { label: 'Diretrizes para Autores', href: 'https://fieb.net.br/diretrizes-para-autores-2026/' },
          { 
            label: 'Templates', 
            isNested: true,
            items: [
              { label: 'Pesquisas concluídas', href: 'https://submissoes.fieb.net.br/fieb/libraryFiles/downloadPublic/1' },
              { label: 'Projetos em andamento', href: 'https://submissoes.fieb.net.br/fieb/libraryFiles/downloadPublic/1' },
              { label: 'Relatos de Experiência', href: 'https://submissoes.fieb.net.br/fieb/libraryFiles/downloadPublic/2' },
            ]
          },
        ],
        useful: [
          { label: 'Hospedagem', href: 'https://fieb.net.br/hospedagem-manaus/' },
          { label: 'Espaços culturais e Lazer', href: 'https://fieb.net.br/espacos-culturais/' },
          { label: 'Restaurantes', href: 'https://fieb.net.br/restaurantes/' },
        ]
      }
    },
    hero: {
      commemorative: 'Edição Comemorativa de 10 Anos',
      title: 'V Fórum de Inovação e Empreendedorismo na Biblioteconomia',
      subtitle: 'Empreendedorismo feminino na era digital',
      info: '14 e 15 de maio de 2026 • Manaus, Amazonas',
      ctaPrimary: 'Submeter trabalho',
      ctaSecondary: 'Ver programação',
    },
    about: {
      title: 'Sobre o Evento',
      text1: 'O Fórum de Inovação e Empreendedorismo na Biblioteconomia – FIEB é um evento científico e profissional de abrangência nacional que tem como finalidade fomentar a produção, a socialização e a aplicação de conhecimentos inovadores no campo da Biblioteconomia e da Ciência da Informação, com ênfase em empreendedorismo, inovação, avanço tecnológico digital, gestão da informação e criação de produtos e serviços informacionais.',
      text2: '10 anos depois da primeira edição em 2016, a edição será realizada na cidade de Manaus, com palestras, oficinas, painéis temáticos, apresentações de trabalhos nas categorias pesquisas concluídas, projetos em andamento e relatos de experiência.',
      statParticipants: 'Mais de 400',
      statYears: '10 Anos',
      statLabelParticipants: 'Participantes',
      statLabelYears: 'Desde a 1ª Edição',
    },
    program: {
      title: 'PROGRAMAÇÃO',
      subtitle: 'Dois dias de conteúdo, inovação e networking.',
      day1: '14 de maio',
      day2: '15 de maio',
      viewActivity: 'Ver atividade',
    },
    speakers: {
      title: 'PESSOAS CONVIDADAS',
      subtitle: 'Quem já confirmou participação e estará conosco em Manaus',
    },
    submit: {
      title: 'SUBMETA SEU TRABALHO',
      subtitle: 'Compartilhe suas pesquisas e experiências com a comunidade.',
      cta: 'Diretrizes para Autores',
    },
    support: {
      title: 'QUER APOIAR O V FIEB?',
      text: 'Por se tratar de um evento organizado por instituição pública, o apoio não se dará por meio de repasse financeiro direto, mas sim pelo pagamento de serviço contratado junto ao fornecedor, no valor correspondente à cota de apoio escolhida.',
      gold: 'Apoio Ouro',
      silver: 'Apoio Prata',
      bronze: 'Apoio Bronze',
      cta: 'Quero apoiar',
      benefits: {
        gold: [
          'Inserção da logomarca em posição de destaque em todo o material gráfico e digital do evento (site, redes sociais, banners, folders, crachás e certificados);',
          'Menção institucional como apoiador ouro na abertura e encerramento do evento;',
          'Exibição da logomarca em slides institucionais durante a programação;',
          'Direito à espaço para divulgação institucional em banner ou material promocional e distribuído no credenciamento;',
          'Menções periódicas nas publicações oficiais do evento nas mídias digitais.'
        ],
        silver: [
          'Inserção da logomarca em material gráfico e digital do evento;',
          'Menção institucional como apoiador prata durante a programação oficial;',
          'Divulgação da marca nas redes sociais do evento;',
          'Direito à divulgação de material institucional distribuído no credenciamento.'
        ],
        bronze: [
          'Inserção da logomarca no site oficial e nas peças digitais de divulgação do evento;',
          'Menção institucional como apoiador bronze;',
          'Divulgação pontual da marca nas redes sociais do evento.'
        ]
      }
    },
    footer: {
      contact: 'Contato',
      social: 'Redes Sociais',
      rights: 'Todos os direitos reservados',
    },
    location: {
      title: 'LOCAL DO EVENTO',
      address: 'Av. Jauary Marinho, Via de Acesso ao Setor Sul - UFAM - Coroado, Manaus - AM',
      cta: 'Ver no Google Maps'
    },
    registrations: {
      title: 'INSCRIÇÕES ABERTAS',
      subtitle: 'Primeiro lote disponível com opção apenas para o evento ou evento + 1 Oficina',
      table: {
        category: 'CATEGORIA',
        lot1: 'Lote 1',
        lot2: 'Lote 2',
        lot3: 'Lote 3',
        dates1: '18/03 a 31/03',
        dates2: '01/04 a 15/04',
        dates3: '16/04 a 30/04',
        categories: [
          { name: 'FIEB - Estudante graduação e pós-graduação*', prices: ['R$ 15,00', 'R$ 30,00', 'R$ 45,00'] },
          { name: 'FIEB + 1 OFICINA - Estudante graduação e pós-graduação*', prices: ['R$ 25,00', 'R$ 40,00', 'R$ 55,00'] },
          { name: 'FIEB - Profissionais', prices: ['R$ 40,00', 'R$ 55,00', 'R$ 70,00'] },
          { name: 'FIEB + 1 OFICINA - Profissionais', prices: ['R$ 50,00', 'R$ 65,00', 'R$ 75,00'] },
          { name: 'Servidores SISTEBIB', special: 'Mediante Voucher até 31/03/2026' }
        ]
      },
      info: [
        'Estudantes de graduação e pós-graduação deverão anexar comprovante de matrícula atualizado.',
        'A inscrição é obrigatória para participação no evento e para apresentação de trabalhos científicos.',
        'Pelo menos um autor de trabalho aprovado deve estar inscrito no evento.',
        'As inscrições estão sujeitas ao limite de vagas do auditório do evento.',
        'As oficinas possuem vagas limitadas a 20 participantes por turma. Para garantir a diversidade do público, cada categoria (discentes e profissionais) terá uma reserva de até 20% das vagas.',
        'A organização poderá encerrar as inscrições antecipadamente, caso o número máximo de participantes seja atingido.',
        'Certificados digitais serão emitidos conforme a categoria de inscrição, considerando o credenciamento obrigatório nos dois dias do evento.'
      ],
      cta: 'Quero me inscrever'
    }
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      program: 'Program',
      submissions: 'Submissions',
      partners: 'Supporting Companies',
      useful: 'Useful',
      sub: {
        about: [
          { label: 'Organizing Committee', href: 'https://fieb.net.br/comissao-organizadora/' },
          { label: 'Location', href: 'https://fieb.net.br/local/' },
          { label: 'Contact', href: 'https://fieb.net.br/contato/' },
          { label: 'Previous Editions', href: 'https://fieb.net.br/edicoes-anteriores/' },
        ],
        program: [
          { label: 'View Program', href: 'https://fieb.net.br/programacao/' },
          { label: 'Guest Speakers', href: 'https://fieb.net.br/pessoas-convidadas/' },
          { label: 'Lectures', href: 'https://fieb.net.br/palestras/' },
          { label: 'Thematic Panels', href: 'https://fieb.net.br/paineis-tematicos/' },
          { label: 'Workshops', href: 'https://fieb.net.br/oficinas/' },
        ],
        submissions: [
          { label: 'Call for Submissions', href: 'https://drive.google.com/file/d/1v2J5bXtUY8_kmE7fqea9QGugQ5PCx4-C/view?usp=sharing' },
          { label: 'Author Guidelines', href: 'https://fieb.net.br/diretrizes-para-autores-2026/' },
          { 
            label: 'Templates', 
            isNested: true,
            items: [
              { label: 'Completed Research', href: 'https://submissoes.fieb.net.br/fieb/libraryFiles/downloadPublic/1' },
              { label: 'Ongoing Projects', href: 'https://submissoes.fieb.net.br/fieb/libraryFiles/downloadPublic/1' },
              { label: 'Experience Reports', href: 'https://submissoes.fieb.net.br/fieb/libraryFiles/downloadPublic/2' },
            ]
          },
        ],
        useful: [
          { label: 'Accommodation', href: 'https://fieb.net.br/hospedagem-manaus/' },
          { label: 'Cultural and Leisure Spaces', href: 'https://fieb.net.br/espacos-culturais/' },
          { label: 'Restaurants', href: 'https://fieb.net.br/restaurantes/' },
        ]
      }
    },
    hero: {
      commemorative: '10th Anniversary Commemorative Edition',
      title: 'V Forum of Innovation and Entrepreneurship in Librarianship',
      subtitle: 'Female entrepreneurship in the digital era',
      info: 'May 14 and 15, 2026 • Manaus, Amazonas',
      ctaPrimary: 'Submit work',
      ctaSecondary: 'View program',
    },
    about: {
      title: 'About the Event',
      text1: 'The Forum of Innovation and Entrepreneurship in Librarianship – FIEB is a national scientific and professional event aimed at fostering the production, socialization, and application of innovative knowledge in the field of Librarianship and Information Science, with an emphasis on entrepreneurship, innovation, digital technological advancement, information management, and the creation of informational products and services.',
      text2: '10 years after the first edition in 2016, this edition will be held in the city of Manaus, featuring lectures, workshops, thematic panels, and paper presentations in categories such as completed research, ongoing projects, and experience reports.',
      statParticipants: 'Over 400',
      statYears: '10 Years',
      statLabelParticipants: 'Participants',
      statLabelYears: 'Since 1st Edition',
    },
    program: {
      title: 'PROGRAM',
      subtitle: 'Two days of content, innovation, and networking.',
      day1: 'May 14',
      day2: 'May 15',
      viewActivity: 'View activity',
    },
    speakers: {
      title: 'GUEST SPEAKERS',
      subtitle: 'Experts who are transforming the Librarianship landscape.',
    },
    submit: {
      title: 'SUBMIT YOUR WORK',
      subtitle: 'Share your research and experiences with the community.',
      cta: 'Author Guidelines',
    },
    support: {
      title: 'WANT TO SUPPORT V FIEB?',
      text: 'As an event organized by a public institution, support will not be through direct financial transfer, but rather through the payment of services contracted with suppliers, in the amount corresponding to the chosen support category.',
      gold: 'Gold Support',
      silver: 'Silver Support',
      bronze: 'Bronze Support',
      cta: 'I want to support',
      benefits: {
        gold: [
          'Logo insertion in a prominent position in all graphic and digital material of the event (website, social media, banners, folders, badges, and certificates);',
          'Institutional mention as a gold supporter at the opening and closing of the event;',
          'Logo display on institutional slides during the program;',
          'Right to space for institutional promotion on banners or promotional material distributed at registration;',
          'Periodic mentions in the official publications of the event on digital media.'
        ],
        silver: [
          'Logo insertion in graphic and digital material of the event;',
          'Institutional mention as a silver supporter during the official program;',
          'Brand promotion on the event\'s social media;',
          'Right to promotion of institutional material distributed at registration.'
        ],
        bronze: [
          'Logo insertion on the official website and digital promotional pieces of the event;',
          'Institutional mention as a bronze supporter;',
          'Occasional brand promotion on the event\'s social media.'
        ]
      }
    },
    footer: {
      contact: 'Contact',
      social: 'Social Media',
      rights: 'All rights reserved',
    },
    location: {
      title: 'EVENT LOCATION',
      address: 'Av. Jauary Marinho, Via de Acesso ao St. Sul - Coroado, Manaus - AM',
      cta: 'View on Google Maps'
    },
    registrations: {
      title: 'REGISTRATION OPEN',
      subtitle: 'Secure your spot at the largest innovation and entrepreneurship event in Librarianship.',
      table: {
        category: 'CATEGORY',
        lot1: 'Lot 1',
        lot2: 'Lot 2',
        lot3: 'Lot 3',
        dates1: '03/18 to 03/31',
        dates2: '04/01 to 04/15',
        dates3: '04/16 to 04/30',
        categories: [
          { name: 'FIEB - Undergrad & Graduate Students*', prices: ['$ 3.00', '$ 6.00', '$ 9.00'] },
          { name: 'FIEB + 1 WORKSHOP - Undergrad & Graduate Students*', prices: ['$ 5.00', '$ 8.00', '$ 11.00'] },
          { name: 'FIEB - Professionals', prices: ['$ 8.00', '$ 11.00', '$ 14.00'] },
          { name: 'FIEB + 1 WORKSHOP - Professionals', prices: ['$ 10.00', '$ 13.00', '$ 15.00'] },
          { name: 'FIEB - SISTEBIB Professionals', special: 'By Voucher until 03/31/2026' }
        ]
      },
      info: [
        'Undergraduate and graduate students must attach updated enrollment proof.',
        'Registration is mandatory for participation and for presenting scientific papers.',
        'At least one author of an approved paper must be registered for the event.',
        'Registrations are subject to the auditorium capacity limit.',
        'Workshops have limited spots (20 participants per class). Diversified quotas (20% for each category) will be reserved.',
        'Organizers may close registrations early if the maximum number of participants is reached.',
        'Digital certificates will be issued according to the category, requiring mandatory check-in on both days.'
      ],
      cta: 'Register now'
    }
  },
  es: {
    nav: {
      home: 'Inicio',
      about: 'Sobre',
      program: 'Programa',
      submissions: 'Sumisiones',
      partners: 'Empresas Apoiadoras',
      useful: 'Útiles',
      sub: {
        about: [
          { label: 'Comité Organizador', href: 'https://fieb.net.br/comissao-organadora/' },
          { label: 'Ubicación', href: 'https://fieb.net.br/local/' },
          { label: 'Contacto', href: 'https://fieb.net.br/contato/' },
          { label: 'Ediciones Anteriores', href: 'https://fieb.net.br/edicoes-anteriores/' },
        ],
        program: [
          { label: 'Ver Programa', href: 'https://fieb.net.br/programacao/' },
          { label: 'Personas Invitadas', href: 'https://fieb.net.br/pessoas-convidadas/' },
          { label: 'Conferencias', href: 'https://fieb.net.br/palestras/' },
          { label: 'Paneles Temáticos', href: 'https://fieb.net.br/paineis-tematicos/' },
          { label: 'Talleres', href: 'https://fieb.net.br/oficinas/' },
        ],
        submissions: [
          { label: 'Convocatoria de Sumisión', href: 'https://drive.google.com/file/d/1v2J5bXtUY8_kmE7fqea9QGugQ5PCx4-C/view?usp=sharing' },
          { label: 'Directrices para Autores', href: 'https://fieb.net.br/diretrizes-para-autores-2026/' },
          { 
            label: 'Templates', 
            isNested: true,
            items: [
              { label: 'Investigaciones Concluidas', href: 'https://submissoes.fieb.net.br/fieb/libraryFiles/downloadPublic/1' },
              { label: 'Proyectos en Curso', href: 'https://submissoes.fieb.net.br/fieb/libraryFiles/downloadPublic/1' },
              { label: 'Relatos de Experiencia', href: 'https://submissoes.fieb.net.br/fieb/libraryFiles/downloadPublic/2' },
            ]
          },
        ],
        useful: [
          { label: 'Alojamiento', href: 'https://fieb.net.br/hospedagem-manaus/' },
          { label: 'Espacios Culturales y de Ocio', href: 'https://fieb.net.br/espacos-culturais/' },
          { label: 'Restaurantes', href: 'https://fieb.net.br/restaurantes/' },
        ]
      }
    },
    hero: {
      commemorative: 'Edición Conmemorativa de 10 Años',
      title: 'V Foro de Innovación y Emprendimiento en Bibliotecología',
      subtitle: 'Emprendimiento femenino en la era digital',
      info: '14 y 15 de mayo de 2026 • Manaus, Amazonas',
      ctaPrimary: 'Enviar trabajo',
      ctaSecondary: 'Ver programa',
    },
    about: {
      title: 'Sobre el Evento',
      text1: 'El Foro de Innovación y Emprendimiento en Bibliotecología – FIEB es un evento científico y profesional de alcance nacional que tiene como finalidad fomentar la producción, socialización y aplicación de conocimientos innovadores en el campo de la Bibliotecología y la Ciencia de la Información, con énfasis en emprendimiento, innovación, avance tecnológico digital, gestión de la información y creación de productos y servicios informativos.',
      text2: '10 años después de la primera edición en 2016, la edición se realizará en la ciudad de Manaus, con conferencias, talleres, paneles temáticos, presentaciones de trabajos en las categorías de investigaciones concluidas, proyectos en curso y relatos de experiencia.',
      statParticipants: 'Más de 400',
      statYears: '10 Años',
      statLabelParticipants: 'Participantes',
      statLabelYears: 'Desde la 1ª Edición',
    },
    program: {
      title: 'PROGRAMA',
      subtitle: 'Dos días de contenido, innovación y networking.',
      day1: '14 de mayo',
      day2: '15 de mayo',
      viewActivity: 'Ver actividad',
    },
    speakers: {
      title: 'PERSONAS INVITADAS',
      subtitle: 'Expertos que estão transformando el escenario de la Bibliotecología.',
    },
    submit: {
      title: 'ENVÍE SU TRABAJO',
      subtitle: 'Comparta sus investigaciones y experiencias con la comunidad.',
      cta: 'Directrices para Autores',
    },
    support: {
      title: '¿QUIERES APOYAR EL V FIEB?',
      text: 'Al tratarse de un evento organizado por una institución pública, el apoyo no se dará mediante transferencia financiera directa, sino mediante el pago de servicios contratados con proveedores, por el monto correspondiente a la categoría de apoyo elegida.',
      gold: 'Apoyo Oro',
      silver: 'Apoyo Plata',
      bronze: 'Apoyo Bronce',
      cta: 'Quiero apoyar',
      benefits: {
        gold: [
          'Inserción del logotipo en una posición destacada en todo el material gráfico y digital del evento (sitio web, redes sociales, banners, folletos, credenciales y certificados);',
          'Mención institucional como colaborador oro en la apertura y clausura del evento;',
          'Exhibición del logotipo en diapositivas institucionales durante la programación;',
          'Derecho a espacio para divulgación institucional en banner ou material promocional distribuido en la acreditación;',
          'Menciones periódicas en las publicaciones oficiales del evento en medios digitales.'
        ],
        silver: [
          'Inserción del logotipo en material gráfico e digital del evento;',
          'Mención institucional como colaborador plata durante la programación oficial;',
          'Divulgación de la marca en las redes sociales del evento;',
          'Derecho a la divulgación de material institucional distribuido en la acreditación.'
        ],
        bronze: [
          'Inserción del logotipo en el sitio web oficial y en las piezas digitales de divulgação del evento;',
          'Mención institucional como colaborador bronce;',
          'Divulgación puntual de la marca en las redes sociales del evento.'
        ]
      }
    },
    footer: {
      contact: 'Contacto',
      social: 'Redes Sociales',
      rights: 'Todos los derechos reservados',
    },
    location: {
      title: 'UBICACIÓN DEL EVENTO',
      address: 'Av. Jauary Marinho, Via de Acesso ao St. Sul - Coroado, Manaus - AM',
      cta: 'Ver en Google Maps'
    },
    registrations: {
      title: 'INSCRIPCIONES ABIERTAS',
      subtitle: 'Asegura tu lugar en el mayor evento de innovación y emprendimiento en Bibliotecología.',
      table: {
        category: 'CATEGORÍA',
        lot1: 'Lote 1',
        lot2: 'Lote 2',
        lot3: 'Lote 3',
        dates1: '18/03 al 31/03',
        dates2: '01/04 al 15/04',
        dates3: '16/04 al 30/04',
        categories: [
          { name: 'FIEB - Estudiantes de grado y posgrado*', prices: ['$ 3.00', '$ 6.00', '$ 9.00'] },
          { name: 'FIEB + 1 TALLER - Estudiantes de grado y posgrado*', prices: ['$ 5.00', '$ 8.00', '$ 11.00'] },
          { name: 'FIEB - Profesionales', prices: ['$ 8.00', '$ 11.00', '$ 14.00'] },
          { name: 'FIEB + 1 TALLER - Profesionales', prices: ['$ 10.00', '$ 13.00', '$ 15.00'] },
          { name: 'FIEB - Profesionales del SISTEBIB', special: 'Mediante Voucher hasta 31/03/2026' }
        ]
      },
      info: [
        'Los estudiantes de grado y posgrado deben adjuntar un comprobante de matrícula actualizado.',
        'La inscripción é obligatoria para la participación y presentación de trabajos científicos.',
        'Al menos um autor del trabajo aprobado debe estar inscrito en el evento.',
        'Las inscripciones están sujetas al limite de capacidad del auditorio.',
        'Los talleres tienen plazas limitadas (20 participantes por clase). Se reservará el 20% de las plazas por categoría.',
        'La organización podrá cerrar las inscripciones anticipadamente.',
        'Los certificados digitales se emitirán según la categoría de inscripción.'
      ],
      cta: 'Regístrate ahora'
    }
  }
};

export const PROGRAM_DATA = {
  day1: [
    {
      id: 101,
      type: 'CREDENCIAMENTO',
      activity: 'Credenciamento e Entrega de Materiais',
      date: '14 de maio',
      time: '8h às 9h',
      location: 'HALL DO AUDITÓRIO',
      color: 'amazon-green',
      image: 'https://i.pinimg.com/736x/80/17/98/801798e667ba7ba01784f92719204b34.jpg',
      isGeneral: true
    },
    {
      id: 112,
      type: 'SESSÃO DE ABERTURA',
      activity: 'Sessão de Abertura Oficial + Sessão Cultural',
      date: '14 de maio',
      time: '09:00 - 09:25',
      location: 'AUDITÓRIO SAMAÚMA',
      color: 'beige',
      image: 'https://i.pinimg.com/1200x/a1/c1/11/a1c111fb375cb5f22033724c4e5f718f.jpg',
      isGeneral: true
    },
    {
      id: 1,
      type: 'PALESTRA DE ABERTURA',
      name: 'Aurineide Alves Braga',
      role: 'Palestrante de abertura',
      activity: 'Transformação Digital e Empoderamento Feminino: perspectivas para o futuro',
      date: '14 de maio',
      time: '09:30 - 10:25',
      location: 'AUDITÓRIO SAMAÚMA',
      institution: 'UNIR | Sebrae',
      color: 'amazon-green',
      image: 'assets/aurineide.png',
      lattes: 'http://lattes.cnpq.br/5543348403805200'
    },
    {
      id: 114,
      type: 'DEBATE',
      activity: 'Debate aberto ao público',
      date: '14 de maio',
      time: '10:25 - 10:40',
      location: 'AUDITÓRIO SAMAÚMA',
      color: 'black',
      image: 'https://i.pinimg.com/736x/25/98/25/2598254da77f2f48e9a86c23ecec931b.jpg',
      isGeneral: true
    },
    {
      id: 2,
      type: 'PALESTRA TEMÁTICA',
      name: 'Barbara Santoro Fonseca',
      role: 'Palestrante temática',
      activity: 'Empreendedorismo Feminino na Era Digital: desafios, oportunidades e soluções',
      date: '14 de maio',
      time: '10:40 - 11:45',
      location: 'AUDITÓRIO SAMAÚMA',
      institution: 'Babi Descomplica | UNIRIO',
      color: 'entrepreneur-green',
      image: 'assets/barbara.png',
      lattes: 'https://lattes.cnpq.br/0639685356783805',
      instagram: 'https://www.instagram.com/babidescomplica/'
    },
    {
      id: 115,
      type: 'DEBATE',
      activity: 'Debate aberto ao público',
      date: '14 de maio',
      time: '11:45 - 12:00',
      location: 'AUDITÓRIO SAMAÚMA',
      color: 'black',
      image: 'https://i.pinimg.com/736x/25/98/25/2598254da77f2f48e9a86c23ecec931b.jpg',
      isGeneral: true
    },
    {
      id: 104,
      type: 'INTERVALO',
      activity: 'Intervalo para Almoço',
      date: '14 de maio',
      time: '12:00 - 14:00',
      location: 'HALL',
      color: 'red',
      image: 'https://i.pinimg.com/736x/d7/1c/ba/d71cba205df2a7c5188b6784e2e3173c.jpg',
      isGeneral: true
    },
    {
      id: 3,
      type: 'PAINEL 1',
      name: 'Katty Anne de Souza Nunes',
      role: 'PAINELISTA',
      activity: 'Gestão Estratégica e Liderança Feminina',
      description: 'Discussão sobre os desafios e estratégias para a liderança feminina eficaz, focando em como desenvolver equipes produtivas, gerir talentos e fomentar um ambiente organizacional inovador e inclusivo. Reflexão sobre competências e habilidades fundamentais para lideranças femininas em negócios digitais.',
      date: '14 de maio',
      time: '14:00 - 14:50',
      location: 'AUDITÓRIO SAMAÚMA',
      institution: 'SES-AM | Kuau',
      color: 'black',
      image: 'assets/katty.png',
      lattes: 'https://lattes.cnpq.br/6383772134055820',
      instagram: 'https://www.instagram.com/kattyannesnunes/'
    },
    {
      id: 4,
      type: 'PAINEL 1',
      name: 'Maria do Perpétuo Socorro de Lima Verde Coelho',
      role: 'Painelista',
      activity: 'Gestão Estratégica e Liderança Feminina',
      description: 'Discussão sobre os desafios e estratégias para a liderança feminina eficaz, focando em como desenvolver equipes produtivas, gerir talentos e fomentar um ambiente organizacional inovador e inclusivo. Reflexão sobre competências e habilidades fundamentais para lideranças femininas em negócios digitais.',
      date: '14 de maio',
      time: '14:00 - 14:50',
      location: 'AUDITÓRIO SAMAÚMA',
      institution: 'UFAM',
      color: 'black',
      image: 'assets/maria.png',
      lattes: 'https://lattes.cnpq.br/1563308088505877'
    },
    {
      id: 5,
      type: 'PAINEL 1',
      name: 'Inara Regina Batista da Costa',
      role: 'Mediadora',
      activity: 'Gestão Estratégica e Liderança Feminina',
      description: 'Discussão sobre os desafios e estratégias para a liderança feminina eficaz, focando em como desenvolver equipes produtivas, gerir talentos e fomentar um ambiente organizacional inovador e inclusivo. Reflexão sobre competências e habilidades fundamentais para lideranças femininas em negócios digitais.',
      date: '14 de maio',
      time: '14:00 - 14:50',
      location: 'AUDITÓRIO SAMAÚMA',
      institution: 'UFAM | Lab. Conexão | Elas na Ciência',
      color: 'black',
      image: 'assets/inara.png',
      lattes: 'https://lattes.cnpq.br/1687285959561295'
    },
    {
      id: 116,
      type: 'DEBATE',
      activity: 'Debate aberto ao público',
      date: '14 de maio',
      time: '14:50 - 15:10',
      location: 'AUDITÓRIO SAMAÚMA',
      color: 'black',
      image: 'https://i.pinimg.com/736x/25/98/25/2598254da77f2f48e9a86c23ecec931b.jpg',
      isGeneral: true
    },
    {
      id: 105,
      type: 'INTERVALO',
      activity: 'Intervalo',
      date: '14 de maio',
      time: '15:10 - 15:25',
      location: 'HALL',
      color: 'energy-orange',
      image: 'https://i.pinimg.com/474x/b6/fe/46/b6fe46a7f5bef0faa589f79d9e70092d.jpg',
      isGeneral: true
    },
    {
      id: 6,
      type: 'PAINEL 2',
      name: 'Kamilla Pereira Silva',
      role: 'Painelista',
      activity: 'Marketing Digital e Prospecção de Clientes',
      description: 'Análise das estratégias de marketing digital essenciais para o sucesso e crescimento dos negócios geridos por mulheres. Abordagem sobre como identificar e conquistar novos clientes através de ferramentas digitais, branding e relacionamento com o consumidor.',
      date: '14 de maio',
      time: '15:30 - 16:20',
      location: 'AUDITÓRIO SAMAÚMA',
      institution: 'SISTEBIB/UFAM',
      color: 'blue',
      image: 'assets/kamilla.png',
      lattes: 'https://lattes.cnpq.br/2259147062922449',
      instagram: 'https://www.instagram.com/kamillaps._/'
    },
    {
      id: 7,
      type: 'PAINEL 2',
      name: 'Thalita Oliveira da Silva Gama',
      role: 'Painelista',
      activity: 'Marketing Digital e Prospecção de Clientes',
      description: 'Análise das estratégias de marketing digital essenciais para o sucesso e crescimento dos negócios geridos por mulheres. Abordagem sobre como identificar e conquistar novos clientes através de ferramentas digitais, branding e relacionamento com o consumidor.',
      date: '14 de maio',
      time: '15:30 - 16:20',
      location: 'AUDITÓRIO SAMAÚMA',
      institution: 'UNIRIO | Santa Biblioteconomia',
      color: 'blue',
      image: 'assets/thalita.png',
      lattes: 'https://buscatextual.cnpq.br/buscatextual/visualizacv.do?id=K4364806Z5',
      instagram: 'https://www.instagram.com/santabiblioteconomia/'
    },
    {
      id: 8,
      type: 'PAINEL 2',
      name: 'Rosângela Fernandes Bentes',
      role: 'Painelista',
      activity: 'Marketing Digital e Prospecção de Clientes',
      description: 'Análise das estratégias de marketing digital essenciais para o sucesso e crescimento dos negócios geridos por mulheres. Abordagem sobre como identificar e conquistar novos clientes através de ferramentas digitais, branding e relacionamento com o consumidor.',
      date: '14 de maio',
      time: '15:30 - 16:20',
      location: 'AUDITÓRIO SAMAÚMA',
      institution: 'Nilton Lins | Instituto Terroá',
      color: 'blue',
      image: 'assets/rosangela.png',
      lattes: 'https://lattes.cnpq.br/0627116879721555'
    },
    {
      id: 9,
      type: 'PAINEL 2',
      name: 'Amanda C. O. Mota Flores',
      role: 'Mediadora',
      activity: 'Marketing Digital e Prospecção de Clientes',
      description: 'Análise das estratégias de marketing digital essenciais para o sucesso e crescimento dos negócios geridos por mulheres. Abordagem sobre como identificar e conquistar novos clientes através de ferramentas digitais, branding e relacionamento com o consumidor.',
      date: '14 de maio',
      time: '15:30 - 16:20',
      location: 'AUDITÓRIO SAMAÚMA',
      institution: 'UFAM | UEA | Samsung Ocean',
      color: 'blue',
      image: 'assets/amanda.png',
      lattes: 'https://buscatextual.cnpq.br/buscatextual/visualizacv.do?id=K4758990E5'
    },
    {
      id: 106,
      type: 'DEBATE',
      activity: 'Debate aberto ao público',
      date: '14 de maio',
      time: '16:20 - 16:40',
      location: 'AUDITÓRIO SAMAÚMA',
      color: 'black',
      image: 'https://i.pinimg.com/736x/25/98/25/2598254da77f2f48e9a86c23ecec931b.jpg',
      isGeneral: true
    },
    {
      id: 107,
      type: 'ENCERRAMENTO',
      activity: 'Encerramento do primeiro dia do FIEB',
      date: '14 de maio',
      time: '16:45 - 17:00',
      location: 'AUDITÓRIO SAMAÚMA',
      color: 'red',
      image: 'https://i.pinimg.com/736x/4f/da/ab/4fdaab760389c407ea507b44f62d27cf.jpg',
      isGeneral: true
    }
  ],
  day2: [
    {
      id: 10,
      type: 'OFICINA',
      name: 'Jorge Cativo',
      activity: 'Inteligência Artificial na gestão de redes sociais para empreendedores',
      date: '15 de maio',
      time: '08:00 - 10:00',
      location: 'LAB. MULTIMÍDIA',
      institution: 'INPA | Biblioteconomia Digital',
      color: 'energy-orange',
      image: 'assets/cativo.png',
      lattes: 'https://lattes.cnpq.br/0614227155680254',
      instagram: 'https://www.instagram.com/biblioteconomiadigital/',
      registrationUrl: 'https://tally.so/r/LZGy81',
      upcomingRegistration: true
    },
    {
      id: 11,
      type: 'OFICINA',
      name: 'Suzane Lima',
      activity: 'Empreendedorismo digital para profissionais da informação',
      description: 'Primeiros passos para montar o seu próprio negócio na Biblioteconomia - Ela compartilharia da experiência dela desde a criação do blog que ela fez até o processo de construção do curso e da plataforma dela. Um passo a passo mesmo: criar conteúdo, plataformizar, captação e fidelização de clientes, marketing nas redes sociais e nos grupos de mensagens, construção da marca, etc. Consultoria profissional, Criando e vendendo infoprodutos, Ser autônomo.',
      date: '15 de maio',
      time: '08:00 - 10:00',
      location: 'LAB. MULTIMÍDIA',
      institution: 'IBGE',
      color: 'energy-orange',
      image: 'assets/suzane.png',
      workshopImage: 'https://i.pinimg.com/1200x/7e/19/a6/7e19a628f1e676b3f869aba57e95919c.jpg',
      lattes: 'https://lattes.cnpq.br/8812674350684147',
      instagram: 'https://www.instagram.com/suzanelimaprof/',
      registrationUrl: 'https://tally.so/r/LZGy81',
      upcomingRegistration: true
    },
    {
      id: 108,
      type: 'MESA COLABORATIVA',
      activity: 'Resumo Expandido: Pesquisa Concluída e Projeto em Andamento',
      date: '15 de maio',
      time: '10:20 - 11:20',
      location: 'AUDITÓRIO SAMAÚMA',
      color: 'energy-orange',
      image: 'https://i.pinimg.com/736x/79/15/22/7915229cb87368de2abd7990755f009b.jpg',
      isGeneral: true
    },
    {
      id: 113,
      type: 'RELATOS DE EXPERIÊNCIA',
      activity: 'Apresentação dos relatos em vídeo do V FIEB',
      date: '15 de maio',
      time: '09:30 - 11:30',
      location: 'CANAL DO YOUTUBE / AUDITÓRIO SAMAÚMA',
      color: 'blue',
      image: 'https://i.pinimg.com/736x/dd/6c/9f/dd6c9f82c82a0a38ee7811fcd6c32131.jpg',
      isGeneral: true
    },
    {
      id: 110,
      type: 'ENCERRAMENTO',
      activity: 'Encerramento, anúncio da próxima edição do FIEB e sorteios.',
      date: '15 de maio',
      time: '11:30',
      location: 'AUDITÓRIO SAMAÚMA',
      color: 'red',
      image: 'https://i.pinimg.com/736x/4f/da/ab/4fdaab760389c407ea507b44f62d27cf.jpg',
      isGeneral: true
    },
    {
      id: 111,
      type: 'INTERVALO',
      activity: 'Intervalo para Almoço',
      date: '15 de maio',
      time: '12:00 - 14:00',
      location: 'HALL',
      color: 'red',
      image: 'https://i.pinimg.com/736x/d7/1c/ba/d71cba205df2a7c5188b6784e2e3173c.jpg',
      isGeneral: true
    },
    {
      id: 117,
      type: 'TRANSLADO',
      activity: 'Translado para a Visita Técnica',
      date: '15 de maio',
      time: '14:00 - 14:30',
      location: 'ESTACIONAMENTO',
      color: 'amazon-green',
      image: 'https://i.pinimg.com/736x/bf/fc/03/bffc03704fb7b87808f9241cfaf23a51.jpg',
      isGeneral: true
    },
    {
      id: 112,
      type: 'VISITA TÉCNICA',
      activity: 'Visitas Técnicas em instituições parceiras',
      date: '15 de maio',
      time: '14:30 - 18:00',
      location: 'INSTITUIÇÕES PARCEIRAS',
      color: 'amazon-green',
      image: 'https://i.pinimg.com/736x/84/f4/89/84f489d21f34f37d5b7d44b118c6ff8f.jpg',
      isGeneral: true,
      upcomingRegistration: true
    }
  ]
};
