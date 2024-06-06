import React from 'react';
import kabeer from '../../../assets/images/team_images/kabeer.jpg';
import ilman from '../../../assets/images/team_images/Ilman.png';
import nadeem from '../../../assets/images/team_images/nadeem.png';
import haseeb from '../../../assets/images/team_images/haseeb.jpg';
import junaid from '../../../assets/images/team_images/junaid.jpg';
import mahira from '../../../assets/images/team_images/mahira.jpg';
function TeamSection() {
  const teamData = [
    {
      name: 'Engr. Muhammad Kabeer',
      src: kabeer,
      title: 'CEO',
    },
    {
      name: 'Engr. Ilman Awan',
      src: ilman,
      title: 'Founder',
    },
    {
      name: 'Engr. Haseeb Ali Khan',
      src: haseeb,
      title: 'Co Founder / Operational Manager',
    },
    {
      name: 'Engr. Muhammad Junaid',
      src: junaid,
      title: 'Director Build Out',
    },
    {
      name: 'Engr. Muhammad Nadeem',
      src: nadeem,
      title: 'Director Maintenance',
    },
    {
      name: 'Engr. Mahira Zulifqar',
      src: mahira,
      title: 'HR Manager',
    },
  ];

  return (
    <>
      <div class="py-20">
        <div class="container mx-auto px-6 md:px-12 xl:px-32">
          <div class="grid gap-12 items-center md:grid-cols-3">
            {teamData.map((t, i) => (
              <div key={i} className="space-y-4 group text-center">
                <img
                  className="w-64 h-80 mx-auto object-cover group-hover:scale-[1.06] duration-700 rounded-xl md:w-48 md:h-64 lg:w-64 lg:h-80"
                  src={t.src}
                  alt={t.src}
                  loading="lazy"
                  width="1000"
                  height="667"
                />
                <div className="group-hover:translate-x-4 duration-700">
                  <h4 className="text-xl font-medium text-gray-600">
                    {t.name}
                  </h4>
                  <span className="block text-md font-medium text-[#a1a1a1]">
                    {t.title}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default TeamSection;
