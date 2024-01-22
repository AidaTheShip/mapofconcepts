import Link from "next/link";
import React from "react";

const About = () => {
    return (
        <section id="about" className="flex flex-col min-h-screen items-center justify-center bg-white">
            <h1 className="text-4xl lg:text-6xl font-extrabold mb-6 text-center text-black">
                About
            </h1>

            {/* Centered content below the title */}
            <div className="w-full max-w-2xl mx-auto text-left">
                {/* Text content */}
                <p className="text-lg lg:text-xl mb-6 text-black">
                Industrialization has brought technological advancement to tools that we use to deconstruct reality and augment our knowledge. Without industrialization, we would not have been able to find certain properties of the universe and test theories proposed by scientists. It is in its own development a wonderful example of how science and technology (and eventually philosophy) go hand in hand.
                </p>
            </div>
        </section>
    );
}

export default About;
