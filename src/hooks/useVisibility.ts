import {useEffect, useState, useRef, RefObject} from "react";

const useVisibility = <T extends HTMLElement>(
    threshold: number = 0.1
): [RefObject<T>, boolean] => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<T>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setIsVisible(entry.isIntersecting),
            { threshold }
        );

        if (ref.current) observer.observe(ref.current);

        return () => {
            if (ref.current) observer.unobserve(ref.current);
        };
    }, [threshold]);

    return [ref, isVisible];
};

export default useVisibility;
