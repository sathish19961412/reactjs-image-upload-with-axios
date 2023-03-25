import React, { useRef, useState } from "react";
import axios from 'axios';
export default function Fileupload(){

    const [file,setFile] =useState();
    const [fileName,setFileName]=useState('');
    const fileInput =useRef();

    const saveFile=()=>{
        setFile(fileInput.current.files[0]);
        setFileName(fileInput.current.files[0].name)
    }

    const uploadFile= async ()=>{
        const formData =new FormData();
        formData.append('file',file);
        formData.append('fileName',fileName);
        try{
           axios.post('http://localhost:8000/upload',
                formData
           )
        }catch(ex){
          
        }
    }

    return(
        <div className="mt-5">
            <input type="file" ref={fileInput} name="file" onChange={saveFile}/>
            <button  onClick={uploadFile} className="bg-success text-white">Upload</button>
        </div>
    )
}