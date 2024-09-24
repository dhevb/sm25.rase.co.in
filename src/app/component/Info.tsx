"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

const Info = () => {
  let text1 = `Jawaharlal Nehru University is the foremost university in India, and a world-renowned centre for teaching and research. Ranked number one in India by the National Assessment and Accreditation Council (NAAC) with a Grade Point of 3.91 (on a scale of 4), JNU was ranked no 3 among all universities in India by the National Institutional Ranking Framework, Government of India, in 2016 and no 2 in 2017. JNU also received the Best University Award from the President of India in 2017. Still a young university, established by an act of Parliament in 1966, the strength, energy, and reputation of Jawaharlal Nehru University result from the vision that ideas are a field for adventure, experimentation and unceasing quest, and that diversity of opinions are the basis for intellectual exploration. JNU is the place for the intellectually restless, the insatiably curious, and the mentally rigorous, giving them the space to grow amidst the calmness of an oasis, a green lung within the hustle and bustle and the crowds of the capital city of India.

Coming into being in 1969, three years after its establishment by Parliament, JNU brought frontier disciplines and newer perspectives for old disciplines to the Indian university system. The excellent teacher-student ratio at 1:10, the mode of instruction which encourages students to explore their own creativity instead of reproducing received knowledge, and of exclusively internal evaluation, were also new to the Indian academic landscape and have stood the test of time. The very Nehruvian objectives embedded in the founding of the University – ‘national integration, social justice, secularism, the democratic way of life, international understanding and a scientific approach to the problems of society’, had built into them constant and energetic endeavour to renew knowledge through self- questioning.

The educational philosophy of the university gets translated into its somewhat unorthodox academic structure. Grounded in a faith in the unity of knowledge, JNU has sought to avoid the narrowly conceived Department structure of conventional universities, preferring instead to bring allied disciplines within a few broad and inclusive entities called Schools, under whose interactive ambit are placed the more specialized units, called Centres, There are also Special Centres that are outside even the broad structures of School but may grow further. Then there are Research Clusters that cut across Schools and Centres as well as some programmes, which are placed within specific schools but are built on the interests of faculty across the university. At present there are ten Schools and four Special Centres in the University.

JNU was the first to offer courses in foreign languages in an integrated five year MA programme. At the Master’s level, where most of the Schools begin their academic programme, training is largely oriented towards single disciplines (although all M.A. students are encouraged to do a few courses outside their subject) but at the research level the disciplinary boundaries become more permeable. Work in overlapping or borderline areas – e.g., between environment and literary studies, economics and science, sociology and aesthetics, or linguistics and biology – is not uncommon among the Ph. D. students of JNU. Not only are the research scholars encouraged to cross the invisible walls around disciplines, the relationship between the academia and the world outside also remains negotiable, often resulting in mutually beneficial collaboration in areas that form crossroads for developing an understanding of society, culture and science.

As in the academic structure, so in its teaching process and evaluation pattern, JNU was one of the first in India to depart from the well- trodden path by emphasizing the continuity of the learning process rather than isolating the final exam as the only tool of measuring achievement. Grading is done throughout the semester, ensuring students’ participation and involvement in curricular work, and re-animating the collaborative process of generating knowledge in the class room. Even at the M.A. level, students are encouraged to carry out independent research projects in limited areas which result in short term paper. 

Apart from its regular faculty, JNU has over the years established specially designated ‘Chairs’ – Rajiv Gandhi Chair, Appadorai Chair, Nelson Mandela Chair, Dr. Ambedkar Chair, RBI Chair, SBI Chair, Sukhomay Chakravarty Chair, Environmental Law Chair, Greek Chair, Tamil Chair, and Kannada Chair.
`;

  const text2 = `The foundation of the Department of Holistic Education (DHE) is rooted in the ideology that education should extend beyond academic institutions. Vidya Bharti, the largest educational NGO globally, established a dedicated think tank Department comprising professionals from diverse fields such as academia, bureaucracy, higher and school education, society, scientists, and other experts like advocates and chartered accountants. DHE was conceptualized in 2021 by visionary ISRO scientist Dr Thakur SKR under the guidance of educationist and social reformer Shri Vijay Kumar Nadda, Organising Secretary, Vidya Bharti - North zone as a pilot project under Vidya Bharti Punjab. Recognizing its remarkable growth and contributions to education, it was elevated to an independent organization under the auspices of Vidya Bharti Institute of Training and Research Trust.

  Currently, DHE operates under the trust's umbrella. With 25 dedicated cells led by coordinators, DHE spearheads various initiatives aimed at transforming the education system. These include groundbreaking projects such as E-cycle, Punjab Super 100, Tredul, Sarvatr, Holistic Harbour, PoojaWala, TuDu, Swadeshi Bazaar, Jobs360. DHE has  also revived the glorious saga of having dedicated Kumbh/Mahakumbh for each major issue of society prevailing in ancient Bharat by creating annual large scale events in the form of Shiksha Mahakumbh and Shiksha Kumbh, attracting dignitaries and stakeholders from diverse fields. Additionally, DHE laid foundation of a quarterly journal called "Viksit India," covering a wide range of educational topics to make Bharat a self reliant hub in terms of educational and scientific publication. The Department comprises 310 professionals from diverse backgrounds  who are volunteering their service to shape the nation through education apart from 4 full-time employees and 20 graduate engineer trainees.
  
  The Department of Holistic Education, Vidya Bharti, stands at the forefront of a noble mission to promote education rooted in Bhartiya values and culture on a global scale. With unwavering dedication spanning several decades, we have been committed to ensuring the welfare of all through holistic education. This journey has seen the successful launch of the "Shiksha Mahakumbh" initiative, which made its historic debut in June 2023, with the inaugural session held at NIT Jalandhar, marking a momentous stride in our quest to reimagine education.

  Owing to the overwhelming demand from educational institutions to host future editions of Shiksha Mahakumbh, we are thrilled to announce that the quota for this groundbreaking initiative has been booked until 2025. However, we recognize the pressing need to reach every corner of our educational ecosystem and maintain the momentum of Shiksha Mahakumbh's transformative impact.
  
  To this end, we introduce "Shiksha Kumbh," a groundbreaking concept designed to complement Shiksha Mahakumbh and ensure that the light of education reaches every institution. The first edition of Shiksha Kumbh is scheduled to take place at NIT Kurukshetra in December 2023. This event represents a focused and area-specific effort, allowing us to concentrate on select groups and address unique challenges while upholding our commitment to holistic and culturally rooted education.
  
  Shiksha Kumbh promises to be a beacon of educational innovation, collaboration, and empowerment, reinforcing our mission to revitalize education and ensure its alignment with India's timeless cultural and philosophical values. We invite you to join us on this incredible journey as we work together to redefine education and ensure the welfare of all. `;

  const text3 = `"Shiksha Mahakumbh is the brainchild of Dr. Thakur SKR, a prominent ISRO scientist and staunch RSS worker, which took shape under the able guidance of Mr. Vijay Kumar Nadda, a visionary and forward-looking RSS Pracharak and Organising Secretary of Vidya Bharti (North Zone).

  The inaugural edition of Shiksha Mahakumbh i.e., National Conference on Recent Advances in School Education (RASE 2023) was organised by Sarvhitkari Educational Society, a prominent unit of Vidya Bharti –Akhil Bhartiya Shiksha Sansthan in the state of Punjab, in collaboration with Dr. B. R. Ambedkar National Institute of Technology Jalandhar. The conference was held from June 9 to 11, 2023, at the esteemed premises of Dr. B. R. Ambedkar National Institute of Technology, Jalandhar.

  During the campaign of Shiksha Mahakumbh, the voice of conducting this very massive and innovative event annually in collaboration with Institutions of National Importance arose. Several Directors of these Institutions and Vice-Chancellors of Central Universities demanded its next edition in their Institutions. Accordingly, the matter was discussed within the committee of this mass movement and it’s decided to book its first 5 editions in collaboration with these Institutions of National Importance. When the agreement of its 2nd edition was signed between Department of Holistic Education, the originating place of this mass movement and Indian Institute of Technology Ropar, the news spread across the country. Thereafter several other Universities demanded for its editions in their institutions. Then the managing committee decided to launch its another franchise i.e., Shiksha Kumbh. Accordingly, the mass movement translated into Shiksha Mahakumbh – an annual event for the entire globe and Shiksha Kumbh – an annual event for field-specific participants of the globe.

  The foremost objective of Shiksha Mahakumbh is to cultivate an environment conducive to the effective implementation of the National Education Policy 2020 (NEP). Moreover, this conference franchise aspires to congregate and facilitate the exchange of insights and research findings among distinguished academic scientists, researchers, research scholars, and industry experts, encompassing all facets of school and higher education. This endeavor, spearheaded by the Department of Holistic Education of Vidya Bharti, is unparalleled on a global scale, aiming to annually unite the 26.5 Crore school students and 4.25 Crore college/university students from across Bharat on a single platform to decide the direction of Bhartiya Education in a similar fashion as was the practice in ancient Bharat. It achieves this laudable goal through its collaboration with Institutions of National Importance.

  "Shiksha Mahakumbh is managed by the Event Management Cell of the Department of Holistic Education, which is a new generation Think Tank of Vidya Bharti.

 `;

  const [isText1Expanded, setIsText1Expanded] = useState(false);
  const [isText2Expanded, setIsText2Expanded] = useState(false);
  const [isText3Expanded, setIsText3Expanded] = useState(false);
  const [isMobile, setIsMobile] = useState(true); // Default to mobile layout

  const toggleText1 = () => {
    setIsText1Expanded(!isText1Expanded);
  };

  const toggleText2 = () => {
    setIsText2Expanded(!isText2Expanded);
  };
  const toggleText3 = () => {
    setIsText3Expanded(!isText3Expanded);
  };

  useEffect(() => {
    const handleWindowResize = () => {
      function isMobileScreen() {
        // Define your mobile breakpoint (e.g., 640px)
        return window.innerWidth < 640;
      }
      // Update isMobile based on screen width
      setIsMobile(isMobileScreen());
    };
    function isMobileScreen() {
      // Define your mobile breakpoint (e.g., 640px)
      return window.innerWidth < 640;
    }
    // Check window size initially
    setIsMobile(isMobileScreen());

    // Add a listener for window resize events
    window.addEventListener("resize", handleWindowResize);

    // Remove the listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []); // Empty dependency array to run this effect only once

  // Define the text class based on isMobile
  const textClass = isMobile ? "text-l" : "text-l";
  const textClassHeading = isMobile ? "text-xl" : "text-xl";

  return (
    <div className="bg-[#d6d7d435] px-4 py-2 flex flex-col justify-between items-start">
      <h1
        className={`${textClassHeading} font-semibold py-2 text-primary text-center`}
      >
        About Shiksha MahaKumbh
      </h1>
      <div
        className={`whitespace-pre-line text-justify ${textClass} text-black`}
      >
        {isText3Expanded ? text3 : isMobile ? `${text3.slice(0, 242)}...` : `${text3.slice(0, 500)}...`}
        <button
          onClick={toggleText3}
          className={`text-primary font-bold ${isText3Expanded ? "hidden" : ""}`}
        >
          Read More
        </button>
      </div>
     
      <h1
        className={`${textClassHeading} font-semibold py-2 text-primary text-center text-2xl`}
      >
        Jawaharlal Nehru University
      </h1>
      <div
        className={`whitespace-pre-line text-justify ${textClass} text-black`}
      >
        {isText1Expanded ? text1 : isMobile ? `${text1.slice(0, 249)}...` : `${text1.slice(0, 500)}...`}
        <button
          onClick={toggleText1}
          className={`text-primary font-bold ${isText1Expanded ? "hidden" : ""}`}
        >
          Read More
        </button>
      </div>

      <h1
        className={`${textClassHeading} font-semibold py-2 text-primary text-center`}
      >
        Department of Holistic Education
      </h1>
      <div
        className={`whitespace-pre-line text-justify ${textClass} text-black`}
      >
        {isText2Expanded ? text2 : isMobile ? `${text2.slice(0, 242)}...` : `${text2.slice(0, 500)}...`}
        <button
          onClick={toggleText2}
          className={`text-primary font-bold ${isText2Expanded ? "hidden" : ""}`}
        >
          Read More
        </button>
      </div>
    </div>
  );
};

export default Info;
