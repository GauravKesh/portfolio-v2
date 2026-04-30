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
    name: "Google Developers Group ",
    role: "Tech Lead",
    period: "2024 - Present",
    description:
      "Participated in organizing tech workshops, hackathons and guest lectures focused on embedded systems and AI.",
    highlights: ["Organized 3 workshops", "Mentored 10+ participants"],
    keySkills: ["Events", "Mentorship", "AI/Embedded"],
  },
  {
    name: "NCC (National Cadet Corps)",
    role: "Cadet",
    period: "2016 - 2019",
    description:
      "Trained in leadership, drills, and team-based activities; participated in national-level camps.",
    highlights: ["Attended regional camp", "Discipline and leadership training"],
    keySkills: ["Leadership", "Teamwork", "Discipline"],
  },
];
