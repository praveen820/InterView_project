import React, { useState } from "react";
import FileExplorer from "./FileExplorer";
import data from './data.json'

const Files =() =>{
    const [currentPath, setCurrentPath] = useState([`root`])

    const navigate = (dir) =>{
        setCurrentPath((prev)=>[...prev, dir])
    }
    const getPathData = (path) => {
        return  path.reduce((acc, cur)=> acc[cur]?.childern || acc[cur], data)
    }

    return(
        <>
        <div>
            <h5>Files</h5>
            <FileExplorer
             fileData={currentPath}
             data={getPathData(currentPath)}
             navigate={navigate}
            />
        </div>
        </>
    )

}

export default Files;
