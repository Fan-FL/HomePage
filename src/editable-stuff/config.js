// Navigation Bar SECTION
const navBar = {
    show: true,
};

// Main Body SECTION
const mainBody = {
    gradientColors: '#4484ce, #1ad7c0, #ecf0f1',
    firstName: 'Fan',
    middleName: '',
    lastName: 'Li',
    // message: " Passionate about changing the world with technology. ",
    // icons: [
    //   {
    //     image: "fa-github",
    //     url: "https://github.com/fan",
    //   },
    //   {
    //     image: "fa-facebook",
    //     url: "https://www.facebook.com/fan",
    //   },
    //   {
    //     image: "fa-instagram",
    //     url: "https://www.instagram.com/fan/",
    //   },
    //   {
    //     image: "fa-linkedin",
    //     url: "https://www.linkedin.com/in/fan/",
    //   },
    //   {
    //     image: "fa-twitter",
    //     url: "https://www.twitter.com/fan/",
    //   },
    // ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/16apx8s6zlVwCu7Aea6jdJtXOnAb6GsNP8QAsTv7gWZo/edit",

const about = {
    show: true,
    heading: 'About Me',
    imageLink: require('../editable-stuff/hashirshoaeb.png'),
    imageSize: 375,
    messages: [
        "I'm a full-stack developer and software engineer, with a vast array of knowledge in many different front end and back end languages, responsive frameworks, database and best code practices.",
        'Experience working in various web applications such as projects and staff management system, course purchase and management system, online exam system, etc.',
    ],
    resume: require('../editable-stuff/resume.pdf'),
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
    show: true,
    heading: 'Recent Projects',
    gitHubUsername: 'hashirshoaeb', //i.e."johnDoe12Gh"
    reposLength: 4,
    specificRepos: [],
};

// Leadership SECTION
const leadership = {
    show: false,
    heading: 'Leadership',
    message:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.',
    images: [
        {
            img: require('../editable-stuff/hashirshoaeb.png'),
            label: 'First slide label',
            paragraph:
                'Nulla vitae elit libero, a pharetra augue mollis interdum.',
        },
        {
            img: require('../editable-stuff/hashirshoaeb.png'),
            label: 'Second slide label',
            paragraph:
                'Nulla vitae elit libero, a pharetra augue mollis interdum.',
        },
    ],
    imageSize: {
        width: '615',
        height: '450',
    },
};

// SKILLS SECTION
const skills = {
    show: true,
    heading: 'Skills',
    hardSkills: [
        { name: 'Python', value: 90 },
        { name: 'SQL', value: 75 },
        { name: 'Data Structures', value: 85 },
        { name: 'C/C++', value: 65 },
        { name: 'JavaScript', value: 90 },
        { name: 'React', value: 65 },
        { name: 'HTML/CSS', value: 55 },
        { name: 'C#', value: 80 },
    ],
    softSkills: [
        { name: 'Goal-Oriented', value: 80 },
        { name: 'Collaboration', value: 90 },
        { name: 'Positivity', value: 75 },
        { name: 'Adaptability', value: 85 },
        { name: 'Problem Solving', value: 75 },
        { name: 'Empathy', value: 90 },
        { name: 'Organization', value: 70 },
        { name: 'Creativity', value: 90 },
    ],
};

// GET IN TOUCH SECTION
const getInTouch = {
    show: true,
    heading: 'Get In Touch',
    message:
        "I'm currently looking for full-time Software Engineering or Machine Learning opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
    email: 'hashirshoaeb@gmail.com',
};

// Blog SECTION
// const blog = {
//   show: false,
// };

const srConfig = (delay = 200, viewFactor = 0.25) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
});

export {
    navBar,
    mainBody,
    about,
    repos,
    skills,
    leadership,
    getInTouch,
    srConfig,
};
