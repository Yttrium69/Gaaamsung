import React, { useEffect, useRef } from "react";
import p5 from "p5";

const SSketch = () => {
  const sketchRef = useRef(null);

  useEffect(() => {
    const sketch = (p) => {
      let canvas;
      let string = "TITLEMAKER";
      const size = 100;
      // const fontFile = "Muli-Black.ttf";
      const showText = true;
      const textAlpha = 8;
      const backgroundColor = 160;
      const strokeAlpha = 40;
      const strokeColor = 0;
      const fontSampleFactor = 0.9;
      const noiseZoom = 0.005;
      const noiseOctaves = 4;
      const noiseFalloff = 0.5;
      const zOffsetChange = 0;
      const individualZOffset = 0;
      const lineSpeed = 14;
      const newPointsCount = 100;
      let seed;
      let font;
      let points = [];
      let startingPoints;

      p.preload = () => {
        font = p.loadFont(fontFile);
      };

      p.setup = () => {
        canvas = p.createCanvas(500,700);
        p.textFont(font);
        p.fill(backgroundColor, textAlpha);
        p.stroke(strokeColor, strokeAlpha);
        p.colorMode(p.HSB, 255, 255, 255, 255);
        p.noiseDetail(noiseOctaves, noiseFalloff);
        seed = p.floor(p.random(1000000));


        start(seed);
      };

      function start(seed) {
        // p.background(backgroundColor);
        // p.textSize(size);
        p.background('white');

        p.randomSeed(seed);
        p.noiseSeed(seed);
        p.frameCount = 0;
        startingPoints = font.textToPoints(
          string,
          p.width / 2 - p.textWidth(string) / 2,
          p.height / 2,
          size,
          { sampleFactor: fontSampleFactor }
        );

        points = [];
        for (let pIndex = 0; pIndex < startingPoints.length; pIndex++) {
          let point = startingPoints[pIndex];
          point.zOffset = p.random();
          points[pIndex] = point;
        }
      }

      p.draw = () => {
        // if (showText) {
        //   p.noStroke();
        //   p.fill(255);
        //   p.text(string, p.width / 2 - p.textWidth(string) / 2, p.height / 2);
        // }

        for (let pt = 0; pt < points.length; pt++) {
          p.stroke((pt / points.length) * 255, 200, 255, 20);
          let point = points[pt];
          let noiseX = point.x * noiseZoom;
          let noiseY = point.y * noiseZoom;
          let noiseZ =
            p.frameCount * zOffsetChange + point.zOffset * individualZOffset;
          let newPX = point.x + p.map(p.noise(noiseX, noiseY, noiseZ), 0, 1, -lineSpeed, lineSpeed);
          let newPY = point.y + p.map(p.noise(noiseX, noiseY, noiseZ + 214), 0, 1, -lineSpeed, lineSpeed);
          p.line(point.x, point.y, newPX, newPY);
          point.x = newPX;
          point.y = newPY;
        }
      };

      // p.keyPressed = () => {
      //   if (p.keyIsDown(p.CONTROL) && p.key.toLowerCase() === "s") {
      //     p.save();
      //   } else if (p.keyCode === p.BACKSPACE || p.keyCode === p.DELETE) {
      //     string = string.substring(0, string.length - 1);
      //     start();
      //   } else if (p.keyCode === p.RETURN) {
      //     seed = p.floor(p.random(1000000));
      //     start();
      //   } else if (
      //     p.keyCode === 32 ||
      //     p.keyCode >= 186 ||
      //     (p.keyCode >= 48 && p.keyCode <= 90)
      //   ) {
      //     string += p.key;
      //     start();
      //   }
      // };

      p.mouseDragged = () => {
        for (let i = 0; i < newPointsCount; i++) {
          p.stroke((i / newPointsCount) * 255, 200, 255);
          let angle = p.random(p.TAU);
          let magnitude =
            p.randomGaussian() * ((newPointsCount - 1) ** 0.5 * 3);
          let newPoint = {
            x: p.mouseX + magnitude * p.cos(angle),
            y: p.mouseY + magnitude * p.sin(angle),
            zOffset: p.random(),
          };
          points.push(newPoint);
          startingPoints.push(newPoint);
        }
      };
    };

    const p5Canvas = new p5(sketch, sketchRef.current);

    // Cleanup function to remove the p5 canvas when the component unmounts
    return () => {
      p5Canvas.remove();
    };
  }, []);

  return <div ref={sketchRef}></div>;
};

export default SSketch;
