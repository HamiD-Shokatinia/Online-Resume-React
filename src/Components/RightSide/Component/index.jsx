import Education from "./Education";
import Experience from "./Experience";
import Project from "./Project";
import Summery from "./Summery";

function RightSide() {
  return (
    <div className="right">
      <div className="name">
        <h1>HamiD Shokatinia</h1>
      </div>
      <div className="title">
        <p>React Js Developer</p>
      </div>
      <Summery
        text={`React Js developer with 3 years total experience, with 2 years in React Js Programming, develop with restful API
and some experience with MUI,GIT & DevOps
Experienced UI developer trained in HTML5, CSS3 and JavaScript.`}
      ></Summery>
      <Experience></Experience>
      <Education></Education>
     <Project></Project>
    </div>
  );
}

export default RightSide;
