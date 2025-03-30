import {
    mobile,
    backend,
    creator,
    web,
    javascript,    
    html,
    css,
    reactjs,    
    tailwind,
    nodejs,
    mysql,
    git,
    figma,
    trello,
    docker,    
    wildcodeschool,
    stephano,
    steph,
    charly,
    lisa,
    greta,
    calculette,
    todolist,    
    tictactoe,
    threejs,
  } from "../assets";
  
   const navLinks = [
    {
      id: "about",
      title: "A propos",
    },
    {
      id: "work",
      title: "Realisations",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Développeur web",
      icon: web,
    },
    {
      title: " Développeur React Native",
      icon: mobile,
    },
    {
      title: "Développeur Backend",
      icon: backend,
    },
    {
      title: "Créateur de contenu",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
   
    {
      name: "React JS",
      icon: reactjs,
    },
   
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "mysql",   
         icon: mysql,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
    {
      name: "trello",
      icon: trello,
    },
  ];
  
  const experiences = [
    {
      title: " Découverte des métiers de l'informatique",
      company_name: "Greta drome-ardeche",
      icon: greta,
      iconBg: "#383E56",
      date: "dec 2022 - Avril 2023",
      points: [
        "familiarisation avec l'outil informatique",
        "découverte des métiers de l'informatique",
        "découverte des langages de programmation",
        "découverte des bases de données",
        "autoformation html css php javascript",
        "Crétion d'un site web statique en autodidacte"
      ],
        
    },
    
    {
      title: "formation développeur web web mobile",
      company_name: "Wild Code School",
      icon: wildcodeschool,
      iconBg: "#383E56",
      date: "dec 2023 - dec 2024",
      points: [
        "Développer et maintenir des applications web avec React.js et d'autres technologies connexes.",
        "Collaborer avec des équipes interfonctionnelles, y compris des designers, des chefs de produit et d'autres développeurs pour créer des produits de haute qualité.",
        "Mettre en œuvre un design réactif et assurer la compatibilité inter-navigateurs.",
        "Participer à des revues de code et fournir des commentaires constructifs à d'autres développeurs.",       
      ],
    },
    {
      title: "Développeur web FULLSTACK",
      company_name: "stephanovalentinophoto",
      icon: stephano,
      iconBg: "#E6DEDD",
      date: "Jan 2025 - Aujourd'hui",
      points: [
        "développement d'une application fullstack de photographie en React node mysql integrant une architecture mvc",
        "déploiement sur un serveur privé avec ovh-cloud",
        "gestion de la base de données mysql",
        "gestion des utilisateurs",
        "gestion des photos",
        "gestion des albums",
        "gestion des contacts",

      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "JRD est un développeur exceptionnel. Il a transformé notre site web en une plateforme moderne et conviviale.",
      name: "stephano",
      designation: "photographe",
      company: "stephanovalentinophoto",
      image: steph,
    },
    {
      testimonial:
        "JRD a fait un travail incroyable sur notre application. Son attention aux détails et sa créativité sont inégalées.",
      name: "charly Brown",
      designation: "chef de projet",
      company: "dev corp",
      image: charly,
    },
    {
      testimonial:
        "JRD est un développeur talentueux. Il a su comprendre nos besoins et les traduire en une application fonctionnelle.",
      name: "Lisa Smith",
      designation: "CTO",
      company: "ultim dev",
      image: lisa,
    },
  ];
  
  const projects = [
    {
      name: "stephanovalentinophoto",
      description:
        "Site web de photographies de mariage et de portrait, permettant aux utilisateurs de consulter les photos, et au photographe de créer des albums et de gérer ses contacts.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mysql",
          color: "green-text-gradient",
        },
        {
          name: "css3",
          color: "pink-text-gradient",
        },
        {
          name: "node.js",
          color: "pink-text-gradient",
        },
      ],
      image: stephano,
      source_code_link: "https://github.com/",
    },
    {
      name: "Ma petite liste",
      description:
        "Une petite application de to-do-list qui permet aux utilisateurs de créer, modifier et supprimer des tâches. L'application réalisée en html css js vanilla  permet de gérer les tâches de manière simple et efficace.",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "javascript",
          color: "green-text-gradient",
        },
        {
          name: "css3",
          color: "pink-text-gradient",
        },
      ],
      image: todolist,
      source_code_link: "https://derimer.github.io/ma_liste/",
    },
    {
      name: "calculette",
      description:
        "Une application simple de calculatrice réalisée en html css js vanilla, permettant de réaliser des opérations mathématiques de base.",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "javascript",
          color: "pink-text-gradient",
        },
      ],
      image: calculette,
      source_code_link: "https://github.com/",
    },
    {
      name: "tic-tac-toe",
      description:
        "Un jeu de morpion simple réalisé en html css js vanilla, permettant de jouer contre un adversaire ou contre l'ordinateur.",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "javascript",
          color: "pink-text-gradient",
        },
      ],
      image: tictactoe,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { navLinks,services, technologies, experiences, testimonials, projects };