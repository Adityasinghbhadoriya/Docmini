"use client"

import React,{useState,useRef} from 'react'
import Cards from './Cards'


function Forground(){
     

    const ref = useRef(null);

    const data = [
        {
            desc : "This is again we are using to add some description.", 
            filesize: ".9mb" ,
             close: false, 
             tag: {isOpen: true, 
            tagTitle: "Download Now", 
            tagColor: "green"},
        },
        {
            desc : "This is again we are using to add some description.", 
            filesize: ".9mb" ,
             close: false, 
             tag: {isOpen: true, 
            tagTitle: "Uploaded", 
            tagColor: "black"},
        },
        {
            desc : "This is again we are using to add some description.", 
            filesize: ".9mb" ,
             close: false, 
             tag: {isOpen: true, 
            tagTitle: "Download Now", 
            tagColor: "green"},
        },
    ];

    return (
        
        <div ref= {ref} className = 'fixed top-0 left-0 z-[3] w-full h-full flex gap-9 flex-wrap p-5'>
            {data.map((item,index)=>(
                 <Cards data = {item} reference = {ref}/>
            ))}
        </div>
        
    )
}

export default Forground