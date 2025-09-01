import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import PropTypes from "prop-types";


/**
 * Dropzone component for uploading files with drag-and-drop support.
 *
 * @component
 * @param {Object} props - Component props.
 * @param {number} [props.maxFiles=10] - Maximum number of files allowed.
 * @param {number} [props.maxFileSize=500] - Maximum size per file in KB.
 * @param {string[]} [props.allowedExtensions=[]] - Array of allowed file extensions (e.g., [".pdf", ".docx"]).
 * @param {function} props.onFilesChange - Callback that receives an array of uploaded files.
 * @returns {JSX.Element} The rendered Dropzone component.
 */


const Dropzone = ({ maxFiles = 10, maxFileSize = 500, allowedExtensions = [], onFilesChange }) => {
    const [files, setFiles] = useState([]);

    useEffect(() => {
        // Notify the parent component whenever the files change
        const stableFiles = files.map((item) => item.file); 
        onFilesChange?.(stableFiles);
    }, [files, onFilesChange]);
    

    const handleFileUpload = (event) => {
        const uploadedFiles = Array.from(event.target.files);

        const validFiles = uploadedFiles.filter((file) => {
            const fileExtension = file.name.slice(file.name.lastIndexOf(".")).toLowerCase();

            if (!allowedExtensions.includes(fileExtension)) {
                Swal.fire({ icon: "error", title: "Error!", text: `File ${file.name} has an unsupported extension.` });
                return false;
            }
            if (file.size / 1024 > maxFileSize) {
                Swal.fire({ icon: "error", title: "Error!", text: `File ${file.name} exceeds the ${maxFileSize} KB limit.` });
                return false;
            }
            if (files.length >= maxFiles) {
                Swal.fire({ icon: "error", title: "Error!", text: `You can only upload up to ${maxFiles} files.` });
                return false;
            }
            return true;
        });

        const newFiles = validFiles.slice(0, maxFiles - files.length).map((file) => ({
            file, status: "uploading", error: null, progress: 0, preview: URL.createObjectURL(file),
        }));

        setFiles((prevFiles) => [...prevFiles, ...newFiles]);

        // Simulate upload progress
        newFiles.forEach((newFile) => {
            const fakeUploadInterval = setInterval(() => {
                setFiles((prevFiles) =>
                    prevFiles.map((f) => {
                        if (f.file === newFile.file && f.progress < 100) {
                            return { ...f, progress: f.progress + 10 };
                        }
                        if (f.progress >= 100 && f.file === newFile.file) {
                            clearInterval(fakeUploadInterval);
                            return { ...f, status: "uploaded" };
                        }
                        return f;
                    })
                );
            }, 300);
        });
    };

    const handleRemoveFile = (index) => {
        setFiles((prevFiles) => {
            const fileToRemove = prevFiles[index];
            // Revoke the object URL to avoid memory leaks
            URL.revokeObjectURL(fileToRemove.preview);
            return prevFiles.filter((_, i) => i !== index);
        });
    };

    const getExtensionStyles = (extension) => {
        switch (extension) {
            case ".pdf":
                return { text: "PDF", bgColor: "#d9534f" };
            case ".docx": case ".doc":
                return { text: "DOC", bgColor: "#4a82c5" };
            case ".xlsx": case ".xls": case ".csv":
                return { text: "XLSX", bgColor: "#1aa771" };
            default:
                return { text: "TXT", bgColor: "gray" };
        }
    };

    return (
        <div className="skai-dropzone">
            <label className="skai-upload-label">
                <input type="file" multiple accept={allowedExtensions.join(",")} onChange={handleFileUpload} style={{ display: "none" }} />
                <i className="fe-upload-cloud font-24 mr-3 text-primary"></i> Drag items here or{" "}
                <span className="skai-browse">Browse files</span>
            </label>
            <div className="skai-file-info">
                {files.length}/{maxFiles} files uploaded
            </div>
            <div className="skai-file-list">
                {files
                    .slice() // Create a shallow copy of the files array
                    .reverse() // Reverse the array to show the latest uploaded file first
                    .map((item, index) => {
                        const fileExtension = item.file.name.slice(item.file.name.lastIndexOf(".")).toLowerCase();
                        const { text, bgColor } = getExtensionStyles(fileExtension);

                        return (
                            <div key={index} className="skai-file-item">
                                <div className="skai-file-icon">
                                    {item.file.type.startsWith("image/") ? (
                                        <img src={item.preview} alt={item.file.name} className="skai-image-icon"
                                            style={{ maxWidth: "100px", maxHeight: "100px", objectFit: "cover" }}
                                        />
                                    ) : (
                                        <div className="skai-pdf-logo" style={{ backgroundColor: bgColor, color: "#fff", padding: "10px", borderRadius: "4px" }}>
                                            {text}
                                        </div>
                                    )}
                                </div>
                                <div className="skai-file-details">
                                    <div className="skai-file-name">{item.file.name}</div>
                                    {item.status === "uploading" && (
                                        <div className="skai-progress-bar">
                                            <div className="skai-progress" style={{ width: `${item.progress}%` }}></div>
                                        </div>
                                    )}
                                    {item.progress === 100 && <span className="skai-success">Uploaded Successfully</span>}
                                    {item.error && <span className="skai-error">{item.error}</span>}
                                </div>
                                <div className="skai-file-actions">
                                    <button className="skai-remove-btn" onClick={() => handleRemoveFile(index)}>
                                        <i className="fa fa-trash"></i>
                                    </button>
                                </div>
                            </div>
                        );
                    })}
            </div>

            <label className="zone-comments">
                Uploading files should only be {allowedExtensions.join(", ")} and should not exceed {maxFileSize} KB
            </label>
        </div>
    );
};

Dropzone.propTypes = {
    maxFiles: PropTypes.number,
    maxFileSize: PropTypes.number,
    allowedExtensions: PropTypes.arrayOf(PropTypes.string),
    onFilesChange: PropTypes.func
};


export default Dropzone;
