const About = () => {
    return(
        <div className="relative  md:grid md:grid-cols-2 overflow-hidden gap-10">
                <div className="mb-5">
                    <img src="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/152692950/original/0824e730baea98ae3f43e1341bdf499855ea34a9/convert-your-design-to-a-responsive-website.png" alt="sabkamaalikek" className="rounded-md w-auto ml-5 mb-5 md:w-200 md:h-200 " />
                </div>
                <div className="">
                    <p className='font-bold text-left whitespace-normal text-blue-600'>ABOUT ME</p>
                    <h1 className="mt-8 text-left text-lg whitespace-normal font-light text-white-200">A dedicated Full Stack Web Developer based in Delhi, India</h1>
                    <div className='flex justify-center pt-8 pb-8 pl-8 gap-4'>
                        {/* <a href="http://linkedin.com/in/saurabh-kumar-96667220a" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className="w-6 h-6 text-blue-600 hover:text-blue-800" />
                        </a>
                        <a href="https://github.com/Saurabh23089" target="_blank" rel="noopener noreferrer">
                            <FaGithub className="w-6 h-6 text-gray-600 hover:text-gray-800" />
                        </a> */}
                     </div> 
                </div> 
            </div>
    )


}

export default About;