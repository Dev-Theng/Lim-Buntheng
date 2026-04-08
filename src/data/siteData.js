export const siteData = {
  profile: {
    name: 'Lim BunTheng',
    title: 'IT Engineering Student',
    phone: '081710040',
    location: 'Phnom Penh, Cambodia',
    email: 'limbuntheng.dev@gmail.com',
    university: 'Royal University of Phnom Penh (RUPP)',
    aboutIntro:
      'I am Lim BunTheng, an IT Engineering student at the Royal University of Phnom Penh (RUPP). I am passionate about technology, research, and communication.',
    aboutLead:
      'I am Lim BunTheng, an IT Engineering student at the Royal University of Phnom Penh (RUPP).',
    aboutBody:
      'I am passionate about technology, research, and communication. I have experience working as an IT Projectionist and volunteering in educational and university environments.',
  },
  heroTypedItems: ['IT Engineering Student'],
  socialLinks: [
    { href: 'https://github.com/Dev-Theng', class: 'twitter', icon: 'bi bi-github', label: 'GitHub' },
    { href: 'https://www.facebook.com/lim.buntheng.35', class: 'facebook', icon: 'bi bi-facebook', label: 'Facebook' },
    { href: 'https://t.me/b0theng', class: 'telegram', icon: 'bi bi-telegram', label: 'Telegram' },
    { href: 'https://youtube.com/@ite-theng?si=qr1Tx42CmfFmWoyq', class: 'google-plus', icon: 'bi bi-youtube', label: 'YouTube' },
    { href: 'https://www.linkedin.com/in/lim-buntheng-88591738b/', class: 'linkedin', icon: 'bi bi-linkedin', label: 'LinkedIn' },
  ],
  navItems: [
    { label: 'Home', path: '/', hash: '#hero', icon: 'bi bi-house' },
    { label: 'About', path: '/', hash: '#about', icon: 'bi bi-person' },
    { label: 'Resume', path: '/', hash: '#resume', icon: 'bi bi-file-earmark-text' },
    { label: 'Portfolio', path: '/', hash: '#portfolio', icon: 'bi bi-images' },
    { label: 'Services', path: '/', hash: '#services', icon: 'bi bi-hdd-stack' },
    { label: 'Contact', path: '/', hash: '#contact', icon: 'bi bi-envelope' },
  ],
  stats: [
    {
      icon: 'bi bi-emoji-smile',
      end: 2,
      title: 'Happy Clients',
      subtitle: 'consequuntur quae',
    },
    {
      icon: 'bi bi-journal-richtext',
      end: 5,
      title: 'Projects',
      subtitle: 'adipisci atque cum quia aut',
    },
    {
      icon: 'bi bi-headset',
      end: 1453,
      title: 'Hours Of Support',
      subtitle: 'aut commodi quaerat',
    },
    {
      icon: 'bi bi-people',
      end: 3,
      title: 'Hard Workers',
      subtitle: 'rerum asperiores dolor',
    },
  ],
  skills: [
    { name: 'Communication', level: 90, label: 'Advanced' },
    { name: 'Research', level: 90, label: 'Advanced' },
    { name: 'Problem Solving', level: 85, label: 'Advanced' },
    { name: 'Teamwork', level: 95, label: 'Advanced' },
    { name: 'Adaptability', level: 80, label: 'Advanced' },
    { name: 'Time Management', level: 75, label: 'Intermediate' },
  ],
  resume: {
    summary: {
      name: 'Lim BunTheng',
      intro:
        'IT Engineering student at Royal University of Phnom Penh (RUPP), passionate about technology, research, and communication.',
      location: 'Phnom Penh, Cambodia',
      phone: '081710040',
      email: 'limbuntheng.dev@gmail.com',
    },
    education: [
      {
        title: "Bachelor's Degree of Engineering in Information Technology",
        date: 'Mar 2023 - Present',
        org: 'Royal University of Phnom Penh (RUPP)',
      },
      {
        title: 'Full Stack Web Development Course',
        date: 'June 2025 - Present',
        org: 'ANT Technology Center',
      }
    ],
    languages: [{ name: 'English - Intermediate' }],
    experience: [
      { title: 'Digital Government Forum (DGF)', date: '05-07 Dec 2025', org: 'Ministry of Posts and Telecommunications' },
      { title: 'IT Projectionist', date: 'Jan 2025 - Jun 2025', org: 'Legend Cinema' },
      { title: 'Volunteer', date: 'Jun 2024', org: 'Duraseksa' },
      { title: 'Volunteer', date: 'Oct 2024', org: 'Royal University of Phnom Penh (RUPP)' },
      { title: 'Volunteer', date: 'Dec 2023', org: 'Royal University of Phnom Penh (RUPP)' },
      { title: 'Online Staff', date: 'Jan 2023 - Jan 2024', org: 'Magnetic Smart Phone' },
    ],
  },
  portfolioFilters: [
    { label: 'All', filter: '*', active: true },
    { label: 'Website', filter: '.filter-web' },
    { label: 'Mobile App', filter: '.filter-app' },
    { label: 'Machine Learning', filter: '.filter-ml' },
  ],
  portfolioItems: [
    {
      slug: 'volunteer',
      filter: 'filter-web',
      image: '/assets/img/portfolio/volunteer.png',
      title: 'Volunteer',
      description: 'Volunteer website showcasing activities, events, and community impact.',
      gallery: 'portfolio-gallery-app',
      details: '/portfolio/volunteer',
      detailsData: {
        slides: [
          { image: '/assets/img/portfolio/volunteer.png', alt: 'Volunteer project slide 1' },
          { image: '/assets/img/portfolio/volunteer.png', alt: 'Volunteer project slide 2' },
        ],
        infoItems: [
          { label: 'Category', value: 'Website' },
          { label: 'Role', value: 'Frontend and UI' },
          { label: 'Project date', value: '2025' },
          { label: 'Project URL', value: 'https://g9-volunteer.netlify.app/' },
        ],
        descriptionTitle: 'Volunteer website',
        descriptionText:
          'A responsive site to share volunteer activities, upcoming events, and community impact. The focus was a clear structure, fast navigation, and simple content updates.',
      },
    },
    {
      slug: 'ant-e-report',
      filter: 'filter-web',
      image: '/assets/img/portfolio/ANT-E_report.png',
      title: 'ANT-E Report',
      description: 'A reporting tool that summarizes key findings with charts and structured sections.',
      gallery: 'portfolio-gallery-app',
      details: '/portfolio/ant-e-report',
      detailsData: {
        slides: [
          { image: '/assets/img/portfolio/ANT-E_report.png', alt: 'ANT-E Report slide 1' },
          { image: '/assets/img/portfolio/ANT-E_report.png', alt: 'ANT-E Report slide 2' },
        ],
        infoItems: [
          { label: 'Category', value: 'Web App' },
          { label: 'Role', value: 'Frontend and data visualization' },
          { label: 'Project date', value: '2026' },
          { label: 'Project URL', value: 'https://ant-e-feedback-client.vercel.app/' },
        ],
        descriptionTitle: 'ANT-E Report dashboard',
        descriptionText:
          'A reporting interface that turns raw data into readable summaries with charts, highlights, and clear sections. Designed for quick review and export.',
      },
    },
    {
      slug: 'speed-limit-detection',
      filter: 'filter-ml',
      image: '/assets/img/portfolio/Speed-limit.png',
      title: 'Speed Limit Detection System',
      description: 'A computer-vision system that detects speed-limit signs in real time for safer driving.',
      gallery: 'portfolio-gallery-branding',
      details: '/portfolio/speed-limit-detection',
      detailsData: {
        slides: [
          { image: '/assets/img/portfolio/Speed-limit.png', alt: 'Speed limit detection slide 1' },
          { image: '/assets/img/portfolio/Speed-limit.png', alt: 'Speed limit detection slide 2' },
        ],
        infoItems: [
          { label: 'Category', value: 'Machine Learning' },
          { label: 'Role', value: 'Model training and evaluation' },
          { label: 'Project date', value: '2025' },
          { label: 'Project URL', value: 'Private' },
        ],
        descriptionTitle: 'Speed limit detection system',
        descriptionText:
          'A computer-vision project that detects speed-limit signs from video frames. Built to improve road safety by identifying posted limits in real time.',
      },
    },
    {
      slug: 'Jersey Sports',
      filter: 'filter-app',
      image: '/assets/img/portfolio/Flutter.png',
      title: 'Jersey Sports',
      description: 'A mobile app for sports enthusiasts to discover and connect with local teams and events.',
      gallery: 'portfolio-gallery-app',
      details: '/portfolio/jersey-sports',
      detailsData: {
        slides: [{ image: '/assets/img/portfolio/jersey-sports.jpg', alt: 'Jersey Sports slide 1' }],
        infoItems: [
          { label: 'Category', value: 'App' },
          { label: 'Role', value: 'UI and layout' },
          { label: 'Project date', value: '2023' },
        ],
        descriptionTitle: 'Jersey Sports app concept',
        descriptionText:
          'A clean layout concept for showcasing book collections with featured highlights and simple navigation.',
      },
    },
  ],
  services: [
    {
      icon: 'bi bi-code-slash',
      title: 'Front End',
      description: 'Building responsive and user-friendly interfaces for web applications.',
      link: '/service-details',
    },
    {
      icon: 'bi bi-server',
      title: 'Back End',
      description: 'Developing server-side logic, APIs, and application functionality.',
      link: '/service-details',
    },
    {
      icon: 'bi bi-database',
      title: 'Database',
      description: 'Designing and managing structured data for reliable performance.',
      link: '/service-details',
    },
    {
      icon: 'bi bi-cpu',
      title: 'Machine Learning',
      description: 'Exploring data-driven models and intelligent problem-solving techniques.',
      link: '/service-details',
    },
    {
      icon: 'bi bi-phone',
      title: 'App Developer',
      description: 'Creating mobile and web app solutions focused on usability and performance.',
      link: '/service-details',
    },
    {
      icon: 'bi bi-check2-circle',
      title: 'QA',
      description: 'Testing and validating software quality to ensure stable, reliable releases.',
      link: '/service-details',
    },
  ],
  testimonials: [
    {
      text:
        'BunTheng is responsible and quick to solve technical issues during cinema operations. He stays calm under pressure and supports the team effectively.',
      image: '/assets/img/testimonials/testimonials-1.jpg',
      name: 'Legend Cinema Team',
      role: 'IT Projection Department',
    },
    {
      text:
        'He communicates clearly and works well with learners and staff. His attitude is respectful, helpful, and focused on continuous improvement.',
      image: '/assets/img/testimonials/testimonials-2.jpg',
      name: 'Duraseksa Coordinator',
      role: 'Volunteer Program',
    },
    {
      text:
        'During university activities, BunTheng showed strong teamwork and reliability. He completes tasks on time and supports event operations smoothly.',
      image: '/assets/img/testimonials/testimonials-3.jpg',
      name: 'RUPP Event Organizer',
      role: 'University Volunteer Activity',
    },
    {
      text:
        'He has a strong learning mindset in research and technology. His questions are thoughtful and his problem-solving approach is practical.',
      image: '/assets/img/testimonials/testimonials-4.jpg',
      name: 'Academic Mentor',
      role: 'Information Technology Program',
    },
    {
      text:
        'BunTheng contributes positively in group projects. He tests carefully, communicates updates, and helps improve overall project quality.',
      image: '/assets/img/testimonials/testimonials-5.jpg',
      name: 'Project Teammate',
      role: 'Student Collaboration',
    },
  ],
  contactItems: [
    { icon: 'bi bi-geo-alt', title: 'Location', value: 'Phnom Penh, Cambodia' },
    { icon: 'bi bi-telephone', title: 'Phone', value: '081710040' },
    { icon: 'bi bi-envelope', title: 'Email', value: 'limbuntheng.dev@gmail.com' },
  ],
  contactForm: {
    endpoint: 'https://formspree.io/f/xzdkwjdj',
  },
  swiperConfig: {
    loop: true,
    speed: 600,
    autoplay: {
      delay: 5000,
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 40,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 1,
      },
    },
  },
  portfolioDetails: {
    title: 'Portfolio Details',
    breadcrumbs: [
      { label: 'Home', href: '/', current: false },
      { label: 'Portfolio Details', current: true },
    ],
    swiperConfig: {
      loop: true,
      speed: 600,
      autoplay: {
        delay: 5000,
      },
      slidesPerView: 'auto',
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
      },
    },
    slides: [
      { image: '/assets/img/portfolio/app-1.jpg', alt: 'Portfolio slide 1' },
      { image: '/assets/img/portfolio/product-1.jpg', alt: 'Portfolio slide 2' },
      { image: '/assets/img/portfolio/branding-1.jpg', alt: 'Portfolio slide 3' },
      { image: '/assets/img/portfolio/books-1.jpg', alt: 'Portfolio slide 4' },
    ],
    infoItems: [
      { label: 'Category', value: 'Web design' },
      { label: 'Client', value: 'ASU Company' },
      { label: 'Project date', value: '01 March, 2020' },
      {
        label: 'Project URL',
        value: 'www.example.com',
        href: '#',
      },
    ],
    descriptionTitle: 'Exercitationem repudiandae officiis neque suscipit',
    descriptionText:
      'Autem ipsum nam porro corporis rerum. Quis eos dolorem eos itaque inventore commodi labore quia quia. Exercitationem repudiandae officiis neque suscipit non officia eaque itaque enim. Voluptatem officia accusantium nesciunt est omnis tempora consectetur dignissimos. Sequi nulla at esse enim cum deserunt eius.',
  },
  serviceDetails: {
    title: 'Service Details',
    breadcrumbs: [
      { label: 'Home', href: '/', current: false },
      { label: 'Service Details', current: true },
    ],
    servicesList: [
      { label: 'Web Design', active: true },
      { label: 'Software Development' },
      { label: 'Product Management' },
      { label: 'Graphic Design' },
      { label: 'Marketing' },
    ],
    introTitle: 'Enim qui eos rerum in delectus',
    introText:
      'Nam voluptatem quasi numquam quas fugiat ex temporibus quo est. Quia aut quam quod facere ut non occaecati ut aut. Nesciunt mollitia illum tempore corrupti sed eum reiciendis. Maxime modi rerum.',
    heroImage: '/assets/img/services.jpg',
    heroTitle:
      'Temporibus et in vero dicta aut eius lidero plastis trand lined voluptas dolorem ut voluptas',
    heroParagraphs: [
      'Blanditiis voluptate odit ex error ea sed officiis deserunt. Cupiditate non consequatur et doloremque consequuntur. Accusantium labore reprehenderit error temporibus saepe perferendis fuga doloribus vero. Qui omnis quo sit. Dolorem architecto eum et quos deleniti officia qui.',
      'Est reprehenderit voluptatem necessitatibus asperiores neque sed ea illo. Deleniti quam sequi optio iste veniam repellat odit. Aut pariatur itaque nesciunt fuga.',
      'Sunt rem odit accusantium omnis perspiciatis officia. Laboriosam aut consequuntur recusandae mollitia doloremque est architecto cupiditate ullam. Quia est ut occaecati fuga. Distinctio ex repellendus eveniet velit sint quia sapiente cumque. Et ipsa perferendis ut nihil. Laboriosam vel voluptates tenetur nostrum. Eaque iusto cupiditate et totam et quia dolorum in. Sunt molestiae ipsum at consequatur vero. Architecto ut pariatur autem ad non cumque nesciunt qui maxime. Sunt eum quia impedit dolore alias explicabo ea.',
    ],
    heroList: [
      'Aut eum totam accusantium voluptatem.',
      'Assumenda et porro nisi nihil nesciunt voluptatibus.',
      'Ullamco laboris nisi ut aliquip ex ea',
    ],
  },
  starterPage: {
    title: 'Starter Page',
    breadcrumbs: [
      { label: 'Home', href: '/', current: false },
      { label: 'Starter Page', current: true },
    ],
    sectionTitle: 'Starter Section',
    sectionLead: 'Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit',
    sectionBody: 'Use this page as a starter for your own custom pages.',
  },
};
