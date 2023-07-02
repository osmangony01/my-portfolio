import { BiDownload } from "react-icons/bi";
import bannerImg from '../../public/images/ban.gif'
const Banner = () => {
    const resume = "https://drive.google.com/file/d/1pPjrdZU2izp6s50fDo4F5ZQT1JKgxEjT/view?usp=sharing";
    return (
        <div className="lg:px-40 py-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center text-xl">
            <div className='text-slate-200'>
                <p>Hi there, I am </p>
                <p className='text-orange-600 text-4xl font-semibold py-4'>Md Osman Gony</p>
                <p className='text-2xl pb-2'>_ _ MERN Stack Developer</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod totam perspiciatis provident, aspernatur maxime tenetur, enim veniam fuga optio perferendis saepe consectetur id sed iste rerum? Voluptatum sunt eligendi incidunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod totam perspiciatis provident, aspernatur maxime tenetur, enim veniam fuga optio perferendis saepe consectetur id sed iste rerum? Voluptatum sunt eligendi incidunt.</p>
                <p className='py-4 '>
                    <a href={resume} target={resume} type="button" className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-pink-500 hover:to-yellow-500 px-5 py-2.5 font-semibold text-lg rounded-md shadow-lg  ">
                       <div className="flex items-center "><BiDownload></BiDownload> <span className="pl-1">Download Resume</span></div>
                    </a>
                </p>
            </div>
            <div>
                <img className='w-[400px] h-[400px]' src={bannerImg} alt="" />
            </div>
        </div>
    );
};

export default Banner;