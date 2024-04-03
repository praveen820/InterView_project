import React, { useState } from "react";

const Folder_FileTree = () =>{
    const [folders, setFolder] = useState([])
    const [currentFolder, setCurrentFolder] = useState('')
    console.log("🚀 ~ currentFolder:", currentFolder)
    const [currentFile, setCurrentFile] = useState('')

    const handleFileInputChange =(e) =>{
        setCurrentFile(e.target.value)
    }

    const handleFolderInputChange =(e) =>{
        setCurrentFolder(e.target.value)
    }

    const handleAddFolder = () =>{
        if(currentFolder.trim() !== ""){
            setFolder([...folders,{name : currentFolder, files: []}])
            setCurrentFolder('')
        }
    }

    const handleAddFile = (folderIndex) =>{
        if(currentFile.trim() !== ""){
            const updatedFolder = [...folders];
            updatedFolder[folderIndex]?.files?.push(currentFile)
            setFolder(updatedFolder)
            setCurrentFile("")
        }
    }

    return(
        <div>
            <h2>Folder</h2>
            <ul>
                {folders.map((folder, index)=>{
                    <li key={index}>
                        {folder.name}
                        <ul>
                            {folder?.files?.map((file, fileIndex)=>{
                                <li key={fileIndex}>{file}</li>
                            })}
                            <li>
                                <input 
                                type="text"
                                value={currentFile}
                                onChange={handleFileInputChange}
                                />
                               <button onClick={()=>handleAddFile(index)}>Add File</button>
                            </li>
                        </ul>
                    </li>
                })}
            </ul>
            <input 
                 type="text"
                 value={currentFolder}
                 onChange={handleFolderInputChange}
                />
               <button onClick={handleAddFolder}>Add Folder</button>
        </div>
    )
}

export default Folder_FileTree