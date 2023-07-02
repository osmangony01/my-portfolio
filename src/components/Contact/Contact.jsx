import contactImg from '../../../public/images/contact2.gif';
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const Contact = () => {
    return (
        <div className="lg:px-40 py-20" id="contact">
            <h2 className="text-4xl font-semibold text-center pb-5">Contact Me</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                <div className='contact-info pt-5 text-slate-300'>
                    <h2 className=' pt-6 pb-10'>Get in touch with me today! Whether you have a question, feedback, or just want to say hello _ _ . Fill out the form and I will get back to you as soon as possible.</h2>
                    <div className='flex items-center gap-2 py-2'>
                        <FaPhoneAlt color='blue'></FaPhoneAlt> <span><span className='font-semibold'>Phone:</span> +8801863766337</span>
                    </div>
                    <div className='flex items-center gap-2 py-2'>
                        <MdEmail color='blue'></MdEmail> <span><span className='font-semibold'>Email:</span> mdosmangony337@gmail.com</span>
                    </div>
                    <div className='flex items-center gap-2 py-2'>
                        <FaLocationDot color='blue'></FaLocationDot> <span><span className='font-semibold'>Address:</span> Chittagong, Bangladesh</span>
                    </div>
                </div>
                <div className='pt-5'>
                    <h2 className='text-xl py-5 font-semibold'>Let's Message me</h2>
                    <div>
                        <input type="text" className='contact-input-field bg-slate-150' placeholder='Your Name' />
                    </div>
                    <div className='py-10'>
                        <input type="email" className='contact-input-field bg-slate-150' placeholder='Your Email' />
                    </div>
                    <div>
                        <textarea type="text" className='contact-input-field textarea-md bg-slate-150' placeholder='Message'></textarea>
                    </div>
                    <div>
                        <button className='text-white bg-indigo-500 border-0 hover:bg-indigo-700 px-8 py-2 font-semibold rounded mt-5'>Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;