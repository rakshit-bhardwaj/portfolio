import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import { AnimatePresence, motion } from "framer-motion";

function Loader({ isLoading, setIsLoading }: any) {
  useEffect(() => {
    setTimeout(() => {
      setIsLoading();
    }, 1900);
  }, [setIsLoading]);
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="loader"
          exit={{ scale: 0 }}
          key="motiondivleave"
          transition={{
            duration: 0.45,
            ease: "easeInOut",
          }}
        >
          <motion.svg
            id="logo"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
          >
            <title>Logo</title>
            <g>
              <g id="K" transform="translate(35.000000, 30.000000) scale(0.1)">
                <motion.path
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 1,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                  exit={{
                    scale: 2,
                  }}
                  fill="currentColor"
                  d="M -0.5,-0.5 C 65.1667,-0.5 130.833,-0.5 196.5,-0.5C 211.784,0.464635 227.117,2.29797 242.5,5C 273.762,10.5342 296.596,27.3676 311,55.5C 325.878,86.784 328.545,119.117 319,152.5C 308.405,180.763 289.238,200.93 261.5,213C 252.994,216.335 244.327,219.169 235.5,221.5C 258.278,231.444 275.445,247.444 287,269.5C 290.721,276.665 294.054,283.998 297,291.5C 310.568,328.715 324.401,365.715 338.5,402.5C 338.5,403.833 338.5,405.167 338.5,406.5C 318.833,406.5 299.167,406.5 279.5,406.5C 266.439,368.819 253.273,331.152 240,293.5C 226.408,261.232 202.574,241.398 168.5,234C 130.523,232.564 92.5234,232.064 54.5,232.5C 54.5,290.5 54.5,348.5 54.5,406.5C 36.1667,406.5 17.8333,406.5 -0.5,406.5C -0.5,270.833 -0.5,135.167 -0.5,-0.5 Z M 54.5,45.5 C 102.501,45.3333 150.501,45.5 198.5,46C 255.692,52.5608 277.859,84.0608 265,140.5C 258.158,160.673 244.324,173.173 223.5,178C 213.32,180.597 202.987,182.264 192.5,183C 146.501,183.5 100.501,183.667 54.5,183.5C 54.5,137.5 54.5,91.5 54.5,45.5 Z"
                />
              </g>
              <motion.path
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                  duration: 1,
                  ease: "easeInOut",
                }}
                exit={{
                  scale: 2,
                }}
                stroke="currentColor"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M 50, 5
          L 11, 27
          L 11, 72
          L 50, 95
          L 89, 73
          L 89, 28 z"
              />
            </g>
          </motion.svg>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Loader;
