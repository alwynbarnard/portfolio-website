/*
  This file will be replaced by API calls and VueX/Pinia state management once a license is aquired by the hosting company
*/

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
    projectId: 'BW201',
    projectName: 'Betway Front End Redesign',
    projectSynopsis:
      "The redesign and redevelopment of the Betway Banking Front End is a strategic initiative aimed at enhancing the user experience and efficiency of the banking processes for Betway's customers. The project focuses on modernizing the existing banking interface, streamlining transactional workflows, and improving overall usability while maintaining security and compliance standards. The project involves a comprehensive overhaul of the user interface (UI) and user experience (UX) design, backed by robust backend development to ensure a seamless and secure financial interaction platform.",
    projectDetail: [
      "The project aims to achieve an enhanced user experience through the development of an intuitive, user-centric UI, resulting in simplified navigation and increased engagement. By streamlining transactions and implementing strong security measures, the project also focuses on enhancing efficiency and security. This will be complemented by the creation of a responsive design that ensures a consistent experience across various devices and seamless integration with backend systems. Furthermore, the project seeks to integrate personalized features based on user history, enabling the gathering of valuable behavioral insights. To ensure the highest quality, the initiative includes rigorous testing to guarantee functionality, performance, and security, accompanied by comprehensive documentation. The project's holistic approach encompasses team training sessions and iterative refinement based on user feedback, aiming for continuous improvement.",
    ],
    projectLink: 'https:www.betway.co.za',
    projectImageSrcs: [
      '../src/assets/Images/Betway-1.png',
      '../src/assets/Images/Betway-2.png',
      '../src/assets/Images/Betway-3.png',
      '../src/assets/Images/Betway-4.png',
      '../src/assets/Images/Betway-5.png',
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
      '../src/assets/Images/Reverse Withdrawal Showcase 1.png',
      '../src/assets/Images/Reverse Withdrawal Showcase 2.png',
      '../src/assets/Images/Reverse Withdrawal Showcase 3.png',
      '../src/assets/Images/Reverse Withdrawal Showcase 4.png',
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
  'HTML',
  'CSS',
  'VueJS',
  'Vuetify',
  'JavaScript',
  'Typescript',
  'C# & ASP.NET',
  'MVC',
  'VSTO',
  'StencilJS',
  'TailwindCSS',
  'SQL',
  'SQL Server',
  'Systems Analysis & Design',
  'Xamarin',
  'Entity Framework',
  'REST APIs',
  'Git',
  'Responsive Design',
  'Terminal',
];

export const WorkHistoryData: WorkHistoryCompanies[] = [
  {
    position: 'Intermediate Front End Developer',
    companyName: 'The Builder Studios - Eli5',
    location: {
      city: 'Amsterdam',
      country: 'Netherlands',
    },
    startDate: 'Aug 2023',
    endDate: 'Current',
    responsibilities:
      'As an Intermediate Front-End Developer at Eli5 B.V. trading as The Builder Studios, I played a pivotal role in crafting seamless and captivating user experiences for a range of digital projects. Collaborating closely with the design and back-end teams, I translated design concepts into interactive interfaces that met the highest standards of performance and aesthetics. My time at Eli5 B.V. trading as The Builder Studios empowered me to contribute to the digital landscape, driving innovation and excellence in front-end development. This experience further honed my skills in crafting compelling user interfaces and collaborating effectively in dynamic teams.',
  },
  {
    position: 'Intermediate Front End Developer',
    companyName: 'Raging River t/a Betway',
    location: {
      city: 'Pretoria',
      country: 'South Africa',
    },
    startDate: 'June 2021',
    endDate: 'July 2023',
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
  {
    position: 'Academic Assistant for Systems Analysis and Design Department',
    companyName: 'North West University Potchefstroom Campus',
    location: {
      city: 'Potchefstroom',
      country: 'South Africa',
    },
    startDate: 'Jul 2018',
    endDate: 'Dec 2019',
    responsibilities:
      'I provided comprehensive support to lecturers and students in systems analysis and design, aiding in advanced programming language instruction, student assessment, and administrative tasks. Offering guidance in Information Technology matters, I nurtured innovative project concepts and contributed to curriculum design, including cost analysis for training and equipment.',
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
