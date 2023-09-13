import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";

function Projects() {
  const projectsData = [
    {
      image: "/raniservers.png",
      projectName: "Rani Servers",
      projectLink: "https://rani-servers.vercel.app/",
      projectDescription:
        `Rani Server is a CS:GO server hosting website that allows users to rent or buy VIP access to 128 tick servers with custom plugins like !ws, !knife, !gloves, and !agents that enable them to use any skin in the game. The servers are hosted on oracle's VM.Standard.E2.1.Micro instance [they were running on aws ec2 t2.micro instances before] running Ubuntu and created using LinuxGSM. The website is hosted on vercel.`,
      projectTech: [
        "NextJS",
        "AWS EC2",
        "LinuxGSM",
        "Firebase",
        "Stripe",
        "Vercel"
      ],
      projectExternalLinks: {
        github: "https://github.com/rakshit-bhardwaj/rani-servers",
        externalLink: "https://rani-servers.vercel.app/",
      },
    },
    {
      image: "/dhanvaani.png",
      projectName: "DhanVaani",
      projectLink: "https://github.com/parthvohra25/DhanVaani",
      projectDescription:
        "DhanVaani is a dynamic React Native application designed to enhance financial literacy and awareness among users. The app serves as a comprehensive platform that aggregates and delivers daily financial news articles from diverse categories in multiple languages(for now in English and Hindi). With an emphasis on accessibility, the content is accompanied by audio support, catering to auditory learners and individuals seeking multi-lingual resources. This was a group project we built for BlackRock HackKnight hackathon. I was responsible for frontend of the app and a nodejs server for datafetching",
      projectTech: [
        "React Native",
        "Node.js",
      ],
      projectExternalLinks: {
        github: "https://github.com/parthvohra25/DhanVaani",
        externalLink: "https://github.com/parthvohra25/DhanVaani",
      },
    },
    {
      image: "/cryptowatcher.png",
      projectName: "Crypto Watcher",
      projectLink: "https://rakshit-bhardwaj.github.io/crypto-watcher/",
      projectDescription:
        "crypto watcher is an insightful ReactJS web app which helps user to keep track of various cryptocurrencies. This app uses CoinGecko API to get data regarding cryptocurrencies. Firebase user authentication is used to enable user to login with email/password or with google. logging in enables users to keep a watch list of cryptos they are interested in.",
      projectTech: [
        "ReactJS",
        "Node.js",
        "Firebase",
        "Material UI",
        "chartJS",
        "CoinGecko",
      ],
      projectExternalLinks: {
        github: "https://github.com/rakshit-bhardwaj/crypto-watcher",
        externalLink: "https://rakshit-bhardwaj.github.io/crypto-watcher/",
      },
    },
  ];
  return (
    <div className="projects" id="work">
      <motion.div
        className="title"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        variants={{
          visible: { opacity: 1, y: -50 },
          hidden: { opacity: 0, y: 0 },
        }}
      >
        <h2>Some Things I’ve Built</h2>
      </motion.div>
      <div className="projects-container">
        {projectsData.map(
          ({
            image,
            projectDescription,
            projectLink,
            projectExternalLinks,
            projectName,
            projectTech,
          }) => {
            return (
              <motion.div
                className="project"
                key={projectName}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                variants={{
                  visible: { opacity: 1, y: -50 },
                  hidden: { opacity: 0, y: 0 },
                }}
              >
                <div className="project-image">
                  <div className="project-image-overlay"></div>
                  <div className="project-image-container">
                    <Image src={image} fill alt={projectName} quality={100} />
                  </div>
                </div>
                <div className="project-info">
                  <p className="project-info-overline">Featured Project</p>
                  <h3 className="project-info-title">{projectName}</h3>
                  <div className="project-info-description">
                    <p>{projectDescription}</p>
                  </div>
                  <ul className="project-info-tech-list">
                    {projectTech.map((tech) => (
                      <li className="project-info-tech-list-item" key={tech}>
                        {tech}
                      </li>
                    ))}
                  </ul>
                  <ul className="project-info-links">
                    <li className="project-info-links-item">
                      <Link
                        href={projectExternalLinks.github}
                        className="project-info-links-item-link"
                      >
                        <FiGithub />
                      </Link>
                    </li>
                    <li className="project-info-links-item">
                      <Link
                        href={projectExternalLinks.externalLink}
                        className="project-info-links-item-link"
                      >
                        <FiExternalLink />
                      </Link>
                    </li>
                  </ul>
                </div>
              </motion.div>
            );
          }
        )}
      </div>
    </div>
  );
}

export default Projects;
