// array of objects that acts as temporary database for application
// later it can be replaced with mongoDB

let thoughts = [
  {
    userIP: 1,
    id: 1,
    title: "What is Lorem Ipsum?",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    likes: 0,
    posted: "13-September-2019",
    location: "Islamabad, Pakistan",
    deleted: false,
  },
  {
    userIP: 2,
    id: 2,
    title: "Why do we use it?",
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    likes: 0,
    posted: "13-September-2019",
    location: "Karachi, Pakistan",
    deleted: false,
  },
  {
    userIP: 2,
    id: 3,
    title: "Where does it come from?",
    desc: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
    likes: 0,
    posted: "14-September-2019",
    location: "Karachi, Pakistan",
    deleted: false,
  },
  {
    userIP: 3,
    id: 4,
    title: "Where can I get some?",
    desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
    likes: 0,
    posted: "14-September-2019",
    location: "Lahore, Pakistan",
    deleted: false,
  },
  {
    userIP: 3,
    id: 5,
    title: "Donate",
    desc: "If you use this site regularly and would like to help keep the site on the Internet, please consider donating a small sum to help pay for the hosting and bandwidth bill.",
    likes: 0,
    posted: "12-September-2019",
    location: "Lahore, Pakistan",
    deleted: true,
  },
];

export default thoughts;
