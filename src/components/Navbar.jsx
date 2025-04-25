import logo from "../assets/raviKumarLogo.webp"
import { FaLinkedin } from "react-icons/fa";
import {FaGithub} from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <a href="/" aria-label="Home">
            <img src={logo}  className="mx-2" width={50} height={33} alt="Logo" /></a>
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2x1">
            <a href="https://www.linkedin.com/in/rishabh-pradhan-59498a28a/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
            <a href="https://github.com/Rishi2564" target="_blank" rel="noopener noreferrer" aria-label="Github"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/rishabh-pradhan-59498a28a/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
            <a href="https://www.linkedin.com/in/rishabh-pradhan-59498a28a/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaSquareXTwitter /></a>
        </div>
    </nav>
  )
}

export default Navbar