import bgImg from "../../../assets/images/bg-images/renovation.jpg";
import BasicTabs from "../../_lib/Tabs.jsx";

import axios from "axios";
import BGSection from "../../components/BgSection";
import { backend_url } from "../../../config/index.js";
import { useEffect, useState } from "react";

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

  const renovationData = {
    img: bgImg,
    title: "Renovation",
    desc: "",
  };

  return (
    <div className="bg-gray-50">
      <BGSection data={renovationData} />
      <BasicTabs data={projects} title="Our Renovation Projects" />
    </div>
  );
}

export default Renovation;
