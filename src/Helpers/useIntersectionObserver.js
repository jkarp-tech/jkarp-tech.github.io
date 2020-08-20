import { useState, useCallback, useEffect } from "react";

const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.05,
};

const useIntersectionObserver = (ref) => {
    const [inView, setInView] = useState(false);
    const [triggered, setTriggered] = useState(false);

    const callback = useCallback((entries) => {
        if (entries[0].isIntersecting) {
            setInView(true);
            setTriggered(true);
        }
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(callback, options);
        const imgRef = ref.current;

        if (imgRef && !triggered) {
            observer.observe(imgRef);
        }
        return () => {
            observer.unobserve(imgRef);
        };
    }, [callback, ref, triggered]);

    return inView;
};

export default useIntersectionObserver;
