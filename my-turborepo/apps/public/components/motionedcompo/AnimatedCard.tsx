import gsap from "gsap";
import { useEffect, useRef } from "react";


export default function AnimatedCard(){
    const Cardref = useRef(null)

    useEffect(() => {
        const allcards = Cardref.current.querySelectorAll("")
        gsap.from(allcards, {
            
        })  
    }, [])

    return <>
    
    </>
}
