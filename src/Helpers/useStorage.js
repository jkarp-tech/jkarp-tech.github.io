import { useState, useEffect, useRef } from "react";
import { projectStorage } from "../Firebase/config";
import ImageCompression from "browser-image-compression";

const sizes = [0.25, 0.5, 1, 2];

const getOptions = (index) => {
    return {
        maxSizeMB: sizes[index - 1],
        maxWidthOrHeight: 1920,
        userWebWorker: true,
    };
};

const useStorage = (file, index) => {
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);
    const saving = useRef(false);

    useEffect(() => {
        const path = `images/` + file.name + ` ${index}x`;
        const storageRef = projectStorage.ref(path);

        try {
            const compress = async () => {
                const compressedFile = await ImageCompression(
                    file,
                    getOptions(index)
                );

                storageRef.put(compressedFile).on(
                    "state_changed",
                    (snap) => {
                        const percentage =
                            (snap.bytesTransferred / snap.totalBytes) * 100;

                        setProgress(percentage);
                    },
                    (err) => {
                        setError(err);
                    },
                    async () => {
                        const url = await storageRef.getDownloadURL();
                        setUrl(url + ` ${index}x`);
                    }
                );
            };

            if (!saving.current) {
                saving.current = true;
                compress();
            }
        } catch (error) {
            console.log(error);
        }
    }, [file, progress, index, saving]);

    return { progress, url, error };
};

export default useStorage;
