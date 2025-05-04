export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  grade?:string;
  description: string;
  achievements: string[];
  keySkills?: string[];
  type?:string
}

export const educationData: EducationItem[] = [
  {
    degree: "Bachelor of Technology in Computer Science and Technology",
    institution: "Presidency University Bengaluru",
    location: "Bengaluru, Karnataka, IN",
    period: "Aug 2023 - Aug 2027",
    grade:"8.34 CGPA",
    description:
      "Completed coursework in algorithms, data structures, software engineering, artificial intelligence, machine learning, and finance.",
    achievements: [
      "CGPA: 8.34",
      "Participated in IEEE Codethon"
    ],
    keySkills: [
      "Data Structures", "Algorithms", "AI/ML", "Big Data",
      "OOP", "Software Engineering", "Cryptography", "Finance"
    ],
    type:"higher"
  },
  {
    degree: "Secondary High School, Science (Computer Science)",
    institution: "Kendriya Vidyalaya Karwar",
    location: "Karwar, Karnataka, IN",
    period: "Aug 2020 - Jul 2022",
    grade:"88.8%",
    description:
      "Completed senior secondary education with a focus on science and computer science.",
    achievements: [
      "Grade: 88.8%",
      "School Sports Captain (12th), Vice Captain (11th)",
      "Member of NCC and athletics team"
    ],
    keySkills: [
      "Team Leadership", "Python", "MySQL", "Decision-Making"
    ],
    type:"school"
  },
  {
    degree: "Middle & High School, Science",
    institution: "Kendriya Vidyalaya Karwar",
    location: "Karwar, Karnataka, IN",
    period: "Jun 2015 - Jul 2020",
    description:
      "Completed education from 6th to 10th grade with active participation in sports and Olympiads.",
    achievements: [
      "Won Individual Sports Championship (10th grade)",
      "National Level Athlete (400m & 600m, 2018-19)",
      "Gold Medal - International Maths Olympiad & Art",
      "Member of National Cadet Corps (NCC)"
    ],
    type:"school"
  }
];
