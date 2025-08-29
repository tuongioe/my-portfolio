import React from "react";
import ProjectCard from "./ProjectCard";
import ButtonComponent from "./ButtonComponent";

export default function Projects() {
  return (
    <div>
      <div className="container mx-auto px-4">
        <h1 className="text-center text-5xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-400 text-transparent bg-clip-text drop-shadow-lg mt-20">
          My Projects
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-5 lg:gap-x-0 gap-x-2 lg:mt-20 justify-items-center mt-20">
          <a
            href="https://github.com/tuongioe/Smart_Scheduler.git"
            target="_blank"
          >
            <ProjectCard
              preview="https://res.cloudinary.com/ddwkzkht5/image/upload/v1756283240/A%CC%89nh_ma%CC%80n_hi%CC%80nh_2025-08-27_lu%CC%81c_15.27.05_rsypig.png"
              name="Smart Scheduler"
              technologies={[
                "https://res.cloudinary.com/ddwkzkht5/image/upload/v1756266178/react_okpmut.png",
                "https://res.cloudinary.com/ddwkzkht5/image/upload/v1756266178/tailwind_na1qu8.png",
                "https://res.cloudinary.com/ddwkzkht5/image/upload/v1756283433/javaspring-removebg-preview_j0b4l4.png",
                "https://res.cloudinary.com/ddwkzkht5/image/upload/v1756283434/mysql-removebg-preview_s4hm4t.png",
                "https://res.cloudinary.com/ddwkzkht5/image/upload/v1756266919/docker-removebg-preview_ufuent.png",
              ]}
            />
          </a>
          <a
            href="https://github.com/tuongioe/IE402_Food-Finder.git"
            target="_blank"
          >
            <ProjectCard
              preview="https://res.cloudinary.com/ddwkzkht5/image/upload/v1756285681/A%CC%89nh_ma%CC%80n_hi%CC%80nh_2025-08-27_lu%CC%81c_16.07.40_pfmre7.png"
              name="Food finder"
              technologies={[
                "https://res.cloudinary.com/ddwkzkht5/image/upload/v1756266178/react_okpmut.png",
                "https://res.cloudinary.com/ddwkzkht5/image/upload/v1756285824/supabase_uhynsu.png",
                "https://res.cloudinary.com/ddwkzkht5/image/upload/v1756278653/vscode_e5oozz.png",
              ]}
            />
          </a>
          <a href="https://github.com/tuongioe/Styling-.git" target="_blank">
            <ProjectCard
              preview="https://res.cloudinary.com/ddwkzkht5/image/upload/v1756286225/A%CC%89nh_ma%CC%80n_hi%CC%80nh_2025-08-27_lu%CC%81c_16.16.19_jwiuqw.png"
              name="Styling"
              technologies={[
                "https://res.cloudinary.com/ddwkzkht5/image/upload/v1756266178/react_okpmut.png",
                "https://res.cloudinary.com/ddwkzkht5/image/upload/v1756286289/nodejs_cybb88.png",
                "https://res.cloudinary.com/ddwkzkht5/image/upload/v1756266919/mongo-removebg-preview_bxutnl.png",
                "https://res.cloudinary.com/ddwkzkht5/image/upload/v1756278653/vscode_e5oozz.png",
              ]}
            />
          </a>
          <a href="https://tuongioe.github.io/theband/" target="_blank">
            <ProjectCard
              preview="https://res.cloudinary.com/ddwkzkht5/image/upload/v1756286839/A%CC%89nh_ma%CC%80n_hi%CC%80nh_2025-08-27_lu%CC%81c_16.27.01_z1cy7z.png"
              name="Black Pink"
              technologies={[
                "https://res.cloudinary.com/ddwkzkht5/image/upload/v1756266177/html_zn7lc9.png",
                "https://res.cloudinary.com/ddwkzkht5/image/upload/v1756266176/css_g2qopx.png",
                "https://res.cloudinary.com/ddwkzkht5/image/upload/v1756266177/js_cvf7cy.png",
              ]}
            />
          </a>
          <a href="https://moovee-lyart.vercel.app/" target="_blank">
            <ProjectCard
              preview="https://res.cloudinary.com/ddwkzkht5/image/upload/v1756287572/A%CC%89nh_ma%CC%80n_hi%CC%80nh_2025-08-27_lu%CC%81c_16.39.22_los4p5.png"
              name="MooVee"
              technologies={[
                "https://res.cloudinary.com/ddwkzkht5/image/upload/v1756266178/react_okpmut.png",
                "https://res.cloudinary.com/ddwkzkht5/image/upload/v1756266178/tailwind_na1qu8.png",

                "https://res.cloudinary.com/ddwkzkht5/image/upload/v1756278653/vscode_e5oozz.png",
              ]}
            />
          </a>
          <a
            href="https://apps.powerapps.com/play/e/default-2dff09ac-2b3b-4182-9953-2b548e0d0b39/a/d82781c1-2a77-4040-993e-afe54d5c01d9?tenantId=2dff09ac-2b3b-4182-9953-2b548e0d0b39&hint=b71f53e6-d58e-46f6-beb8-48e37565df2e&sourcetime=1756443277687"
            target="_blank"
          >
            <ProjectCard
              preview="https://res.cloudinary.com/ddwkzkht5/image/upload/v1756289058/A%CC%89nh_ma%CC%80n_hi%CC%80nh_2025-08-27_lu%CC%81c_17.04.08_wmk0rz.png"
              name="Device Management"
              technologies={[
                "https://res.cloudinary.com/ddwkzkht5/image/upload/v1756278652/power_v26gyu.png",
              ]}
            />
          </a>
          <a
            href="https://drive.google.com/drive/folders/1wkw-ytSbT5zHvG5T_kk_vpq2kXqDeILa"
            target="_blank"
          >
            <ProjectCard
              preview="https://res.cloudinary.com/ddwkzkht5/image/upload/v1756290644/A%CC%89nh_ma%CC%80n_hi%CC%80nh_2025-08-27_lu%CC%81c_17.30.31_dxhnci.png"
              name="SEO"
              technologies={[
                "https://res.cloudinary.com/ddwkzkht5/image/upload/v1756290736/wp_ds6dnk.png",
              ]}
            />
          </a>
          <a
            href="https://drive.google.com/drive/folders/1FHHlhV5Jmbv8MFHg6TK8FgmQsU4kDfqb?fbclid=IwZXh0bgNhZW0CMTEAAR5kfvjOlD5t0pJ2_eHUhuEjo0nzacc1omJ-61wAfLQFJnUJhjLVixrpX4OqPQ_aem_tRdJ46DtXMvKyVeerc653g"
            target="_blank"
          >
            <ProjectCard
              preview="https://res.cloudinary.com/ddwkzkht5/image/upload/v1756291177/A%CC%89nh_ma%CC%80n_hi%CC%80nh_2025-08-27_lu%CC%81c_17.39.28_woecke.png"
              name="E-commerce"
              technologies={[
                "https://res.cloudinary.com/ddwkzkht5/image/upload/v1756266178/react_okpmut.png",
                "https://res.cloudinary.com/ddwkzkht5/image/upload/v1756266178/tailwind_na1qu8.png",
                "https://res.cloudinary.com/ddwkzkht5/image/upload/v1756286289/nodejs_cybb88.png",
                "https://res.cloudinary.com/ddwkzkht5/image/upload/v1756266919/mongo-removebg-preview_bxutnl.png",
                "https://res.cloudinary.com/ddwkzkht5/image/upload/v1756278653/vscode_e5oozz.png",
              ]}
            />
          </a>
          <a href="https://github.com/ntritin62/IE307.git" target="_blank">
            <ProjectCard
              preview="https://res.cloudinary.com/ddwkzkht5/image/upload/v1756288193/A%CC%89nh_ma%CC%80n_hi%CC%80nh_2025-08-27_lu%CC%81c_16.49.43_mh0ebr.png"
              name="Lappu Store"
              technologies={[
                "https://res.cloudinary.com/ddwkzkht5/image/upload/v1756266178/react_okpmut.png",
                "https://res.cloudinary.com/ddwkzkht5/image/upload/v1756442274/styledcomponent_r5a2my.png",
                "https://res.cloudinary.com/ddwkzkht5/image/upload/v1756286289/nodejs_cybb88.png",
                "https://res.cloudinary.com/ddwkzkht5/image/upload/v1756266919/mongo-removebg-preview_bxutnl.png",
                "https://res.cloudinary.com/ddwkzkht5/image/upload/v1756278653/vscode_e5oozz.png",
              ]}
            />
          </a>
        </div>
      </div>
    </div>
  );
}
