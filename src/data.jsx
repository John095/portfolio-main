//  icons
import {
  FiYoutube,
  FiInstagram,
  FiGithub,
  FiLayout,
  FiSettings,
  FiPenTool,
  FiTag,
  FiMail,
  FiMapPin,
  FiPhoneCall,
} from "react-icons/fi";

import { FaDev, FaLinkedin } from "react-icons/fa";

// companies icons
import FreelancerBrandIcon from "./assets/img/brands/freelancer.png";
import UpworkBrandIcon from "./assets/img/brands/upwork.png";
import FiverBrandIcon from "./assets/img/brands/fiverr.png";
import BehanceBrandIcon from "./assets/img/brands/behance.png";
import DribbbleBrandIcon from "./assets/img/brands/dribbble.png";

// projects images
import Ubunifu from "./assets/img/projects/ubunifu.webp";
import UbunifuDev from "./assets/img/projects/ubunifu-dev.webp";
import Rubia from "./assets/img/projects/rubia.webp";
import Mwanzo from "./assets/img/projects/mwanzo.webp";
import Charrd from "./assets/img/projects/charrd.webp";
import ChatApp from "./assets/img/projects/chat-app.webp";
import RecipeApp from "./assets/img/projects/recipe-app.webp";
import ExpenseTracker from "./assets/img/projects/expense-tracker.webp";

// skills images
import SkillImg1 from "./assets/img/skills/html5.png";
import SkillImg2 from "./assets/img/skills/css3.png";
import SkillImg3 from "./assets/img/skills/js.png";
import SkillImg4 from "./assets/img/skills/reactjs.png";
import SkillImg5 from "./assets/img/skills/nextjs.png";
import SkillImg6 from "./assets/img/skills/nodejs.png";
import SkillImg7 from "./assets/img/skills/git.png";
import SkillImg8 from "./assets/img/skills/figma.png";
import SkillImg9 from "./assets/img/skills/mu5.png";
import SkillImg10 from "./assets/img/skills/redux.png";
import SkillImg11 from "./assets/img/skills/typescript.png";
import SkillImg12 from "./assets/img/skills/sass.png";
import SkillImg13 from "./assets/img/skills/vite.png";
import SkillImg14 from "./assets/img/skills/ai.png";
import SkillImg15 from "./assets/img/skills/ps.png";
import SkillImg16 from "./assets/img/skills/xd.png";

// testimonial images
import TestiImage1 from "./assets/img/testimonials/chef-rubia.webp";
import TestiImage2 from "./assets/img/testimonials/fayee.webp";
import TestiImage3 from "./assets/img/testimonials/alex.webp";
import TestiImage4 from "./assets/img/testimonials/ray.webp";

// navigation
export const navigation = [
  {
    name: "home",
    href: "home",
  },
  {
    name: "about",
    href: "about",
  },
  {
    name: "portfolio",
    href: "portfolio",
  },
  {
    name: "services",
    href: "services",
  },
  {
    name: "testimonials",
    href: "testimonials",
  },
  {
    name: "contact",
    href: "contact",
  },
];

// social
export const social = [
  {
    icon: <FaLinkedin />,
    href: "https://www.linkedin.com/in/john-ndirangu-734132194/",
  },
  {
    icon: <FiInstagram />,
    href: "https://www.instagram.com/untold_dev/",
  },
  {
    icon: <FiGithub />,
    href: "https://github.com/John095",
  },
  {
    icon: <FaDev />,
    href: "https://dev.to/john095",
  },
];

// companies
export const brands = [
  {
    img: FreelancerBrandIcon,
    href: "",
  },
  {
    img: UpworkBrandIcon,
    href: "",
  },
  {
    img: FiverBrandIcon,
    href: "",
  },
  {
    img: BehanceBrandIcon,
    href: "",
  },
  {
    img: DribbbleBrandIcon,
    href: "",
  },
];

