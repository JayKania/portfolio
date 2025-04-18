import React, { useEffect, useState } from 'react';

interface AnimatedTextProps {
  text: string;
  delay?: number;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ text, delay = 0 }) => {
  const [animate, setAnimate] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(true);
    }, delay * 1000);
    
    return () => clearTimeout(timer);
  }, [delay]);
  
  return (
    <span className={`inline-block transition-all duration-500 ease-out ${
      animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
    }`}>
      {text}
    </span>
  );
};

export default AnimatedText;