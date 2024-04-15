import "./styles.css";

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.backgroundColor }}>
      <span>{props.skillName}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

export default Skill;
