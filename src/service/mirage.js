import { Model, createServer } from "miragejs";

export const useServer = () => {
  const setupMigrae = () => {
    createServer({
      models: {
        users: Model,
        projects: Model,
        skills: Model,
      },

      routes() {
        this.namespace = "api";

        this.get("/projects", (schema) => {
          return schema.projects.all();
        });
        this.get("/skills", (schema) => {
          return schema.skills.all();
        });

        this.get("/users/1", (schema) => {
          return schema.users.find(1);
        });
      },
      seeds(server) {
        server.db.loadData({
          users: [
            {
              id: 1,
              name: "Sandri Irawan",
              email: "sandriirawan01@gmail.com",
              image:
                "https://res.cloudinary.com/ddn4pon2w/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1698158806/rndtjkrumm68gaibunoo.jpg?_s=public-apps",
              linkedin: "https://www.linkedin.com/in/sandriirawann/",
              github: "https://github.com/sandriirawan",
              resume:
                "https://drive.google.com/file/d/1ZbBPacJ2VvZU7eRlvzzOOSqY_nQQKxkE/view?usp=sharing",
              about:
                "I am a Full Stack Developer who has a passion for programming skills. I have experience in javaScript to develop Web and Mobile apps, especially in Android Platform. I have some programming skills, such as React Native,ReactJs and NodeJs. I am a person who always wants to learn and grow. I am also adaptive and collaborative person in a team",
            },
          ],
          skills: [
            {
              id: 1,
              Skill: "HTML",
              image:
                "https://res.cloudinary.com/ddn4pon2w/image/upload/v1698366088/5847f5bdcef1014c0b5e489c_u8et5h.png",
            },
            {
              id: 2,
              Skill: "CSS",
              image:
                "https://res.cloudinary.com/ddn4pon2w/image/upload/v1698366486/css-logo_y3n7wf.png",
            },
            {
              id: 3,
              Skill: "JavaScript",
              image:
                "https://res.cloudinary.com/ddn4pon2w/image/upload/v1698355675/javascript-removebg-preview_ns3v0e.png",
            },
            {
              id: 4,
              Skill: "React",
              image:
                "https://res.cloudinary.com/ddn4pon2w/image/upload/v1698366529/pngwing.com_1_unnn1h.png",
            },
            {
              id: 5,
              Skill: "NextJS",
              image:
                "https://res.cloudinary.com/ddn4pon2w/image/upload/v1698364691/nextjs-icon-2048x1234-pqycciiu_knxc1b.png",
            },
            {
              id: 7,
              Skill: "NodeJS",
              image:
                "https://res.cloudinary.com/ddn4pon2w/image/upload/v1698364475/download_jetquj.png",
            },
            {
              id: 9,
              Skill: "PostgreSQL",
              image:
                "https://res.cloudinary.com/ddn4pon2w/image/upload/v1698590840/pngwing.com_2_axkyua.png",
            },
            {
              id: 10,
              Skill: "MySQL",
              image:
                "https://res.cloudinary.com/ddn4pon2w/image/upload/v1698590899/pngegg_ca3tkd.png",
            },
            {
              id: 11,
              Skill: "Boostrap",
              image:
                "https://res.cloudinary.com/ddn4pon2w/image/upload/v1698590585/Bootstrap_logo.svg_mg67wh.png",
            },
            {
              id: 12,
              Skill: "Tailwind",
              image:
                "https://res.cloudinary.com/ddn4pon2w/image/upload/v1698248935/Tailwind_CSS_nvtmq2.png",
            },
          ],
          projects: [
            {
              projects_id: 1,
              project_name: "Blanja E-Commerce",
              demo: "https://blanja-delta.vercel.app/home",
              repository: "https://github.com/sandriirawan/Fe_Blanja_React",
              image:
                "https://res.cloudinary.com/ddn4pon2w/image/upload/v1698248069/jh65szcgwa0d4fjk9x6p.png",
            },
            {
              projects_id: 2,
              project_name: "Peworld Job Search",
              demo: "https://peworld-six.vercel.app/",
              repository: "https://github.com/sandriirawan/Fe_PeWorld_Next",
              image:
                "https://res.cloudinary.com/ddn4pon2w/image/upload/v1698248022/onxal1jvbvuesop2mj6u.png",
            },
            {
              projects_id: 3,
              project_name: "Food Recipe Website",
              demo: "https://team-project-kelompok1-pijar-frontend.vercel.app/home",
              repository:
                "https://github.com/vineas/team-project_kelompok1_pijar_frontend",
              image:
                "https://res.cloudinary.com/ddn4pon2w/image/upload/v1698248045/kdxe26cbmdrhh2tkx8gm.png",
            },
            {
              projects_id: 4,
              project_name: "Food Recipe Mobile App",
              demo: "https://drive.google.com/file/d/1zUsDEw-Lyy8DnTZzhGsAS7tS7_FOJ92e/view?usp=sharing",
              repository: "https://github.com/sandriirawan/Fe_Food_Recipe_RN",
              image:
                "https://res.cloudinary.com/ddn4pon2w/image/upload/v1698248045/kdxe26cbmdrhh2tkx8gm.png",
            },
          ],
        });
      },
    });
  };

  return {
    setupMigrae,
  };
};
