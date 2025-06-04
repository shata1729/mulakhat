import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const skills = [
  {
    skill: "Javasript",
    level: "Expert",
    color: "red"
  },
  {
    skill: "React",
    level: "Beginner",
    color: "yellow"
  },
  {
    skill: "NodeJS",
    level: "Expert",
    color: "lightgreen"
  },
  {
    skill: "AWS",
    level: "Intermediate",
    color: "orange"
  },
  {
    skill: "Docker",
    level: "Beginner",
    color: "lightblue"
  },

]
const Avatar = () => {
  return (
    <div className="avatar">
      <img className="avatar" src="shata.jpg"></img>
    </div>
  )
}

const Intro = () => {
  return (
    <div className="body">
      <h1>Shatanand</h1>
      <p>
        Poet and etc.
      </p>
    </div>
  )
}

const Skill = ({ skill, level, color }) => {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>
        {level === 'Expert' && '💪'}
        {level === 'Intermediate' && '👌'}
        {level === 'Beginner' && '👍'}
      </span>
    </div>
  )
}

const SkillList = () => {
  return (
    <div className="skill-list">
      {skills.map(({ skill, level, color }) => {
        return <Skill skill={skill} color={color} level={level} />
      })}
    </div>
  )
}

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
