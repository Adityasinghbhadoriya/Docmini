import React from 'react';
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion"

function Cards({data, reference}){
    return (
        <motion.div drag dragConstraints = {reference}
        className='relative w-60 h-72 rounded-[40px] bg-sky-200 p-5 overflow-hidden flex-shrink-0'>
           < FaRegFileAlt/>
           <p className='text-sm mt-5 font-semibold leading-tight text-black'>{data.desc}
            </p>  
            <div className='footer absolute bottom-0  w-full  left-0'>
                <div className='flex justify-between items-center px-[20px] py-3 mb-0'>
                    <h5 className='text-black'>{data.filesize}</h5>
                    <span className='w-6 h-6 bg-black rounded-full flex items-center justify-center'>
                        {data.close ? <IoMdClose color='white'/> : <LuDownload size="0.8em" color='white'/> }
                    </span>
                </div>
                {
                    data.tag.isOpen && (
                        <div className= {`tag w-full py-4 ${data.tag.tagColor === "black" ? "bg-blue-700" : "bg-green-600"
                        } flex items-center justify-center`} >
                        <h3 className='text-white text-xs  '>{data.tag.tagTitle}</h3>
                    </div>
                    ) 
                }

            </div>
       </motion.div>
    )
}

export default Cards