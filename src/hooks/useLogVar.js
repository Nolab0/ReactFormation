import { useEffect } from 'react'

// Log variable at each change
function useLogVar(variable, label) {
    useEffect(() => {
        console.log(label + ": " + variable);
    }, [variable]);
}

export default useLogVar;