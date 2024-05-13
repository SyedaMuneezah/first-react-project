
import Hero from "./hero";
import hero1 from '../../assets/Frame 19.png'
import hero2 from '../../assets/download.png'
import Ui from '../../components/Presentation'


function HeroSection() {
    return (
        <div>

            <Hero image={hero1}

                title="Comes With All You Need For Daiy Life"

                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore possimus ipsam repellat provident ex, atque similique harum mollitia nihil porro minima illum minus consectetur eveniet vel dolorem omnis cumque libero numquam quisquam enim. Ut et tempora libero accusantium fuga maiores voluptatum cum quos numquam quasi, voluptatibus architecto necessitatibus vitae qui." />
  
            <Ui />

            <Hero image={hero2}

                title="Download And Get The App Now"

                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore possimus ipsam repellat provident ex, atque similique harum mollitia nihil porro minima illum minus consectetur eveniet vel dolorem omnis cumque libero numquam quisquam enim. Ut et tempora libero accusantium fuga maiores voluptatum cum quos numquam quasi, voluptatibus architecto necessitatibus vitae qui." />


        </div>
    )
}

export default HeroSection;