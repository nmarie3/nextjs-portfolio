'use client'
import { motion, useInView} from "framer-motion";
import React, {useRef, useEffect, useState} from 'react';


type Props = {
  className?: string;
};

const HistorySvgMask = ({ className }: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const [keyIndex, setKeyIndex] = useState(0);

  useEffect(() => {
    setKeyIndex((prev) => prev + 1);
  }, [isInView]); //when keyIndex changes, react auto unmounts the old and makes a new render with useState. mini react tidbit

  return (

 <div ref={ref}>
      <svg id="Layer_7" xmlns="http://www.w3.org/2000/svg" viewBox="-5 0 585.8 218.39" className={className} preserveAspectRatio="xMidYMid meet">
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
            delay: 0,
            ease: "easeInOut",
          }}
          strokeDasharray="0 1"
          fill="none"
          style={{
            fill: "",
            stroke: "#000000",
            strokeMiterlimit: 0,
            strokeWidth: "100px",
          }}
            d="M554.05,8.48s9.91,45.65,10.3,68.59c.35,20.26-10.45,25.57-17.99,29.88-60.55,34.59-198.53-60.37-377.06-49.82-27.95,1.65-106.27,10.4-126.13,65.76-17.43,48.58,42.06,96.67,50.67,105.83"
         />
      </svg>
    </div>
  );
};

  export default HistorySvgMask;

  //#0A0A0A