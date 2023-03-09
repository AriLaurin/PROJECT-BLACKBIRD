// import useFetch from "./useFetch";
import "./home.css";
import logo from "./img/BBPlogo.png";
import crowgif from "./img/crow-ravens.gif";

const Home = () => {
  // const { error, isPending, data: blogs } = useFetch('http://localhost:8000/blogs')

  return (
    <div className="home">

      <div className="header">
        <div className="header-left">
          <img id="logo" src={logo} alt="Logo" width="91px" height="100px"/>
          <h1 id="logotext">BLACKBIRD PROJECT</h1>
        </div>
        <div className="header-right">
          <a href="./NotFound" className="headertabs">ABOUT US</a>
          <a href="./NotFound" className="headertabs">PROJECTS</a>
        </div>
      </div>

      <div className="body">
        <div className="welcome-card">
        <img src={crowgif} alt="Crows" id="crow-bg"/>
        </div>
        <div className="content">
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>

        </div>
      </div>

      <div className="footer">
      <div className="footer-left">
      <h2>// CONTACTS</h2>
      </div>
      <div className="footer-middle">

      </div>
      <div className="footer-right">

      </div>
      </div>

    </div>

  );
}
 
export default Home;