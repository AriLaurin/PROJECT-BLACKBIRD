// import useFetch from "./useFetch";
import "./home.css";
import logo from "./img/BBPlogo.png";

const Home = () => {
  // const { error, isPending, data: blogs } = useFetch('http://localhost:8000/blogs')

  return (
    <div className="home">
      <div className="container">
          
    <div class="header-left">
          <img id="logo" src={logo} alt="Logo" width="91px" height="100px"/>
          <h1 id="logotext">BLACKBIRD PROJECT</h1>
    </div>
    <div class="header-right">
          <h2 className="headertabs">ABOUT US</h2>
          <h2 className="headertabs">PROJECTS</h2>
    </div>
        <div className="body">
        </div>
        <div className="footer"></div>
      </div>
      {/* End of Container ^ */}
    </div>
  );
}
 
export default Home;