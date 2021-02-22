import {useEffect} from 'react';
const useScrollYPosition = (callback) => {
  useEffect(() => {
    const sendYPosition = () => {
      const position = window.pageYOffset;
      callback(position);
    }
    window.addEventListener('scroll', sendYPosition);
    window.addEventListener('load', sendYPosition);
    return () => window.removeEventListener('scroll', sendYPosition);
  }, [callback]);
}

export default useScrollYPosition;
