import './App.css';
import { Routes, Route, Outlet } from 'react-router-dom';
import Navbar from './Components/Navbar';
import ProfilePic from './Assets/profile_crop_2.png';
import ProjectCard from './Components/ProjectCard';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/projects" element={<Projects />} />
        <Route exact path="/ethics" element={<Ethics />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
      <Outlet />
      {/* <div className="flex-center-v">
        <div
          className="flex-center-v dark-blue light-bkgd"
          style={{ width: '100%', zIndex: 2 }}
          id="about"
        >
          <p style={{ textAlign: 'center', minWidth: '90%' }}>
            Aloha. My name is{' '}
            <strong style={{ fontSize: '1.2em', color: 'hsl(18, 100%, 50%)' }}>
              Derek Joshua Bal
            </strong>
            . I am a{' '}
            <strong style={{ fontSize: '1.8em', color: 'hsl(18, 100%, 50%)' }}>
              <br></br>
              Full-Stack Web Developer
            </strong>
          </p>
          <hr style={{ color: 'blue', width: '80%' }}></hr>
          <p style={{ textAlign: 'center', maxWidth: '90%' }}>
            Additionally, I am currently a Maui-based Preschool Teacher Aide
            with a Bachelors of Arts in Anthropology.<br></br>
            <br></br>Post-college, I have taken a fascination with coding and
            its endless possibilities to inspire.
          </p>
        </div>
        <div
          className="flex-center-v section-head orange"
          style={{ width: '100%', zIndex: 2, marginTop: '20vh' }}
          id="projects"
        >
          My Recent Projects
        </div>
      </div> */}
    </div>
  );
}

export function Home() {
  return (
    <div className="flex-center-v">
      <div className="header orange">E Komo Mai</div>
      <div className="sub-head orange">(Welcome)</div>
      <div className="profile flex-center-h">
        <img
          alt="profile pic of Derek Bal"
          className="profpic"
          src={`${ProfilePic}`}
        ></img>
        <div className="circle"></div>
      </div>{' '}
      {/* <div className="header orange" style={{ marginTop: '30px' }}>
        About Me
      </div> */}
      <div
        className="flex-center-v dark-blue light-bkgd"
        style={{ width: '100%', zIndex: 2 }}
        id="about"
      >
        <div
          style={{
            textAlign: 'center',
            minWidth: '90%',
            paddingTop: '10px',
          }}
        >
          <strong style={{ fontSize: '1.2em', color: 'hsl(18, 100%, 50%)' }}>
            Aloha
          </strong>
          . My name is{' '}
          <strong style={{ fontSize: '1.2em', color: 'hsl(18, 100%, 50%)' }}>
            Derek Joshua Bal
          </strong>
          . I am a{' '}
          <strong style={{ fontSize: '1.7em', color: 'hsl(18, 100%, 50%)' }}>
            <br></br>
            Full-Stack Web Developer
          </strong>
        </div>
        <hr style={{ color: 'blue', width: '80%' }}></hr>
        <p
          style={{
            textAlign: 'center',
            maxWidth: '90%',
            paddingBottom: '10px',
          }}
        >
          Additionally, I am currently a Maui-based Preschool Teacher Aide with
          a Bachelors of Arts in Anthropology.<br></br>
          <br></br>Post-college, I have taken a fascination with coding and its
          endless possibilities to inspire.
        </p>
      </div>
    </div>
  );
}
export function Projects() {
  return (
    <div className="flex-center-v">
      <div className="header orange">Ko&#8216;u Mau Hana</div>
      <div className="sub-head orange">(Projects)</div>
      <ProjectCard />
    </div>
  );
}
export function Ethics() {
  return <div>Ethics</div>;
}
export function Contact() {
  return <div>Contact</div>;
}

export default App;
