// import myimage from '../myimage.JPG';
import { FaLinkedin, FaGithub } from 'react-icons/fa';


const Intro = () => {
    return (
        <div className="bg-[#F9F9F9] w-full relative overflow-hidden top-20 shadow-md mb-10">
            <div className="relative w-screen lg:grid lg:grid-cols-2 pt-12">
                <div className="relative inset-x-1/4 vs:inset-x-1/3 pt-2 lg:order-1">
                    <img src="https://beingselfish.in/wp-content/uploads/2023/07/mahadev-dp02.jpg" alt="sabkamaalikek" className=" w-56 h-56 vs:w-72 vs:h-72 rounded-full" />
                </div>
                <div className="">
                    <h1 className='mt-4  font-bold text-center sm:text-6xl text-5xl  whitespace-normal'>Frontend Web</h1>
                    <br/>
                    <h1 className='px-6  mb-8 font-bold text-center sm:text-6xl text-5xl  whitespace-normal '>Developer 👋🏼 </h1>
                    <h6 className="ml-10 text-center text-lg whitespace-normal font-light text-white-200 mr-8 ">Hi, I'm Saurabh Kumar. A passionate Web developer based in Delhi, India</h6>
                    <div className='flex justify-center pt-8 mb-8  gap-4'>
                        <a href="http://linkedin.com/in/saurabh-kumar-96667220a" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className="w-12 h-12 text-blue-600 hover:text-blue-800" />
                        </a>
                        <a href="https://github.com/Saurabh23089" target="_blank" rel="noopener noreferrer">
                            <FaGithub className="w-12 h-12 text-gray-600 hover:text-gray-800" />
                        </a>
                    </div>
                </div>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <p className='pt-4 text-lg border-b-2 border-black pb-2 mb-4'>Tech Stack</p>
                <div className='flex flex-row flex-wrap sm:px-20 px-10 justify-evenly mb-20 gap-4'>
                <div className='rounded-full border-white bg-white border-12 h-20 w-20 object-center'>
                    <img src="https://www.freepnglogos.com/uploads/javascript-png/javascript-vector-logo-yellow-png-transparent-javascript-vector-12.png" alt="JS logo" className='w-10 h-10 overflow-none inset-1/4 relative rounded-md' />
                </div>
                <div className='rounded-full border-white bg-white border-12 h-20 w-20 object-center'>
                    <img src="https://www.freepnglogos.com/uploads/javascript-png/javascript-vector-logo-yellow-png-transparent-javascript-vector-12.png" alt="JS logo" className='w-10 h-10 overflow-none inset-1/4 relative' />
                </div>
                <div className='rounded-full border-white bg-white border-12 h-20 w-20 object-center'>
                    <img src="https://www.freepnglogos.com/uploads/javascript-png/javascript-vector-logo-yellow-png-transparent-javascript-vector-12.png" alt="JS logo" className='w-10 h-10 overflow-none inset-1/4 relative' />
                </div>
                <div className='rounded-full border-white bg-white border-12 h-20 w-20 object-center'>
                    <img src="https://www.freepnglogos.com/uploads/javascript-png/javascript-vector-logo-yellow-png-transparent-javascript-vector-12.png" alt="JS logo" className='w-10 h-10 overflow-none inset-1/4 relative' />
                </div>
                 <div className='rounded-full border-white bg-white border-12 h-20 w-20 object-center'>
                    <img src="https://www.freepnglogos.com/uploads/javascript-png/javascript-vector-logo-yellow-png-transparent-javascript-vector-12.png" alt="JS logo" className='w-10 h-10 overflow-none inset-1/4 relative' />
                </div>
                <div className='rounded-full border-white bg-white border-12 h-20 w-20 object-center'>
                    <img src="https://www.freepnglogos.com/uploads/javascript-png/javascript-vector-logo-yellow-png-transparent-javascript-vector-12.png" alt="JS logo" className='w-10 h-10 overflow-none inset-1/4 relative' />
                </div>

                </div>
                
            </div>




        </div>
    )
}

export default Intro;