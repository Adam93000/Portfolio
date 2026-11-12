import SectionHeader from "../../common/SectionHeader";
import SkillsGrid from "./SkillsGrid";

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="flex flex-col gap-10 border-t border-line px-6 py-16 md:px-10 lg:px-22 lg:py-24"
    >
      <SectionHeader
        number="02"
        label="Compétences"
        title="Ma boîte à outils."
        intro="Des bases solides, enrichies à chaque projet. Voici les technologies et les pratiques que je mobilise."
      />
      <SkillsGrid />
    </section>
  );
}
