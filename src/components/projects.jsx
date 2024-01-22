// ProjectList.js

import React from 'react';
import LazyLoad from 'react-lazy-load'; // Change the import statement
import { useSpring, animated } from 'react-spring';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import {useState,useEffect,useRef} from 'react';
import { useInView} from '@react-spring/web'

// const projects = [
//   // Your project data goes here
//   { id: 1, name: 'Project 1', description: 'Description 1' },
//   { id: 2, name: 'Project 2', description: 'Description 2' },
//   // Add more projects as needed
// ];

// const ProjectCard = ({ project, index }) => {
//   const props = useSpring({
//     opacity: 1,
//     transform: 'translateX(0)',
//     from: { opacity: 0, transform: 'translateX(-50px)' },
//     delay: index * 100, // Adjust the delay based on your preference
//   });

//   return (
//     <animated.div style={props}>
//       <div style={{ minWidth: '300px', marginRight: '20px', padding: '20px' }}>
//         <h2>{project.name}</h2>
//         <p>{project.description}</p>
//       </div>
//     </animated.div>
//   );
// };

const ProjectList = () => {

  const [projects,setprojects]=useState([]);
  // const [ref, inView] = useInView()

  const [ref, springs] = useInView(
    () => ({
      from: {
        opacity: 0,
       x:10,
      },
      to: {
        opacity: 1,
        x: 0,
       
      },
    }),
    {
      rootMargin: '850px 0px'
    }
  )


  

  // const projects=useRef();
  // const springs = useSpring({
  //   from: { x: 0 },
  //   to: { x: 100 },
  // })



  const fetchprojects = async() => {
     await fetch('../src/projects.json')
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
  },[])
  console.log(projects);

  return (
    <div className='relative w-screen overflow-hidden '>
       {/* <div className='relative w-screen overflow-hidden '> */}
      <h3  className='text-blue-900 overflow-hidden whitespace-normal md:whitespace-prewrap ml-5 mb-4 text-center md:text-start'>PROJECTS</h3>
       

      {projects && projects.map((proj, index) => {
        

        return (
          <animated.div key={proj.title} ref={ref} style={springs}>
            {/* Your project card JSX here */}

            <div className='border-2 shadow-md m-10 rounded-md'>
        <div className='flex flex-col md:flex-row m-4 md:m-10 gap-10 '>
          <div className='flex-col w-full md:w-1/2 h-50 '>
            <img src={proj.projectimage} alt="firstprojimage" className='rounded-md h-80  w-full' />
          </div>
          <div className='md:w-1/2'>
            <h1 className='text-lg md:text-5xl  md:m-0 text-center md:text-start'>{proj.title}</h1>
            <p className='mt-6 md:mt-2 text-center md:text-start'>{proj.description}</p>
            
           
            
            <div className='flex flex-row flex-wrap gap-5 border-white break-normal text-center justify-center md:justify-start text-sm md:text-md'>
             
            

             

{proj.techstack.map((tech) => {
               return (
                <div className='flex flex-row flex-wrap gap-5 border-white mt-10 break-normal text-center justify-center md:justify-start text-sm md:text-md'> 
                <p className='p-1.5 border-2 shadow-md'>{tech}</p>
               </div>
               )
             })}




            </div>
            <div className='flex flex-row mt-10 ml-0 md:gap-10 gap-4 justify-center md:justify-start'>
              <div className='flex flex-center'> 
              <p className='flex gap-2 lg:pl-20 md:text-lg text-sm items-center'>Code <a href="https://github.com/Saurabh23089" target="_blank" rel="noopener noreferrer">
                <FaGithub className="w-8 h-8 text-gray-600 hover:text-gray-800 text-2xl" />
              </a></p>
              </div>

              <div className='flex flex-row md:gap-2 gap-4 '>
              <p className='flex items-center'>Live Demo  <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg> </p>
              </div> 
            </div>
          </div>
        </div>  
      </div>



          </animated.div>
        );
      })}
       
       
       {/* { projects && projects.map((proj) => {
        return (
          <div key={proj.title}>
          
            
            <animated.div ref={ref} style={springs}>
            <div className='border-2 shadow-md m-10 rounded-md'>
        <div className='flex flex-col md:flex-row m-4 md:m-10 gap-10 '>
          <div className='flex-col w-full md:w-1/2 h-50 '>
            <img src={proj.projectimage} alt="firstprojimage" className='rounded-md h-80  w-full' />
          </div>
          <div className='md:w-1/2'>
            <h1 className='text-lg md:text-5xl  md:m-0 text-center md:text-start'>{proj.title}</h1>
            <p className='mt-6 md:mt-2 text-center md:text-start'>{proj.description}</p>
            
           
            
            <div className='flex flex-row flex-wrap gap-5 border-white break-normal text-center justify-center md:justify-start text-sm md:text-md'>
             
            

             

{proj.techstack.map((tech) => {
               return (
                <div className='flex flex-row flex-wrap gap-5 border-white mt-10 break-normal text-center justify-center md:justify-start text-sm md:text-md'> 
                <p className='p-1.5 border-2 shadow-md'>{tech}</p>
               </div>
               )
             })}




            </div>
            <div className='flex flex-row mt-10 ml-0 md:gap-10 gap-4 justify-center md:justify-start'>
              <div className='flex flex-center'> 
              <p className='flex gap-2 lg:pl-20 md:text-lg text-sm items-center'>Code <a href="https://github.com/Saurabh23089" target="_blank" rel="noopener noreferrer">
                <FaGithub className="w-8 h-8 text-gray-600 hover:text-gray-800 text-2xl" />
              </a></p>
              </div>

              <div className='flex flex-row md:gap-2 gap-4 '>
              <p className='flex items-center'>Live Demo  <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg> </p>
              </div> 
            </div>
          </div>
        </div>  
      </div>
    </animated.div>
          </div>
          
        )
      })} */}

      
    
    
    {/* <div className='relative w-screen overflow-hidden '> */}
      {/* <h3 className='text-blue-900 overflow-hidden whitespace-normal md:whitespace-prewrap ml-5 mb-4 text-center md:text-start'>PROJECTS</h3> */}
      
     
      
     









    {/* </div> */}
    </div>

  );
};

