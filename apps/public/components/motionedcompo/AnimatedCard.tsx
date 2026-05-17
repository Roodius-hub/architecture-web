"use client"
import  {Card} from "../../../../packages/ui/src/card";
import { useEffect, useRef } from "react";
import gsap from "gsap";
export default function AnimatedCards() {
    // fetch project data 

    // this is hardcoded
    const projects = [
  {
    title: "House 1",
    description: "Modern house",
    cdn: "https://d1z1e76yk7p645.cloudfront.net/25445.jpg",
  },
  {
    title: "House 2",
    description: "Luxury villa",
    cdn: "https://d1z1e76yk7p645.cloudfront.net/25445.jpg",
  },
  {
    title: "House 3",
    description: "Minimal design",
    cdn: "https://d1z1e76yk7p645.cloudfront.net/25445.jpg",
  },
  {
    title: "House 4",
    description: "Classic home",
    cdn: "https://d1z1e76yk7p645.cloudfront.net/25445.jpg",
  },
  {
    title: "House 5",
    description: "Urban style",
    cdn: "https://d1z1e76yk7p645.cloudfront.net/25445.jpg",
  }
];

    const titleRef = useRef(null);

  useEffect(() => {
    const lines = titleRef.current.querySelectorAll(".card-items");

    gsap.from(lines, {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
    });
    
  }, []);

    return <div ref={titleRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

             {projects.map((project, i) => (
            <div key={i} className="card-items w-full h-[250px]">
              <Card
                title={project.title}
                description={project.description}
                cdn={project.cdn}
              />
            </div>
          ))}
         
        </div>
}


