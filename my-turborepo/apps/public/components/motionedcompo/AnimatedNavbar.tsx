import {motion, animate} from "motion/react";

export default function AnimatedNavbar({children, className}:{children:React.ReactNode, className:string}){
    return (
        <motion.div initial={{scale:0, y:-2}}
            transition={{ type: "spring", repeat: Infinity, repeatDelay: 0.2, damping:9, mass:1.5 }}
            animate= {{ rotate:360, scale:1 }}
            className={className}
        >
            {children}
        </motion.div>
    )
}
