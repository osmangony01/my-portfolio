
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import img1 from '../../../public/images/projects/a10_pic.png';
import img2 from '../../../public/images/projects/a11_pic.png';
import img3 from '../../../public/images/projects/a12_pic.png';
import { Link } from 'react-router-dom';

const Projects = () => {
    return (
        <div className='lg:px-40 py-20'>
            <h2 className='text-4xl font-semibold text-center pb-6'>Projects</h2>
            <div className="divider bg-red-900"></div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10'>
                <div className='bg-purple-950 skill-shadow text-white rounded p-6'>
                    <img src={img1} alt="" />
                    <p className='text-lg font-semibold py-2'>Food Recipe</p>
                    <div className='flex text-sm justify-end'>
                    <a href="https://flavor-frenzy-auth.web.app/" target='_blank' className='flex items-center pl-3'><FaExternalLinkAlt></FaExternalLinkAlt><span className='pl-1'>Show</span></a>
                        <a href="https://github.com/osmangony01/chef-recipe-hunter-client" target='_blank' className='flex items-center pl-3'><FaGithub></FaGithub><span className='pl-1'>Code</span></a>
                    </div>
                </div>
                <div className='bg-purple-950 skill-shadow text-white rounded p-6'>
                    <img src={img2} alt="" />
                    <p className='text-lg font-semibold py-2'>Toy Market</p>
                    <div className='flex text-sm justify-end'>
                    <a href="https://marketplace-toy.web.app/" target='_blank' className='flex items-center pl-3'><FaExternalLinkAlt></FaExternalLinkAlt><span className='pl-1'>Show</span></a>
                        <a href="https://github.com/osmangony01/toy-marketplace-client" target='_blank' className='flex items-center pl-3'><FaGithub></FaGithub><span className='pl-1'>Code</span></a>
                    </div>
                </div>
                <div className='bg-purple-950 skill-shadow text-white rounded p-6'>
                    <img src={img3} alt="" />
                    <p className='text-lg font-semibold py-2'>Summer Learning Camp</p>
                    <div className='flex text-sm justify-end'>
                        <a href="https://summarcamp-671bf.web.app/" target='_blank' className='flex items-center pl-3'><FaExternalLinkAlt></FaExternalLinkAlt><span className='pl-1'>Show</span></a>
                        <a href="https://github.com/osmangony01/summar-camp-client" target='_blank' className='flex items-center pl-3'><FaGithub></FaGithub><span className='pl-1'>Code</span></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;