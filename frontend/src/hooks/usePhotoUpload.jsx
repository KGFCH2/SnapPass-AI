/**
 * usePhotoUpload — custom hook that encapsulates the upload state machine.
 *
 * Returns:
 *   { uploadFile, uploadedFile, isUploading, error, reset }
 *
 * TODO: Replace the simulated delay with a real fetch to POST /api/upload.
 */

import { useState, useCallback } from 'react';

function usePhotoUpload() {
  const [isUploading, setIsUploading]   = useState(false);
  const [uploadedFile, setUploadedFile] = useState(null); // { filename, fileUrl, localUrl }
  const [error, setError]               = useState(null);

  const uploadFile = useCallback(async (file) => {
    setIsUploading(true);
    setError(null);

    try {
      // Create local preview immediately
      const localUrl = URL.createObjectURL(file);

      const formData = new FormData();
      formData.append('photo', file);
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5005/api';
      const res = await fetch(`${apiUrl}/upload`, { method: 'POST', body: formData });
      if (!res.ok) throw new Error('Upload failed');
      const data = await res.json();
      setUploadedFile({ ...data.data, localUrl });
    } catch (err) {
      setError(err.message || 'Upload failed. Please try again.');
    } finally {
      setIsUploading(false);
    }
  }, []);

  const reset = useCallback(() => {
    setUploadedFile(null);
    setError(null);
  }, []);

  return { uploadFile, uploadedFile, isUploading, error, reset };
}

export default usePhotoUpload;
