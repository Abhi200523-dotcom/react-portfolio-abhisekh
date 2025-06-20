import project1 from "../assets/assets/projects/project-1.jpeg";
import project2 from "../assets/assets/projects/project-2.png";
import project3 from "../assets/assets/projects/project-3.png";
import project4 from "../assets/assets/projects/project-4.jpeg";
import project5 from "../assets/assets/projects/project-5.jpg";

export const HERO_CONTENT = `Passionate about coding, collaborating, and creating impactful solutions, I am always eager to learn and grow in the world of technology. With handson experience in Python, Java, C, TypeScript, Javascript, HTML/CSS and SQL.I enjoy building innovative applications and solving problems. I
thrive in collaborative environments, where I can contribute my skills while continuously learning from others. Whether it’s developing full-stack
applications, designing responsive user interfaces, or working with databases, I am always excited to take on new challenges and push my limits!`


export const ABOUT_TEXT = `Hello! I’m Abhisekh Chand, currently in my third year of Software Engineering at the University of Canterbury. As I advance in my studies, I’m excited to explore opportunities in the tech industry where I can apply my skills and gain practical experience.
I have a strong passion for coding and enjoy bringing creative ideas to life through technology. I thrive in collaborative environments and am dedicated to delivering high-quality solutions. I’m always eager to learn and make a positive impact on the projects I take part in.
When I’m not coding, you’ll find me playing cricket, going to the gym, and spending time outdoors. I also love socializing with friends, as I believe strong connections and teamwork are key to both personal and professional growth.`;


export const PROJECTS = [
  {
    title: "Home Helper",
    image: project1,
    description:
      "Working in a team of 7 developers to create a marketplace platform to connect contractors with users wanting to get renovations done. Done using agile methodologies and scrum practices, participating in sprints, stand-ups, and sprint reviews. Developed a full-stack web application using Java Springboot for the backend and Thymeleaf for the frontend. Implemented core features for a renovation marketplace web application, including user authentication, profile management,renovation contractor assignment algorithms and renovation planning tools. Designing algorithms to match users with suitable contractors based on suitability and availability. Ensured application quality through comprehensive unit, integration, and acceptance testing.",
    technologies: ["Java", "JavaScript", "SQL", "HTML","CSS","Gradle","Maven","Spring","JUnit","Cucumber"],
  },
  {
    title: "WINOFY",
    image: project2,
    description:
      "Developed a Java application for wine enthusiasts using JavaFX and SceneBuilder to create a responsive user interface, enabling features such as wine detail browsing and collection management. Leveraged Java for backend functionality, ensuring robust data handling and user interaction. Utilized Maven and Gradle for efficient dependency management and build automation. Implemented Git for version control to track changes and facilitate collaboration, while Trello was used for task organization and project management, ensuring timely delivery and effective workflow. This project demonstrated my ability to integrate various tools and technologies to create a polished and user-friendly application.",
    technologies: ["Java", "JavaFx", "Scenebuilder", "Junit", "Cucumber","Maven","Grade","CSS"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "Tailewind CSS", "React", "Framer"],
  },
  {
    title: "Game Review",
    image: project4,
    description:
      "Designed and implemented a full-stack game review platform, allowing users to register, log in, browse games, post reviews, and rate titles. Developed a backend REST API using TypeScript, Node.js, and Express, with SQL for data persistence and Bruno for testing/documentation of endpoints. Created a responsive frontend interface with React, featuring game listings, review forms, and user authentication workflows. Used Git for version control, maintaining a clean and modular codebase across both frontend and backend layers. This project demonstrated my ability to be proficient in modern full-stack development and show a strong understanding in clean architecture and usablity",
    technologies: ["TypeScript", "SQL", "React.js","Node.js","Express.js","Next.js","Bruno","Git"],
  },
  {
    title: "Beer Recommendation Engine",
    image: project5,
    description:
      "Applied Market Basket Analysis to the RateBeer dataset to discover frequently paired beer styles and review patterns. Used Dask to scale Apriori-based frequent itemset mining and computed high-interest association rules . Performed association rule mining to uncover frequent beer style pairings and reviewer trends using Dask. Tested the engine’s weak and strong scalability by deploying distributed workloads via Google Cloud",
    technologies: ["Python", "Google Colab","Google Cloud","Dask","Jupyter"],
  },
];

export const CONTACT = {
  address: "22 Echelon Drive, Christchurch,Canterbury 8042",
  phoneNo: "0226430022",
  email: "abhisekhchand23@gmail.com",
};
