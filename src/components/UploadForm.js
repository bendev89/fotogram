import React from 'react'
import { useState } from 'react';
import ProgressBar from './ProgressBar';

const UploadForm = () => {
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);

    const allowedTypes =["image/png", "image/jpeg"]

    const uploadHandler = (e) => {
        let selected = e.target.files[0];

        if (selected && allowedTypes.includes(selected.type)){
            setFile(selected)
            setError("");
        } else {
            setFile(null)
            setError("Format non supporté (png et jpeg autorisé)")
        }
    }

    return (
        <form action="">
            <label >
                <input type="file" onChange={uploadHandler} />
                <span>+</span>
            </label>
            <div className="output">
                {error && <div className="error">{error}</div> }
                {file && <div className="error">{file.name}</div>}
                {file && <ProgressBar file={file} setFile={setFile} />}
            </div>
        </form>);
}

export default UploadForm;