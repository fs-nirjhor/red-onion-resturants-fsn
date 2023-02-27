import Container from "react-bootstrap/Container";
import Header from "../Header/Header";
import Categories from "../Categories/Categories";
import HeroArea from "../HeroArea/HeroArea";
import AboutArea from "../AboutArea/AboutArea";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <main>
      <Header />
      <HeroArea />
      <Container>
        <Categories />
        <Outlet/>
        <AboutArea />
      </Container>
      <Footer/>
    </main>
  );
};

export default Home;
