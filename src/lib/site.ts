export const site = {
  heroFirstLine: "Jide-Akinwale",
  heroSecondLine: "Akinbolaji",
  name: "Jide-Akinwale Akinbolaji",
  role: "Frontend Engineer",
  email: "jideakinbolaji@gmail.com",
  github: "https://github.com/akored3",
  // TODO: replace with the real number in international format, e.g. https://wa.me/2348012345678
  whatsapp: "https://wa.me/0000000000",
  about: {
    headline: "I BUILD WEBSITES, SHARPEN BRANDS, SHIP FAST.",
    bio: [
      "For companies of all sizes, from ambitious startups and SMEs to massive corporations, I design and develop websites and software solutions. Whether it's a landing page, an entire web application, or a sophisticated system, my objective is straightforward: transform concepts into products that run fast, scale effectively, and look beautiful.",
      "When I'm not deep in a codebase, you'll usually find me grinding ranked matches in Call of Duty Mobile, catching up on the latest animated films, or nerding out about business ideas with friends. I bring the same focus I put into a clutch match into every project I take on.",
      "I'm currently open to new projects and collaborations. If you're a founder with an idea, a growing business ready for a digital upgrade, or an enterprise team that needs an extra pair of expert hands: send a DM. Let's make your brand digital, global, and unforgettable.",
    ],
    tools: [
      {
        title: "Frontend Tools",
        items:
          "JavaScript (ES6+), TypeScript, React, Next.js, HTML5, CSS3, Git/GitHub.",
      },
      {
        title: "UI & Motion",
        items: "Tailwind CSS, Motion (Framer Motion), Figma to code.",
      },
      {
        title: "Backend Tools",
        items: "Node.js, REST APIs, Supabase, Firebase.",
      },
    ],
    watchCaption:
      "A few movies and series I can recommend if you're looking for something to watch :)",
    // link is optional (IMDb, trailer, wherever).
    watchlist: [
      { title: "Death Proof", image: "/watch/deathproof.webp", link: "" },
      { title: "Kill Bill", image: "/watch/killbill.jpg", link: "" },
      { title: "Avatar", image: "/watch/avatar.webp", link: "" },
      { title: "Mad God", image: "/watch/madgod.jpg", link: "" },
      // Leave image empty to render the code-drawn typographic poster card
      // instead of real art.
      { title: "Heat", image: "/watch/heat.webp", link: "" },
      { title: "Isle of Dogs", image: "/watch/isleofdogs.jpg", link: "" },
      { title: "Rick and Morty", image: "/watch/rickandmorty.jpg", link: "" },
      { title: "Primal", image: "/watch/primal.jpg", link: "" },
      { title: "Castlevania", image: "/watch/castlevania.jpg", link: "" },
      {
        title: "Love, Death & Robots",
        image: "/watch/lovedeathandrobot.jpg",
        link: "",
      },
      {
        title: "Cyberpunk: Edgerunners",
        image: "/watch/cyberpunk.webp",
        link: "",
      },
    ],
  },
  work: {
    headline: "MY PROJECTS",
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
    ],
  },
};
