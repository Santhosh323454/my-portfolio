/**
 * Uploads a file to Cloudinary and returns the secure URL.
 * 
 * @param {File} file - The file to upload.
 * @param {String} folderName - Context parameter (kept for compatibility with Admin Dashboard).
 * @param {Function} onProgress - Optional callback for fake progress.
 * @returns {Promise<String>} The secure URL of the uploaded file.
 */
export const uploadFile = async (file, folderName, onProgress) => {
    if (!file) throw new Error("No file provided.");

    // Simulate progress for UI feedback
    let progressInterval;
    if (onProgress) {
        let currentProgress = 0;
        onProgress(0);
        progressInterval = setInterval(() => {
            currentProgress += 10;
            if (currentProgress < 90) onProgress(currentProgress);
        }, 150);
    }

    try {
        const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME || 'dv4nz3x8e';
        const uploadPreset = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET || 'portfolio_uploads';

        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', uploadPreset);

        // Crucial Fix: PDFs must be uploaded as 'raw' otherwise Cloudinary may try to rasterize or compress them, destroying the PDF headers.
        const isPdf = file.type === 'application/pdf';
        const endpoints = isPdf ? 'raw/upload' : 'image/upload';

        const response = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/${endpoints}`, {
            method: 'POST',
            body: formData
        });

        const data = await response.json();

        if (onProgress) {
            clearInterval(progressInterval);
            onProgress(100);
        }

        if (!response.ok) {
            throw new Error(data.error?.message || "Cloudinary upload failed");
        }

        return data.secure_url;
    } catch (error) {
        if (progressInterval) clearInterval(progressInterval);
        console.error("Cloudinary Upload Error:", error);
        throw error;
    }
};
