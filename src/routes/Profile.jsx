import React from "react";
import avatar1 from "../assets/images/avatar.jpg";

const Profile = () => {
  return (
    <div className="h-[90vh] bg-gray-50 p-6 flex flex-col overflow-y-auto overflow-y-auto">
      <img
        src={user.avatar}
        alt={user.name}
        className="w-40 h-40 rounded-full border-gray-300 mb-4"
      />

      <h2 className="text-xl font-bold">{user.name}</h2>
      <p className="text-gray-500 mb-4">{user.bio}</p>

      <div className="mb-4">
        <p className="mb-2">
          <span className="font-semibold">Email:</span> {user.email}
        </p>
        <p>
          <span className="font-semibold">Phone:</span> {user.phone}
        </p>
      </div>

      <div className="mb-4">
        <h2 className="font-semibold mb-2">Skills:</h2>
        <div className="flex flex-wrap gap-2">
          {user.skills.map((skill, idx) => (
            <span
              key={idx}
              className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const user = {
  name: "Raymond Chuks",
  email: "raymondchuks@gmail.com",
  bio: "Passionate and detail-oriented Front-End Developer with a strong focus on creating engaging, responsive, and user-friendly web applications. Over the years, I have honed my skills in HTML, CSS, JavaScript, and modern frameworks like React, Vue.js, and Angular, building dynamic interfaces that prioritize performance and accessibility. My work revolves around translating complex designs into seamless digital experiences while ensuring clean, maintainable code. ",
  avatar: avatar1,
  skills: [
    "React",
    "Tailwind",
    "JavaScript",
    "TypeScript",
    "Git",
    "GitHub",
    "MUI",
    "Javascript",
    "Bootstrap",
    "CSS",
    "HTML",
  ],
  phone: "+234 813 376 2450",
};
export default Profile;
