"use client";
import React, { useState, useEffect  } from "react";

const Topics = () => {
    const [htmlContent, setHtmlContent] = useState("");

    const databases = [
      "Skill Education as per Need of the Time",
      "Role of Incubations in Shaping Startup",
      "What Tech Institutions can do for Societal Startups",
      "Can ITIs, Schools, and NITs work together to Nurture Startups",
      "Induction of Startup Culture on the School Level",
      "Role of Research and Development in Academic driven Startups",
      "Funding and Investment for Academic driven Startups",
      "Challenges and Barriers Faced by Academic driven Startups",
      "Success Stories and Case Studies of Academic driven Startups",
      "Entrepreneurship Education and Training in Academic Institutions",
      "The Role of Industry-Academia Partnership in Startup Ecosystem",
      "Sustainable and Socially Responsible Startups from Academia",
      "Intellectual Property Management for Academic driven Startups",
      "Globalization and Internationalization of Academic Startups",
      "Scaling of Academic driven Startups: Strategies and Pitfalls",
      "Sustainability and Environmental Impact of Academic Startups",
      "Diversity and Inclusivity in Academic Startups",
      "Startup Failure and Lessons Learned",
      "Cyber Security and Data Privacy in Academic driven Tech Startups",
      "Healthcare and Biotech Startups from Academia",
      "Mentorship and Support Network for Academic Startups",
      "Measuring the Socioeconomic Impact of Academic Startups",
      "Corporate Partnership with Academic Startups",
      "Policy and Regulation: Facilitating or Hindering Academic Startups",
      "Cross-disciplinary Collaboration in Academic Startups",
      "Blockchain and Decentralized Technologies in Academic Startups",
      "E-commerce and Retail Innovations from Academic Institutions",
      "Artificial Intelligence and Machine Learning in Academic Startups",
      "Necessity of Making Registration of Startup Compulsory as Part of Curriculum for Technical Field Students",
      "Can Tech Institutions Adopt One Village for Creating the Atmosphere of Startup in Rural Area",
      "How Socially Grown Startups take Advantage of Infrastructure of Tech Institutions",
      "Government Initiatives and Policies for Promoting Academic driven Startups"
      
    ];
  
    return (
      <div className="p-4">
         <h1 className="text-black text-xl font-semibold py-2">
      Call for papers
        </h1>
        <h1 className="text-black  font-semibold py-2">
        Academicians, Researchers and Industrialists are invited to submit abstracts on the following areas and related topics:
        </h1>
        <ul className="list-disc list-inside sm:grid sm:grid-cols-2">
          {databases.map((database, index) => (
            <li
              key={index}
              className="relative before:text-xl before:text-black before:mr-2 text-black"
            >
              {database}
            </li>
          ))}
        </ul>
      </div>
    );
}

export default Topics