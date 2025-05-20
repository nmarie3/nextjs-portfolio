'use client'
import { motion, useInView} from "framer-motion";
import React, {useRef, useEffect, useState} from 'react';


type Props = {
  className?: string;
};

const HistorySvgMaskVerticle = ({ className }: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [keyIndex, setKeyIndex] = useState(0);

  useEffect(() => {
    setKeyIndex((prev) => prev + 1);
  }, [isInView]); //when keyIndex changes, react auto unmounts the old and makes a new render with useState. mini react tidbit

  return (

 <div ref={ref}>
      <svg id="Layer_7" xmlns="http://www.w3.org/2000/svg" viewBox="0 30 197.01 650.07" className={className} preserveAspectRatio="xMidYMid meet">
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
            d="M37.29,64.69c.61-.55,1.55-1.38,2.71-2.36,5.24-4.39,35.2-28.5,65.56-20.85,7.93,2,14.23,5.75,17.58,8.38,23.04,18.08,20.82,72.63-13.01,189.33-31.97,110.29-45.36,114.62-49.92,170.29-2.72,33.19-10.37,126.57,38.6,152.13,27.82,14.52,62.57,1.22,80.79-7.6"
         />
      </svg>
    </div>
  );
};

  export default HistorySvgMaskVerticle;

  //#09090b