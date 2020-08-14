import { useState, useEffect } from "react";
import { projectFirestore } from "../Firebase/config";

const useFirestore = (collection) => {
    const [docs, setDocs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = projectFirestore
            .collection(collection)
            .orderBy("createdAt", "desc")
            .onSnapshot((snap) => {
                let documents = [];
                snap.forEach((doc) => {
                    documents.push({ ...doc.data(), id: doc.id });
                });
                setDocs(documents);
                setLoading(false);
            });
        return () => unsubscribe();
    }, [collection]);

    return [docs, loading];
};

export default useFirestore;
