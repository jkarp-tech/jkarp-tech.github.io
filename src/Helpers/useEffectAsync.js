import { useEffect } from "react";

const useEffectAsync = (asyncFn, onSuccess) => {
    useEffect(() => {
        let isMounted = true;
        if (!asyncFn) return;
        asyncFn().then(() => {
            if (isMounted) onSuccess();
        });
        return () => {
            isMounted = false;
        };
    }, [asyncFn, onSuccess]);
};

export default useEffectAsync;
