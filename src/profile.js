// Change website animations
const animation = {
  // make it false to switch off fade-up animation
  animate: true,
  // animation playing duration
  duration: 750,
  // if true, animation plays only once when element comes on screen
  once: false,
};
// Change your display name on tha landing display
const header = {
  name: "Amna Syeda",
};
const background = {
  // Options: Snow or Particle
  type: "Particle",
};
// Write a para about yourself here
// To update your image, go to './styles/images.css'
const section2title = "About Me";
const about = {
  paragraph:
    "I am a junior web-developer and I am currectly working on small projects as a freelanced developer. I obtained my certificate for web and software development from the University of Toronto School of Continuing Studies and I specialize in front-end development. Prior to changing my career path to software and web development, I obtained my Honors Bachelor of Science degree from the University of Toronto and completed a double major in human biology and neuroscience. I am still an active researcher for mental health and neuroscience.",
};
// Edit your skill and the percentage you know about it
// To Add a skill, copy any one below and paste it after the last comma
const skillsBar = [
  {
    name: "HTML5",
    // To add a custom svg instead of font-awesome icons, add svg path below otherwise just comment it out
    svg: "M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z",
    faClass: "fab fa-html5",
  },
  {
    name: "CSS3",
    // svg: '',
    faClass: "fab fa-css3",
  },
  {
    name: "Javascript",
    // svg: '',
    faClass: "fab fa-js",
  },
  {
    name: "SASS",
    // svg: '',
    faClass: "fab fa-sass",
  },
  {
    name: "Node",
    // svg: '',
    faClass: "fab fa-node",
  },
  {
    name: "Python",
    // svg: '',
    faClass: "fab fa-python",
  },
  {
    name: "Java",
    // svg: '',
    faClass: "fab fa-java",
  },
  {
    name: "PHP",
    // svg: '',
    faClass: "fab fa-php",
  },
  {
    name: "Database",
    // svg: '',
    faClass: "fas fa-database",
  },
  {
    name: "AWS",
    // svg: '',
    faClass: "fab fa-aws",
  },
];
// Edit your projects, its name, your skills used to make it, and the url.
// You can omit freely anything if you dont have it
// To Add a Project, copy any one below and paste it after the last comma and increment the id's project number
const section3Title = "Past Projects";
const projects = [
  {
    // Add image in './styles/images.css' in #project1
    id: "project1",
    name: "Vintage Vinyl Records - An E-commerce Application",
    skills: ["Apollo, Graphql, React.js, React-router-dom, Bcrypt, Express.js, Mongoose"],
    url: "https://github.com/group01-project03/vintage-vinyl-records",
  },
  {
    // Add image in './styles/images.css' in #project2
    id: "project2",
    name: "Book Search Engine",
    skills: ["MERN Stack, React, Node.js, MongoDB, Express"],
    url: "https://github.com/amnasyeda/book-search-engine",
  },
  {
    // Add image in './styles/images.css' in #project3
    id: "project3",
    name: "E-Commerce Back End",
    skills: ["Javascript, Node.js, Sequalize, MySQL, Dotenv"],
    url: "https://github.com/amnasyeda/ecommerce-back-end",
  },
  {
    // Add image in './styles/images.css' in #project4
    id: "project4",
    name: "Counting Calories - Calorie Tracker",
    skills: ["Bulma, JQuery, Moment.js, Javascript"],
    url: "https://github.com/uot-project-grp/project01-calorie-tracker",
  },
  {
    // Add image in './styles/images.css' in #project5
    id: "project5",
    name: "WasteAway - Waste Management",
    skills: ["jQuery, Dotenv, MySQL and Sequelize ORM, Handlebars.js, Express.js, Node.js"],
    url: "https://github.com/Group05-Project02/waste-management",
  },
  {
    // Add image in './styles/images.css' in #project6
    id: "project6",
    name: "Tech Blog - Blogging Application",
    skills: ["Sequalize, MySQL2, express-handlebars, connect-session-sequlize, Node.js, bcrypt, Express.js"],
    url: "https://github.com/amnasyeda/tech-blog",
  },
];
// Edit your Miscellaneous Activities, its name and the url.
// You can omit freely anything if you dont have it
// To Add a Activity, copy any one below and paste it after the last comma and increment the id's Miscellaneous number
const section4Title = "Other Skills & Interests";
const miscellaneous = [
  {
    // Add image in './styles/images.css' in #misc1
    id: "misc1",
    name: "UI Toolkits and Frameworks",
   //url: "https://github.com/kaustubhai",
  },
  {
    // Add image in './styles/images.css' in #misc2
    id: "misc2",
    name: "Proficient in R and RStudio",
    //url: "https://github.com/kaustubhai",
  },
  {
    // Add image in './styles/images.css' in #misc3
    id: "misc3",
    name: "Skilled Graphic Designer",
    //url: "https://github.com/kaustubhai",
  },
];
// Contact form text, and Formspree link(to send a submit contact through their API as in contact.js)
// To get your own jotform link, go to https://formspree.io/
// If you hacve the link already, paste it in the contactUrl below
const section5Title = "Get in Touch";
const contact = {
  pitch:
    "Feel free to contact me. I am open to collaborate with other developers on various projects I am planning to launch in the near future.",
  copyright: "Amna Syeda",
  contactUrl: "",
};
// Paste your respective social media links. You can omit any if you dont have it
// Upload your resume in your drive, get the shaareable link and paste it in the resume section
const social = {
  github: "https://github.com/amnasyeda",
  //facebook: "https://facebook.com",
  // twitter: "https://twitter.com",
  instagram: "https://instagram.com/amna.s_",
  linkedin: "https://www.linkedin.com/in/amna-syeda-064191146",
  resume: "",
};
// Dont change anything here
export {
  animation,
  header,
  background,
  about,
  skillsBar,
  projects,
  miscellaneous,
  contact,
  social,
  section2title,
  section3Title,
  section4Title,
  section5Title,
};
