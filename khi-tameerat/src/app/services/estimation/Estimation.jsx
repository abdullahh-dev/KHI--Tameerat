import { useEffect, useState } from "react";
import bgImg from "../../../assets/images/bg-images/estimation.jpg";
import BasicTabs from "../../_lib/Tabs.jsx";

import axios from "axios";
import BGSection from "../../components/BgSection";
import { backend_url } from "../../../config/index.js";
function Renovation() {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    axios
      .get(`${backend_url}/api/projects?sort=title:asc&populate=*`)
      .then((res) => {
        const setFilteredProjects = res.data.data
          .filter((p) => p.category === "renovation")
          .map((project) => {
            return {
              id: project.id,
              title: project.title,
              description: project.description,
              images: project.project_image.map((img) => `${img.url}`),
            };
          });

        setProjects(setFilteredProjects);
      })
      .catch((err) => {
        console.error("Error fetching projects:", err);
      });
  }, []);

  const estimationData = {
    img: bgImg,
    title: "Estimation & Drafting",
    desc: "",
  };
  return (
    <div className="bg-gray-50">
      <BGSection data={estimationData} />
      <BasicTabs data={projects} title="Our Estimation Projects" />
    </div>
  );
}

export default Renovation;
