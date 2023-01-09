import Contact from "./contact";
import Habbies from "./Hobbis";
import ProfileImg from "./image";
import Language from "./Language";
import Skills from "./Skills";

function LeftSide() {
  return (
    <div className="left">
      <ProfileImg></ProfileImg>
      <Contact
        email={"Hamid.Shokatinia@gmail.com"}
        mobile={+989359827701}
      ></Contact>
      <Skills></Skills>
      <Language></Language>
      <Habbies></Habbies>
    </div>
  );
}

export default LeftSide;
