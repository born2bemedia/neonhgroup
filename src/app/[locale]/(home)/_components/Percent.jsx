"use client";
import React, { useState, useEffect, useRef } from "react";

const Percent = ({ percentageMax, prefix = "" }) => {
  const [percentage, setPercentage] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
          let progress = 0;
          const interval = setInterval(() => {
            progress += 1;
            setPercentage(progress);
            if (progress >= percentageMax) clearInterval(interval);
          }, 20);
        }
      },
      {
        threshold: 0.2,
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [hasStarted, percentageMax]);

  return (
    <div ref={elementRef} className="percent">
      {percentage}
      {prefix}
    </div>
  );
};

export default Percent;