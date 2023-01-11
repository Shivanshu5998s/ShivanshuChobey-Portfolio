//I Would Highly Recommend You To Customize The Theme According To Your Taste.

export const globalStyles = {
  "--grad": "linear-gradient(315deg,#48a9fe,#00cdac)", // Use gradients only
  // "--grad": "linear-gradient(315deg, #48a9fe 0%, #734ae8 74%)", // Use gradients only
  // "--grad": "linear-gradient(315deg, #06bcfb 0%, #4884ee 74%)",
  "--txtcolor": "#272341",
  "--p_color": "#00cdac",
  "--s_color": "#fff",
};

// Navigation Bar Name
export const navbar_name = "<Shivanshu>";

// Main Page
export const main = {
  name: "Shivanshu Chobey",
  doamin: "A MERN Stack Web Developer",
  resume:
    "https://drive.google.com/drive/u/1/folders/1Fc_1CtApFmzsQ5tIwjbKy2PaoVevMvOk",
};

// AboutMe
export const aboutme = {
  imgLink:
  "https://miro.medium.com/max/552/1*YptPgpl0Vcnrvscu7RojGQ.webp",
  p1: "Hey, My name is Shivanshu Chobey. I have completed my Bachelor of Engineering from Lakshmi Narain College of Technology, Indore (M.P.).",
  p2: " I'm a passionate coder and an enthusiastic Web Developer capable of applying programming skills to solve complex problems. Seeking a challenging role in the field of software development that will offer an opportunity for further development of my abilities, skills and knowledge in an organization.",
  p3: "Apart from coding I also like photography 📸, cooking 👨‍🍳 and riding 🏍️, Playing online Games.",
};

// Skills
export const whatido = {
  title: "Full Stack Development",

  details: [
    "Building responsive website using HTML,CSS,JS,React",
    "Creating backend application in Node, ExpressJS",
    "Building Simple RESTful CRUD APIs",
    "Knowledge of MongoDB Database",
    "Knowledge of various UI libraries",
  ],
  logos: [
    {
      name: "HTML5",
      iconifyClassName: "vscode-icons:file-type-html", // PS : Use iconify class name
      id: "1",
    },
    {
      name: "CSS",
      iconifyClassName: "vscode-icons:file-type-css",
      id: "2",
    },
    {
      name: "JavaScript",
      iconifyClassName: "logos:javascript",
      id: "3",
    },
    {
      name: "ReactJS",
      iconifyClassName: "vscode-icons:file-type-reactjs",
      id: "4",
    },
    {
      name: "Redux",
      iconifyClassName: "logos:redux",
      id: "5",
    },
    {
      name: "NodeJS",
      iconifyClassName: "logos:nodejs",
      id: "6",
    },
    {
      name: "ExpressJS",
      iconifyClassName: "logos:express",
      id: "7",
    },
    {
      name: "MongoDB",
      iconifyClassName: "logos:mongodb",
      id: "8",
    },
    {
      name: "Postman",
      iconifyClassName: "logos:postman-icon",
      id: "9",
    },
    {
      name: "npm",
      iconifyClassName: "logos:npm-icon",
      id: "10",
    },
    {
      name: "GIT",
      iconifyClassName: "logos:git",
      id: "11",
    },
    {
      name: "Tailwind",
      iconifyClassName: "logos:tailwindcss-icon",
      id: "12",
    },
    {
      name: "Material-UI",
      iconifyClassName: "logos:material-ui",
      id: "13",
    },
    {
      name: "Ant Design",
      iconifyClassName: "logos:ant-design",
      id: "14",
    },
    {
      name: "Netlify",
      iconifyClassName: "vscode-icons:file-type-netlify",
      id: "15",
    },
    {
      name: "Vercel",
      iconifyClassName: "logos:vercel-icon",
      id: "16",
    },
  ],
};

