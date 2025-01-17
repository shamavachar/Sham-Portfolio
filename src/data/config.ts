const config = {
  title: "Sham Avachar | Full-Stack Developer",
  description: {
    long: "Explore the portfolio of Sham, a full-stack developer and creative technologist specializing in interactive web experiences, 3D animations, and innovative projects. Discover my latest work, including Coding Ducks, The Booking Desk, Ghostchat, and more. Let's build something amazing together!",
    short:
      "Discover the portfolio of Sham, a full-stack developer creating interactive web experiences and innovative projects.",
  },
  keywords: [
    "Sham",
    "portfolio",
    "full-stack developer",
    "creative technologist",
    "web development",
    "3D animations",
    "interactive websites",
    "Coding Ducks",
    "The Booking Desk",
    "Ghostchat",
    "web design",
    "GSAP",
    "React",
    "Next.js",
    "Spline",
    "Framer Motion",
  ],
  author: "Sham Avachar",
  email: "shamavachar20@gmail.com",
  site: "#",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "#",
    linkedin: "#",
    instagram: "#",
    facebook: "#",
    github: "#",
  },
};
export { config };
