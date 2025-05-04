import CodingProfileCard from "../common/CodingProfileCard";
import codingProfiles from "@/data/codingProfiles";

export default function CodingProfilesSection() {
  return (
    <section className="py-16 px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-3 tracking-tight">
          Coding Profiles
        </h2>
        <p className="text-muted-foreground text-base">
          Where I solve problems Algorithmic Problems .
        </p>
      </div>
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-items-center">
          {codingProfiles.map((profile) => (
            <CodingProfileCard key={profile.name} profile={profile} />
          ))}
        </div>
      </div>
    </section>
  );
}
