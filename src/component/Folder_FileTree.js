import React, { useState } from "react";

const Folder_FileTree = () =>{
    
    const [folders, setFolder] = useState([])
    const [currentFolder, setCurrentFolder] = useState('')
    const [currentFile, setCurrentFile] = useState('')

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
            setCurrentFile('')
        }
    }

    return(
        <div>
            <h2>Folder</h2>
            <ul>
                {folders.map((folder, index)=>{
                    return(
                    <>
                    <li key={index}>
                        <b>
                            {folder.name}
                        </b>
                        <ul>
                            {folder?.files?.map((file, fileIndex)=>{
                                return(<>
                                <li key={fileIndex}>{file}</li>
                                </>)
                            })}
                            <li>
                            <div className="form-inline">
                                <div className="form-group mx-sm-3 mb-2">
                                    <input 
                                    type="text" 
                                    className="form-control" 
                                    value={currentFile}
                                    onChange={(e)=>setCurrentFile(e.target.value)} 
                                    placeholder="Add File"/>
                                </div>
                                <button type="submit" className="btn btn-primary mb-2" onClick={()=>handleAddFile(index)}>Add File</button>
                            </div>
                            </li>
                        </ul>
                    </li>
                </>)
                })}
            </ul>

            <div className="form-inline">
                <div className="form-group mx-sm-3 mb-2">
                    <input 
                    type="text" 
                    className="form-control"  
                    value={currentFolder}  
                    onChange={(e)=>setCurrentFolder(e.target.value)}
                    placeholder="Add Folder"/>
                </div>
                <button type="submit" className="btn btn-primary mb-2" onClick={handleAddFolder}>Add Folder</button>
            </div>
        </div>
    )
}

export default Folder_FileTree