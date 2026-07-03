"use client"
import  {Card} from "../../../../packages/ui/src/card";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import {motion} from "framer-motion";
import { projects } from "../../lib/Projects"
// import { getData } from "../../lib/Projects";
import axios from "axios";

export default function AnimatedCards() {
    // fetch project data 
  const [clicked, SetClicked] = useState<boolean>(false);
  const [data, SetData] = useState([]);
    // this is hardcoded  
  const Route = useRouter();
    async function handleClick (id:string, Title:string, overview:string, TechnicalDetails:string,ProjectFacts:[],Allkeys:[]) {
        SetClicked(true);
      setTimeout(() => {
        Route.push(`/project/${id}`);
      },500)
    }

    useEffect( () => {
       async function  getData() {
        const response =  await axios.get("http://localhost:3000/admin/projects");
        const projectdata = response.data;
        SetData(projectdata.data);
        }
        getData();
    },[])
    

    return <div  className="grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">

             {data.map((project, i) => (
            <motion.div  animate={ clicked ? { scale: 0.95, opacity: 0.5,} : {} }
                transition={{ duration: 0.4 }}
                onClick={() => handleClick(`${project.id}`)} key={i} className="card-items w-[350px] h-[260px] rounded-2xl bg-[#f7f3eb]   
                      border
                    border-black/10
                    hover:-translate-y-1
                    transition-all
                    duration-700 mb-20
                ">
              <Card
                Title={project.Title}
                overview={project.overview}
                Allkeys={project.keys}
                TechnicalDetails={project.TechnicalDetails}
                ProjectFacts={project.ProjectFacts}
              />
            </motion.div>
          ))}
         
        </div>
}


