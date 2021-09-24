import * as React from "react";
import { useEffect, useState } from "react";
import Particles from 'react-particles-js';
import {
  motion,
  useViewportScroll,
  useSpring,
  useTransform
} from "framer-motion";


export const Example = () => {
  const [isComplete, setIsComplete] = useState(false);
  const { scrollYProgress } = useViewportScroll();
  const yRange = useTransform(scrollYProgress, [0, 0.9], [0, 1]);
  const pathLength = useSpring(yRange, { stiffness: 400, damping: 90 });

  useEffect(() => yRange.onChange(v => setIsComplete(v >= 1)), [yRange]);

  return (
    <>
      
      <svg className="progress-icon" viewBox="0 0 60 60">
        <motion.path
          fill="none"
          strokeWidth="5"
          stroke="white"
          strokeDasharray="0 1"
          d="M 0, 20 a 20, 20 0 1,0 40,0 a 20, 20 0 1,0 -40,0"
          style={{
            pathLength,
            rotate: 90,
            translateX: 5,
            translateY: 5,
            scaleX: -1 // Reverse direction of line animation
          }}
        />
        <motion.path
          fill="none"
          strokeWidth="5"
          stroke="#2527"
          d="M14,26 L 22,33 L 35,16"
          initial={false}
          strokeDasharray="0 1"
          animate={{ pathLength: isComplete ? 1 : 0 }}
        />
      </svg>
    </>
  );
};

