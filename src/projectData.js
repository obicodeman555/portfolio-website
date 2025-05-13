import jgImage from "./assets/just-gadgets.png";
import cardtonicImage from "./assets/cardtonic-img-1.png";
import breetImage from "./assets/breet-img-1.png";
import valoriseLdPg from "./assets/valorise-ldpg.png";

export const projects = [
  {
    projectName: "Cardtonic",
    readMoreLink: "cardtonic",
    websiteLink: "cardtonic.com",
    imgSrc: `${cardtonicImage}`,
    group: "web app",
    tools: ["Next JS", "CSS3(SCSS)", "Vercel", "NodeJS", "AWS", "MongoDB"],
  },
  {
    projectName: "Breet",
    readMoreLink: "breet",
    websiteLink: "breet.io",
    imgSrc: `${breetImage}`,
    group: "web app",
    tools: ["NextJS", "CSS3(SCSS)", "Vercel", "NodeJS", "AWS", "MongoDB"],
  },
  {
    projectName: "Valorise",
    websiteLink: "valorise.co.uk",
    readMoreLink: "valorise",
    imgSrc: `${valoriseLdPg}`,
    group: "website",
    tools: ["React", "CSS3", "Hostgator", "Netlify"],
  },
  {
    projectName: "Just Gadgets",
    readMoreLink: "just",
    websiteLink: "dev.cardtonic.com/gadgets",
    imgSrc: `${jgImage}`,
    group: "web app",
    tools: [
      "NextJS",
      "CSS3(SCSS)",
      "Vercel",
      "NodeJS",
      "Mongo DB",
      "Digital Ocean",
    ],
  },
];
