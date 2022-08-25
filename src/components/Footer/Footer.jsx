import "./Footer.css";
import { IoLogoWhatsapp } from "react-icons/io";
import { ImLocation } from "react-icons/im";
import { BsFacebook } from "react-icons/bs";
import { AiFillYoutube } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";




const Footer = ()=> {
    return(
        <div className="handLeftPaddingAndTwentyRest blackBG flex">
            <div className="RightDivInFooter">
                <div className="logo">
                    <span>&lt;</span>  Simple Soft <span className="orange">/</span> <span>&gt;</span>
                </div>
                <p>lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem </p>
            </div>
            <div className="LeftDivInFooter">
                <div className="icons flex">
                    <AiFillTwitterCircle/>
                    <AiFillInstagram/>
                    <AiFillYoutube/>
                    <BsFacebook/>
                </div>
                <div className="whatsUp flex">
                    <p>+970595078069</p>
                    <IoLogoWhatsapp color="green"/>
                </div>
                <div className="location flex">
                    <p>Palestine Gaza</p>
                    <ImLocation/>
                </div>
            </div>
        </div>
    );

}

export default Footer;