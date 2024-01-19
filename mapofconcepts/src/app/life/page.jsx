"use client";
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


export function Life() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            drawSineWave(canvas, context);
        };

        // Initial setup
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);
        return () => {
            window.removeEventListener('resize', resizeCanvas);
        };
    }, []);
    //     const canvas = canvasRef.current;
    //     const context = canvas.getContext('2d');
    //     drawSineWave(canvas, context);
    // }, []);

    return (
        <div style={{ position: "relative", width: '100%', height: '100%' }}>
            <canvas ref={canvasRef} width={window.innerWidth} height={400} />
            <div style={{ position: "absolute", top: "100%", left: "100%"}}>
                <h1>Your Text Here</h1>
            </div>
        </div>
    );
}

export default Life;
