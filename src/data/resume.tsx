import { Icons } from "@/components/icons";
import { CodeIcon, HomeIcon, NotebookIcon, PencilLine } from "lucide-react";

export const DATA = {
  name: "Rodrigo Santos",
  initials: "RS",
  url: "https://github.com/RodrigoRafaelSantos7",
  location: "Lisbon, Portugal",
  locationLink: "https://www.google.com/maps/place/lisbon",
  description:
    "Computer Science student. Passionate about theoretical computer science and crafting digital experiences.",
  summary:
    "In late 2022, I embarked on my journey in higher education by [enrolling in a Bachelor's Degree in Computer Science](/#education). My passion for theoretical computer science was ignited in Spring 2024, when I took [João Ribeiro](https://sites.google.com/site/joaorib94/)'s exceptional course in Theory of Computation. This course deepened my interest in theoretical computer science with a particular emphasis on complexity theory, cryptography, and pseudorandomness, leading me to dedicate significant time and effort to further study these subjects. Since then, I have dedicated myself to further studying these subjects. In parallel with my academic pursuits, I co-founded a startup called S&X in 2024 with a colleague, leveraging our combined skills and knowledge to drive innovative solutions in the tech industry.",
  avatarUrl: "/profile.png",
  skills: [
    "React",
    "Next.js",
    "Typescript/Javascript",
    "Java",
    "Ocaml",
    "TailwindCSS",
    "SQL",
    "Git",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
    { href: "/projects", icon: CodeIcon, label: "Projects" },
    { href: "/notes", icon: PencilLine, label: "Notes" },
  ],
  contact: {
    email: "rrc.santos@campus.fct.unl.pt",
    tel: "Available upon request",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/RodrigoRafaelSantos7",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/rodrigo-santos-502b802b9/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "",
        icon: Icons.x,

        navbar: false,
      },
      Youtube: {
        name: "Youtube",
        url: "",
        icon: Icons.youtube,
        navbar: false,
      },
      Email: {
        name: "Send Email",
        url: "mailto:rrc.santos@campus.fct.unl.pt",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "S&X - Web Agency",
      href: "",
      badges: [],
      location: "Remote",
      title: "Co-Founder",
      logoUrl: "",
      start: "May 2024",
      end: "Present",
      description:
        "I oversee the comprehensive management of our agency, including the development and implementation of websites and web applications. Our focus is on creating fast, secure, and innovative digital experiences that drive business growth. We specialize in enhancing online exposure for our clients using cutting-edge technologies such as React, TailwindCSS, TypeScript, and Next.js.",
    },
  ],
  education: [
    {
      school: "Nova University Lisbon",
      href: "https://www.unl.pt/en",
      degree: "Bachelor's Degree of Computer Science (BCS)",
      logoUrl: "/nova.png",
      start: "2022",
      end: "Present",
    },
  ],
  projects: [
    {
      title: "Test UI",
      href: "#",
      dates: "June 2024 - Present",
      active: true,
      description:
        "Designed, developed and sold animated websites and web applications.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Aceternity",
      ],
      links: [
        {
          type: "Website",
          href: "#",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "#",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
  ],
} as const;
