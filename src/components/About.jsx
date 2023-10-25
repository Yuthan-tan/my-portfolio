import { } from "react";
import profilePic from "../assets/banner.png";
import { Link } from 'react-scroll';
import Fade from 'react-reveal/Fade';

const About = () => {
    return (
        <div className="lg:mx-12 mx-4" id="about">
            <div className="flex flex-col sm:flex-row md:gap-24 gap-12 items-center justify-between py-10">
                <Fade left>
                <div className="sm:w-1/2">
                    <img src={profilePic} alt="" className="w-full sm:w-11/12 ml-10" />
                </div>
                </Fade>
                <div className="sm:w-1/2">
                    <Fade right>
                    <h2 className="md:text-5xl text-4xl font-bold">About Me</h2>
                    <p className="mt-8 md:pr-8 mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius faucibus massa sollicitudin amet augue. Nibh metus a semper purus mauris duis. Lorem eu neque, tristique quis duis. Nibh scelerisque ac adipiscing velit non nulla in amet pellentesque.
                        <br /> <br />
                        Sit turpis pretium eget maecenas. Vestibulum dolor mattis consectetur eget commodo vitae. Amet pellentesque sit pulvinar lorem mi a, euismod risus r.
                    </p>
                    <button className="btn-primary"><Link to="contact" spy={true} activeClass="active" smooth={true} offset={-100}>Contact Me</Link></button>
                    </Fade> 
                </div>
            </div>
        </div>
    );
};

export default About;
