import React from "react";
import Navbar from "./Navbar";
import adithya from "../assets/Adithya Bandara.jpeg";
import nipuna from "../assets/Nipuna Fernando.jpeg";
import sahan from "../assets/Aluthge s perera.jpg";
import gimhana from "../assets/Kaluarachchige_Gimhana.jpg";
import kumara from "../assets/Kande Kumara.jpeg";
import muniwara from "../assets/Muniwara T jayasiri.PNG";
import theekshana from "../assets/Theekshana Poholiyadda.jpg";
import warnasuriya from "../assets/Warnasuriya sawanmie.png";
import Footer from "./Footer";

const AboutUs = () => {
  const teamMembers = [
    {
      name: "Nipuna Fernando",
      role: "Frontend & Backend Developer",
      image: nipuna,
      bio: "Passionate about creating seamless user experiences, this developer specializes in both frontend and backend development, delivering full-stack solutions with elegant code.",
    },
    {
      name: "Adithya Bandara",
      role: "Frontend & Backend Developer",
      image: adithya,
      bio: "Skilled in backend development, this team member focuses on building scalable systems, API design, and database management to ensure smooth server-client communication",
    },
    {
      name: "Aluthge S Perera",
      role: "Frontend & Backend Developer",
      image: sahan,
      bio: "Bringing creativity to the team, this developer excels at designing beautiful, responsive user interfaces with expertise in frontend frameworks and UX/UI design.",
    },
    {
      name: "Kaluarachchige Gimhana",
      role: "Frontend & Backend Developer",
      image: gimhana,
      bio: "A versatile full-stack developer who ensures seamless integration between backend systems and frontend functionality, with a focus on API integration.",
    },
    {
      name: "Kande Kumara",
      role: "Frontend & Backend Developer",
      image: kumara,
      bio: "Specializing in database management and backend development, this team member creates efficient data models and ensures fast, reliable performance.",
    },
    {
      name: "Muniwara T Jayasiri",
      role: "Frontend & Backend Developer",
      image: muniwara,
      bio: "Focused on building responsive websites, this developer places a strong emphasis on testing and quality assurance, ensuring smooth, bug-free user experiences.",
    },
    {
      name: "Theekshana Poholiyadda",
      role: "Frontend & Backend Developer",
      image: theekshana,
      bio: "Expertise in building APIs and cloud services with a focus on Node.js, Express, and cloud infrastructure deployment, ensuring scalable and efficient solutions.",
    },
    {
      name: "Wranasuriya Sawanmie",
      role: "Frontend & Backend Developer",
      image: warnasuriya,
      bio: "A strong advocate for agile development, this team member leads sprints and fosters collaboration within the team to ensure timely delivery of projects and successful outcomes.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <div className="bg-gray-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            Our Story
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            "We're passionate about bringing stories to life and empowering
            minds through the world of books, fostering knowledge, imagination,
            and growth for readers of all ages."
          </p>
        </div>
      </div>

      {/* Mission and Vision */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-gray-600 rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
            <p className="text-white">
              "Our mission is to create a seamless platform where book lovers
              can discover, explore, and connect with stories that inspire,
              educate, and entertain. We aim to promote a culture of reading
              while making books accessible to everyone, anytime, anywhere."
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Our Vision
            </h2>
            <p className="text-gray-600">
              "Our vision is to become the go-to online destination for book
              enthusiasts worldwide, fostering a global community of readers and
              authors. We aspire to ignite a lifelong love for reading by
              offering a diverse collection of books, personalized
              recommendations, and an exceptional user experience."
            </p>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-600 rounded-lg shadow-md p-6">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Innovation and Growth
              </h3>
              <p className="text-white">
                We embrace change and continuously innovate to create the best
                possible platform for book lovers.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Collaboration
              </h3>
              <p className="text-gray-600">
                We value teamwork and partnerships, working closely with
                authors, publishers, and readers to create a vibrant community
                centered around books. Together, we aim to make reading more
                accessible and enjoyable for everyone.
              </p>
            </div>

            <div className="bg-gray-600 rounded-lg shadow-md p-6">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Excellence</h3>
              <p className="text-white">
                We strive for the highest standards in everything we do, from
                curating quality books to delivering an exceptional user
                experience. Our commitment to excellence ensures that our
                platform remains a trusted and valuable resource for readers
                worldwide.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      {/* Team Section */}
      <div className="max-w-7xl mx-auto px-4 py-16 flex flex-col items-center place-items-center">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Our Contributors
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 place-items-center">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-lg shadow-md p-6 flex flex-col items-center text-center border"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full mb-4 object-cover transition-all duration-0 ease-in-out hover:rounded-lg"
              />
              <h3 className="text-xl font-bold text-black mb-1">
                {member.name}
              </h3>
              <p className="text-blue-600 mb-3">{member.role}</p>
              <p className="text-gray-600">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gray-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">10+</div>
              <div className="text-blue-100">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-blue-100">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">300+</div>
              <div className="text-blue-100">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-blue-100">Team Members</div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
