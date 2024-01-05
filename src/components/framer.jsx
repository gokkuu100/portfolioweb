import React, { useState } from 'react'
import{ motion, AnimatePresence } from "framer-motion"
import './timeline.css'

function Framer() {
    const [isVisible, setIsVisible] = useState(true)
  return (
    <div>
        <div
            style={{
                display: "grid",
                placeContent: "center",
                height: "100vh",
                gap: "0.8rem"
            }}
        >
            <button className='btn' onClick={() => setIsVisible(!isVisible)}>Show/Hide</button>
            <AnimatePresence>
               {isVisible && (<motion.div 
                initial={{
                    rotate: "0deg"
                }}
                animate={{
                    rotate: "100deg"
                }}
                exit={{
                    rotate: "0deg"
                }}
                transition={{
                    duration: 1,
                    ease: "backInOut"
                }}
                style={{
                    width: 150,
                    height: 150,
                    background: "black"
                }}
                ></motion.div>)}
            </AnimatePresence>

        </div>

    </div>
  )
}

export default Framer