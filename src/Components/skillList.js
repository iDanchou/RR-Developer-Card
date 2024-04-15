import Skill from "./skill";
import "./styles.css";

function SkillList() {
  return (
    <div className="skill-list">
      <Skill backgroundColor="pink" skillName="JavaScript" emoji="💪🏾" />
      <Skill backgroundColor="teal" skillName="React" emoji="⚛️" />
      <Skill backgroundColor="purple" skillName="HTML+CSS" emoji="💪🏾" />
      <Skill backgroundColor="yellow" skillName="Python" emoji="🐍" />
    </div>
  );
}

export default SkillList;