export default ProjectList;

{/* <div className='rounded-md border'>
<img src='https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Ym9va3xlbnwwfHwwfHx8MA%3D%3D' alt="firstprojimage" className='w-20 h-120'/>
</div> */}






  {/* // Project 1 */}
//   <div className='border-2 shadow-md m-10 rounded-md'>
//   <div className='flex flex-col md:flex-row m-4 md:m-10 gap-10 '>
//     <div className='flex-col w-full md:w-1/2 h-50 '>
//       <img src='https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Ym9va3xlbnwwfHwwfHx8MA%3D%3D' alt="firstprojimage" className='rounded-md h-80  w-full' />
//     </div>
//     <div className='md:w-1/2'>
//       <h1 className='text-lg md:text-5xl  md:m-0 text-center md:text-start'>Movie Directory</h1>
//       <p className='mt-6 md:mt-2 text-center md:text-start'>I am working on an eCommerce designed in Figma to pass into code to improve my skills with new technologies to be able to get a job.</p>
//       <div className='flex flex-row flex-wrap gap-5 border-white mt-10 break-normal text-center justify-center md:justify-start text-sm md:text-md'>
//         <p className='p-1.5 border-2 shadow-md'>HTML</p>
//         <p className='p-2 border-2 shadow-md'>CSS</p>
//         <p className='p-2 border-2 shadow-md'>Javascript</p>
//         <p className='p-2 pr-5 border-2 shadow-md'>ReactJS</p>
//         <p className='p-2 pr-5 border-2 shadow-md'>Firebase</p>
//       </div>
//       <div className='flex flex-row mt-10 ml-0 md:gap-10 gap-4 justify-center md:justify-start'>
//         <div className='flex flex-center'> 
//         <p className='flex gap-2 lg:pl-20 md:text-lg text-sm items-center'>Code <a href="https://github.com/Saurabh23089" target="_blank" rel="noopener noreferrer">
//           <FaGithub className="w-8 h-8 text-gray-600 hover:text-gray-800 text-2xl" />
//         </a></p>
//         </div>

//         <div className='flex flex-row md:gap-2 gap-4 '>
//         <p className='flex items-center'>Live Demo  <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
//           <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
//         </svg> </p>
//         </div> 
//       </div>
//     </div>
//   </div>  
// </div>

{/* Project 2 */}
{/* <div className='border-2 shadow-md m-10 rounded-md'>
  <div className='flex flex-col md:flex-row m-4 md:m-10 gap-10 '>
  <div className='md:w-1/2'>
      <h1 className='text-lg md:text-5xl  md:m-0 text-center md:text-start'>Movie Directory</h1>
      <p className='mt-6 md:mt-2 text-center md:text-start'>I am working on an eCommerce designed in Figma to pass into code to improve my skills with new technologies to be able to get a job.</p>
      <div className='flex flex-row flex-wrap gap-5 border-white mt-10 break-normal text-center justify-center md:justify-start text-sm md:text-md'>
        <p className='p-1.5 border-2 shadow-md'>HTML</p>
        <p className='p-2 border-2 shadow-md'>CSS</p>
        <p className='p-2 border-2 shadow-md'>Javascript</p>
        <p className='p-2 pr-5 border-2 shadow-md'>ReactJS</p>
        <p className='p-2 pr-5 border-2 shadow-md'>Firebase</p>
      </div>
      <div className='flex flex-row mt-10 ml-0 md:gap-10 gap-4 justify-center md:justify-start'>
        <div className='flex flex-center'> 
        <p className='flex gap-2 lg:pl-20 md:text-lg text-sm items-center'>Code <a href="https://github.com/Saurabh23089" target="_blank" rel="noopener noreferrer">
          <FaGithub className="w-8 h-8 text-gray-600 hover:text-gray-800 text-2xl" />
        </a></p>
        </div>

        <div className='flex flex-row md:gap-2 gap-4 '>
        <p className='flex items-center'>Live Demo  <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
          <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
        </svg> </p>
        </div> 
      </div>
    </div>
    <div className='flex-col w-full md:w-1/2 h-50 '>
      <img src='https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Ym9va3xlbnwwfHwwfHx8MA%3D%3D' alt="firstprojimage" className='rounded-md h-80  w-full' />
    </div>
  </div>
</div> */}


