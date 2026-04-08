(() => {
  const { createApp } = Vue;

  createApp({
    data() {
      return {
        year: new Date().getFullYear(),
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
          { href: '#', class: 'twitter', icon: 'bi bi-github', label: 'GitHub' },
          { href: '#', class: 'facebook', icon: 'bi bi-facebook', label: 'Facebook' },
          { href: '#', class: 'instagram', icon: 'bi bi-telegram', label: 'Telegram' },
          { href: '#', class: 'google-plus', icon: 'bi bi-youtube', label: 'YouTube' },
          { href: '#', class: 'linkedin', icon: 'bi bi-linkedin', label: 'LinkedIn' },
        ],
        navItems: [
          { href: '#hero', icon: 'bi bi-house', label: 'Home', active: true },
          { href: '#about', icon: 'bi bi-person', label: 'About' },
          { href: '#resume', icon: 'bi bi-file-earmark-text', label: 'Resume' },
          { href: '#portfolio', icon: 'bi bi-images', label: 'Portfolio' },
          { href: '#services', icon: 'bi bi-hdd-stack', label: 'Services' },
          { href: '#contact', icon: 'bi bi-envelope', label: 'Contact' },
        ],
        stats: [
          {
            icon: 'bi bi-emoji-smile',
            end: 232,
            title: 'Happy Clients',
            subtitle: 'consequuntur quae',
          },
          {
            icon: 'bi bi-journal-richtext',
            end: 521,
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
            end: 32,
            title: 'Hard Workers',
            subtitle: 'rerum asperiores dolor',
          },
        ],
        skills: [
          { name: 'Communication', level: 90, label: 'Advanced' },
          { name: 'Research', level: 90, label: 'Advanced' },
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
          ],
          languages: [{ name: 'English - Intermediate' }],
          experience: [
            { title: 'IT Projectionist', date: 'Jan 2025 - Jun 2025', org: 'Legend Cinema' },
            { title: 'Volunteer', date: 'Jun 2024 - Present', org: 'Duraseksa' },
            { title: 'Volunteer', date: 'Oct 2024', org: 'Royal University of Phnom Penh (RUPP)' },
            { title: 'Volunteer', date: 'Dec 2023', org: 'Royal University of Phnom Penh (RUPP)' },
            { title: 'Online Staff', date: 'Jan 2023 - Jan 2024', org: 'Magnetic Smart Phone' },
          ],
        },
        portfolioFilters: [
          { label: 'All', filter: '*', active: true },
          { label: 'Website', filter: '.filter-app' },
          { label: 'System', filter: '.filter-product' },
          { label: 'Machine Learning', filter: '.filter-branding' },
        ],
        portfolioItems: [
          {
            filter: 'filter-app',
            image: 'assets/img/portfolio/volunteer.png',
            title: 'Volunteer',
            description: 'Volunteer website showcasing activities, events, and community impact.',
            gallery: 'portfolio-gallery-app',
            details: 'portfolio-details.html',
          },
          {
            filter: 'filter-product',
            image: 'assets/img/portfolio/product-1.jpg',
            title: 'Employee Management System',
            description: 'Lorem ipsum, dolor sit amet consectetur',
            gallery: 'portfolio-gallery-product',
            details: 'portfolio-details.html',
          },
          {
            filter: 'filter-branding',
            image: 'assets/img/portfolio/branding-1.jpg',
            title: 'Machine Learning 1',
            description: 'Lorem ipsum, dolor sit amet consectetur',
            gallery: 'portfolio-gallery-branding',
            details: 'portfolio-details.html',
          },
          {
            filter: 'filter-books',
            image: 'assets/img/portfolio/books-1.jpg',
            title: 'Books 1',
            description: 'Lorem ipsum, dolor sit amet consectetur',
            gallery: 'portfolio-gallery-book',
            details: 'portfolio-details.html',
          },
          {
            filter: 'filter-app',
            image: 'assets/img/portfolio/app-2.jpg',
            title: 'App 2',
            description: 'Lorem ipsum, dolor sit amet consectetur',
            gallery: 'portfolio-gallery-app',
            details: 'portfolio-details.html',
          },
          {
            filter: 'filter-product',
            image: 'assets/img/portfolio/product-2.jpg',
            title: 'Product 2',
            description: 'Lorem ipsum, dolor sit amet consectetur',
            gallery: 'portfolio-gallery-product',
            details: 'portfolio-details.html',
          },
          {
            filter: 'filter-branding',
            image: 'assets/img/portfolio/branding-2.jpg',
            title: 'Branding 2',
            description: 'Lorem ipsum, dolor sit amet consectetur',
            gallery: 'portfolio-gallery-branding',
            details: 'portfolio-details.html',
          },
          {
            filter: 'filter-books',
            image: 'assets/img/portfolio/books-2.jpg',
            title: 'Books 2',
            description: 'Lorem ipsum, dolor sit amet consectetur',
            gallery: 'portfolio-gallery-book',
            details: 'portfolio-details.html',
          },
          {
            filter: 'filter-app',
            image: 'assets/img/portfolio/app-3.jpg',
            title: 'App 3',
            description: 'Lorem ipsum, dolor sit amet consectetur',
            gallery: 'portfolio-gallery-app',
            details: 'portfolio-details.html',
          },
          {
            filter: 'filter-product',
            image: 'assets/img/portfolio/product-3.jpg',
            title: 'Product 3',
            description: 'Lorem ipsum, dolor sit amet consectetur',
            gallery: 'portfolio-gallery-product',
            details: 'portfolio-details.html',
          },
          {
            filter: 'filter-branding',
            image: 'assets/img/portfolio/branding-3.jpg',
            title: 'Branding 3',
            description: 'Lorem ipsum, dolor sit amet consectetur',
            gallery: 'portfolio-gallery-branding',
            details: 'portfolio-details.html',
          },
        ],
        services: [
          {
            icon: 'bi bi-code-slash',
            title: 'Front End',
            description: 'Building responsive and user-friendly interfaces for web applications.',
            link: 'service-details.html',
          },
          {
            icon: 'bi bi-server',
            title: 'Back End',
            description: 'Developing server-side logic, APIs, and application functionality.',
            link: 'service-details.html',
          },
          {
            icon: 'bi bi-database',
            title: 'Database',
            description: 'Designing and managing structured data for reliable performance.',
            link: 'service-details.html',
          },
          {
            icon: 'bi bi-cpu',
            title: 'Machine Learning',
            description: 'Exploring data-driven models and intelligent problem-solving techniques.',
            link: 'service-details.html',
          },
          {
            icon: 'bi bi-phone',
            title: 'App Developer',
            description: 'Creating mobile and web app solutions focused on usability and performance.',
            link: 'service-details.html',
          },
          {
            icon: 'bi bi-check2-circle',
            title: 'QA',
            description: 'Testing and validating software quality to ensure stable, reliable releases.',
            link: 'service-details.html',
          },
        ],
        testimonials: [
          {
            text:
              'BunTheng is responsible and quick to solve technical issues during cinema operations. He stays calm under pressure and supports the team effectively.',
            image: 'assets/img/testimonials/testimonials-1.jpg',
            name: 'Legend Cinema Team',
            role: 'IT Projection Department',
          },
          {
            text:
              'He communicates clearly and works well with learners and staff. His attitude is respectful, helpful, and focused on continuous improvement.',
            image: 'assets/img/testimonials/testimonials-2.jpg',
            name: 'Duraseksa Coordinator',
            role: 'Volunteer Program',
          },
          {
            text:
              'During university activities, BunTheng showed strong teamwork and reliability. He completes tasks on time and supports event operations smoothly.',
            image: 'assets/img/testimonials/testimonials-3.jpg',
            name: 'RUPP Event Organizer',
            role: 'University Volunteer Activity',
          },
          {
            text:
              'He has a strong learning mindset in research and technology. His questions are thoughtful and his problem-solving approach is practical.',
            image: 'assets/img/testimonials/testimonials-4.jpg',
            name: 'Academic Mentor',
            role: 'Information Technology Program',
          },
          {
            text:
              'BunTheng contributes positively in group projects. He tests carefully, communicates updates, and helps improve overall project quality.',
            image: 'assets/img/testimonials/testimonials-5.jpg',
            name: 'Project Teammate',
            role: 'Student Collaboration',
          },
        ],
        contactItems: [
          { icon: 'bi bi-geo-alt', title: 'Location', value: 'Phnom Penh, Cambodia' },
          { icon: 'bi bi-telephone', title: 'Phone', value: '081710040' },
          { icon: 'bi bi-envelope', title: 'Email', value: 'limbuntheng.dev@gmail.com' },
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
            { label: 'Home', href: 'index.html' },
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
            { image: 'assets/img/portfolio/app-1.jpg', alt: 'Portfolio slide 1' },
            { image: 'assets/img/portfolio/product-1.jpg', alt: 'Portfolio slide 2' },
            { image: 'assets/img/portfolio/branding-1.jpg', alt: 'Portfolio slide 3' },
            { image: 'assets/img/portfolio/books-1.jpg', alt: 'Portfolio slide 4' },
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
            { label: 'Home', href: 'index.html' },
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
          heroImage: 'assets/img/services.jpg',
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
            { label: 'Home', href: 'index.html' },
            { label: 'Starter Page', current: true },
          ],
          sectionTitle: 'Starter Section',
          sectionLead: 'Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit',
          sectionBody: 'Use this page as a starter for your own custom pages.',
        },
      };
    },
    methods: {
      openTelegram() {
        window.open('https://t.me/Ch1k0_33', '_blank');
      },
    },
  }).mount('#app');
})();
