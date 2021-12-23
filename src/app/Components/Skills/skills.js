import MongoDB from "../../../Assets/mongodb-logo.png";
import Sql from "../../../Assets/Sql.png";
import Java from "../../../Assets/java-logo-1.png";
import Express from "../../../Assets/express.png";
import Css from "../../../Assets/CSS-Logo.png";
import { useOnScreen } from "../../hooks/useOnScreen";
import Csharp from "../../../Assets/Csharp_Logo.png";
import Reactlogo from "../../../Assets/1200px-React.svg.png";
import JavaScrips from "../../../Assets/JavaScript-logo.png";
import { SkillView } from "./skills.view";

export const Skill = () => {
  const data1 = [];
  const data2 = [];
  data1.push({
    img: MongoDB,
    name: "Mongo DB",
  });
  data1.push({
    img: Sql,
    name: "SQL Server",
  });
  data1.push({
    img: Java,
    name: "Java",
  });
  data1.push({
    img: Express,
    name: "Express.js",
  });

  data2.push({
    img: Css,
    name: "CSS",
  });
  data2.push({
    img: Csharp,
    name: "C#",
  });
  data2.push({
    img: Reactlogo,
    name: "React.js",
  });
  data2.push({
    img: JavaScrips,
    name: "JavaScrips",
  });
  const [TitleSkillsRef, showTitleSkills] = useOnScreen({
    rootMargin: "-70px",
  });
  const [SkillstRef, showSkills] = useOnScreen({
    rootMargin: "-100px",
  });
  return (
    <SkillView
      data1={data1}
      data2={data2}
      TitleSkillsRef={TitleSkillsRef}
      showTitleSkills={showTitleSkills}
      SkillstRef={SkillstRef}
      showSkills={showSkills}
    />
  );
};
