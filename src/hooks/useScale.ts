
import { useState } from 'react'

export const useScale = () => {
    const [scale, setScale] = useState(1)
    const handleWheel = (e: React.WheelEvent<SVGSVGElement>) => {
        if (e.deltaY > 0) {
            setScale(scale + 0.1)
        } else {
            setScale(scale - 0.1)
        }
    }
    return { scale, handleWheel, setScale }
}
