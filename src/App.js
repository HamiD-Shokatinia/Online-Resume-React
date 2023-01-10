import Profile from "./asset/Images/Profile.png";
import Educations from "./Components/Educations";
import Experience from "./Components/Experience";
import ImageCV from "./Components/ImageCV";
import Skills from "./Components/Skills";
import SocialLinks from "./Components/SocialLinks";
import Works from "./Components/Works";

export function App() {
  return (
    <>
      <section>
        <div className="block block--sm block--header">
          <div className="logo"></div>
          <h1>Hamid Shokatinia</h1>
          <h5>Front End Developer (ReactJs)</h5>
          <hr />
          <SocialLinks />
        </div>
        <ImageCV Profile={Profile}></ImageCV>
      </section>
      <section>
        <div className="block block--sm block--heading">
          <h1>
            Exp
            <br />
            eri
            <br />
            ence-
          </h1>
        </div>
        <Experience />
      </section>
      <section className="reverse">
        <div className="block block--sm block--heading">
          <h1>Skills-</h1>
        </div>
        <Skills />
      </section>
      <section>
        <div className="block block--sm block--heading">
          <h1>
            Edu
            <br />
            cat
            <br />
            ion-
          </h1>
        </div>
        <Educations />
      </section>
      <section className="reverse">
        <div className="block block--sm block--heading">
          <h1>Work-</h1>
        </div>
        <Works />
      </section>
    </>
  );
}
