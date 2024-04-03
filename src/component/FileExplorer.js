import React, { useState } from "react";
import Folder_FileTree from "./Folder_FileTree";

const FileExplorer =({data}) => {
   
    const [addFile, setAddFile] = useState()

    const entries = Object.entries(data?.children || {})

    const handleFileChange = (e) =>{
        setAddFile(e.target.files)
    }

    return(
    <div className="main-container">
            <Folder_FileTree/>
        <ul>
            <span>
            </span>&nbsp;
            {entries?.map(([key, value])=>{
                return(
                    <>
                        <li key={key} onClick={()=> value?.type === 'directory' }>
                        <input type="file" onChange={handleFileChange}/>
                        {value?.type === 'directory' ? "Folder" : "file"} {key}
                        </li>
                    </>
                )
                
            })}
        </ul>
    </div>
    )
}

export default FileExplorer