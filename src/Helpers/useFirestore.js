import { useState, useEffect } from "react";
import { projectFirestore } from "../Firebase/config";

const useFirestore = (collection) => {
    const [docs, setDocs] = useState([]);

    useEffect(() => {
        const unsubscribe = projectFirestore
            .collection(collection)
            .orderBy("createdAt", "desc")
            .onSnapshot((snap) => {
                let documents = [];
                snap.forEach((doc) => {
                    debugger;
                    documents.push({ ...doc.data(), id: doc.id });
                });
                setDocs(documents);
            });
        return () => unsubscribe();
    }, [collection]);

    return { docs };
};

export default useFirestore;
