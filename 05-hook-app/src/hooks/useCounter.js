import { useState } from "react"



export const useCounter = (initialValue = 10) => {

    const [useCounter, setUseCounter] = useState(initialValue);

    return {
        counter: useCounter
    }

}