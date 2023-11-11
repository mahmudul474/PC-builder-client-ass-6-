import {useAppDispatch} from "@/Redux/hooks";
import {ReactNode, useEffect} from "react";
import {loadState} from "@/Redux/features/pcBuildSlice";

const RootWrapper = ({children}: { children: ReactNode }) => {
    const dispatch = useAppDispatch()
    useEffect(() => {

        const data = localStorage.getItem('pcBuildData')
        if (data) {
            dispatch(loadState(JSON.parse(data)))
        }
    }, [])

    return (
        <>
            {children}
        </>
    )
}

export default RootWrapper