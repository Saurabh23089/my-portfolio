
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import {FaXTwitter} from 'react-icons/fa6'

const Contact = () => {
    return (
        <div className="overflow-hidden">
            <div className="flex flex-col items-center justify-center text-center">
                <h1 className="mx-4">Get in Touch</h1>
                <p className="mt-6 mx-20 text-center overflow-x-hidden text-xl mb-10">I'm actively currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!</p>
                <a href="mailto:saurabh.kumar.e21@nsut.ac.in" target="_blank" className='mb-20'>
                    <button class="bg-[#546472] hover:bg-[#4B5563] text-white font-bold py-2 px-4 rounded text-xl text-[#D1D5DB]">
                        Say Hello
                    </button>
                </a>

                <div className='flex flex-row gap-6 mb-10 '>
                    {/* LinkedIn */}
                    <a href="http://linkedin.com/in/saurabh-kumar-96667220a" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="w-6 h-6 text-blue-600 hover:text-blue-800" />
                    </a>


                    {/* Github */}
                    <a href="https://github.com/Saurabh23089" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="w-6 h-6 text-gray-600 hover:text-gray-800" />
                    </a>

                    {/* Twitter */}
                    <a href="https://twitter.com/Saurabh66998263" target="_blank" rel="noopener noreferrer">
                        <FaXTwitter className="w-6 h-6 text-gray-600 hover:text-gray-800" />
                    </a>

                    {/* Instagram */}
                    <a href="https://www.instagram.com/saurabh__2508/" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className="w-6 h-6 text-gray-600 hover:text-gray-800" />
                    </a>
                    

                </div>





            </div>
        </div>
    )
}

export default Contact;