import GtsImage from "../assets/gtstore.png";
import XtremefitImage from "../assets/xtremefit.png";
import SkillSyncImage from "../assets/skillsync.png";
import SmartBudgetImage from "../assets/smartbudget.png";
import { gtstore, skillsync, smartbudget, xtremefit } from "./caseStudies";

export const projectData = [
  {
    id: 1,
    slug: "xtremefit",
    title: "Xtremefit",
    image: XtremefitImage,
    live: "https://xtremefit.vercel.app/",
    github: "https://github.com/socode-dev/gym-website",
    description:
      "A gym website built around one idea: everything a potential member needs to know should be available online before they ever walk through the door.",
      caseStudy: xtremefit,
    stacks: [
      "Vite",
      "React",
      "Swiper.js",
      "MUI Icons",
      "TailwindCSS",
      "Framer Motion",
      "React Router DOM",
    ],
  },
  {
    id: 2,
    slug: "gtstore",
    title: "GTStore",
    image: GtsImage,
    live: "https://gtstore-nu.vercel.app/",
    github: "https://github.com/socode-dev/eCommerce-app",
    description:
      "A fully simulated e-commerce experience built to understand how real shopping flows work, from browsing and filtering to cart management and multi-step checkout.",
      caseStudy: gtstore,
    stacks: [
      "Vite",
      "React",
      "TailwingCSS",
      "Easy Peasy",
      "React Query",
      "Framer Motion",
      "React Hook Form",
      "React Router DOM",
    ],
  },
  {
    id: 3,
    slug: "skillsync",
    title: "SkillSync",
    image: SkillSyncImage,
    live: "https://skillsync-one.vercel.app/",
    github: "https://github.com/socode-dev/skillsync",
    description:
      "Stop searching job boards manually. Upload your resume, see your extracted skills, and get matched with real remote jobs that actually fit what you bring to the table.",
      caseStudy: skillsync,
    stacks: [
      "Vite",
      "Axios",
      "React",
      "PDF.js",
      "Zustand",
      "Mammoth.js",
      "TailwindCSS",
      "Framer Motion",
      "React Router DOM",
    ],
  },
  {
id: 3,
slug: "smartbudget",
title: "SmartBudget",
image: SmartBudgetImage,
live: "https://smartbudget-beta.vercel.app/",
github: "https://github.com/socode-dev/smartbudget",
description:
"Most budgeting apps store your transactions. SmartBudget actually watches them, spots unusual spending, forecasts what’s coming, and tells you before it becomes a problem.",
caseStudy: smartbudget,
stacks: [
  "Vite",
  "React",
"Zustand",
"TailwindCSS",
"TensorFlow.js",
"Framer Motion",
"Chart.js + react-chartjs-2",
"Firebase (Auth & Firestore)",
]
}
];
