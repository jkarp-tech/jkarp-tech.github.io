import { useState, useEffect, useRef } from 'react'
import { projectStorage } from '../Firebase/config'
import ImageCompression from 'browser-image-compression'

const MAX_SIZE = 3
const sizes = [32, 250, 576, 992, 1920]

const useStorage = (file, index) => {
    const [progress, setProgress] = useState(0)
    const [error, setError] = useState(null)
    const [url, setUrl] = useState(null)
    const saving = useRef(false)

    useEffect(() => {
        const path = `images/` + file.name + `_${index}`
        const storageRef = projectStorage.ref(path)

        try {
            const compress = async () => {
                const getOptions = (index) => {
                    return {
                        maxSizeMB: MAX_SIZE,
                        maxWidthOrHeight: sizes[index],
                        userWebWorker: true,
                    }
                }

                const compressedFile = await ImageCompression(
                    file,
                    getOptions(index)
                )

                storageRef.put(compressedFile).on(
                    'state_changed',
                    (snap) => {
                        const percentage =
                            (snap.bytesTransferred / snap.totalBytes) * 100

                        setProgress(percentage)
                    },
                    (err) => {
                        setError(err)
                    },
                    async () => {
                        const url = await storageRef.getDownloadURL()
                        setUrl(url + ` ${sizes[index]}w`)
                    }
                )
            }

            if (!saving.current) {
                saving.current = true
                compress()
            }
        } catch (error) {
            console.log(error)
        }
    }, [file, progress, index, saving])

    return { progress, url, error }
}

export default useStorage
