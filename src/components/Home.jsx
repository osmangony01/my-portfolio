import About from "./About/About";
import Banner from "./Banner";
import Contact from "./Contact/Contact";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Projects from "./Projects/Projects";
import Skill from "./Skill/Skill";

import Random from "./random";

const Home = () => {
    return (
        <div className="font-sans">
            <div className="bg-gradient-to-r from-[#13005A] via-[#311434] to-[#13005A] text-white">
                <Navbar></Navbar>
                <Banner></Banner>
                <About></About>
                <Skill></Skill>
                {/* <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto illo dolorum odio iure, consequatur iusto libero, natus numquam, id fuga alias molestiae inventore optio quaerat dolorem! Architecto aliquid odio nesciunt?</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto illo dolorum odio iure, consequatur iusto libero, natus numquam, id fuga alias molestiae inventore optio quaerat dolorem! Architecto aliquid odio nesciunt?</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto illo dolorum odio iure, consequatur iusto libero, natus numquam, id fuga alias molestiae inventore optio quaerat dolorem! Architecto aliquid odio nesciunt?</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto illo dolorum odio iure, consequatur iusto libero, natus numquam, id fuga alias molestiae inventore optio quaerat dolorem! Architecto aliquid odio nesciunt?</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto illo dolorum odio iure, consequatur iusto libero, natus numquam, id fuga alias molestiae inventore optio quaerat dolorem! Architecto aliquid odio nesciunt?</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto illo dolorum odio iure, consequatur iusto libero, natus numquam, id fuga alias molestiae inventore optio quaerat dolorem! Architecto aliquid odio nesciunt?</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto illo dolorum odio iure, consequatur iusto libero, natus numquam, id fuga alias molestiae inventore optio quaerat dolorem! Architecto aliquid odio nesciunt?</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto illo dolorum odio iure, consequatur iusto libero, natus numquam, id fuga alias molestiae inventore optio quaerat dolorem! Architecto aliquid odio nesciunt?</p> */}

                <Projects></Projects>
                <Contact></Contact>
                {/* <Random></Random> */}
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Home;