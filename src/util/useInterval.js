// by Dan Abramov
// https://overreacted.io/making-setinterval-declarative-with-react-hooks/
import { useRef, useEffect } from 'react';
export default function useInterval(callback, delay) {
    const savedCallback = useRef();
    useEffect(() => {
        savedCallback.current = callback;
    });
    useEffect(() => {
        function tick() {
            savedCallback.current?.();
        }
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
    }, [delay]);
}
