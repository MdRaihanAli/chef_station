import { useEffect } from "react"

const useTitle = title=>{
    useEffect(()=>{
        document.title = title + ' Chef-station';
    },[title])
}

export default useTitle;