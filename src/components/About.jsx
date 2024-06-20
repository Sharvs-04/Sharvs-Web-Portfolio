import aboutimg from "../assets/sharvs-about.jpg"
import { ABOUT_TEXT } from "../constants"
import {motion} from "framer-motion"

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-6 lg:pb-10 px-4 pt-24">
    <h2 className="my-10 lg:my-16 text-center text-4xl lg:text-5xl font-bold tracking-wide">
        ABOUT <span className="text-blue-500">ME</span>
    </h2>

    <div className="flex flex-col md:flex-row md:items-center md:gap-x-4">
        <motion.div 
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="w-full md:w-1/2 p-4 flex justify-center md:justify-end"
        >
            <img className="w-60 md:w-72 lg:w-80 rounded-lg shadow-lg lg:mr-28" src={aboutimg} alt="About Image" />
        </motion.div>

        <motion.div 
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5 }}
            className="w-full md:w-1/2 p-4"
        >
            <div className="text-center md:text-left">
                <p className="my-2 max-w-xl py-5 mx-auto md:mx-0">
                    {ABOUT_TEXT}
                </p>
            </div>
        </motion.div>
    </div>
</div>





  )
}

export default About