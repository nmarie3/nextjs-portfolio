'use client'
import React, {useEffect, useRef, ReactNode} from 'react'
import { motion, useInView, useAnimation, useSpring } from 'framer-motion';

interface Props {
    children: ReactNode;
    delay?:number;
    duration?: number
    x?: number;
    y?: number;
    className?: string;
}

export const SlideEffect = ({children, delay=0, duration=0.5, x=0, y=75, className}: Props) => {
    const ref = useRef(null);
        const isInView = useInView(ref, {once: false});
    
        const mainControls = useAnimation();
    
        useEffect(() => {
            if (isInView) {
                mainControls.start("visible");
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
           transition={{duration, delay, 
           type: "tween",
            }}
           className={`relative ${className}`}
        >
                {children}
        </motion.div>
    </div>
  )
}

