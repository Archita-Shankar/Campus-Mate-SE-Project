import React from "react";

// You can replace this with your team images or any other relevant content
import screenshot from "../../Images/Screenshot 2024-11-29 000506.png"; 

const AboutUs = () => {
  return (
    <div className="about-us-page">
      <div className="container mx-auto px-6 py-12">
        {/* Page Heading */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-900">About Us</h1>
          <p className="text-lg text-gray-600 mt-2">
            We are a passionate team focused on delivering high-quality
            solutions.
          </p>
        </div>

        {/* Our Mission Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-800">Our Mission</h2>
          <p className="mt-4 text-lg text-gray-600">
            Our project is driven by a team of dedicated professionals with a
            shared vision: to create innovative, efficient, and scalable
            solutions that address real-world challenges. Combining expertise in
            software development, data analysis, and networking, we aim to
            bridge the gap between theory and practical application through
            cutting-edge technology.
          </p>
          <p className="mt-4 text-lg text-gray-600">
            We focus on solving complex problems with a user-centric approach,
            ensuring that every solution is both functional and impactful. From
            optimizing code for performance to developing network management
            systems, we prioritize efficiency, scalability, and reliability. Our
            commitment to excellence is reflected in our thorough testing and
            validation processes, which guarantee that our solutions meet the
            highest standards of quality.
          </p>
          <p className="mt-4 text-lg text-gray-600">
            Collaboration is at the heart of our work. We foster an environment
            where creativity and knowledge-sharing thrive, enabling us to tackle
            even the most intricate challenges. By continuously refining our
            strategies and adopting flexible methodologies, we ensure that our
            solutions remain ahead of the curve.
          </p>
          <p className="mt-4 text-lg text-gray-600">
            Ultimately, our project is about more than just solving problems;
            it’s about empowering individuals and organizations to succeed and
            creating lasting, meaningful change through technology.
          </p>
        </div>

        {/* Our Team Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-gray-800">
            Meet the Team
          </h2>
          <div className="mt-6 flex justify-center">
            <div className="team-member mx-6">
              <img
                className="w-32 h-32 rounded-full mx-auto"
                src={screenshot}
                alt="Team Member"
              />
              <p className="text-xl font-semibold mt-4">Archita Shankar</p>
              <p className="text-gray-500">Student</p>
            </div>
            <div className="team-member mx-6">
              <img
                className="w-32 h-32 rounded-full mx-auto"
                src={screenshot}
                alt="Team Member"
              />
              <p className="text-xl font-semibold mt-4">Vishu</p>
              <p className="text-gray-500">Student</p>
            </div>
            <div className="team-member mx-6">
              <img
                className="w-32 h-32 rounded-full mx-auto"
                src={screenshot}
                alt="Team Member"
              />
              <p className="text-xl font-semibold mt-4">Shreya Singh</p>
              <p className="text-gray-500">Student</p>
            </div>
            <div className="team-member mx-6">
              <img
                className="w-32 h-32 rounded-full mx-auto"
                src={screenshot}
                alt="Team Member"
              />
              <p className="text-xl font-semibold mt-4">Mehak Singla</p>
              <p className="text-gray-500">Student</p>
            </div>
          </div>
        </div>

        {/* Contact Us Section */}
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-gray-800">Contact Us</h2>
          <p className="mt-4 text-lg text-gray-600">
            Have any questions or want to collaborate? Feel free to get in touch
            with us!
          </p>
          <button className="mt-6 px-8 py-3 bg-red-600 text-white rounded-lg">
            Get in Touch
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
