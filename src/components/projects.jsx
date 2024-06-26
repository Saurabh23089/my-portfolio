import React from 'react';
import {FaGithub} from 'react-icons/fa';
import { useState, useEffect, useRef } from 'react';
import { motion} from "framer-motion";
import { useInView } from 'framer-motion';



const ProjectList = () => {

  const [projects, setprojects] = useState([]);
  const ref = useRef(null);
  const isinview = useInView(ref,{once: false});




  const fetchprojects = async () => {
    await fetch('/projects.json')
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setprojects(result);
        console.log(projects);

      })
      .catch((error) => {
        console.error("Error while fetching projects", error);
      });

  }


  useEffect(() => {
    fetchprojects();
  }, [])

  const projectvariants = {
    offScreen: {
      x: 300
    },
    onscreen: (index) => ({
      x: 0,
      transition: {
        type: "spring",
        duration: 0.8,
        bounce:0.2,
        delay: index * 0.2
      }
    })
  };
  


  return (
    <div className='relative w-screen overflow-hidden lg:my-24 bg-[#f9f9f9]' id="projects">
      <h3 className='text-blue-900 overflow-hidden whitespace-normal md:whitespace-prewrap ml-8 text-[#147EFB] font-bold mb-4 text-center lg:text-start vl:mx-48 mt-8 lg:mt-16'>PROJECTS</h3>
        
        <div ref={ref}>
        {projects && projects.map((proj, index) => {
          return (
            <motion.div 
            key={proj.title}
            variants={projectvariants}
            animate={isinview ? "onscreen" : "offScreen"}
            custom={index}

            >
              <div key={proj.title} className='border-2 shadow-md m-10 lg:mb-16 rounded-md vl:mx-48 bg-[#ffffff]'>
                <div className='flex flex-col lg:flex-row m-4 lg:h-84 lg:mt-8 md:m-10 gap-10'>
                  <div className='flex-col w-full lg:w-1/2 lg:h-50'>
                    <img src={proj.projectimage} alt="firstprojimage" className='rounded-md h-80 w-full' />
                  </div>
                  <div className='lg:w-1/2'>
                    <h1 className='text-lg md:text-5xl font-bold text-[#000000] md:m-0 text-center lg:text-start'>{proj.title}</h1>
                    <p className='mt-6 md:mt-2 text-center lg:text-start text-[#767676]'>{proj.description}</p>

                    <div className='flex flex-row flex-wrap gap-5 border-white break-normal text-center justify-center lg:justify-start text-sm lg:text-md'>
                      {proj.techstack.map((tech) => (
                        <div key={tech} className='flex flex-row flex-wrap gap-5 border-white mt-10 break-normal text-center justify-center lg:justify-start text-lg lg:text-md text-[#000000] font-medium'>
                          <p className='p-1.5 border-2 shadow-md'>{tech}</p>
                        </div>
                      ))}
                    </div>

                    <div className='flex flex-row mt-10 md:gap-10 lg:gap-8 gap-4 justify-center lg:ml-4 lg:justify-start'>
                      <div className='flex flex-center hover:text-[#147EFB]'>
                        <p className='flex gap-2 text-sm vs:text-lg items-center text-[#213547] hover:text-[#147EFB]'>
                          Code <a href={proj.github} target="_blank" rel="noopener noreferrer">
                            <FaGithub className="w-8 h-8 text-gray-600 hover:text-[#147EFB] text-2xl" />
                          </a>
                        </p>
                      </div>

                      <div className='flex flex-row md:gap-2 gap-4 '>
                        <a className='flex items-center text-sm vs:text-lg text-[#213547] hover:text-[#147EFB] hover:cursor-pointer' href={proj.deployed} target="_blank" rel="noopener noreferrer">
                          Live Demo <svg xmlns="http://www.w3.org/2000/svg" fill="none" href={proj.deployed} viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

          );
        })}
        </div>

       

    </div>

  );
};

export default ProjectList;