// projects
export const projectsData = [
  {
    id: "1",
    image: Ubunifu,
    name: "Ubunifu College",
    category: "Static Websites",
    linkto: "https://ubunifucollege.com",
  },
  {
    id: "2",
    image: UbunifuDev,
    name: "Ubunifu Devs",
    category: "Static Websites",
    linkto: "#",
  },
  {
    id: "3",
    image: Rubia,
    name: "Chef Rubia",
    category: "Static Websites",
    linkto: "https://chefrubia.com",
  },
  {
    id: "4",
    image: Mwanzo,
    name: "Mwanzo Agents",
    category: "Web Apps",
    linkto: "https://mwanzoagent.co.ke",
  },
  {
    id: "5",
    image: Charrd,
    name: "Charrd Grill",
    category: "E-Commerce",
    linkto: "https://charrdgrill.com",
  },
  {
    id: "6",
    image: ChatApp,
    name: "Firebase Chat App",
    category: "Web Apps",
    linkto: "#",
  },
  {
    id: "7",
    image: RecipeApp,
    name: "Recipe App",
    category: "Web Apps",
    linkto: "#",
  },
  {
    id: "8",
    image: ExpenseTracker,
    name: "Expense Tracker",
    category: "Web Apps",
    linkto: "#",
  },
];

// projects categories
export const projectsNav = [
  {
    name: "All",
  },
  {
    name: "Web Apps",
  },
  {
    name: "Static Websites",
  },
  {
    name: "E-Commerce",
  },
];

// skill
export const skills = [
  {
    image: SkillImg1,
  },
  {
    image: SkillImg2,
  },
  {
    image: SkillImg3,
  },
  {
    image: SkillImg4,
  },
  {
    image: SkillImg5,
  },
  {
    image: SkillImg6,
  },
  {
    image: SkillImg7,
  },
  {
    image: SkillImg8,
  },
  {
    image: SkillImg9,
  },
  {
    image: SkillImg10,
  },
  {
    image: SkillImg11,
  },
  {
    image: SkillImg12,
  },
  {
    image: SkillImg13,
  },
  {
    image: SkillImg14,
  },
  {
    image: SkillImg15,
  },
  {
    image: SkillImg16,
  },
];

// services
export const services = [
  {
    icon: <FiLayout />,
    name: "Web Design",
    description:
      "Unique and eye-catchy designs are the first factors that will attract and make the client want to know more about you.",
  },
  {
    icon: <FiSettings />,
    name: "Web Development",
    description:
      "I am very passionate with developing UI's that relate to the client and offer seamless simplicity to customers.",
  },
  {
    icon: <FiPenTool />,
    name: "Branding",
    description:
      "Illustrations, Logos and other designs are useful when building and designing your application. We are experts at giving you the best designs out there..",
  },
  {
    icon: <FiTag />,
    name: "SEO",
    description:
      "SEO is crucial to the success of your website, because it increases your visibility and relevance, which in turn leads to more traffic and potential new customers. This in turn improves conversion rates for your business.",
  },
];
// testimonials
export const testimonials = [
  {
    authorImg: TestiImage1,
    authorText:
      "Love the simplicity of the service and the prompt customer support. Very professional and easy to work with.",
    authorName: "Chef Rubia",
    authorPosition: "CEO, Charrd Grill",
  },
  {
    authorImg: TestiImage2,
    authorText:
      "His attention to detail is very impressive. You can never go wrong working with him.",
    authorName: "Faith Njonjo",
    authorPosition: "Managing Director, Mwanzo Management Agencies",
  },
  {
    authorImg: TestiImage3,
    authorText:
      "I was impressed with the good web design solutions, social media marketing and web hosting services he provided to our firm. Not only was he knowledgeable and proficient in his design work, but he offered the best suggestions and advice through-out the development process.",
    authorName: "Alex Macharia",
    authorPosition: "Accountable Manager, Flitestar Academy",
  },
  {
    authorImg: TestiImage4,
    authorText:
      "Very talented developer and creative designer. Has a keen eye with detail and unique designs. Can't recommend anyone else.",
    authorName: "Reinhard Omukuba",
    authorPosition: "CEO, Ubunifu College",
  },
];

// contact
export const contact = [
  {
    icon: <FiMail />,
    title: "Have a question?",
    subtitle: "I am here to help you.",
    description: "Email me at ndiranguouma@outlook.com",
  },
  {
    icon: <FiPhoneCall />,
    title: "Need to talk?",
    subtitle: "I'm just a phone call away.",
    description: "+254 713 852233",
  },
  {
    icon: <FiMapPin />,
    title: "Current Location",
    subtitle: "Nairobi, Kenya",
    description: "Serving clients worldwide",
  },
];
