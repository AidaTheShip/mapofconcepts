"use strict";
"use client";
import { color } from "d3";
import React, { useEffect, useRef } from "react";
function drawSineWave(canvas, context) {
    let width = canvas.width;
    let height = canvas.height;
    let scale = 20;
    let speed = 0.05;
    let y = height / 2;
    let x = 0;

    function draw() {
        context.clearRect(0, 0, width, height);
        context.beginPath();
        context.moveTo(0, y);

        x = 0;
        while (x < width) {
            y = height / 2 + scale * Math.sin((x + speed) * Math.PI / 90);
            context.lineTo(x, y);
            x++;
        }
        context.stroke();
        speed += 1;
        requestAnimationFrame(draw);
    }
    draw();
}
export function SineWaveBackground() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');

        // Function to update canvas dimensions to match the viewport size
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            drawSineWave(canvas, context);
        };

        // Initial setup
        resizeCanvas();

        // Event listener to update canvas dimensions on window resize
        window.addEventListener('resize', resizeCanvas);

        // Cleanup the event listener when the component unmounts
        return () => {
            window.removeEventListener('resize', resizeCanvas);
        };
    }, []);

    const containerStyle = {
        position: "relative",
        width: "100%",
        height: "100%",
    };

    const canvasStyle = {
        width: "100%",
        height: "100%",
        display: "block",
        backgroundColor: "white",
    };

    const textContainerStyle = {
        position: "absolute",
        top: "30%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        textAlign: "center",
        zIndex: 1,
    };

    const titleTextStyle = {
        fontSize: "3rem", // Adjust the font size as needed
    };

    return (
        <div style={containerStyle}>
            <canvas ref={canvasRef} style={canvasStyle}></canvas>
            <div style={textContainerStyle}>
                <h1 style={titleTextStyle}>Coming soon.</h1>
            </div>
        </div>
    );
}

export default SineWaveBackground;
