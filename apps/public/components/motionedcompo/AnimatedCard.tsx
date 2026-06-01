"use client"
import  {Card} from "../../../../packages/ui/src/card";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import {motion} from "framer-motion";
import { projects } from "../../lib/Projects"

export default function AnimatedCards() {
    // fetch project data 
  const [clicked, SetClicked] = useState<boolean>(false);
    // this is hardcoded


  const Route = useRouter();
    async function handleClick (id:string) {
        SetClicked(true);
      setTimeout(() => {
        Route.push(`/project/${id}`);
      },500)
    }

    return <div  className="  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">

             {projects.map((project, i) => (
            <motion.div  animate={ clicked ? { scale: 0.95, opacity: 0.5,} : {} }
                transition={{ duration: 0.4 }}
                onClick={() => handleClick(`${project.id}`)} key={i} className="card-items w-[350px] h-[260px] p-1 rounded-2xl bg-[#f7f3eb]   
                      border
                    border-black/10
                    hover:border-purple-700
                    hover:-translate-y-1
                    transition-all
                    duration-700
                ">
              <Card
                title={project.title}
                description={project.description}
                cdn={project.cdn}
              />
            </motion.div>
          ))}
         
        </div>
}


