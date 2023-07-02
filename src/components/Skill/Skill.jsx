import './skill.css';
import { FaAws, FaBootstrap, FaCss3Alt, FaHtml5, FaJava, FaNodeJs, FaPython, FaReact } from 'react-icons/fa';
import { SiExpress, SiJavascript, SiMongodb, SiRedux, SiTailwindcss } from "react-icons/si";
import { TbBrandMysql, TbBrandNextjs } from "react-icons/tb";
import { CgCPlusPlus } from "react-icons/cg";


const Skill = () => {
    return (
        <div className="lg:px-40 text-slate-200 py-20">
            <div className="flex flex-col justify-center">
                <h2 className="text-center text-3xl px-5  font-semibold pb-2 ">Skills</h2>
                {/* <p className="bg-slate-100 blur  w-[100px] h-[1px] mx-auto"><hr /></p> */}
                <div className="divider bg-red-900"></div>
            </div>
            <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-20">

                <div className="skill-shadow skill-card">
                    <SiJavascript size={70} className='js-color text-slate-400 rounded'></SiJavascript>
                    <p className='pt-1'>JavaScript</p>
                </div>
                <div className="skill-shadow skill-card">
                    <FaReact size={70} className='react-color text-slate-400 rounded'></FaReact>
                    <p>ReactJS</p>
                </div>
                <div className="skill-shadow skill-card">
                    <SiExpress size={70} className='text-slate-400 rounded hover:text-indigo-700'></SiExpress>
                    <p>ExpressJS</p>
                </div>
                <div className="skill-shadow skill-card">
                    <TbBrandNextjs size={70} className='text-slate-400 rounded hover:text-[#04BDC1]'></TbBrandNextjs>
                    <p>NextJS</p>
                </div>
                <div className="skill-shadow skill-card">
                    <SiRedux size={70} className='text-slate-400 rounded hover:text-[#6127EA]'></SiRedux>
                    <p>Redux</p>
                </div>
                <div className="skill-shadow skill-card">
                <SiMongodb size={70} className='text-slate-400 rounded hover:text-[#03922B]'></SiMongodb>
                   <p> MongoDB</p>
                </div>
                <div className="skill-shadow skill-card">
                <FaHtml5 size={70} className='text-slate-400 rounded hover:text-[#eb4034]'></FaHtml5>
                    <p>HTML</p>
                </div>
                <div className="skill-shadow skill-card">
                <FaCss3Alt size={70} className='text-slate-400 rounded hover:text-[#3366ff]'></FaCss3Alt>
                    <p>CSS</p>
                </div>
                <div className="skill-shadow skill-card">
                <FaPython size={70} className='text-slate-400 rounded hover:text-[#ffcc00]'></FaPython>
                    <p>Python</p>
                </div>
                <div className="skill-shadow skill-card">
                <FaNodeJs size={70} className='text-slate-400 rounded hover:text-[#66ff66]'></FaNodeJs>
                    <p>NodeJs</p>
                </div>
                {/* <div className="skill-shadow skill-card">
                   <p>C</p>
                </div>
                <div className="skill-shadow skill-card">
                <CgCPlusPlus></CgCPlusPlus>
                    <p>C++</p>
                </div> */}
                <div className="skill-shadow skill-card">
                <FaJava size={70} className='text-slate-400 rounded hover:text-[#66ccff]'></FaJava>
                    <p>Java</p>
                </div>
                <div className="skill-shadow skill-card">
                <FaAws size={70} className='text-slate-400 rounded hover:text-[#ffffff]'></FaAws>
                    <p>AWS</p>
                </div>
                <div className="skill-shadow skill-card">
                <TbBrandMysql size={70} className='text-slate-400 rounded hover:text-[#0066cc]'></TbBrandMysql>
                    <p>MySql</p>
                </div>
                <div className="skill-shadow skill-card">
                <SiTailwindcss size={70} className='text-slate-400 rounded hover:text-[#00aaff]'></SiTailwindcss>
                    <p>Tailwind</p>
                </div>
                <div className="skill-shadow skill-card">
                <FaBootstrap size={70} className='text-slate-400 rounded hover:text-[#9900ff]'></FaBootstrap>
                    <p>Bootstrap</p>
                </div>

            </div>
        </div>
    );
};

export default Skill;