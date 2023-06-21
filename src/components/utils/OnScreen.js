import { useEffect, useState, useRef } from 'react';

export default function useOnScreen() {
  const ref = useRef();
  const [isIntersecting, setIntersecting] = useState(false);

  const observer = new IntersectionObserver(
    ([entry]) => setIntersecting(entry.isIntersecting)
  );

  useEffect(() => {
    observer.observe(ref.current);
    // Remove the observer as soon as the component is unmounted
    return () => { observer.disconnect(); }
  }, []);

  return [ref, isIntersecting];
}