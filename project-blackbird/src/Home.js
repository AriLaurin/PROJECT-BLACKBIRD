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
          <h2 className="headertabs">ABOUT US</h2>
          <h2 className="headertabs">PROJECTS</h2>
        </div>
      </div>

      <div className="body">
        <div className="welcome-card">
        <img src={crowgif} alt="Crows" width="100%" height="95%"/>
        </div>
        <div className="content">

        </div>
      </div>

    </div>

  );
}
 
export default Home;