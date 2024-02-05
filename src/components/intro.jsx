import { FaLinkedin, FaGithub } from 'react-icons/fa';
import myimage from '../myimage.jpg';


const Intro = () => {

    

    return (
        <div className="bg-[#F9F9F9] w-full relative overflow-hidden top-20 shadow-md mb-10" id="home">
            <div className="relative w-screen lg:grid lg:grid-cols-2 pt-12">
                <div className="relative inset-x-1/4 vs:inset-x-1/3 pt-2 lg:order-1">
                    <img src={myimage} alt="Saurabh's image" className=" w-56 h-56 vs:w-72 vs:h-72 rounded-full" />
                </div>
                <div className="">
                    <h1 className='mt-4  font-bold text-center sm:text-6xl text-5xl text-[#0d0d0d] whitespace-normal'>Full Stack Web</h1>
                    <br/>
                    <h1 className='px-6  mb-8 font-bold text-center sm:text-6xl text-5xl text-[#0d0d0d] whitespace-normal '>Developer 👋🏼 </h1>
                    <h6 className="ml-10 text-center text-lg whitespace-normal font-light text-white-200 mr-8 text-[#767676]">Hi, I'm Saurabh Kumar. A passionate Web<br/> developer based in Delhi, India</h6>
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
                <p className='pt-4 text-lg border-b-2 border-black pb-2 mb-4 text-[#000000]'>Tech Stack</p>
                <div className='flex flex-row flex-wrap sm:px-20 px-10 justify-evenly mb-20 gap-4'>
                <div className='rounded-full border-white bg-white border-12 h-20 w-20 object-center'>
                    <img src="https://www.freepnglogos.com/uploads/javascript-png/javascript-vector-logo-yellow-png-transparent-javascript-vector-12.png" alt="JS logo" className='w-10 h-10 overflow-none inset-1/4 relative rounded-md' />
                </div>
                <div className='rounded-full border-white bg-white border-12 h-20 w-20 object-center'>
                    <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K" alt="JS logo" className='w-10 h-10 overflow-none inset-1/4 relative' />
                </div>
                <div className='rounded-full border-white bg-white border-12 h-20 w-20 object-center'>
                    <img src="data:image/jpeg;base64,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" alt="JS logo" className='w-10 h-10 overflow-none inset-1/4 relative' />
                </div>
                <div className='rounded-full border-white bg-white border-12 h-20 w-20 object-center'>
                    <img src="https://1000logos.net/wp-content/uploads/2020/08/MongoDB-Emblem.jpg" alt="JS logo" className='w-10 h-10 overflow-none inset-1/4 relative' />
                </div>
                <div className='rounded-full border-white bg-white border-12 h-20 w-20 object-center'>
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADWklEQVRYhdWWTWgcZRzGf+/s1lSdpBVp3YS2KIo1H7tJQE8K2ta0ShXsob3Yo17EguAHePekXkRvIogiomKi1KAgHjzqRdqUYBU8tGCTxpBNm/16Z9738TC7m6TubvYjVnwv88LMPL9nnvn/Z/7wf1iaGZvWd0d2/Rva6S3hX09mKP15grgQA6e220Cw5RVRPosBXPGkZh/ed/MN+CiHBHgoXPro5huQz4KSvSse0le5yfqpmbHDmhmd6sXAljUAfjyhCRBUlj4GxgAoL3yPfACYbg20kYBydTiAK41qevgRfb7/DLIBitBn+17/x23nj0/ol0ff3Uq+pXOVP0gx/VqcXKV6CqLvNxfFQ+l0FCbGUphn83UtzT0zSuXSBXCYB8+1ZLRO4OwbExhtgmMgWirdX/7LhVI1FUXo08E3q/BhKpcvgEvMnnv8QPcGXDmbAGqvQMiJeAWCgqNSDqi/mjj/qvvpqYewl+chrhoDopWJ7g3gxjfCMWCXhAmEQcQrQl4gS5zaQ5Be+BnV4FrX6NpAvQUTMR8Jt5oYERAUHeWCI04Pkh7OgKIb4ALUSwJa/wYYES0JAlAtFWeJK3sTuKs0goPUSwJub03UV8Bd3yAcW3x/hv7HMhA3gteWv7crA5o+eAD5RDQQdknUO8Il8PDoIETN4LWjR+en9nRsALuafHKNcCVwa1UDscWHg4TH2oGLpHKXJ2mymhvwcfbGyq/FHh7NgG0HXltx0zpo8S9wORBxAXxRGDqJXZul1LwTmicg5TAQXRVGFh92DW/ZCS26wB+M14Qv9ghPNqMdGdA347vBYa9YNJAhPJbpAQ7g0dwTDWfKxgmUFseivMX3ZarVbnuAV/eVxVzbBlRezdrSXYRP9vrkG/Zq3AkNDdjg7sO3H9mmJ18/1XB0a2jg2kD4gi1Uzm4HXIAt+9nFubXnG7FaTivLX4yMDAylvkz38UCi2QHcQFzW/LUr7uSdp36fb8Zoa5i8/u3I07fuNp+kdpj+zbAGcAPOKl/K63T/8YuzW2l3NM0Wfxh+pS8M3gpSVH+KG+BG+Bgqa/6l26YuvtOuZlfjdPnHkfdv2clzxiQK8sIW9d7OQ7+e6VSr63l+4cP7hu64Z8fbIHt1zr68/8U/lrvV+k/X3z2NDXFudusKAAAAAElFTkSuQmCC" alt="JS logo" className='w-10 h-10 overflow-none inset-1/4 relative' />
                </div>

                </div>
                
            </div>




        </div>
    )
}

export default Intro;