export const Particlesanimation=()=>{
  return(
    <Particles 
    style={{ position: 'absolute',
        width: '100%',
        height: '100%'}}
    params={{
        "particles": {
            "number": {
                "value": 50
            },
            
            "size": {
                "value": 3
            }
        }, 
        "interactivity": {
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "repulse"
                }
            }
        }
       
        
      
    }}
   
     />
  );
}
export const JavaSvg=()=>{
  
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 356 308">
  <g fill="none">
    <path fill="#5382A1" d="M61.0803785 197.898746C61.0803785 197.898746 51.3150668 203.577614 68.0300184 205.499268 88.2797126 207.809387 98.6290971 207.478091 120.944398 203.254583 120.944398 203.254583 126.811299 206.933278 135.004849 210.119505 84.9798393 231.559386 21.7883954 208.877662 61.0803785 197.898746M54.9675882 169.921107C54.9675882 169.921107 44.0148454 178.028561 60.7421948 179.758739 82.3735521 181.990338 99.4563041 182.172861 129.016036 176.480906 129.016036 176.480906 133.104546 180.625894 139.533479 182.89262 79.05026 200.578731 11.6828338 184.28737 54.9675882 169.921107"/>
    <path fill="#E76F00" d="M106.500305,122.461747 C118.826445,136.653063 103.261732,149.423458 103.261732,149.423458 C103.261732,149.423458 134.559907,133.266405 120.186068,113.033931 C106.761347,94.1658991 96.466375,84.7911177 152.199181,52.4680596 C152.199181,52.4680596 64.7170583,74.3170664 106.500305,122.461747"/>
    <path fill="#5382A1" d="M172.662393 218.592693C172.662393 218.592693 179.888916 224.547068 164.703711 229.153529 135.828612 237.900846 44.5224653 240.54226 19.1580015 229.502044 10.040129 225.535446 27.1387228 220.030835 32.5172895 218.875776 38.1265925 217.659416 41.3321053 217.886021 41.3321053 217.886021 31.1921054 210.742837-24.208716 231.912033 13.1912293 237.974544 115.186322 254.515238 199.118549 230.526238 172.662393 218.592693M65.776379 140.93305C65.776379 140.93305 19.3322591 151.964312 49.329357 155.97017 61.9950586 157.66591 87.24381 157.282268 110.762384 155.311711 129.983063 153.690358 149.282949 150.243088 149.282949 150.243088 149.282949 150.243088 142.505501 153.145545 137.602182 156.493632 90.4389912 168.897602-.67154598 163.127128 25.5580068 150.439386 47.7403759 139.716691 65.776379 140.93305 65.776379 140.93305M149.091473 187.503214C197.035035 162.589891 174.867818 138.648416 159.395399 141.873903 155.603058 142.663228 153.912139 143.347172 153.912139 143.347172 153.912139 143.347172 155.319976 141.141746 158.008915 140.187118 188.618325 129.425851 212.158938 171.926103 148.12789 188.758833 148.12789 188.759522 148.86969 188.09624 149.091473 187.503214"/>
    <path fill="#E76F00" d="M120.186068,0.274817278 C120.186068,0.274817278 146.737962,26.8356661 95.002749,67.6787483 C53.5163601,100.441927 85.5425598,119.122614 94.9855297,140.466067 C70.7692373,118.617061 52.99772,99.3832953 64.920244,81.4822896 C82.4196994,55.2052121 130.89912,42.465124 120.186068,0.274817278"/>
    <path fill="#5382A1" d="M70.4875324,255.012526 C116.507373,257.958374 187.176051,253.378086 188.84975,231.602778 C188.84975,231.602778 185.632528,239.857628 150.816829,246.413294 C111.537933,253.805121 63.0929502,252.942098 34.3597362,248.204772 C34.3597362,248.204083 40.2417902,253.072963 70.4875324,255.012526"/>
  </g>
</svg>
  );
}
export const CPPSvg=()=>{
  
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 406 228">
    <g fill="none">
      <path fill="#00599C" d="M224.172151,191.63789 C225.953762,188.551791 227.06087,185.074643 227.06087,181.952186 L227.06087,73.5647536 C227.06087,70.4422957 225.955246,66.9658899 224.172893,63.8797913 L113.530435,127.758841 L224.172151,191.63789 Z"/>
      <path fill="#004482" d="M123.362319,253.175096 L217.228986,198.981751 C219.932939,197.420522 222.390539,194.72473 224.172151,191.63789 L113.530435,127.758841 L2.88871884,191.638632 C4.67033043,194.72473 7.12867246,197.421264 9.83188406,198.981751 L103.698551,253.175096 C109.105716,256.297554 117.955154,256.297554 123.362319,253.175096 Z"/>
      <path fill="#659AD2" d="M224.172893,63.8790493 C222.390539,60.7922087 219.932197,58.0964174 217.228986,56.5351884 L123.362319,2.34184348 C117.955154,-0.780614493 109.105716,-0.780614493 103.698551,2.34184348 L9.83188406,56.5351884 C4.42397681,59.6569043 0,67.3205797 0,73.5647536 L0,181.952186 C0,185.074643 1.10636522,188.551791 2.88871884,191.63789 L113.530435,127.758841 L224.172893,63.8790493 Z"/>
      <path fill="#FFF" d="M113.530435,203.445797 C71.7964986,203.445797 37.8434783,169.492777 37.8434783,127.758841 C37.8434783,86.0249043 71.7964986,52.0718841 113.530435,52.0718841 C140.460151,52.0718841 165.575606,66.5637101 179.074597,89.8916174 L146.319212,108.846006 C139.563038,97.1694377 126.998261,89.9153623 113.530435,89.9153623 C92.6630957,89.9153623 75.6869565,106.891501 75.6869565,127.758841 C75.6869565,148.625438 92.6630957,165.602319 113.530435,165.602319 C126.999745,165.602319 139.564522,158.348243 146.321438,146.669449 L179.076823,165.623096 C165.577832,188.953229 140.461635,203.445797 113.530435,203.445797 Z"/>
      <polygon fill="#FFF" points="189.217 123.554 180.807 123.554 180.807 115.144 172.399 115.144 172.399 123.554 163.988 123.554 163.988 131.963 172.399 131.963 172.399 140.373 180.807 140.373 180.807 131.963 189.217 131.963"/>
      <polygon fill="#FFF" points="220.754 123.554 212.343 123.554 212.343 115.144 203.935 115.144 203.935 123.554 195.525 123.554 195.525 131.963 203.935 131.963 203.935 140.373 212.343 140.373 212.343 131.963 220.754 131.963"/>
    </g>
  </svg>
  );
}
export const CSvg=()=>{
  
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 406 228">
    <g fill="none">
      <path fill="#A9B9CB" d="M227.462295,75.4010929 C227.462295,71.1344262 226.553005,67.2874317 224.664481,64.0699454 C222.845902,60.852459 220.118033,58.1945355 216.480874,56.0961749 C186.264481,38.6797814 156.048087,21.263388 125.831694,3.84699454 C117.718033,-0.839344262 109.814208,-0.699453552 101.700546,4.0568306 C89.6699454,11.1213115 29.4469945,45.6743169 11.5409836,56.0961749 C4.12677596,60.3628415 0.559562842,66.9377049 0.559562842,75.4710383 C0.559562842,110.513661 0.559562842,145.62623 0.559562842,180.668852 C0.559562842,184.865574 1.46885246,188.572678 3.21748634,191.790164 C5.03606557,195.077596 7.83387978,197.87541 11.5409836,200.043716 C29.5169399,210.465574 89.6699454,244.948634 101.700546,252.08306 C109.814208,256.839344 117.648087,257.04918 125.831694,252.292896 C156.048087,234.806557 186.264481,217.460109 216.480874,200.043716 C220.257923,197.87541 222.985792,195.147541 224.804372,191.790164 C226.553005,188.572678 227.462295,184.865574 227.462295,180.668852 C227.462295,180.598907 227.462295,110.443716 227.462295,75.4010929"/>
      <path fill="#7F8B99" d="M125.621858,3.98688525 C117.508197,-0.699453552 109.604372,-0.559562842 101.560656,4.19672131 C89.5300546,11.2612022 29.4469945,45.7442623 11.5409836,56.0961749 C4.19672131,60.3628415 0.559562842,66.8677596 0.559562842,75.4010929 C0.559562842,110.37377 0.559562842,145.346448 0.559562842,180.319126 C0.559562842,184.515847 1.46885246,188.222951 3.21748634,191.440437 C5.03606557,194.727869 7.83387978,197.455738 11.5409836,199.624044 C15.6677596,202.002186 21.9628415,205.639344 29.3770492,209.906011 L195.217486,44.0655738 C171.995628,30.7759563 148.843716,17.4163934 125.621858,3.98688525"/>
      <path fill="#FFF" d="M137.442623,111.982514 L172.765027,112.262295 C172.765027,97.5737705 157.866667,61.4819672 115.2,61.4819672 C87.9912568,61.4819672 51.4098361,78.7584699 51.4098361,128.489617 C51.4098361,178.220765 87.2918033,194.448087 115.2,194.448087 C160.454645,194.448087 171.22623,163.182514 171.22623,145.486339 L137.512568,143.527869 C137.512568,143.527869 138.421858,163.951913 114.990164,163.951913 C93.3770492,163.951913 89.7398907,137.442623 89.7398907,128.489617 C89.7398907,114.780328 94.6360656,92.8174863 114.990164,92.8174863 C135.344262,92.8874317 137.442623,111.982514 137.442623,111.982514"/>
    </g>
  </svg>
  );
}
export const PHPSvg=()=>{
  return(

    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 266 128">
  <defs>
    <radialGradient id="php-a" cx="30.02%" cy="17.584%" r="124.885%" fx="30.02%" fy="17.584%" gradientTransform="matrix(.52578 0 0 1 .142 0)">
      <stop offset="0%" stop-color="#FFF"/>
      <stop offset="50%" stop-color="#4C6B97"/>
      <stop offset="100%" stop-color="#231F20"/>
    </radialGradient>
  </defs>
  <g fill="none">
    <ellipse cx="128" cy="67.3" fill="url(#php-a)" rx="128" ry="67.3"/>
    <ellipse cx="128" cy="67.3" fill="#6181B6" rx="123" ry="62.3"/>
    <path fill="#FFF" d="M116.9 70.5C116.9 70.5 123 39.1 123 39.1 124.4 32 123.2 26.7 119.6 23.4 116.1 20.2 110.1 18.6 101.3 18.6L90.7 18.6 93.7 3C93.8 2.4 93.7 1.8 93.3 1.3 92.9.8 92.4.6 91.8.6L77.2.6C76.2.6 75.4 1.3 75.2 2.2L68.7 35.5C68.1 31.7 66.7 28.5 64.3 25.9 60 21 53.3 18.5 44.2 18.5L16.1 18.5C15.1 18.5 14.3 19.2 14.1 20.1L1 87.7C.9 88.3 1 88.9 1.4 89.4 1.8 89.9 2.3 90.1 2.9 90.1L17.6 90.1C18.6 90.1 19.4 89.4 19.6 88.5L22.8 72.2 33.7 72.2C39.4 72.2 44.3 71.6 48 70.4 51.9 69.1 55.4 67 58.5 64.1 61 61.8 63.1 59.2 64.7 56.4L62.1 69.9C62 70.5 62.1 71.1 62.5 71.6 62.9 72.1 63.4 72.3 64 72.3L78.6 72.3C79.6 72.3 80.4 71.6 80.6 70.7L87.8 33.7 97.8 33.7C102.1 33.7 103.3 34.5 103.7 34.9 104 35.2 104.6 36.4 103.9 40.1L98.1 70C98 70.6 98.1 71.2 98.5 71.7 98.9 72.2 99.4 72.4 100 72.4L115 72.4C115.9 72.1 116.7 71.4 116.9 70.5zM49.3 44.5C48.4 49.2 46.7 52.6 44.2 54.5 41.7 56.4 37.6 57.4 32.2 57.4L25.7 57.4 30.4 33.2 38.8 33.2C45 33.2 47.5 34.5 48.5 35.6 49.8 37.2 50.1 40.3 49.3 44.5zM179.3 25.9C175 21 168.3 18.5 159.2 18.5L130.9 18.5C129.9 18.5 129.1 19.2 128.9 20.1L115.8 87.6C115.7 88.2 115.8 88.8 116.2 89.3 116.6 89.8 117.1 90 117.7 90L132.4 90C133.4 90 134.2 89.3 134.4 88.4L137.6 72.1 148.5 72.1C154.2 72.1 159.1 71.5 162.8 70.3 166.7 69 170.2 66.9 173.3 64 175.9 61.6 178.1 58.9 179.7 56 181.3 53.1 182.5 49.9 183.2 46.4 184.9 37.7 183.6 30.9 179.3 25.9zM164 44.5C163.1 49.2 161.4 52.6 158.9 54.5 156.4 56.4 152.3 57.4 146.9 57.4L140.4 57.4 145.1 33.2 153.5 33.2C159.7 33.2 162.2 34.5 163.2 35.6 164.6 37.2 164.9 40.3 164 44.5z" transform="translate(36 17)"/>
    <path fill="#000004" d="M35.8 29.2C41.4 29.2 45.1 30.2 47 32.3 48.9 34.4 49.3 37.9 48.3 42.9 47.3 48.1 45.3 51.9 42.4 54.1 39.5 56.3 35.1 57.4 29.2 57.4L20.3 57.4 25.8 29.2 35.8 29.2zM0 86L14.7 86 18.2 68.1 30.8 68.1C36.4 68.1 40.9 67.5 44.5 66.3 48.1 65.1 51.3 63.2 54.3 60.4 56.8 58.1 58.8 55.6 60.3 52.9 61.8 50.2 62.9 47.2 63.5 43.9 65.1 35.9 63.9 29.7 60 25.2 56.1 20.7 49.9 18.5 41.4 18.5L13.1 18.5 0 86zM74.3.6L88.9.6 85.4 18.5 98.4 18.5C106.6 18.5 112.2 19.9 115.3 22.8 118.4 25.7 119.3 30.3 118.1 36.7L112 68.1 97.2 68.1 103 38.2C103.7 34.8 103.4 32.5 102.3 31.3 101.2 30.1 98.7 29.4 95 29.4L83.3 29.4 75.8 68.1 61.2 68.1 74.3.6zM150.5 29.2C156.1 29.2 159.8 30.2 161.7 32.3 163.6 34.4 164 37.9 163 42.9 162 48.1 160 51.9 157.1 54.1 154.2 56.3 149.8 57.4 143.9 57.4L135 57.4 140.5 29.2 150.5 29.2zM114.7 86L129.4 86 132.9 68.1 145.5 68.1C151.1 68.1 155.6 67.5 159.2 66.3 162.8 65.1 166 63.2 169 60.4 171.5 58.1 173.5 55.6 175 52.9 176.5 50.2 177.6 47.2 178.2 43.9 179.8 35.9 178.6 29.7 174.7 25.2 170.8 20.7 164.6 18.5 156.1 18.5L127.8 18.5 114.7 86z" transform="translate(39 19)"/>
  </g>
</svg>
  );
}

