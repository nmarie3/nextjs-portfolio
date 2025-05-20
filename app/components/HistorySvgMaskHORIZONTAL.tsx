'use client'
import { motion, useInView} from "framer-motion";
import React, {useRef, useEffect, useState} from 'react';


type Props = {
  className?: string;
};

const HistorySvgMaskHorizontal = ({ className }: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [keyIndex, setKeyIndex] = useState(0);

  useEffect(() => {
    setKeyIndex((prev) => prev + 1);
  }, [isInView]); //when keyIndex changes, react auto unmounts the old and makes a new render with useState. mini react tidbit

  return (

 <div ref={ref}>
      <svg id="Layer_7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600.01 250.07" className={className} preserveAspectRatio="xMidYMid meet">
        <motion.path
          key={keyIndex}
          initial={{
            filter: "blur(5px)",
            pathLength: 1,
            pathOffset: 0,
          }}
          animate={{
            filter: "blur(5px)",
            pathLength: 0,
            pathOffset: 1,
          }}
          transition={{
            duration: 1.7,
            delay: 0.3,
            ease: "easeInOut",
          }}
          strokeDasharray="0 1"
          fill="none"
          style={{
            fill: "",
            stroke: "#09090b",
            strokeMiterlimit: 0,
            strokeWidth: "100px",
          }}
            d="M531.45,41.96c34.56,49.22,30.95,68.43,25.52,76.8-9.67,14.9-37.47,14.15-167.58-4.16-75.78-10.66-72.55-11.88-99.34-14.89-74.96-8.4-208.51-23.37-242.29,34.44-5.62,9.62-22.03,44.46,21.21,120.76"
         />
      </svg>
    </div>
  );
};

  export default HistorySvgMaskHorizontal;

  //#09090b