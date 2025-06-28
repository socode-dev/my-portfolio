import GtsImage from "../assets/gtstore.png";
import XtremefitImage from "../assets/xtremefit.png";
import SkillSyncImage from "../assets/skillsync.png";

export const projectData = [
  {
    id: 1,
    slug: "xtremefit",
    title: "Xtremefit",
    image: XtremefitImage,
    live: "https://xtremefit.vercel.app/",
    github: "https://github.com/socode-dev/gym-website",
    note: "ALL-in-one fitness platform offering flexible memberships, trainer profiles, and guideed workouts.",
    description:
      "A modern gym website with smooth navigation, clean UI, and essential business features, It includes a services showcase, tiered membership, pricing plans, contact form, and a functional sign-up flow.",
    about:
      "Xtremefit is a responsive, full-featured gym and fitness web application designed to promote memberships, classes, and personalized training training services. Built using modern front-end architecture, Xtremefit delivers a motivating, interactive user experience - from exploring plans to signing up for a free trial - all powered by React and styled with TailwindCSS",
    features: [
      "Homepage Experience: Welcome hero with dynamic background image, class highlights, and animated workout options with image transformations.",
      "Membership System: Tiered pricing plans (Basic, Pro, Elite) with feature breakdown, 7-day trial option, and contextual signup routing.",
      "Trainer Carousel: Autoplaying Swipper carousel showcasing certified trainers with specialties, years of experience, and tooltips.",
      "Signup Workflow: Plan-based signup form with email and password validation, password visibility toggles, and modal confirmation.",
      "Service Catalog: Detailed grid of training programs with benefits, CTA buttons, and free trial encouragement.",
      "Testimonials Marquee: Infinite horizontal slider of member feedback powered by native animation and scroll logic.",
      "FAQs Section: interactive accordion with toggleable Q&A, handled by local state.",
      "Contact Page: Contact form with validation, embedded Google Maps, and hover-animated social media links.",
    ],
    advantages: [
      "Clean & Modular Architecture",
      "UX Focused",
      "Fully Responsive",
      "Scroll Performance",
      "Dark Mode Support",
    ],
    useCase:
      "XtremeFit demonstrates a real-world fitness membership platform use case, complete with dynamic pricing logic, membership routing, and interactive UI/UX patterns. Ideal as a front-end showcase project or base template for developers building SaaS-like fitness, gym, or service-focused platforms.",
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
    title: "GTS Store",
    image: GtsImage,
    live: "https://gtstore-nu.vercel.app/",
    github: "https://github.com/socode-dev/eCommerce-app",
    note: "Modern e-commerce web app with dynamic catalog, cart, and multi-step checkout experience.",
    description:
      "GTS Store is a sleek and modern e-commerce web app built with React. It features product browsing, filtering, cart & wishlist functionality, a multi-step checkout, and smooth user experience",
    about:
      "GTS Store is a responsive, fully functional e-commerce web application designed to deliver a seamless shopping experience. Built with modern React architecture and integrated with the Fake Store API, GTS Store allows users to browse, filter, and purchase a wide range of products with intuitive navigation and dynamic state management.",
    features: [
      "Product Catalog & Filtering: Paginated product display with filtering by category and real-time sorting.",
      "Cart & Wishlist: Persistent cart and wishlist using local storage and Easy Peasy for state management.",
      "Multi-Step Checkout: Zod-powered form validation with shipping, billing, and payment inputs.",
      "Authentication Modal: Reusable modal for login and signup with social login placeholders.",
      "Responsive Design: Mobile-first layout with optimized Ui using TailwindCSS and custom components.",
      "Animations: Smooth page and modal transitions using Framer Motion and AnimatePresence.",
      "Error Handling: Custom error pages and robust API fail-safe mechanisms.",
    ],
    advantages: [
      "Clean and modular component structure for scalability",
      "Optimized for performance using Vite and lazy loading",
      "Modern UX features like toast notifications and password reveal",
      "Easily customizable and extendable architecture",
    ],
    useCase:
      "This project showcases a real-world e-commerce workflow and can serve as a boilerplate for startups or developers building their own storefronts.",
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
    note: "AI-inspired resume matcher that extracts skills from your resume and matches you with real jobs.",
    description:
      "SkillSync is a frontend-focused resume parsing and job matching app that helps users upload a resume, extract their technical & soft skills, and find relevant remote jobs in real time.",
    about:
      "SkillSync is a modern web application that streamlines the job hunt experience by intelligently parsing resumes and matching candidates with real-time job listings from public APIs. Built with React and Zustand, SkillSync focuses on usability, filtering, and guided user flow to make career discovery simple and intuitive. It includes full resume-to-job matching logic, protected routes, job detail pages, and local state persistence — all powered by a polished UI and dark mode support.",
    features: [
      "Resume Parsing: Upload PDF, DOCX, or paste raw text to extract skills using PDF.js and Mammoth.",
      "Skill Extraction & Editing: Extracted skills are displayed in a scrollable modal with support for adding/removing entries before matching.",
      "Job Matching: Jobs fetched from RemoteOK and Arbeitnow APIs are matched to the user's skills with keyword logic and compatibility scoring.",
      "Results Summary: Users get a job summary and can view matched job listings with match percentage and detailed descriptions.",
      "Job Detail Page: Full job breakdown with styled sections, company tags, job type, and formatted content without raw HTML.",
      "Search & Filter: Real-time keyword search and remote/on-site filter with debounce logic for performance.",
      "Saved Jobs: Users can save job listings locally and revisit them from a dedicated page.",
      "Flow Protection: Guarded routes prevent skipping steps; users must upload a resume to proceed.",
      "Dark Mode & Responsive: Fully responsive layout with dark/light theme toggle and polished transitions.",
    ],
    advantages: [
      "Real-world Job APIs",
      "Resume Flow Guard",
      "Persistent State (Zustand)",
      "Clean Architecture",
      "Dark Mode UI",
      "Modular Components",
    ],
    useCase:
      "SkillSync is perfect as a resume-matching MVP or candidate screening tool. It’s ideal for showcasing frontend skills in file parsing, API integration, dynamic routing, persistent state, and user experience optimization. Great for resumes, portfolios, or demo platforms for job-matching startups.",
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
];
