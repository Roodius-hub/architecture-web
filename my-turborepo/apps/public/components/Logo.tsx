import React from "react"
import {Button} from "../../../packages/ui/src/button"
import AnimatedLogo from "./motionedcompo/AnimatedNavbarLogo";

export default function Logo({ref}:{ref:React.ReactNode}){
    

    return <>
        <div className="">
            <AnimatedLogo />
        </div>
    </>
}