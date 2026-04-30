export interface ClubItem {
  name: string;
  role?: string;
  period?: string;
  description?: string;
  highlights?: string[];
  keySkills?: string[];
}

export const clubsData: ClubItem[] = [
 {
  name: "Google Developer Groups (GDG) On Campus",
  role: "Tech Lead",
  period: "2024 - Present",
  description:
    "Led technical events and mentored students in AI, web, and embedded systems.",
  highlights: [
    "Organized 10+ workshops/hackathons",
    "Mentored 80+ students"
  ],
  keySkills: ["Leadership", "Mentorship", "Event Management"],
},
  // {
  //   name: "NCC (National Cadet Corps)",
  //   role: "Cadet",
  //   period: "2016 - 2019",
  //   description:
  //     "Trained in leadership, drills, and team-based activities; participated in national-level camps.",
  //   highlights: ["Attended regional camp", "Discipline and leadership training"],
  //   keySkills: ["Leadership", "Teamwork", "Discipline"],
  // },
];
