"use client";
// import Link from "next/link";
// // import React from "react";
// import React, { useState, useEffect } from "react";
// import p5 from 'p5';

//export default Sketch;
import React from 'react';
import { ReactP5Wrapper } from 'react-p5-wrapper';
// import Sketch from './Sketch'; // Import the Sketch component
import Link from 'next/link';

// Sketch.js
export const Sketch = (p5) => {
    let rings = 80;
    let square = 10;
    p5.setup = () => {
        p5.createCanvas(p5.windowWidth, p5.windowHeight, p5.WEBGL);
        p5.angleMode(p5.DEGREES);
    };

    p5.draw = () => {
        p5.background(255);
        p5.rotateX(60);

        p5.noFill();
        p5.strokeWeight(2);

        for(var i = 0; i < rings; i++){
            var r = p5.map(p5.sin(p5.frameCount / 2), -1, 1, 100, 200);
            var g = p5.map(i, 0, rings, 100, 200);
            var b = p5.map(p5.cos(p5.frameCount), -1, 1, 200, 100);

            p5.stroke(r, g, b);

            p5.beginShape();
            for(var j = 0; j < 360; j += square){
                var rad = i * 5;
                var x = rad * p5.cos(j);
                var y = rad * p5.sin(j);
                var z = p5.sin(p5.frameCount * 2 + i * 10) * 40;

                p5.vertex(x, y, z);
            }
            p5.endShape(p5.CLOSE);
        }
    };

    p5.mouseClicked = () => {
        square+=10; 
        if(square > 180){
            square = 10;
        }
    }
};



const Homepage = () => {
    return (
        <div style={{ position: 'relative' }}>
            <ReactP5Wrapper sketch={Sketch} />
            <section id="about" className="text-black min-h-screen flex flex-col items-center justify-center px-4 lg:px-0 bg-white bg-opacity-60" style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}>
                <h1 className="text-4xl lg:text-6xl font-extrabold mb-6 text-center">
                    Map of Knowledge
                </h1>
                <div className="flex justify-center py-2">
                    <Link href="/life">
                        <button className="px-6 py-3 rounded-full mr-4 bg-gradient-to-r text-white from-black to-white hover:bg-gradient-to-r hover:from-white hover:to-black">
                            Experience!
                        </button>
                    </Link>
                    <Link href="#about">
                    <button className="px-6 py-3 rounded-full mr-4 bg-gradient-to-r text-white from-black to-white hover:bg-gradient-to-r hover:from-white hover:to-black">
                            About
                        </button>
                    </Link>
                </div>
            </section>
        </div>
    );
}

export default Homepage;
