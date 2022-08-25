import "./HomePage.css"
import Nav from "../../../components/Nav/Nav";
import HeroSection from "../../../components/HeroSection/HeroSection";
import BestChoiceSection from "../../../components/BestChoiceSection/BestChoiceSection";
import NumberSection from "../../../components/NumberSection/NumberSection";
import MajorsSection from "../../../components/MajorsSection/MajorsSection";
import Footer from "../../../components/Footer/Footer";

const HomePage=()=>{
    return(
        <div className="container">
            <Nav/>
            <HeroSection/>
            <BestChoiceSection/>
            <NumberSection/>
            <MajorsSection/>
            <Footer/>
        </div>
    );

}
export default HomePage;