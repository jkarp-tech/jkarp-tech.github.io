import { useState, useEffect } from "react";
import {
    projectStorage,
    projectFirestore,
    timestamp,
} from "../Firebase/config";
import ImageCompression from "browser-image-compression";

const sizes = [0.25, 0.5, 1, 2];

const useStorage = (file, collection) => {
    const [done, setDone] = useState(true);
    const [index, setIndex] = useState(1);
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [urls, setUrls] = useState([null, null, null, null]);

    useEffect(() => {
        if (done && urls.includes(null) && index < 5) {
            setDone(false);

            const path = `images/` + file.name + ` ${index}x`;
            const storageRef = projectStorage.ref(path);
            const collectionRef = projectFirestore.collection(collection);

            const options = {
                maxSizeMB: sizes[index - 1],
                maxWidthOrHeight: 1920,
                userWebWorker: true,
            };

            try {
                const compress = async () => {
                    const compressedFile = await ImageCompression(
                        file,
                        options
                    );

                    console.log("compressing", index);

                    storageRef.put(compressedFile).on(
                        "state_changed",
                        (snap) => {
                            const percentage =
                                (snap.bytesTransferred / snap.totalBytes) * 100;
                            const progress =
                                (percentage + (index - 1) * 100) / 4;

                            setProgress(progress);
                        },
                        (err) => {
                            setError(err);
                        },
                        async () => {
                            const url = await storageRef.getDownloadURL();

                            urls[index - 1] = url + ` ${index}x`;
                            setUrls(urls);

                            if (!urls.includes(null)) {
                                const urlsString = urls.toString();
                                const createdAt = timestamp();
                                collectionRef.add({ urlsString, createdAt });
                            }

                            setIndex(index + 1);
                            setDone(true);
                        }
                    );
                };

                compress();
            } catch (error) {
                console.log(error);
            }
        }
    }, [file, progress, done, urls, collection, index]);

    return { progress, urls, error };
};

export default useStorage;
