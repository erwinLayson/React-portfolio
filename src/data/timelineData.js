export const experienceData = {
    type: "experience",
    icon: "💼",
    content: [
      {
        id: 1,
        title: "Freelance Web Developer",
        company: "Self-Employed",
        date: "2024 - Present",
        description: "Building custom web solutions for academic and personal projects. Developing full-stack applications using React, Node.js, and various databases.",
        type: "experience"
      },
      {
        id: 2,
        title: "Web Development Projects",
        company: "Academic & Client Work",
        date: "2023 - 2024",
        description: "Created school-related web systems for classmates and students from other sections. Focused on delivering functional solutions within academic deadlines.",
        type: "experience"
      },
      {
        id: 3,
        title: "Junior Developer",
        company: "Personal Projects",
        date: "2022 - 2023",
        description: "Started learning web development fundamentals. Built small projects to understand HTML, CSS, JavaScript, and basic backend concepts.",
        type: "experience"
      }
    ]
  };

export const educationData = {
  type: "education",
  icon: "🎓",
  content: [
    {
      id: 1,
      title: "Bachelor of Science in Information Technology",
      company: "Sultan Kudarat State University Isulan Campus",
      date: "2023 - present",
      description: "Studying advanced programming courses, such as PHP, CodeIgniter, Laravel, React, Node.js, and Express.js",
      type: "education"
    },
    {
      id: 2,
      title: "Bachelor of Science in Information Technology",
      company: "Sultan Kudarat State University Isulan Campus",
      date: "2022 - 2023",
      description: "Practicing programming fundamentals and basic web development like HTML and CSS ",
      type: "education"
    },
    {
      id: 3,
      title: "Senior High School - Automotive Strand",
      company: "San Emanuel Natinal HighSchool",
      date: "2019 - 2021",
      description: "Completed A Automotive NC2 strand. Learned Automotive fundamentals and basic Trouble shooting.",
      type: "education"
    }
  ]
};

export const timelineData = [...experienceData.content, ...educationData.content];
