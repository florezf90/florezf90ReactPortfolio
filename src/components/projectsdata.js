// projectsData.js

import memoria from "../assets/photos/memoria.png";
import socialNetwork from "../assets/photos/socialnetworkapi.png";
import weather from "../assets/photos/weatherchannel.png";
import calendar from "../assets/photos/calendar.png";

const projectsData = [
  {
    img: memoria,
    title: "Memoria the game",
    about:
      " Memoria: The Protectors, a brand-new Tabletop Role-Playing Game (TTRPG) designed for quick character creation without sacrificing customization. This web application offers a brief game overview, allowing users to swiftly dive into character creation through a seamless sign-up and log-in process",
    skillsUsed: [
      "tailwind",
      "JavaScript",
      "CSS",
      "express",
      "handlebars",
      "node",
      "MySQL",
    ],
    url: "https://mmemoria-4c92f159ec61.herokuapp.com/",
  },
  {
    img: socialNetwork,
    title: "Social Network API",
    about: `The  application is created with the intention to serve as the foundation for a full-stack social network application. The initial set of CRUD API routes are established to support various functionalities, 
    including user creation, search, update, deletion, and share their thoughts,react to thoughts from friends, create a friend list, and perform actions such as deleting thoughts, reactions, friends,
     and their own user account.`,
    skillsUsed: ["Node.js", "Express.js", "MongoDB", "Mongoose ODM"],
    url: "https://github.com/florezf90/Social-network-API",
  },
  {
    img: weather,
    title: "Weather forecast",
    about: `This project has the main objective of practicing the previously learned core skills in basic languages like HTML, JavaScript, or CSS, with the important adittion of Server Side API's. This time, the API chosen 
    is openweather, which allow me to create a weather dashbord from the ground, taking advantage of practical libraries such as Jquery, or boostrap.`,
    skillsUsed: ["HTML", "JavaScript", "Boostrap", "Jquery", "API's"],
    url: "https://florezf90.github.io/weatherchannel/",
  },
  {
    img: calendar,
    title: " Calendar",
    about: `Created with one simple mision, this calendar application allows the user to save events for each hour of a typical working day (9am–5pm) updating it's date and time dinamically thnaks to the Jquery  and dayjs libraries.`,
    skillsUsed: ["HTML", "CSS", "JavaScript", "Jquery", "dayjs"],
    url: "https://florezf90.github.io/Calendar/",
  },
  // Add more project objects as needed
];

export default projectsData;
