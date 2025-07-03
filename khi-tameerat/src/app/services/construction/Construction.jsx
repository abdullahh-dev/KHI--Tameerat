import axios from "axios";
import bgImg from "../../../assets/images/bg-images/constructionbg.jpeg";
import BasicTabs from "../../_lib/Tabs.jsx";

import BGSection from "../../components/BgSection";

import { useEffect, useState } from "react";
import { backend_url } from "../../../config/index.js";
function Renovation() {
  const [myProjects, setProjects] = useState([]);
  useEffect(() => {
    axios
      .get(`${backend_url}/api/projects?sort=title:asc&populate=*`)
      .then((res) => {
        const setFilteredProjects = res.data.data
          .filter((p) => p.category === "construction")
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

  const constructionData = {
    img: bgImg,
    title: "Construction",
    desc: "Exploring groundbreaking projects, innovations, and advancements in the construction industry.",
  };

  return (
    <div className="bg-gray-50">
      <BGSection data={constructionData} />
      <BasicTabs data={myProjects} title="Our Construction Projects" />
    </div>
  );
}

export default Renovation;
