export interface Contact {
  Location: string;
  Email: string;
  Linkedin: string;
  Github: string;
}

export const ContactDetails: Contact = {
  Location: 'Pretoria, South Africa',
  Email: 'barnard.alwyn262@gmail.com',
  Linkedin: 'https://www.linkedin.com/in/alwyn-barnard',
  Github: 'https://github.com/alwynbarnard',
};
export interface ProjectContainer {
  projectId: string;
  projectType: string;
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
    projectId: 'BI691',
    projectType: 'BI',
    projectName: 'LEGO Set Analysis Dashboard',
    projectSynopsis:
      'Using Python and Power BI, I conducted a comprehensive analysis of LEGO set data to uncover market trends and product patterns. The project involved cleaning and analyzing historical LEGO set information to derive actionable insights.',
    projectDetail: [
      'Key Components: Data cleaning and preprocessing using Python (pandas) to handle missing values, standardize formats, and merge multiple datasets. Creation of interactive dashboards in Power BI to visualize key metrics and trends. Analysis of price points, piece counts, and theme popularity over time. Identification of seasonal release patterns and market segment targeting',
    ],
    projectLink: 'https://github.com/alwynbarnard/Lego-Set-Analysis',
    projectImageSrcs: [
      '../../Images/Lego-Set-Analysis-1.png',
      '../../Images/Lego-Set-Analysis-2.png',
    ],
    projectTools: [
      'Python',
      'PowerBI',
      'ETL',
      'Data Cleaning',
      'Data Analysis',
      'BI Development',
      'Pandas',
      'Numpy',
      'Systems Analysis & Design',
    ],
  },
  {
    projectId: 'BI884',
    projectType: 'BI',
    projectName:
      'New York City Restaurant Health Code Violation Analysis Dashboard',
    projectSynopsis:
      'Using Python and Power BI, I conducted a data-driven investigation of New York City`s restaurant health inspection data to identify patterns in violations and assess food safety compliance across the city`s diverse dining landscape in all bouroughs.',
    projectDetail: [
      'Key Components: Cleaned and preprocessed extensive health inspection records using Python, addressing inconsistencies and standardizing violation codes. Developed interactive Power BI dashboards to visualize violation patterns and geographic distributions. Analyzed temporal trends in violation frequencies and severity levels. Mapped correlation between restaurant characteristics and inspection outcomes',
    ],
    projectLink:
      'https://github.com/alwynbarnard/NYC-Restaurant-Health-Code-Violations-Analysis',
    projectImageSrcs: [
      '../../Images/NYC-Restaurant-Violation-Analysis-1.png',
      '../../Images/NYC-Restaurant-Violation-Analysis-2.png',
    ],
    projectTools: [
      'Python',
      'PowerBI',
      'ETL',
      'Data Cleaning',
      'Data Analysis',
      'BI Development',
      'Pandas',
      'Numpy',
      'Systems Analysis & Design',
    ],
  },
  {
    projectId: 'BI700',
    projectType: 'BI',
    projectName: 'Pokemon Pokedex Analysis Project',
    projectSynopsis:
      'An end-to-end data project analyzing Pokémon stats, types, and trends using Python, SQL Server, Power BI, and DAX — from data cleaning to interactive visualizations.',
    projectDetail: [
      'Tools Used: Python · SQL Server · Power BI · DAX. This project explores and analyzes a comprehensive dataset of Pokémon to uncover insights related to type distribution, base stats, evolution patterns, and battle potential. Data Preparation: Used Python (Pandas, NumPy) to clean and transform the raw dataset. SQL Server was used to store and manage the data, enabling efficient querying and normalization of Pokémon attributes. Data Modeling: Designed relational tables in SQL Server to support evolution chains, types, and stat metrics. Created views and complex SQL queries to support analytical use cases. Visual Analytics: Built an interactive Power BI dashboard with custom visuals to explore type matchups, average stats by generation, and legendary vs. non-legendary comparisons. Used DAX to create calculated measures such as average base stats, rarity scores, and type effectiveness ratings. Key Insights: Revealed trends in stat distribution across generations, identified underrepresented types, and created filters to compare Pokémon by primary/secondary type, generation, and legendary status. This project demonstrates end-to-end data handling — from ETL and data modeling to insight delivery through dynamic reporting — showcasing my skills in data analysis, visualization, and BI tool integration.',
    ],
    projectLink: 'https://github.com/alwynbarnard/PokemonPokedexAnalysis',
    projectImageSrcs: [
      '../../Images/PokemonPokedexAnalysis-1.png',
      '../../Images/PokemonPokedexAnalysis-2.png',
      '../../Images/PokemonPokedexAnalysis-3.png',
    ],
    projectTools: [
      'Python',
      'DAX',
      'PowerBI',
      'ETL',
      'Data Cleaning',
      'Data Analysis',
      'BI Development',
      'Pandas',
      'Numpy',
      'SQLAlchemy',
      'Systems Analysis & Design',
    ],
  },
  {
    projectId: 'KBUI144',
    projectType: 'FE',
    projectName: 'Kanban UI',
    projectSynopsis:
      "Building an affordable desktop admin tool with a Kanban board. Key features: user authentication, admin ticket management, basic user task assignment. Visualize tasks across 'To-Do','In Progress', and 'Done' columns. Enhancing productivity with secure, cost-effective task tracking.",
    projectDetail: [
      "The objective of this project is to develop a cost-effective administrative tool equipped with a Kanban board feature to efficiently track tasks in the form of tickets. This tool will serve as a cornerstone application for streamlining task management within the company. The key functionalities include user authorization, ticket creation and editing privileges for admin users, and ticket reading and self-assignment capabilities for basic users. Additionally, the Kanban board will consist of three columns: 'To-Do', 'In Progress', and 'Done', providing a visual representation of task progress.",
    ],
    projectLink: 'https://github.com/alwynbarnard/Kanban-UI',
    projectImageSrcs: [
      '../../Images/Kanban-UI-Task.png',
      '../../Images/Kanban-UI-Login.png',
      '../../Images/Kanban-UI-Main.png',
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
    projectType: 'FE',
    projectName: 'Betway Front End Redesign',
    projectSynopsis:
      "The redesign and redevelopment of the Betway Banking Front End is a strategic initiative aimed at enhancing the user experience and efficiency of the banking processes for Betway's customers. The project focuses on modernizing the existing banking interface, streamlining transactional workflows, and improving overall usability while maintaining security and compliance standards. The project involves a comprehensive overhaul of the user interface (UI) and user experience (UX) design, backed by robust backend development to ensure a seamless and secure financial interaction platform.",
    projectDetail: [
      "The project aims to achieve an enhanced user experience through the development of an intuitive, user-centric UI, resulting in simplified navigation and increased engagement. By streamlining transactions and implementing strong security measures, the project also focuses on enhancing efficiency and security. This will be complemented by the creation of a responsive design that ensures a consistent experience across various devices and seamless integration with backend systems. Furthermore, the project seeks to integrate personalized features based on user history, enabling the gathering of valuable behavioral insights. To ensure the highest quality, the initiative includes rigorous testing to guarantee functionality, performance, and security, accompanied by comprehensive documentation. The project's holistic approach encompasses team training sessions and iterative refinement based on user feedback, aiming for continuous improvement.",
    ],
    projectLink: 'https://github.com/alwynbarnard',
    projectImageSrcs: [
      '../../Images/Betway-0.png',
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
    projectType: 'FE',
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
    projectLink: 'https://github.com/alwynbarnard',
    projectImageSrcs: [
      '../../Images/Reverse Withdrawal Showcase 0.png',
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
  'PowerBI',
  'Python',
  'Power Apps',
  'Azure DevOps',
  'SQL',
  'SQL Server',
  'SSMS',
  'SSRS',
  'SSIS',
  'ReactJS',
  'VueJS',
  'SEO & Optimization',
  'Webpack & Babel',
  'Redux',
  'Javascript & JSX',
  'Typescript',
  'C# MVC',
  'Git & Bitbucket',
  'Rest APIs',
  'XAML & YAML',
];

export const WorkHistoryData: WorkHistoryCompanies[] = [
  {
    position: 'Software Engineer',
    companyName: 'SprintHive',
    location: {
      city: 'Johannesburg',
      country: 'South Africa',
    },
    startDate: 'May 2024',
    endDate: 'Present',
    responsibilities:
      'At SprintHive, I collaborated with senior product owners to analyze and optimize the currentecosystem, focusing on delivering data-driven improvements that enhanced usability andperformance. I led a project to streamline customer onboarding and identity verification processeson mobile devices, particularly in low-income, network-restricted areas, using analytical insights toimprove efficiency and accessibility.My contributions included cost analysis and identifying key areas to reduce expenses, which directlyalleviated user strain and improved profitability. Additionally, I provided business intelligence supportby training and upskilling business analysts on interpreting data and leveraging insights related toproduct offerings and enhancements.',
  },
  {
    position: 'BI & Data Analyst Developer',
    companyName: 'Various - Freelance',
    location: {
      city: 'Pretoria',
      country: 'South Africa',
    },
    startDate: 'Sep 2023',
    endDate: 'Apr 2024',
    responsibilities:
      'I leveraged Python, Power BI, and T-SQL to deliver data-driven solutions that supported strategic decision-making and improved business outcomes. I analyzed and transformed complex datasets, developed interactive Power BI dashboards, and optimized T-SQL queries to enhance database performance. I collaborated with clients to design and implement responsive, userfriendly web applications. Utilizing technologies such as HTML, CSS, and JavaScript, I transformed wireframes and prototypes into functional interfaces, ensuring optimal performance across devices. I focused on enhancing user experience and accessibility while adhering to best practices in code quality and version control. ',
  },
  {
    position: 'Software Engineer',
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
    position: 'Junior Software Engineer - Full Stack',
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
