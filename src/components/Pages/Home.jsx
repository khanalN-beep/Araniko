import React from 'react';
// import firstpi from "../assets/firstpi.png";

const TeamPage = () => {
  const adminTeam = [
    {
        name: "YAVNIKA GARG",
        title: "Project Associate, 3 year",
        image: ".akks",
        stars: 3
      },
    {
      name: "GOURANSHI CHOUDHARY",
      title: "Chief in Design, 12 year",
      image: "/api/placeholder/200/200",
      stars: 3
    },
    {
      name: "KIMAYA PATIL",
      title: "Project Lead, 11 year",
      image: "/api/placeholder/200/200",
      stars: 3
    }
  ];

  const professorTeam = [
    {
      name: "YAVNIKA GARG",
      title: "Project Associate, 3 year",
      image: "/api/placeholder/200/200",
      stars: 3
    },
    {
      name: "GOURANSHI CHOUDHARY",
      title: "Chief in Design, 12 year",
      image: "/api/placeholder/200/200",
      stars: 3
    },
    {
      name: "KIMAYA PATIL",
      title: "Project Lead, 11 year",
      image: "/api/placeholder/200/200",
      stars: 3
    },
    {
      name: "YAVNIKA GARG",
      title: "Project Associate, 3 year",
      image: "/api/placeholder/200/200",
      stars: 3
    },
    {
      name: "GOURANSHI CHOUDHARY",
      title: "Chief in Design, 12 year",
      image: "/api/placeholder/200/200",
      stars: 3
    },
    {
      name: "KIMAYA PATIL",
      title: "Project Lead, 11 year",
      image: "/api/placeholder/200/200",
      stars: 3
    }
  ];

  // Component to render a team member card
  const TeamMemberCard = ({ member }) => (
    <div className="flex flex-col items-center mb-8">
      <div className="w-full h-32 bg-teal-600 flex justify-center overflow-hidden">
        <img 
          src={member.image} 
          alt={member.name} 
          className="h-full object-cover grayscale"
        />
      </div>
      <h3 className="font-bold text-sm mt-2">{member.name}</h3>
      <p className="text-xs text-gray-600">{member.title}</p>
      <div className="flex mt-1">
        {[...Array(member.stars)].map((_, i) => (
          <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
          </svg>
        ))}
      </div>
    </div>
  );

  // Component to render a team section
  const TeamSection = ({ title, members }) => (
    <div className="mb-10">
      <h2 className="text-lg font-medium mb-6">{title}</h2>
      <div className="grid grid-cols-3 gap-4">
        {members.map((member, index) => (
          <TeamMemberCard key={index} member={member} />
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="w-full bg-teal-600 text-white p-8">
        <h1 className="text-2xl font-bold mb-1">MEET THE TEAM</h1>
        <p className="text-sm">Get to know the developers who designed behind the website</p>
      </div>

      {/* Main quote section */}
      <div className="max-w-4xl mx-auto py-8 px-4">
        <p className="text-gray-700 leading-relaxed mb-8">
          It is a general belief that a french change is a big task and a very difficult thing to achieve. However with a little hard work and focus it is possible. The makes opportunity for changing your future is to get a good CGPA. For this, think about vision regularly. Though the night seems without end, bring, it has its benefits. It helps prevent unpleasant surprises. Thank you so much for being our teacher.
        </p>

        {/* Admin Team Section */}
        <TeamSection title="Admin" members={adminTeam} />

        {/* Professor Team Section */}
        <TeamSection title="Professor" members={professorTeam} />
      </div>
    </div>
  );
};

export default TeamPage;