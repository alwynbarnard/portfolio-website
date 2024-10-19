export interface Contact {
  Phone: string;
  Location: string;
  Email: string;
  Linkedin: string;
  Github: string;
}

export const ContactDetails: Contact = {
  Phone: '+27 82 783 0934',
  Location: 'Pretoria, South Africa',
  Email: 'barnard.alwyn262@gmail.com',
  Linkedin: 'https://www.linkedin.com/in/alwyn-barnard',
  Github: 'https://github.com/alwynbarnard',
};
export interface ProjectContainer {
  projectId: string;
  projectName: string;
  projectSynopsis: string;
  projectDetail: string[];
  projectLink: string;
  projectImageSrcs: string[];
  projectTools: string[];
}

export interface WorkHistoryCompanies {
  position: string;
  companyName: string;
  location: {
    city: string;
    country: string;
  };
  startDate: string;
  endDate: string;
  responsibilities: string;
}

export const Projects: ProjectContainer[] = [
  {
    projectId: 'KBUI144',
    projectName: 'Kanban UI',
    projectSynopsis:
      "Building an affordable desktop admin tool with a Kanban board. Key features: user authentication, admin ticket management, basic user task assignment. Visualize tasks across 'To-Do','In Progress', and 'Done' columns. Enhancing productivity with secure, cost-effective task tracking.",
    projectDetail: [
      "The objective of this project is to develop a cost-effective administrative tool equipped with a Kanban board feature to efficiently track tasks in the form of tickets. This tool will serve as a cornerstone application for streamlining task management within the company. The key functionalities include user authorization, ticket creation and editing privileges for admin users, and ticket reading and self-assignment capabilities for basic users. Additionally, the Kanban board will consist of three columns: 'To-Do', 'In Progress', and 'Done', providing a visual representation of task progress.",
    ],
    projectLink: 'https://github.com/alwynbarnard/Kanban-UI',
    projectImageSrcs: [
      '../../Images/Kanban-UI-Login.png',
      '../../Images/Kanban-UI-Main.png',
      '../../Images/Kanban-UI-Task.png',
      '../../Images/Kanban-UI-Task-StateChange.png',
    ],
    projectTools: [
      'HTML',
      'CSS',
      'ReactJS',
      'React Router',
      'React Scripts',
      'ContextAPI',
      'Typescript',
      'Ant Design',
      'Sweet Alert 2',
      'Font Awesome',
      'Systems Analysis & Design',
    ],
  },
  {
    projectId: 'BW201',
    projectName: 'Betway Front End Redesign',
    projectSynopsis:
      "The redesign and redevelopment of the Betway Banking Front End is a strategic initiative aimed at enhancing the user experience and efficiency of the banking processes for Betway's customers. The project focuses on modernizing the existing banking interface, streamlining transactional workflows, and improving overall usability while maintaining security and compliance standards. The project involves a comprehensive overhaul of the user interface (UI) and user experience (UX) design, backed by robust backend development to ensure a seamless and secure financial interaction platform.",
    projectDetail: [
      "The project aims to achieve an enhanced user experience through the development of an intuitive, user-centric UI, resulting in simplified navigation and increased engagement. By streamlining transactions and implementing strong security measures, the project also focuses on enhancing efficiency and security. This will be complemented by the creation of a responsive design that ensures a consistent experience across various devices and seamless integration with backend systems. Furthermore, the project seeks to integrate personalized features based on user history, enabling the gathering of valuable behavioral insights. To ensure the highest quality, the initiative includes rigorous testing to guarantee functionality, performance, and security, accompanied by comprehensive documentation. The project's holistic approach encompasses team training sessions and iterative refinement based on user feedback, aiming for continuous improvement.",
    ],
    projectLink: 'https:www.betway.co.za',
    projectImageSrcs: [
      '../../Images/Betway-1.png',
      '../../Images/Betway-2.png',
      '../../Images/Betway-3.png',
      '../../Images/Betway-4.png',
      '../../Images/Betway-5.png',
    ],
    projectTools: [
      'HTML',
      'CSS',
      'VueJS',
      'Vuetify',
      'JavaScript',
      'Typescript',
      'C# & ASP.NET',
      'MVC',
      'StencilJS',
      'SQL',
      'SQL Server',
      'Entity Framework',
      'REST APIs',
      'Systems Analysis & Design',
    ],
  },
  {
    projectId: 'RW108',
    projectName:
      'Reverse Withdrawal Feature and Transaction Tracker Front End for Betway',
    projectSynopsis:
      'The Reverse Withdrawal Feature and Transaction Tracker Front End is an innovative addition to the Betway online betting platform. This feature aims to provide betting customers with the ability to reverse withdrawal requests during the waiting period and reinstate the withdrawn funds into their accounts for further betting. Additionally, the project includes the development of a transaction tracking front end, enabling customers to monitor and manage their reversible withdrawals and other transactions effectively.',
    projectDetail: [
      "The Reverse Withdrawal Feature and Transaction Tracker project at Betway is designed to offer users added convenience and flexibility in managing their funds. By allowing users to reverse withdrawal requests, this feature empowers them to have greater control over their finances. Additionally, the transparent transaction tracking system enhances the overall user experience by providing a clear and detailed overview of all financial activities on the platform. This not only encourages increased engagement as users can choose to keep their funds for betting but also sets Betway apart from its competitors in terms of user-centric features. Beyond its immediate benefits, the project's collection of transaction data serves a dual purpose: it aids in refining the platform's functionality and also provides valuable insights into user preferences and behaviors, informing future enhancements.",

      "The project's primary objectives revolve around enhancing the front-end experience for users. The development of a user-friendly interface is geared towards allowing customers to easily view pending withdrawal requests and provides an option to reverse these requests before they are processed. This serves to promote flexibility and satisfaction among users. The creation of a dedicated dashboard further enriches the experience, enabling customers to access detailed transaction histories encompassing withdrawals, deposits, bets placed, and winnings. These transactions are presented in a clear breakdown format, ensuring transparent account management.",

      "User interface design is of paramount importance, with a focus on creating an intuitive and visually appealing interface that aligns seamlessly with Betway's branding. Moreover, the design ensures responsiveness across a variety of devices for a consistent experience. Security and compliance are central considerations in the project, with robust security measures in place to maintain the integrity of customer transactions and account information. Adherence to relevant regulations and data protection standards is prioritized to build and maintain customer trust.",

      "Real-time updates within the transaction tracker are guaranteed to provide users with prompt information about their account activities. Additionally, clear communication channels are established to ensure users are well-informed about reversible withdrawal options, updates on withdrawal processing, and comprehensive account transaction notifications. Through this multifaceted approach, the Reverse Withdrawal Feature and Transaction Tracker project not only enhances user experience but also contributes to Betway's competitive edge within the market.",
    ],
    projectLink: 'www.betway.co.za',
    projectImageSrcs: [
      '../../Images/Reverse Withdrawal Showcase 1.png',
      '../../Images/Reverse Withdrawal Showcase 2.png',
      '../../Images/Reverse Withdrawal Showcase 3.png',
      '../../Images/Reverse Withdrawal Showcase 4.png',
    ],
    projectTools: [
      'HTML',
      'CSS',
      'VueJS',
      'Vuetify',
      'JavaScript',
      'Typescript',
      'C# & ASP.NET',
      'MVC',
      'StencilJS',
      'SQL',
      'SQL Server',
      'Entity Framework',
      'REST APIs',
      'Systems Analysis & Design',
    ],
  },
];

