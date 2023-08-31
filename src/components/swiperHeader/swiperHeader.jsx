import React, { useRef, useState, useEffect } from "react";
import style from "./index.module.css";

const HeaderSliderComponent = ({ slides }) => {
  const [active, setActive] = useState({});
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (activeIndex < 0) {
      setActiveIndex(slides.length - 1);
      setActive(slides[slides.length - 1]);
    } else if (activeIndex > slides.length - 1) {
      setActiveIndex(0);
      setActive(slides[0]);
    } else {
      setActive(slides[activeIndex]);
    }
  }, [activeIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(activeIndex + 1);
      console.log(active);
    }, 5000);
    return () => {
      clearInterval(interval);
    };
  }, [activeIndex]);

  return (
    <div className={style.carousel}>
     <a href={active.link}>
        <div
        className={
          activeIndex % 2 === 0
            ? style.inner
            : activeIndex === 0
            ? style.inner
            : style.innerodd
        }
      >
        <img src={active.image} alt={active.headerName} />
      </div>
     </a>
      <div
        className={`d-flex flex-row gap-2 mt-3 ${style.dots}`}
        style={{ cursor: "pointer" }}
      >
        {slides.map((da, idx) => (
          <i
            onClick={() => setActiveIndex(idx)}
            className={
              idx == activeIndex
                ? `bi bi-circle-fill ${style.fill}`
                : `bi bi-circle ${style.empty}`
            }
          ></i>
        ))}
      </div>
      <div
        onClick={(_) => setActiveIndex((res) => res - 1)}
        className={`btn btn-dark ${style.button1}`}
      >
        {"<"}
      </div>
      <div
        onClick={(_) => setActiveIndex((res) => res + 1)}
        className={`btn btn-dark ${style.button2}`}
      >
        {">"}
      </div>
    </div>
  );
};

export default HeaderSliderComponent;
