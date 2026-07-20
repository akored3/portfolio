export const site = {
  heroFirstLine: "Jide-Akinwale",
  heroSecondLine: "Akorede",
  // Credibility ledger rendered at the bottom of the hero. Numeric values so
  // the odometer can roll to them; "Builds shipped" borrows the Work
  // section's vocabulary so the "+" is backed by "More builds on GitHub".
  stats: [
    { value: 4, suffix: "", label: "Years of experience" },
    { value: 4, suffix: "+", label: "Builds shipped" },
  ],
  name: "Jide-Akinwale Akinbolaji",
  role: "Frontend Engineer",
  email: "jideakinbolaji@gmail.com",
  github: "https://github.com/akored3",
  whatsapp: "https://wa.me/2347013598435",
  // Shared by <head> metadata and the generated OG card.
  meta: {
    title: "Jide-Akinwale Akinbolaji | Frontend Engineer",
    description:
      "Portfolio of Jide-Akinwale Akinbolaji, a freelance frontend engineer building fast, high-converting websites and web apps. Open to work.",
  },
  about: {
    headline: "I BUILD WEBSITES, SHARPEN BRANDS, SHIP FAST.",
    bio: [
      "For companies of all sizes, from ambitious startups and SMEs to massive corporations, I design and develop websites and software solutions. Whether it's a landing page, an entire web application, or a sophisticated system, my objective is straightforward: transform concepts into products that run fast, scale effectively, and look beautiful.",
      "When I'm not deep in a codebase, you'll usually find me grinding ranked matches in Call of Duty Mobile, catching up on the latest animated films, or nerding out about business ideas with friends. I bring the same focus I put into a clutch match into every project I take on.",
      "I'm currently open to new projects and collaborations. If you're a founder with an idea, a growing business ready for a digital upgrade, or an enterprise team that needs an extra pair of expert hands: send a DM. Let's make your brand digital, global, and unforgettable.",
    ],
    tools: [
      {
        title: "Core Stack",
        items:
          "JavaScript (ES6+), TypeScript, React, Next.js, HTML5, CSS3, Git/GitHub.",
      },
      {
        title: "UI & Motion",
        items: "Tailwind CSS, Motion (Framer Motion), Figma to code.",
      },
      {
        title: "Server & Data",
        items: "Node.js, REST APIs, Supabase, Firebase.",
      },
    ],
    watchCaption:
      "When I log off, one of these is probably playing. Borrow a pick if you need one.",
    // link is optional (IMDb, trailer, wherever).
    watchlist: [
      {
        title: "Death Proof",
        image: "/watch/deathproof.webp",
        link: "https://www.imdb.com/title/tt1028528/",
      },
      {
        title: "Kill Bill",
        image: "/watch/killbill.jpg",
        link: "https://www.imdb.com/title/tt0266697/",
      },
      {
        title: "Avatar",
        image: "/watch/avatar.webp",
        link: "https://www.imdb.com/title/tt0499549/",
      },
      {
        title: "Mad God",
        image: "/watch/madgod.jpg",
        link: "https://www.imdb.com/title/tt15090124/",
      },
      // Leave image empty to render the code-drawn typographic poster card
      // instead of real art.
      {
        title: "Heat",
        image: "/watch/heat.webp",
        link: "https://www.imdb.com/title/tt0113277/",
      },
      {
        title: "Isle of Dogs",
        image: "/watch/isleofdogs.jpg",
        link: "https://www.imdb.com/title/tt5104604/",
      },
      {
        title: "Rick and Morty",
        image: "/watch/rickandmorty.jpg",
        link: "https://www.imdb.com/title/tt2861424/",
      },
      {
        title: "Primal",
        image: "/watch/primal.jpg",
        link: "https://www.imdb.com/title/tt10332508/",
      },
      {
        title: "Castlevania",
        image: "/watch/castlevania.jpg",
        link: "https://www.imdb.com/title/tt6517102/",
      },
      {
        title: "Love, Death & Robots",
        image: "/watch/lovedeathandrobot.jpg",
        link: "https://www.imdb.com/title/tt9561862/",
      },
      {
        title: "Cyberpunk: Edgerunners",
        image: "/watch/cyberpunk.webp",
        link: "https://www.imdb.com/title/tt12590266/",
      },
    ],
  },
  contact: {
    headline: "LET'S BUILD",
    prompt:
      "Have a project in mind, or a website that should be working harder for you?",
    // Prefilled so a lead can hit send without composing anything.
    emailSubject: "Let's work together",
    emailBody: "Hi Jide, I've got a project I'd like to talk about.",
  },
  footer: {
    note: "Need a website?",
  },
  work: {
    headline: "SELECTED WORK",
    subtitle:
      "A selection of builds for founders and growing brands. Fast to load, sharp to look at, easy to use.",
    // Leave image empty to render the code-drawn browser card; baked
    // laptop-mockup PNGs live in public/projects/ (bake-mockups pipeline in
    // the session scratchpad). github is optional: private repos just skip
    // the button.
    projects: [
      {
        title: "SECTION-97",
        description:
          "Stay Metal. A cyberpunk streetwear store with real accounts, a live cart, and Paystack checkout in naira. No frameworks anywhere, just vanilla JavaScript talking straight to Supabase.",
        tags: ["Vanilla JS", "Supabase", "Paystack"],
        live: "https://section-97.vercel.app",
        github: "https://github.com/akored3/section_97",
        image: "/projects/section-97.png",
      },
      {
        title: "Loju's Healthy Bites",
        description:
          "A Bauhaus-styled site for a healthy fast food brand in Nigeria. Every order runs through WhatsApp deeplinks: no backend, no cart, no friction between craving and checkout.",
        tags: ["React 19", "TanStack Start", "Tailwind CSS", "Motion"],
        live: "https://lojus-healthy-bites.vercel.app",
        github: "https://github.com/akored3/lojus-healthy-bites",
        image: "/projects/lojus-healthy-bites.png",
      },
      {
        title: "Brokelock",
        description:
          "A commitment savings vault on the Monad blockchain. Lock money toward a goal: withdraw free after the deadline, but quit early and the penalty goes straight to your accountability partner. No backend, no database. The smart contract is the app.",
        tags: ["React", "viem", "Solidity", "Monad"],
        live: "https://brokelock.vercel.app",
        github: "https://github.com/akored3/brokelock",
        image: "/projects/brokelock.png",
      },
    ],
  },
};

// Canonical origin for sitemap/robots, resolved from Vercel's production env
// at build time (same source Next uses for its metadataBase fallback).
// Replace with the custom domain when one exists.
export const productionOrigin = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "http://localhost:3000";

// Prefilled mailto shared by the Contact CTA and the footer email button.
export const emailHref = `mailto:${site.email}?subject=${encodeURIComponent(
  site.contact.emailSubject,
)}&body=${encodeURIComponent(site.contact.emailBody)}`;
