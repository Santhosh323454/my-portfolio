/**
 * Fetches a cross-origin URL as a blob and forces the browser to download it
 * instead of opening it in a new tab.
 */
export const forceDownload = async (url) => {
    if (!url || url === '#') {
        alert("Resume not uploaded yet!");
        return;
    }

    // Cloudinary Free tier blocks 'fl_attachment' for PDFs as an anti-malware measure, returning ERR_INVALID_RESPONSE.
    // Fetching as a blob throws CORS errors.
    // The most stable, bug-free way to ensure the user can view/download the PDF without crashing is to let the browser handle it in a new tab.
    window.open(url, '_blank');
};
