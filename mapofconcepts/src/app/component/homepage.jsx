import Link from "next/link";
import React from "react";

const Homepage = () => {
    return (
        <section id="about" className="text-black min-h-screen flex flex-col items-center justify-center px-4 lg:px-0 bg-white">
            <h1 className="text-4xl lg:text-6xl font-extrabold mb-6 text-center">
                Map of Concepts
            </h1>
            <div className="flex justify-center py-2">
            <Link href="/life">
                <button className="px-6 py-3 rounded-full mr-4 bg-gradient-to-r text-white from-black to-white hover:bg-gradient-to-r hover:from-white hover:to-black">
                    Experience!
                </button>
            </Link>
            </div>
        </section>
    );
}

export default Homepage;
