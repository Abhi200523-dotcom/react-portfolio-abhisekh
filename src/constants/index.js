import project1 from "../assets/assets/projects/project-1.png";
import project2 from "../assets/assets/projects/project-2.png";
import project3 from "../assets/assets/projects/project-3.jpg";
import project4 from "../assets/assets/projects/project-4.png";
import project5 from "../assets/assets/projects/project-5.png";

export const HERO_CONTENT = `Passionate about coding, collaborating, and creating impactful solutions, I am always eager to learn and grow in the world of technology. With hands-on experience in Python, Java, C, React, Tailwind CSS, SQL, and HTML, I enjoy building innovative applications and solving problems.

I thrive in collaborative environments, where I can contribute my skills while continuously learning from others. Whether it’s developing full-stack applications, designing responsive user interfaces, or working with databases, I am always excited to take on new challenges and push my limits!`;

export const ABOUT_TEXT = `Hello! I’m Abhisekh Chand, currently in my third year of Software Engineering at the University of Canterbury. As I advance in my studies, I’m excited to explore opportunities in the tech industry where I can apply my skills and gain practical experience.
I have a strong passion for coding and enjoy bringing creative ideas to life through technology. I thrive in collaborative environments and am dedicated to delivering high-quality solutions. I’m always eager to learn and make a positive impact on the projects I take part in.
When I’m not coding, you’ll find me playing cricket, going to the gym, and spending time outdoors. I also love socializing with friends, as I believe strong connections and teamwork are key to both personal and professional growth.`;


export const PROJECTS = [
  {
    title: "WINOFY",
    image: project1,
    description:
      "Developed a Java application for wine enthusiasts using JavaFX and SceneBuilder to create a responsive user interface, enabling features such as wine detail browsing and collection management. Leveraged Java for backend functionality, ensuring robust data handling and user interaction. Utilized Maven and Gradle for efficient dependency management and build automation. Implemented Git for version control to track changes and facilitate collaboration, while Trello was used for task organization and project management, ensuring timely delivery and effective workflow. This project demonstrated my ability to integrate various tools and technologies to create a polished and user-friendly application.",
    technologies: ["Java", "JavaFx", "Scenebuilder", "Junit", "Cucumber","Maven","Grade","CSS"],
  },
  {
    title: "Resource Stock Piling",
    image: project2,
    description:
      "Developed a tower defense game using Java, focusing on strategic gameplay mechanics where players build and upgrade towers to defend against waves of enemies. Utilized JavaFX for the graphical user interface, creating an engaging visual experience with intuitive controls and dynamic animations. Implemented object-oriented programming principles to manage game elements such as towers, enemies, and projectiles, enhancing code maintainability and scalability. Leveraged data structures like lists and arrays to efficiently manage game state and enemy waves. This project showcased my ability to design and implement game logic, user interaction, and a cohesive game environment in Java.",
    technologies: ["Java", "JavaFx", "Scenebuilder", "Junit","Maven","Grade","CSS"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "Tailewind CSS", "React", "Framer"],
  },
  {
    title: "Date Time Server and Client",
    image: project4,
    description:
      "Developed a UDP server in Python using the socket module to respond to client requests with the current date and time. The server listens on a specified port, processes incoming messages, and sends back formatted date and time responses in four different languages. Implemented efficient socket programming techniques to ensure reliable communication and responsiveness. Additionally, incorporated language selection based on client requests, allowing dynamic responses in English, Māori, German, and French. This project showcases my proficiency in Python, network programming, and localization techniques.",
    technologies: ["Python", "Git", "PyCharm"],
  },
  {
    title: "Rock Paper Scissors",
    image: project5,
    description:
      "Designed and implemented a Rock-Paper-Scissors game on a microcontroller using C. Developed the game logic to allow user input via buttons and display results on an LCD screen. Optimized the code for efficiency and responsiveness, ensuring smooth gameplay. This project demonstrated my skills in embedded systems programming, hardware interfacing, and resource management in a constrained environment.",
    technologies: ["C", "Git"],
  },
];

export const CONTACT = {
  address: "22 Echelon Drive, Christchurch,Canterbury 8042",
  phoneNo: "0226430022",
  email: "abhisekhchand23@gmail.com",
};
