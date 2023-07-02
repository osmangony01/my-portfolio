import moment from "moment";


import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <div className="lg:px-32 bg-[#141734] text-white py-8 border border-slate-700 border-t-slate-100">
            <footer className="footer items-center p-4 ">
                <div className="items-center grid-flow-col">
                    <p className="text-xl">&copy; Copyright || {moment(new Date).format('YYYY')} Md Osman Gony</p>
                </div>
                <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                    
                    <a href="https://web.facebook.com/md.osman.gony2" className="w-[35px] h-[35px] bg-blue-600 flex items-center justify-center rounded-full border border-slate-200"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current text-white"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>

                    <a href="https://github.com/osmangony01?tab=repositories" className="flex items-center justify-center bg-blue-600 rounded-full border border-slate-200 w-[35px] h-[35px]"><FaGithub size={24} color="white"></FaGithub></a>

                    <a href="https://www.linkedin.com/in/mdosmangony/" className="flex items-center justify-center bg-blue-600 rounded-full border border-slate-200 w-[35px] h-[35px]"><FaLinkedinIn size={20} color="white"></FaLinkedinIn></a>
                </div>
            </footer>
        </div>
    );
};

export default Footer;