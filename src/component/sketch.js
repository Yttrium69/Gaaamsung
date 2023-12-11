import React, { useEffect, useRef } from "react";
import p5 from "p5";
import notes from "../assets/notes.json";

function search_note(name) {
  const target_note = notes.filter((note) => note.name == name);
  if (target_note.length == 0) return null;
  return target_note[0];
}

const SSketch = (props) => {
  let label_arr = [];
  if (props.selected.top != "null" && props.selected.top != null) {
    let obj = search_note(props.selected.top);
    label_arr.push(obj.label);
  }
  if (props.selected.middle != "null" && props.selected.middle != null) {
    let obj = search_note(props.selected.middle);
    label_arr.push(obj.label);
  }
  if (props.selected.base != "null" && props.selected.base != null) {
    let obj = search_note(props.selected.base);
    label_arr.push(obj.label);
  }

  let color_arr = label_arr.map((label) => {
    if (label == 0) return "#415dda";
    else if (label == 1) return "#00ca5e";
    else if (label == 2) return "#878787";
    else if (label == 3) return "#faae3d";
    else if (label == 4) return "#f75d42";
  });
  if (color_arr.length == 0) {
    color_arr.push("#E4E4EC");
  }

  const sketch = (p) => {
    let t = 0;
    let f = 0;

    p.setup = () => {
      p.noFill();
      p.createCanvas(575, 1200);
      p.noFill();
      p.strokeWeight(0.2);
      let cur_color = color_arr[0];
      p.stroke(cur_color);
    };

    p.draw = () => {
      p.colorMode(p.HSB, 255);
      f++ || p.setup();
      p.background("#E4E4EC");
      t += 0.01;
      f = 0.01;
      let k = 1;
      let aa = 600 / color_arr.length;
      for (let i = 0; i < 600; i++) {
        if (i > aa * k) {
          k++;
        }
        p.stroke(color_arr[k - 1]);
        const x = 278 + 160 * p.sin(t + i * f);
        const y = 350 + 160 * p.cos(t + i * f);
        const a = 90 + 87 * p.sin(19.7 * p.sin(t) * p.sin(i * f));
        p.arc(x, y, a, a, 0, 6.28);
      }
    };
  };

  const sketchRef = useRef(null);

  useEffect(() => {
    const myP5 = new p5(sketch, sketchRef.current);
    return () => myP5.remove();
  }, [color_arr]);

  return <div ref={sketchRef}></div>;
};

export default SSketch;