{/* Project 3 */}
{/* <div className='border-2 shadow-md m-10 rounded-md'>
  <div className='flex flex-col md:flex-row m-4 md:m-10 gap-10 '>
    <div className='flex-col w-full md:w-1/2 h-50 '>
      <img src='https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Ym9va3xlbnwwfHwwfHx8MA%3D%3D' alt="firstprojimage" className='rounded-md h-80  w-full' />
    </div>
    <div className='md:w-1/2'>
      <h1 className='text-lg md:text-5xl  md:m-0 text-center md:text-start'>Movie Directory</h1>
      <p className='mt-6 md:mt-2 text-center md:text-start'>I am working on an eCommerce designed in Figma to pass into code to improve my skills with new technologies to be able to get a job.</p>
      <div className='flex flex-row flex-wrap gap-5 border-white mt-10 break-normal text-center justify-center md:justify-start text-sm md:text-md'>
        <p className='p-1.5 border-2 shadow-md'>HTML</p>
        <p className='p-2 border-2 shadow-md'>CSS</p>
        <p className='p-2 border-2 shadow-md'>Javascript</p>
        <p className='p-2 pr-5 border-2 shadow-md'>ReactJS</p>
        <p className='p-2 pr-5 border-2 shadow-md'>Firebase</p>
      </div>
      <div className='flex flex-row mt-10 ml-0 md:gap-10 gap-4 justify-center md:justify-start'>
        <div className='flex flex-center'> 
        <p className='flex gap-2 lg:pl-20 md:text-lg text-sm items-center'>Code <a href="https://github.com/Saurabh23089" target="_blank" rel="noopener noreferrer">
          <FaGithub className="w-8 h-8 text-gray-600 hover:text-gray-800 text-2xl" />
        </a></p>
        </div>

        <div className='flex flex-row md:gap-2 gap-4 '>
        <p className='flex items-center'>Live Demo  <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
          <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
        </svg> </p>
        </div> 
      </div>
    </div>
  </div>  
</div> */}


// <div className="w-screen">
//         <h4 className='ml-4'>PROJECTS</h4>
//         <div style={{ display: 'flex'}} className='overflow-hidden w-200 flex-column'>
//       {projects.map((project, index) => (
//         <LazyLoad key={project.id} debounce={false} offset={100}>
//           <ProjectCard project={project} index={index} />
//         </LazyLoad>
//       ))}
//     </div>
//     </div>

{/* <div>
        <div className='md:w-1/2'>
            <h1 className='text-lg md:text-5xl  md:m-0 text-center md:text-start'>Movie Directory</h1>
            <p className='mt-6 md:mt-2 text-center md:text-start'>I am working on an eCommerce designed in Figma to pass into code to improve my skills with new technologies to be able to get a job.</p>
            <div className='flex flex-row flex-wrap gap-5 border-white mt-10 break-normal text-center justify-center md:justify-start text-sm md:text-md'>
              <p className='p-1.5 border-2 shadow-md'>HTML</p>
              <p className='p-2 border-2 shadow-md'>CSS</p>
              <p className='p-2 border-2 shadow-md'>Javascript</p>
              <p className='p-2 pr-5 border-2 shadow-md'>ReactJS</p>
              <p className='p-2 pr-5 border-2 shadow-md'>Firebase</p>
            </div>
            <div className='flex flex-row mt-10 ml-0 md:gap-10 gap-4 justify-center md:justify-start'>
              <div className='flex flex-center'> 
              <p className='flex gap-2 lg:pl-20 md:text-lg text-sm items-center'>Code <a href="https://github.com/Saurabh23089" target="_blank" rel="noopener noreferrer">
                <FaGithub className="w-8 h-8 text-gray-600 hover:text-gray-800 text-2xl" />
              </a></p>
              </div>

              <div className='flex flex-row md:gap-2 gap-4 '>
              <p className='flex items-center'>Live Demo  <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg> </p>
             
              </div> 
            </div>

          </div>
          <div className='flex-col w-full md:w-1/2 h-50 '>
            <img src='https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Ym9va3xlbnwwfHwwfHx8MA%3D%3D' alt="firstprojimage" className='rounded-md h-80  w-full' />
          </div>
        </div> */}


