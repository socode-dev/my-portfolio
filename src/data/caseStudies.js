export const xtremefit = [
    {
    id: crypto.randomUUID(),
    heading: "The Context",
    text: "Most local fitness centers don’t have a proper web presence. You either walk in or send a message to customer service just to ask basic questions about plans and trainers. XtremeFit was built around a simple idea: what if you could visit a gym’s website and know everything before you ever walk through the door."
  }, 
{
  id: crypto.randomUUID(),
  heading: "What I Built",
  text: "A complete gym website that covers everything a potential member needs. Membership plans with pricing tiers, trainer profiles, services offered, a signup flow, and a contact page with an embedded map.",
  text2: "Everything a first-time visitor would want to know, available without speaking to anyone."
},
{
id: crypto.randomUUID(),
heading: "Where It Sits in My Journey",
text: "XtremeFit was an early project. The goal was to practice building a real, multi-section website that felt complete and professional. Looking back it’s a clear marker of where I started, which makes projects like SmartBudget a clearer indicator of how far the thinking has come."
}
]

export const gtstore = [
    {
      id: crypto.randomUUID(),
    heading: "The Context",
text: "Early in my frontend journey I wanted to go beyond todo apps and weather widgets. I wanted to build something that simulated how a real product works end-to-end. GTStore was that project."
},
{
id: crypto.randomUUID(),
heading: "What I Built",
text: "A fully functional e-commerce experience covering everything a real store needs. Product browsing, category filtering, cart management, wishlist, and a multi-step checkout flow with shipping and billing inputs.",
text2: "No real payment integration, but every step before it works as it would in production."
},
{
id: crypto.randomUUID(),
heading: "What I Was Learning",
text: "This project was where I got serious about state management, component architecture, and handling real user flows. Managing cart and wishlist state persistently, building a multi-step form that validated correctly, and keeping the UI clean across all of it was the real exercise."
},
{
id: crypto.randomUUID(),
heading: "What It Taught Me",
text: "That building something that looks simple on the surface gets complex fast once real flows are involved. GTStore is where I stopped thinking about components and started thinking about how users move through a product."
}      
]

export const skillsync = [
    {
        id: crypto.randomUUID(),
    heading: "The Problem",
text: "Job searching meant jumping between multiple boards, manually checking if each role matched my skills. I wanted a tool that could just read my resume and surface relevant jobs automatically. SkillSync is that tool."
},
{
    id: crypto.randomUUID(),
heading: "What I Built and Why",
text: "SkillSync takes your resume, extracts your skills, and matches you with real remote jobs pulled from RemoteOK and Arbeitnow, two of the more reliable sources for remote listings.",
text2: "The matching is straightforward but intentional. I built a curated skills library covering both technical and non-technical skills. When a resume is uploaded, the parser checks it against that library and pulls out what it finds, then surfaces jobs relevant to those skills.",
text3: "It’s not perfect. No predefined list can cover every skill that exists. But it works accurately for what’s in it, and the foundation is solid enough to expand."
},
{
    id: crypto.randomUUID(),
heading: "The Hard Part",
text: "Parsing resumes was the real challenge. Resumes come in as PDFs or DOCX files with no guaranteed structure. Getting PDF.js and Mammoth to extract readable text consistently, then running skill extraction against it reliably, took the most iteration."
},
{
    id: crypto.randomUUID(),
heading: "Thinking About the User",
text: "Users can try to skip steps or navigate directly via URL. I added route guards so that if someone hasn’t uploaded a resume yet and tries to jump to job listings, they get redirected back. The flow stays intact without breaking the experience.",
text2: "I also added persistent bookmarking so users can save jobs and come back to apply without losing their list."
}
]

export const smartbudget = [
    {
        id: crypto.randomUUID(),
    heading: "The Problem",
text: "Most budgeting apps do the same thing. You log a transaction, it shows up in a list. SmartBudget was built on a different belief: a financial tracker should actively work for the user, not just store their data."
},
{
    id: crypto.randomUUID(),
heading: "What I Built and Why",
text: "SmartBudget gives users a real-time picture of their finances the moment they log in. Not just numbers, but context.",
text2: "The anomaly detection watches spending by category. If you’ve consistently spent $100-$150 on shopping for five months and suddenly spend $1,200, SmartBudget catches it and notifies you.",
text3: "The forecast model uses three to four months of transaction history to predict what a user is likely to spend in a category the following month.",
text4: "Everything exportable. Everything visible upfront."
},
{
    id: crypto.randomUUID(),
heading: "The Hard Part",
text: "Building anomaly detection meant isolating expenses from income, grouping them by category and month, then calculating totals to establish a baseline. Only then could the system reliably flag what looked off."
},
{
    id: crypto.randomUUID(),
heading: "Thinking About the User",
text: "When I tested it myself from a non-technical perspective, navigation wasn’t immediately obvious. I added a guided onboarding flow. Small decision, but it changed how the product felt on first use."
}
]