export const JSSvg=()=>{
  return(<img src="https://img.icons8.com/color/48/000000/javascript--v1.png"/>);
}
export const TSSvg=()=>{
  return(
    <img src="https://img.icons8.com/color/48/000000/typescript.png"/>
    );
}
export const HTMLSvg=()=>{
  return(<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 226 256">
  <g fill="none">
    <polygon fill="#E44D26" points="224.818 .674 204.372 229.718 112.468 255.198 20.816 229.754 .391 .674"/>
    <polygon fill="#F16529" points="112.605 235.722 186.869 215.134 204.341 19.404 112.605 19.404"/>
    <polygon fill="#EBEBEB" points="72.859 75.597 112.605 75.597 112.605 47.501 42.154 47.501 42.826 55.038 49.732 132.463 112.605 132.463 112.605 104.367 75.427 104.367"/>
    <polygon fill="#EBEBEB" points="79.191 146.511 50.987 146.511 54.923 190.626 112.475 206.603 112.605 206.566 112.605 177.335 112.482 177.368 81.192 168.919"/>
    <polygon fill="#FFF" points="112.508 132.463 147.105 132.463 143.843 168.901 112.508 177.359 112.508 206.588 170.105 190.626 170.529 185.879 177.131 111.912 177.816 104.367 112.508 104.367"/>
    <polygon fill="#FFF" points="112.508 75.528 112.508 75.597 180.373 75.597 180.936 69.282 182.217 55.038 182.888 47.501 112.508 47.501"/>
  </g>
</svg>);
}
export const CSSSvg=()=>{
  return(<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 226 256">
  <g fill="none">
    <polygon fill="#264DE4" points="112.468 255.198 20.816 229.754 .391 .674 224.818 .674 204.372 229.718"/>
    <polygon fill="#2965F1" points="186.869 215.134 204.341 19.404 112.605 19.404 112.605 235.722"/>
    <polygon fill="#EBEBEB" points="47.214 104.367 49.732 132.463 112.605 132.463 112.605 104.367"/>
    <polygon fill="#EBEBEB" points="42.154 47.501 44.708 75.597 112.605 75.597 112.605 47.501"/>
    <polygon fill="#EBEBEB" points="112.605 177.335 112.482 177.368 81.192 168.919 79.191 146.511 50.987 146.511 54.923 190.626 112.475 206.603 112.605 206.566"/>
    <polygon fill="#FFF" points="177.816 104.367 182.888 47.501 112.508 47.501 112.508 75.597 152.097 75.597 149.541 104.367 112.508 104.367 112.508 132.463 147.105 132.463 143.843 168.901 112.508 177.359 112.508 206.588 170.105 190.626 170.529 185.879 177.131 111.912"/>
  </g>
</svg>);
}
export const AndroidSvg=()=>{
  return(<svg viewBox="0 0 140 140">
  <path fill="#fff" d="M13.699 108.645h8.047v17.421h-3.492V112.04l-3.116.012h-.749c-1.74 0-2.707.073-2.9.218-1.039.282-1.917.882-2.634 1.8-.772 1.104-1.159 2.203-1.159 3.298 0 1.353.523 2.598 1.57 3.733.701.668 1.305 1.071 1.813 1.208.507.258 1.381.387 2.621.387h2.429v3.371h-2.911c-2.159 0-3.983-.568-5.474-1.704-1.079-.854-1.8-1.627-2.162-2.319-.902-1.434-1.354-2.9-1.354-4.398v-.507c0-2.094.785-4.015 2.356-5.763.95-.926 1.728-1.51 2.331-1.752.436-.242 1.035-.471 1.801-.688.684-.195 1.679-.291 2.983-.291zm25.625 3.479c.346.467.596.866.749 1.196.226.395.438.926.641 1.595.241.806.362 1.901.362 3.286v7.865h-3.492v-8.24c0-2.771-1.252-4.623-3.757-5.557-.572-.161-1.075-.246-1.511-.254-.435.008-.934.093-1.498.254-2.505.934-3.757 2.787-3.757 5.557v8.24h-3.504v-7.865c0-1.385.121-2.48.362-3.286.201-.668.415-1.2.641-1.595.153-.338.406-.737.761-1.196 1.877-2.304 4.209-3.456 6.995-3.456 2.788 0 5.123 1.152 7.008 3.456zm9.798-3.467c2.345 0 3.689.052 4.036.157.95.113 2.021.512 3.213 1.196.652.403 1.346 1.019 2.078 1.848 1.305 1.619 1.957 3.459 1.957 5.521a8.461 8.461 0 01-.7 3.419c-.918 2.086-2.429 3.592-4.53 4.519-.975.5-2.473.749-4.494.749h-7.406l-.387-.073v-3.31h8.167c.87 0 1.542-.077 2.018-.229 1.265-.427 2.19-1.063 2.778-1.909.717-1.071 1.075-2.114 1.075-3.129 0-1.023-.31-2.03-.93-3.021-.387-.572-.813-1.006-1.28-1.305-.854-.701-2.074-1.051-3.661-1.051h-8.167v-3.383h6.233zm13.097 0h11.188c1.973 0 3.52.592 4.639 1.776.5.467.846.918 1.039 1.353.436.87.652 1.72.652 2.549v.495c0 1.273-.552 2.517-1.654 3.733-.709.676-1.354 1.111-1.934 1.305 1.466 1.563 2.199 3.628 2.199 6.198h-3.516v-.266c0-1.901-.77-3.411-2.308-4.531-.878-.62-2.026-.93-3.443-.93h-6.862v-3.359h11.405c1.248 0 2.094-.616 2.537-1.848.048-.25.08-.459.096-.628 0-.685-.285-1.305-.857-1.86-.491-.387-1.015-.58-1.57-.58 0-.032-.169-.048-.508-.048H62.219v-3.359zm28.041.011h.12c2.675 0 4.958 1.096 6.851 3.286 1.225 1.643 1.836 3.431 1.836 5.364v.121c0 2.674-1.119 4.945-3.358 6.813-1.627 1.208-3.411 1.813-5.352 1.813h-.121c-2.658 0-4.934-1.087-6.826-3.262-.66-.926-1.123-1.776-1.39-2.549a9.19 9.19 0 01-.471-2.839v-.121c0-2.626 1.083-4.873 3.25-6.742 1.466-1.047 2.803-1.635 4.011-1.764.37-.079.853-.12 1.45-.12zm-5.232 8.675c0 1.514.592 2.843 1.776 3.987 1.055.902 2.162 1.353 3.322 1.353h.338c.935 0 1.885-.318 2.852-.955.998-.733 1.675-1.667 2.029-2.803.112-.298.193-.81.241-1.534 0-1.482-.575-2.791-1.728-3.927-1.079-.958-2.263-1.438-3.552-1.438-1.506 0-2.843.628-4.011 1.885-.491.645-.802 1.192-.931 1.643-.223.629-.336 1.225-.336 1.789zm15.851-8.675h3.491v17.397h-3.491v-17.397zm11.61-.011c2.344 0 3.688.052 4.035.157.95.113 2.021.512 3.213 1.196.652.403 1.346 1.019 2.078 1.848 1.305 1.619 1.957 3.459 1.957 5.521a8.461 8.461 0 01-.7 3.419c-.918 2.086-2.429 3.592-4.53 4.519-.975.5-2.473.749-4.494.749h-7.406l-.387-.073v-3.31h8.167c.87 0 1.542-.077 2.018-.229 1.265-.427 2.19-1.063 2.778-1.909.717-1.071 1.075-2.114 1.075-3.129 0-1.023-.31-2.03-.93-3.021-.387-.572-.813-1.006-1.28-1.305-.854-.701-2.074-1.051-3.661-1.051h-8.167v-3.383h6.234zM29.19 76.835c-4.484.002-8.128-3.646-8.129-8.13l-.001-24.891c-.001-4.479 3.642-8.127 8.121-8.128a8.072 8.072 0 015.753 2.377 8.078 8.078 0 012.384 5.749l-.002 24.892a8.037 8.037 0 01-2.373 5.744 8.065 8.065 0 01-5.753 2.387m-.006-38.964a5.945 5.945 0 00-5.943 5.944l.004 24.889a5.943 5.943 0 1011.887.001V43.812a5.947 5.947 0 00-5.948-5.941"></path><path fill="#fff" d="M92.942 39.104l-2.186-.001-53.54.007-2.186.001-.001-2.186c-.005-8.972 4.883-17.316 12.889-22.246l-3.112-5.682a2.995 2.995 0 011.214-4.093 2.92 2.92 0 011.424-.362c1.103 0 2.113.599 2.645 1.565l3.258 5.935a30.63 30.63 0 0110.607-1.866c3.729-.001 7.307.629 10.691 1.871l3.253-5.944a3.003 3.003 0 012.642-1.564c.496-.001.99.12 1.426.354a3.007 3.007 0 011.467 1.819 2.977 2.977 0 01-.258 2.293l-3.11 5.678c7.993 4.94 12.875 13.279 12.874 22.235l.003 2.186zM77.115 15.52l4.148-7.576a.825.825 0 10-1.444-.794l-4.191 7.652a28.588 28.588 0 00-11.646-2.442 28.521 28.521 0 00-11.619 2.434l-4.194-7.635a.818.818 0 00-1.117-.328.816.816 0 00-.327 1.117l4.149 7.569c-8.154 4.206-13.663 12.214-13.658 21.409l53.539-.006c.002-9.193-5.497-17.184-13.64-21.4M51.806 27.227a2.245 2.245 0 01.003-4.49 2.251 2.251 0 012.246 2.247 2.248 2.248 0 01-2.249 2.243m24.379-.005a2.24 2.24 0 01-2.245-2.244 2.259 2.259 0 012.245-2.25 2.258 2.258 0 012.24 2.25 2.241 2.241 0 01-2.24 2.244m-22.136 77.983c-4.48-.001-8.126-3.645-8.127-8.128L45.92 86.09l-2.136.002a8.457 8.457 0 01-6.031-2.496 8.45 8.45 0 01-2.497-6.034l-.008-38.566v-2.188h2.186l53.138-.008 2.187-.001v2.186l.006 38.571c0 4.704-3.826 8.532-8.529 8.531l-2.148.001.002 10.981c0 4.481-3.646 8.129-8.124 8.129a8.048 8.048 0 01-5.748-2.378 8.06 8.06 0 01-2.386-5.746V86.088h-3.653v10.985c-.002 4.482-3.648 8.133-8.13 8.132"></path><path fill="#fff" d="M37.444 77.563a6.332 6.332 0 006.341 6.346h4.318l.005 13.169a5.948 5.948 0 005.94 5.945 5.945 5.945 0 005.941-5.95V83.908l8.024-.002-.001 13.168a5.946 5.946 0 0011.891-.004l-.004-13.166 4.334-.001a6.346 6.346 0 006.343-6.346l-.007-38.573-53.136.009.011 38.57zm61.372-.738c-4.483.001-8.13-3.642-8.129-8.126l-.006-24.89c.001-4.484 3.642-8.131 8.122-8.131 4.486-.001 8.135 3.646 8.135 8.128l.002 24.889c.001 4.481-3.642 8.131-8.124 8.13m-.007-38.962a5.94 5.94 0 00-5.941 5.945l.002 24.889a5.94 5.94 0 005.945 5.943 5.94 5.94 0 005.941-5.946l-.006-24.889a5.94 5.94 0 00-5.941-5.942"></path><path fill="#A4C439" d="M29.184 37.871a5.945 5.945 0 00-5.943 5.944l.004 24.889a5.942 5.942 0 005.945 5.946 5.936 5.936 0 005.942-5.945V43.812a5.947 5.947 0 00-5.948-5.941M77.115 15.52l4.148-7.576a.829.829 0 00-.325-1.124.827.827 0 00-1.119.33l-4.19 7.655a28.504 28.504 0 00-11.646-2.444 28.51 28.51 0 00-11.619 2.434L48.17 7.16a.82.82 0 00-1.116-.329.816.816 0 00-.328 1.117l4.149 7.57c-8.154 4.206-13.663 12.214-13.658 21.409l53.539-.006c.001-9.194-5.498-17.185-13.641-21.401M51.806 27.227a2.245 2.245 0 01.003-4.49 2.251 2.251 0 012.246 2.247 2.248 2.248 0 01-2.249 2.243m24.379-.005a2.243 2.243 0 01-2.245-2.244 2.263 2.263 0 012.245-2.25 2.258 2.258 0 012.24 2.25 2.24 2.24 0 01-2.24 2.244m-38.75 11.771l.008 38.572a6.334 6.334 0 006.342 6.341l4.318.001.005 13.169a5.948 5.948 0 005.94 5.945 5.95 5.95 0 005.945-5.949l-.003-13.164 8.024-.002.003 13.168c0 3.277 2.667 5.948 5.942 5.942a5.946 5.946 0 005.945-5.946L79.9 83.904l4.334-.003a6.345 6.345 0 006.345-6.344l-.007-38.572-53.137.008zm67.317 4.813a5.941 5.941 0 00-5.943-5.943 5.94 5.94 0 00-5.941 5.945l.005 24.89a5.937 5.937 0 005.942 5.942 5.94 5.94 0 005.941-5.946l-.004-24.888z"></path>
  </svg>);
}
export const CsharpSvg=()=>{
  return(<svg viewBox="0 0 140 140">
  <path fill="#9B4F96" d="M115.4 30.7L67.1 2.9c-.8-.5-1.9-.7-3.1-.7-1.2 0-2.3.3-3.1.7l-48 27.9c-1.7 1-2.9 3.5-2.9 5.4v55.7c0 1.1.2 2.4 1 3.5l106.8-62c-.6-1.2-1.5-2.1-2.4-2.7z"></path><path fill="#68217A" d="M10.7 95.3c.5.8 1.2 1.5 1.9 1.9l48.2 27.9c.8.5 1.9.7 3.1.7 1.2 0 2.3-.3 3.1-.7l48-27.9c1.7-1 2.9-3.5 2.9-5.4V36.1c0-.9-.1-1.9-.6-2.8l-106.6 62z"></path><path fill="#fff" d="M85.3 76.1C81.1 83.5 73.1 88.5 64 88.5c-13.5 0-24.5-11-24.5-24.5s11-24.5 24.5-24.5c9.1 0 17.1 5 21.3 12.5l13-7.5c-6.8-11.9-19.6-20-34.3-20-21.8 0-39.5 17.7-39.5 39.5s17.7 39.5 39.5 39.5c14.6 0 27.4-8 34.2-19.8l-12.9-7.6zM97 66.2l.9-4.3h-4.2v-4.7h5.1L100 51h4.9l-1.2 6.1h3.8l1.2-6.1h4.8l-1.2 6.1h2.4v4.7h-3.3l-.9 4.3h4.2v4.7h-5.1l-1.2 6h-4.9l1.2-6h-3.8l-1.2 6h-4.8l1.2-6h-2.4v-4.7H97zm4.8 0h3.8l.9-4.3h-3.8l-.9 4.3z"></path>
  </svg>);
}
export const NodejsSvg=()=>{
  return(<svg viewBox="0 0 128 128">
  <path fill="#83CD29" d="M112.771 30.334L68.674 4.729c-2.781-1.584-6.402-1.584-9.205 0L14.901 30.334C12.031 31.985 10 35.088 10 38.407v51.142c0 3.319 2.084 6.423 4.954 8.083l11.775 6.688c5.628 2.772 7.617 2.772 10.178 2.772 8.333 0 13.093-5.039 13.093-13.828v-50.49c0-.713-.371-1.774-1.071-1.774h-5.623C42.594 41 41 42.061 41 42.773v50.49c0 3.896-3.524 7.773-10.11 4.48L18.723 90.73c-.424-.23-.723-.693-.723-1.181V38.407c0-.482.555-.966.982-1.213l44.424-25.561c.415-.235 1.025-.235 1.439 0l43.882 25.555c.42.253.272.722.272 1.219v51.142c0 .488.183.963-.232 1.198l-44.086 25.576c-.378.227-.847.227-1.261 0l-11.307-6.749c-.341-.198-.746-.269-1.073-.086-3.146 1.783-3.726 2.02-6.677 3.043-.726.253-1.797.692.41 1.929l14.798 8.754a9.294 9.294 0 004.647 1.246c1.642 0 3.25-.426 4.667-1.246l43.885-25.582c2.87-1.672 4.23-4.764 4.23-8.083V38.407c0-3.319-1.36-6.414-4.229-8.073zM77.91 81.445c-11.726 0-14.309-3.235-15.17-9.066-.1-.628-.633-1.379-1.272-1.379h-5.731c-.709 0-1.279.86-1.279 1.566 0 7.466 4.059 16.512 23.453 16.512 14.039 0 22.088-5.455 22.088-15.109 0-9.572-6.467-12.084-20.082-13.886-13.762-1.819-15.16-2.738-15.16-5.962 0-2.658 1.184-6.203 11.374-6.203 9.105 0 12.461 1.954 13.842 8.091.118.577.645.991 1.24.991h5.754c.354 0 .692-.143.94-.396.24-.272.367-.613.335-.979-.891-10.568-7.912-15.493-22.112-15.493-12.631 0-20.166 5.334-20.166 14.275 0 9.698 7.497 12.378 19.622 13.577 14.505 1.422 15.633 3.542 15.633 6.395 0 4.955-3.978 7.066-13.309 7.066z"></path>
  </svg>);
}
export const WPjsSvg=()=>{
  return(<img src="https://img.icons8.com/color/48/000000/wordpress.png"/>);
}
export const RECTSvg=()=>{
  return(<svg viewBox="0 0 128 128">
  <g fill="#61DAFB"><circle cx="64" cy="64" r="11.4"></circle><path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zM31.7 35c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zM7 64c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zM96.3 93c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z"></path></g>
  </svg>);
}
export const MYSQLSvg=()=>{
  return(<svg viewBox="0 0 128 128">
  <path fill="#00618A" d="M2.001 90.458h4.108V74.235l6.36 14.143c.75 1.712 1.777 2.317 3.792 2.317s3.003-.605 3.753-2.317l6.36-14.143v16.223h4.108V74.262c0-1.58-.632-2.345-1.936-2.739-3.121-.974-5.215-.131-6.163 1.976l-6.241 13.958-6.043-13.959c-.909-2.106-3.042-2.949-6.163-1.976C2.632 71.917 2 72.681 2 74.261v16.197zm31.898-13.206h4.107v8.938c-.038.485.156 1.625 2.406 1.661 1.148.018 8.862 0 8.934 0V77.208h4.117c.019 0-.004 14.514-.004 14.574.022 3.58-4.441 4.357-6.499 4.417H33.988v-2.764c.022 0 12.963.003 12.995-.001 2.645-.279 2.332-1.593 2.331-2.035v-1.078h-8.731c-4.062-.037-6.65-1.81-6.683-3.85-.002-.187.089-9.129-.001-9.219z"></path><path fill="#E48E00" d="M56.63 90.458h11.812c1.383 0 2.727-.289 3.793-.789 1.777-.816 2.646-1.922 2.646-3.372v-3.002c0-1.185-.987-2.292-2.923-3.028-1.027-.396-2.292-.605-3.517-.605h-4.978c-1.659 0-2.449-.5-2.646-1.606-.039-.132-.039-.237-.039-.369v-1.87c0-.105 0-.211.039-.342.197-.843.632-1.08 2.094-1.212l.395-.026h11.733v-2.738H63.504c-1.659 0-2.528.105-3.318.342-2.449.764-3.517 1.975-3.517 4.082v2.396c0 1.844 2.095 3.424 5.61 3.793.396.025.79.053 1.185.053h4.267c.158 0 .316 0 .435.025 1.304.105 1.856.343 2.252.816a.98.98 0 01.315.737v2.397c0 .289-.197.658-.592.974-.355.316-.948.527-1.738.58l-.435.026H56.63v2.738zm43.881-4.766c0 2.817 2.094 4.397 6.32 4.714.395.026.79.052 1.185.052h10.706V87.72h-10.784c-2.41 0-3.318-.606-3.318-2.055V71.497h-4.108v14.195zm-23.008.142v-9.765c0-2.48 1.742-3.985 5.186-4.46a7.8 7.8 0 011.108-.079h7.799c.396 0 .752.026 1.147.079 3.444.475 5.187 1.979 5.187 4.46v9.765c0 2.014-.74 3.09-2.445 3.792l4.048 3.653h-4.771l-3.274-2.956-3.296.209h-4.395a9.075 9.075 0 01-2.414-.343c-2.613-.712-3.88-2.085-3.88-4.355zm4.434-.237c0 .132.039.265.079.423.237 1.135 1.307 1.768 2.929 1.768h3.732l-3.428-3.095h4.771l2.989 2.7c.552-.295.914-.743 1.041-1.32.039-.132.039-.264.039-.396v-9.368c0-.105 0-.238-.039-.37-.238-1.056-1.307-1.662-2.89-1.662h-6.216c-1.82 0-3.008.792-3.008 2.032v9.288z"></path><path fill="#00618A" d="M122.336 66.952c-2.525-.069-4.454.166-6.104.861-.469.198-1.216.203-1.292.79.257.271.297.674.502 1.006.394.637 1.059 1.491 1.652 1.938.647.489 1.315 1.013 2.011 1.437 1.235.754 2.615 1.184 3.806 1.938.701.446 1.397 1.006 2.082 1.509.339.247.565.634 1.006.789v-.071c-.231-.294-.291-.698-.503-1.006l-.934-.934c-.913-1.212-2.071-2.275-3.304-3.159-.982-.705-3.18-1.658-3.59-2.801l-.072-.071c.696-.079 1.512-.331 2.154-.503 1.08-.29 2.045-.215 3.16-.503l1.508-.432v-.286c-.563-.578-.966-1.344-1.58-1.867-1.607-1.369-3.363-2.737-5.17-3.879-1.002-.632-2.241-1.043-3.304-1.579-.356-.181-.984-.274-1.221-.575-.559-.711-.862-1.612-1.293-2.441a93.068 93.068 0 01-2.585-5.458c-.544-1.245-.9-2.473-1.579-3.59-3.261-5.361-6.771-8.597-12.208-11.777-1.157-.677-2.55-.943-4.021-1.292l-2.37-.144c-.481-.201-.983-.791-1.436-1.077-1.802-1.138-6.422-3.613-7.756-.358-.842 2.054 1.26 4.058 2.011 5.099.527.73 1.203 1.548 1.58 2.369.248.54.29 1.081.503 1.652.521 1.406.976 2.937 1.651 4.236.341.658.718 1.351 1.149 1.939.264.36.718.52.789 1.077-.443.62-.469 1.584-.718 2.369-1.122 3.539-.699 7.938.934 10.557.501.805 1.681 2.529 3.303 1.867 1.419-.578 1.103-2.369 1.509-3.95.092-.357.035-.621.215-.861v.072l1.293 2.585c.957 1.541 2.654 3.15 4.093 4.237.746.563 1.334 1.538 2.298 1.867v-.073h-.071c-.188-.291-.479-.411-.719-.646-.562-.551-1.187-1.235-1.651-1.867-1.309-1.776-2.465-3.721-3.519-5.745-.503-.966-.94-2.032-1.364-3.016-.164-.379-.162-.953-.502-1.148-.466.72-1.149 1.303-1.509 2.154-.574 1.36-.648 3.019-.861 4.739l-.144.071c-1.001-.241-1.352-1.271-1.724-2.154-.94-2.233-1.115-5.83-.287-8.401.214-.666 1.181-2.761.789-3.376-.187-.613-.804-.967-1.148-1.437a11.222 11.222 0 01-1.149-2.011c-.77-1.741-1.129-3.696-1.938-5.457-.388-.842-1.042-1.693-1.58-2.441-.595-.83-1.262-1.44-1.724-2.442-.164-.356-.387-.927-.144-1.293.077-.247.188-.35.432-.431.416-.321 1.576.107 2.01.287 1.152.479 2.113.934 3.089 1.58.468.311.941.911 1.508 1.077h.646c1.011.232 2.144.071 3.088.358 1.67.508 3.166 1.297 4.524 2.155 4.139 2.614 7.522 6.334 9.838 10.772.372.715.534 1.396.861 2.154.662 1.528 1.496 3.101 2.154 4.596.657 1.491 1.298 2.996 2.227 4.237.488.652 2.374 1.002 3.231 1.364.601.254 1.585.519 2.154.861 1.087.656 2.141 1.437 3.16 2.155.509.362 2.076 1.149 2.154 1.798zM90.237 39.593a5.124 5.124 0 00-1.293.144v.071h.072c.251.517.694.849 1.005 1.293l.719 1.508.071-.071c.445-.313.648-.814.646-1.58-.179-.188-.205-.423-.359-.646-.204-.3-.602-.468-.861-.719z"></path>
  </svg>);
}
export const MONGOSvg=()=>{
  return(<img src="https://img.icons8.com/color/48/000000/mongodb.png"/>);
}
export const AngularSvg=()=>{
  return(<img src="https://img.icons8.com/color/48/000000/angularjs.png"/>);
}