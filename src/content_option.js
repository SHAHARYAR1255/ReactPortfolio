import Imagess from './assets/images/expense.png';
import CovidImage from './assets/images/covid.png';
import ShoeStore from './assets/images/shoestore.png';
import Sentec from './assets/images/sentec.png';
import Mperc from './assets/images/mperc.png';
const logotext = "PORTFOLIO";
const meta = {
    title: "Shaharyar Malik",
    description: "I’m Shaharyar Malik  _ Full stack devloper, learning Web3.0 technologies",
};

const introdata = {
    title: "I’m Shaharyar Malik",
    animated: {
        first: " love coding",
        second: " learn modern technologies",
        third: "and contribute",
    },
    description: "I’m Shaharyar Malik  _ Full stack devloper, learning Web3.0 technologies",
    your_img_url: "https://avatars.githubusercontent.com/u/57074705?s=400&u=b639fb29c358dfada9b21bfd775f1254b6f589d7&v=4",
};

const dataabout = {
    title: "about about my self",
    aboutme: "I’m Shaharyar Malik  _ Full stack devloper, learning Web3.0 technologies. Nunc non commodo dolor. Nunc mollis dignissim facilisis. Morbi ut magna ultricies.",
};
const worktimeline = [
    // {
    //     jobtitle: "Designer of week",
    //     where: "YAdfi",
    //     date: "2020",
    // },
    // {
    //     jobtitle: "Designer of week",
    //     where: "Jamalya",
    //     date: "2019",
    // },
    // {
    //     jobtitle: "Designer of week",
    //     where: "ALquds",
    //     date: "2019",
    // },
];

const skills = [{
    name: "Nodejs",
    value: 70,
},
{
    name: "MongoDB",
    value: 75,
},
{
    name: "Javascript",
    value: 80,
},
{
    name: "React",
    value: 80,
},
{
    name: "Express",
    value: 85,
},
];

const services = [{
    title: "Front End React Developer",
    description: "",
},
{
    title: "MERN Stack Developer",
    description: "",
},
{
    title: "Javascript Programmer",
    description: "",
},
];

const dataportfolio = [

    {
        img: Mperc,
        desctiption: "Landing page of Mega Project Exhibition & Robotics Competition",
        link: "https://mperc.sentec.live/",
    },
    {
        img: Sentec,
        desctiption: "Official Website of Society For The Promotion Of Science, Engineering & Technology",
        link: "https://www.sentec.live/",
    },
    {
        img: ShoeStore,
        desctiption: "Shoe Store Web App with React Router",
        link: "https://malik-shoestore.surge.sh/",
    },
    {
        img: CovidImage,
        desctiption: "Covid-19 tracker using React, Chartjs & MaterialUI",
        link: "https://covid19statswebsite.netlify.com/",
    },
    {
        img: Imagess,
        desctiption: "Expense Tracker App with React",
        link: "https://react-expense-tracker-malik1255.surge.sh/",
    },
];

const contactConfig = {
    YOUR_EMAIL: "shaharyar.malik2000@gmail.com",
    YOUR_FONE: "+923172039912",
    description: "I’m Shaharyar Malik  _ Full stack devloper, learning Web3.0 technologies",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_id",
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "user_id",
};

const socialprofils = {
    github: "https://github.com/SHAHARYAR1255",
    facebook: "#",
    linkedin: "https://www.linkedin.com/in/shaharyar-malik-b7415219a/",
    twitter: "#",
    youtube: "#",
    twitch: "#",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};
