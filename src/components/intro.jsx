// import myimage from '../myimage.JPG';
import { FaLinkedin, FaGithub } from 'react-icons/fa';


const Intro = () => {
    return (
        <div className=" bg-gray-100 w-screen relative overflow-hidden mb-10">
            <div className="relative w-screen md:grid md:grid-cols-2">
                <div className="relative inset-x-1/3 pt-2 md:order-1">
                    <img src="https://beingselfish.in/wp-content/uploads/2023/07/mahadev-dp02.jpg" alt="sabkamaalikek" className="w-48 h-48 rounded-full justify-end" />
                </div>
                <div>
                    <h1 className='pt-4 px-8 left-1/2  font-bold text-center text-4xl whitespace-normal '>Frontend Web Developer 👋🏼</h1>
                    <h6 className="pl-8 text-center text-lg whitespace-normal font-light text-white-200">Hi, I'm Saurabh Kumar. A passionate Web developer based in Delhi, India</h6>
                    <div className='flex justify-center pt-8 pb-8 pl-8 gap-4'>
                        <a href="http://linkedin.com/in/saurabh-kumar-96667220a" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className="w-6 h-6 text-blue-600 hover:text-blue-800" />
                        </a>
                        <a href="https://github.com/Saurabh23089" target="_blank" rel="noopener noreferrer">
                            <FaGithub className="w-6 h-6 text-gray-600 hover:text-gray-800" />
                        </a>
                    </div>
                </div>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <p className='pt-4 text-lg border-b-2 border-black pb-2 mb-4'>Tech Stack</p>
                <div className='flex flex-row flex-wrap sm:px-20 text-center mb-20 gap-4'>
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