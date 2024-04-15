import "./styles.css";

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.backgroundColor }}>
      <p>{props.skillName}</p>
      <p>{props.emoji}</p>
    </div>
  );
}

export default Skill;
