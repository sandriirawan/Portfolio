import { useEffect, useState } from "react";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import NavbarComponent from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import { useServer } from "./service/mirage";
import Loader from "./components/Loader";
import { animateScroll } from "react-scroll";
import Footer from "./components/Footer/Footer";

function App() {
  const { setupMigrae } = useServer();
  const [data, setData] = useState("");
  const [projects, setProjects] = useState([]);
  const [skills, setSkills] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const handleData = async () => {
    try {
      setupMigrae();
      fetch("api/users/1")
        .then((response) => response.json())
        .then((data) => {
          setData(data.users);
        });
      fetch("api/projects")
        .then((response) => response.json())
        .then((data) => {
          setProjects(data.projects);
        });
      fetch("api/skills")
        .then((response) => response.json())
        .then((data) => {
          setSkills(data.skills);
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleData();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      console.log("isLoading set to false");
    }, 3000);
  }, []);

  const options = {
    duration: 500,
    smooth: true,
    containerId: "haha3",
  };

  const scrollTo = () => {
    animateScroll.scrollTo(1000, options);
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="App bg-[#2a2b2c] w-screen flex-1">
          <NavbarComponent />

          <div id="haha1">
            <Home data={data} />
          </div>
          <div id="haha2">
            <About skills={skills} />
          </div>
          <div id="haha3">
            <Projects projects={projects} />
          </div>
          <Footer data={data}  />
        </div>
      )}
    </>
  );
}

export default App;