// Project Details
export const details = [
  {
    id: 1,
    title: "Expedia Travel Clone",
    desc: `"Expedia Inc." is an online travel ✈️ agency owned by Expedia Group, an American online travel shopping company based in Seattle. It was first construct week project. In this project we implemented search feature and responsiveness.`,
    feature: `Overall user flow. (Only Front-end),
    Sign-up/Log-in with the help of localstorage,
    User authentication,
    Interactive User Interface,
    Access API data without buffering`,
    tech: `Tech Stack: HTML | CSS | JavaScript`,
    img: "https://miro.medium.com/max/828/1*CwL3wDAMDTvQ2yfYQoigng.webp",
    github: "https://github.com/Shivanshu5998s/expedia",
    link: "https://expedia-web-clone.netlify.app/"
  },

  {
    id: 2,
    title: "boAt-lifestyle Clone",
    desc: `"boAt" 🎧 the leader in audio products presents affordable & high quality products. India's fastest growing audio & wearables brand. The most incredible range of wireless earphones, earbuds, headphones, smart watches, and home audio.,
    𝐓𝐡𝐢𝐬 𝐰𝐚𝐬 𝐦𝐲 𝐅𝐢𝐫𝐬𝐭 𝐢𝐧𝐝𝐢𝐯𝐢𝐝𝐮𝐚𝐥 𝐩𝐫𝐨𝐣𝐞𝐜𝐭 𝐦𝐚𝐝𝐞 𝐛𝐲 𝐦𝐞 𝐢𝐧 𝐔𝐧𝐢𝐭-𝟐.`,
    feature: `Sign-up/Log-in with the help of localstorage,
    User authentication,
    Interactive User Interface,
    Access API data without buffering`,
    tech: `Tech Stack: HTML | CSS | JavaScript`,
    img: "https://miro.medium.com/max/875/1*Wqf2L6kZ4SguVw84m8_WtA.png",
    github: "https://github.com/Shivanshu5998s/boat-lifestyle",
    link: "https://clone-of-boat-website.netlify.app/",
  },

  {
    id: 3,
    title: "Strawberrynet Clone",
    desc: `"Strawberrynet.com" 🍓 is an e-commerce website that sales beauty product.`,
    feature: `Sign-up / Log-in page,
    Dynamic Homepage with product catalogue,
    Slideshow animation on product catalogue,
    Add to cart feature & Checkout,
    Apply Promocode & Payment`,
    tech: `Tech Stack: HTML | CSS | Javascript | Advance JS | ES6`,
    img: "https://miro.medium.com/max/875/1*fSLFF-Ckmjz68c3JgEnBHw.png",
    github: "https://github.com/Shivanshu5998s/Strawberrynet",
    link: "https://clone-of-strawaberrynet-website.netlify.app/",
  },

  {
    id: 4,
    title: "India Mart Clone",
    desc: `"IndiaMART" 🛒 is India's largest online B2B marketplace, connecting buyers with suppliers. With 60% market share of the online B2B Classified space in India, the channel focuses on providing a platform to Small & Medium Enterprises (SMEs), Large Enterprises as well as individuals.,
    𝐓𝐡𝐢𝐬 𝐰𝐚𝐬 𝐦𝐲 𝐬𝐞𝐜𝐨𝐧𝐝 𝐢𝐧𝐝𝐢𝐯𝐢𝐝𝐮𝐚𝐥 𝐩𝐫𝐨𝐣𝐞𝐜𝐭 𝐦𝐚𝐝𝐞 𝐦𝐞 𝐢𝐧 𝐔𝐧𝐢𝐭-𝟑.`,
    feature: `Social Sign-up / Log-in,
    User authentication,
    Product Pages,
    Cart functionalities,
    Checkout Page,
    Payment Page`,
    tech: `Tech Stack: HTML | CSS | Javascript | Advance JS | ES6`,
    img: "https://miro.medium.com/max/875/1*4wCVd43VXLrBlbrfp_t49Q.png",
    github: "https://github.com/Shivanshu5998s/India-MART",
    link: "https://clone-of-indiamart-website.netlify.app/"
  },

  {
    id: 5,
    title: "Bobby Brown Clone",
    desc: `"Bobbi Brown" is a women cosmetics products ecommerce website. Bobbi Brown is an American professional make-up artist, author, and the founder of Bobbi Brown Cosmetics.`,
    feature: `Interactive User Interface,
    Login | Sign Up | Profile | Offers and Toggled Navbars with its Pop-Ups,
    Location Fetching using Geographical Location, lat and lang | custom Location Search,
    Slider of products,
    Search bar for finding the product by it’s name and viewing it,
    Product page for different categories,
    Filters for custom price,
    Sort by Feature,
    Add to cart option for buying products & Payment`,
    tech: `Tech Stack:  React | Redux | HTML 5 | CSS 3 | JavaScript | GitHub | Bootstrap | Postman | Tailwind CSS | GitHub | ParseHub | Context API | FontAwesome | Material UI.`,
    img: "https://miro.medium.com/max/875/1*ZArTvqq6xux_cXUKf43wuA.png",
    github: "https://github.com/Shivanshu5998s/Bobbi-Brown-Cosmetics",
    link: "https://bobbi-brown-clone-arshad-abhinav-yogesh-shivanshu-rahul-nikesh.netlify.app/",
  },
];

// Social Media Links
export const links = [
  "https://www.linkedin.com/in/shivanshu5998/",
  "https://api.whatsapp.com/send/?phone=8120138215&text&app_absent=0",
  "mailto:shivanshuchobey5998@gmail.com",
  "https://medium.com/@shivanshuchobey5998",
  "https://github.com/Shivanshu5998s",
];
