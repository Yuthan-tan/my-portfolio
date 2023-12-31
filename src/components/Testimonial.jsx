import ReviewCard from "./ReviewCard";
import Slide from 'react-reveal/Slide';

const Testimonial = () => {
    return (
        <div className="lg:px-32 px-4 my-34 bg-bgShade py-32" id="testimonials">
            <div className="text-headingColor mb-20">
                <p className="text-xl font-semibold mb-5">Clients Feedback</p>
                <h2 className="md:text-5xl text-4xl font-bold">Customer Testimonial</h2>
            </div>


            {/* Review Kamu */}
            <Slide left>
                <div>
                    <ReviewCard />
                </div>
            </Slide>

        </div>
    );
};

export default Testimonial;