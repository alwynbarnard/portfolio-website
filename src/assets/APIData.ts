interface ProjectContainer {
    projectName: string,
    projectSynopsis: string,
    projectDetail: string,
    projectLink: string,
    projectImageSrcs: string[],
    projectTools: string[]
}

export const projects = () : ProjectContainer[] => {
    const temp : ProjectContainer[] = [{
        projectName: "Betway Front End Redesign",
        projectSynopsis: "The redesign and redevelopment of the Betway Banking Front End is a strategic initiative aimed at enhancing the user experience and efficiency of the banking processes for Betway's customers. The project focuses on modernizing the existing banking interface, streamlining transactional workflows, and improving overall usability while maintaining security and compliance standards. The project involves a comprehensive overhaul of the user interface (UI) and user experience (UX) design, backed by robust backend development to ensure a seamless and secure financial interaction platform.",
        projectDetail: "<h2>Goals and Key Deliverables:</h2><ol><li><h3>Enhanced Experience:</h3><p>Develop an intuitive, user-centric UI to simplify navigation and enhance engagement.</p></li><li><h3>Efficiency and Security:</h3><p>Streamline transactions, reducing processing time, and implementing robust security measures.</p></li><li><h3>Responsive Design and Integration:</h3><p>Create a consistent cross-device experience and seamlessly integrate with backend systems.</p></li><li><h3>Personalization and Insights:</h3><p>Integrate personalized features based on user history and gather valuable behavioral insights.</p></li><li><h3>Thorough Testing and Documentation:</h3><p>Ensure functionality, performance, and security through rigorous testing and provide detailed documentation.</p></li><li><h3>Training and Refinement:</h3><p>Conduct training sessions for teams and iterate based on user feedback.</p></li></ol>",
        projectLink: 'https:www.betway.co.za',
        projectImageSrcs: ["../src/assets/Images/Betway-2.png"],
        projectTools: ['HTML','CSS','VueJS','Vuetify','JavaScript','Typescript','C# & ASP.NET','MVC','StencilJS','SQL','SQL Server','Entity Framework','REST APIs','Systems Analysis & Design']
    },
    {
        projectName: "Reverse Withdrawal Feature and Transaction Tracker Front End for Betway",
        projectSynopsis: "The Reverse Withdrawal Feature and Transaction Tracker Front End is an innovative addition to the Betway online betting platform. This feature aims to provide betting customers with the ability to reverse withdrawal requests during the waiting period and reinstate the withdrawn funds into their accounts for further betting. Additionally, the project includes the development of a transaction tracking front end, enabling customers to monitor and manage their reversible withdrawals and other transactions effectively.",
        projectDetail: "<p>The Reverse Withdrawal Feature and Transaction Tracker project brings added convenience to Betway's users by enabling them to reverse withdrawal requests and manage their funds more flexibly. The transparent transaction tracking system enhances user experience by providing a clear overview of their financial activities on the platform. This feature encourages increased engagement as users can choose to keep their funds for betting, while also setting Betway apart from competitors. The collected transaction data not only aids in improving the platform but also offers valuable insights into user preferences and behaviors.</p><h1>Project Objectives: Reverse Withdrawal Feature and Transaction Tracker Front End</h1><ol><li><strong>Implement Reverse Withdrawal Functionality:</strong> Develop a user-friendly interface that allows customers to view pending withdrawal requests and provides an option to reverse these requests before they are processed.</li><li><strong>Enhance User Control:</strong> Empower customers with greater control over their withdrawals. Enable them to cancel or modify withdrawal requests, promoting flexibility and customer satisfaction.</li><li><strong>Transaction Tracking and Receipts:</strong> Create a front-end dashboard where customers can access detailed transaction history, including withdrawals, deposits, bets placed, and winnings. Provide a clear breakdown of each transaction for transparent account management.</li><li><strong>User-Friendly Interface:</strong> Design an intuitive and visually appealing user interface that aligns with Betway's branding and offers a smooth navigation experience. Prioritize responsive design for accessibility across various devices.</li><li><strong>Security and Compliance:</strong> Implement robust security measures to ensure the integrity of customer transactions and account information. Adhere to relevant regulations and data protection standards to maintain customer trust.</li><li><strong>Real-time Updates:</strong> Ensure that the transaction tracker provides real-time updates, reflecting the latest account activities promptly.</li><li><strong>Communication:</strong> Establish clear communication channels for users to receive notifications about reversible withdrawal options, withdrawal processing updates, and account transactions.</li></ol>",
        projectLink: 'www.betway.co.za',
        projectImageSrcs: [],
        projectTools: ['HTML','CSS','VueJS','Vuetify','JavaScript','Typescript','C# & ASP.NET','MVC','StencilJS','SQL','SQL Server','Entity Framework','REST APIs','Systems Analysis & Design']
    }];
    return temp;
}

export const skills: string[] = ['HTML','CSS','VueJS','Vuetify','JavaScript','Typescript','C# & ASP.NET','MVC','VSTO','StencilJS','Tailwind','SQL','SQL Server','Systems Analysis & Design','Xamarin','Entity Framework','REST APIs','Git','Github','Responsive Design','Terminal'];