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
    name: "IEEE Student Chapter",
    role: "Member / Volunteer",
    period: "2022 - Present",
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
  {
    name: "Athletics Team",
    role: "Sprinter / Team Captain",
    period: "2015 - 2020",
    description:
      "Competed in 400m and 600m events; represented school at national level meets.",
    highlights: ["National-level athlete", "Won multiple school championships"],
    keySkills: ["Athletics", "Team Captain", "Training"],
  },
];