export const SkillsList: string[] = [
  'ReactJS',
  'Javascript & JSX',
  'Typescript',
  'Redux',
  'VueJS',
  'Python',
  'HTML',
  'CSS',
  'C# ASP.NET',
  'C# MVC',
  'REST APIs',
  'XAML & YAML',
  'SQL',
  'SQL Server',
  'SSMS',
  'SSRS',
  'SSIS',
  'Power BI',
  'PowerApps',
];

export const WorkHistoryData: WorkHistoryCompanies[] = [
  {
    position: 'Intermediate Front End Developer',
    companyName: 'SprintHive',
    location: {
      city: 'Johannesburg',
      country: 'South Africa',
    },
    startDate: 'May 2024',
    endDate: 'Present',
    responsibilities:
      'At SprintHive I worked closely with senior product owners to deliver improvements to their current ecosystem with the goal of optimizing code and delivering products that are modern and easy to use. I also took ownership of a project to simplify customer onboarding and identity verification on mobile devices in low-income, network-restricted areas. During my time with SprintHive, I helped cut costs and relieve user strain that was having negative effects on profits. I was actively involved in upskilling and teaching business analysts about product offerings and improvements that these projects were responsible for. I took an active role in knowledge-sharing and innovation, and I was instrumental in managing products with little to no oversight',
  },
  {
    position: 'Intermediate Front End Developer',
    companyName: 'Various - Freelance',
    location: {
      city: 'Pretoria',
      country: 'South Africa',
    },
    startDate: 'Sep 2023',
    endDate: 'Apr 2024',
    responsibilities:
      'As a front-end developer, I collaborated with clients to design and implement responsive, userfriendly web applications. Utilizing technologies such as HTML, CSS, and JavaScript, I transformed wireframes and prototypes into functional interfaces, ensuring optimal performance across devices. I focused on enhancing user experience and accessibility while adhering to best practices in code quality and version control.',
  },
  {
    position: 'Intermediate Front End Developer',
    companyName: 'The Builder Studios - Eli5',
    location: {
      city: 'Amsterdam',
      country: 'Netherlands',
    },
    startDate: 'Jul 2023',
    endDate: 'Aug 2023',
    responsibilities:
      'I collaborated closely with the design and back-end teams, to translate design concepts into interactive interfaces that met the highest standards of performance and aesthetics. My time at Eli5 empowered me to contribute to the digital landscape, driving innovation and excellence in front-end development. This experience further honed my skills in crafting compelling user interfaces and collaborating effectively in dynamic teams.',
  },
  {
    position: 'Intermediate Front End Developer',
    companyName: 'Raging River t/a Betway',
    location: {
      city: 'Pretoria',
      country: 'South Africa',
    },
    startDate: 'June 2021',
    endDate: 'June 2023',
    responsibilities:
      'Developed new features for Betway’s mobile and Desktop sites using VueJS with Vuetify and Nuxt and provided support and improvements to the current site using MVC, WebAPI and Bootstrap. Streamlined the process of tracking tasks using Azure DevOps and automated the process of alerting potential burnout. Spearheaded team interaction through daily check-ins and task updates. Managed events such as team building and testing events. Spearheaded code documentation and collaboration project which includes designs, wireframes, development documentation and feedback from a central location. Provided technical support and training for colleagues from various teams as well as new hires. Developed quality assurance protocols for various projects. Optimized existing systems to better meet client needs. Streamlined the maintenance and updating of existing and new systems.',
  },
  {
    position: 'Junior Fullstack Software Developer',
    companyName: 'Ke Concepts',
    location: {
      city: 'Johannesburg',
      country: 'South Africa',
    },
    startDate: 'Feb 2020',
    endDate: 'May 2021',
    responsibilities:
      'Developed various mobile and web applications for the company’s clientele and provided support to clients on solutions provided. Deployed the software tools, processes, and metrics. Automated the process of alerting developers of change requests and error logging using MS Power Automate. Originated the development of an application to make custom reporting easier for users than the current Microsoft SQL Server Reporting Services solution, using C# for processing, MS SQL Server for storage, and WebAPI services to generate the data used by the App.',
  },
];

export const WorkableCountries: string[] = [
  'South Africa',
  'Netherlands',
  'USA',
  'Canada',
  'Sweden',
  'Switzerland',
  'UK',
  'Norway',
  'China',
  'Denmark',
  'EU',
  'Finland',
  'France',
  'Germany',
  'Greece',
  'Hong Kong',
  'Ireland',
  'Japan',
  'Poland',
  'Thailand',
];
