// src/pages/HomePage.tsx
import Hero from '../components/sections/Hero'
import Services from '../components/sections/Services'
import About from '../components/sections/About'
import Capabilities from '../components/sections/Capabilities'
import Workflow from '../components/sections/Workflow'
import WhyChooseUs from '../components/sections/WhyChooseUs'

const HomePage = () => {
    return (
        <div className="flex-1 flex flex-col">
            <Hero />
            <Services />
            <About />
            <Capabilities />
            <Workflow />
            <WhyChooseUs />
        </div>
    );
};

export default HomePage;