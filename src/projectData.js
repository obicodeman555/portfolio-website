import itsolutionsImage from "./assets/itsolution-grap.png";
import enbeloImage from "./assets/enbelo-grap.png";
import bpImage from "./assets/bp-grap.png";
import fglcImage from "./assets/fglch-grap.png";
import valoriseLdPg from "./assets/valorise-ldpg.png";


export const projects = [

    {
        projectName: "Valorise",
        websiteLink: "https://valorise.co.uk",
        readMoreLink: "valorise",
        imgSrc: `${valoriseLdPg}`,
        group: "website",
        tools: ["React", "CSS3", "Hostgator", "Netlify", "Github"]
    },
    {
        projectName: "ITSolutions",
        readMoreLink: "itsolutions",
        websiteLink: "itsolutions.app",
        imgSrc: `${itsolutionsImage}`,
        group: "web app",
        tools: ["Next JS", "Cloudfare", "REST APIs", "React Query"]
    },
    {
        projectName: "Brand Protection",
        readMoreLink: "brand-protection",
        websiteLink: "http://bp.trustedpartners.software/login",
        imgSrc: `${bpImage}`,
        group: "web app",
        tools: ["React", "TypeScript", "REST APIs", "Redux"]
    },
    {
        projectName: "Enbelo",
        readMoreLink: "enbelo",
        websiteLink: "enbelo.com",
        imgSrc: `${enbeloImage}`,
        group: "website",
        tools: ["React", "CSS3", "Netlify", "Zoho"]
    },
    {
        projectName: "Francis Gilbert Law Chambers",
        readMoreLink: "francis-gilbert-law-chambers",
        websiteLink: "francisgilbertlawchambers.com",
        imgSrc: `${fglcImage}`,
        group: "website",
        tools: ["React JS", "CSS3", "Netlify", "Zoho"]
    },

]


