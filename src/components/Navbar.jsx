import logo from '../assets/sharvslogo.png';
import { FaLinkedin } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { BiLogoGmail } from "react-icons/bi";

const Navbar = () => {
 return  <nav className="mb-10 flex items-center justify-between py-4 px-4 lg:px-10">
      
 {/* logo */}
 <div className="flex flex-shrink-0 items-center">
   <img className="w-24 lg:w-40" src={logo} alt="Sharvslogo" />
 </div>

 {/* icons */}
 <div className='flex items-center justify-center gap-4 text-xl lg:text-2xl'>
   <a href="https://www.linkedin.com/in/sharvien-paul-claro/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
   <a href="https://www.facebook.com/sharvien.claro/"><FaFacebook /></a>
   <a href="https://github.com/Sharvs-04"><FaGithub /></a>
   <a href="mailto:paulclaro2@gmail.com"><BiLogoGmail /></a>
 </div>
 
</nav>
 
}

export default Navbar