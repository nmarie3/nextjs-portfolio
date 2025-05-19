'use client'
import React, {useEffect, useRef, ReactNode} from 'react'
import { motion, useInView, useAnimation, useSpring } from 'framer-motion';

interface Props {
    children: ReactNode;
    delay?:number;
    stiffness?: number;
    damping?: number;
    x?: number;
    y?: number;
    className?: string;
}

export const BounceEffect = ({children, delay=0, stiffness = 300, damping = 50, x=0, y=75, className}: Props) => {
    const ref = useRef(null);
        const isInView = useInView(ref, {once: true, amount: "some"});
    
        const mainControls = useAnimation();
    
        useEffect(() => {
            if (isInView) {
                mainControls.start("visible")
            } else {
                mainControls.start("hidden");
            }
        }, [isInView]);


  return (
    <div ref={ref} className="relative overflow-hidden w-fit">
        <motion.div
           variants={{
                hidden:{opacity:0, x, y},
                visible:{opacity:1, x:0, y:0},
           }} 
           initial="hidden"
           animate={mainControls}
           transition={{duration:0.5, delay, 
           type: "spring",
           stiffness,
           damping,}}
           className={`relative ${className}`}
        >
                {children}
        </motion.div>
    </div>
  )
}

