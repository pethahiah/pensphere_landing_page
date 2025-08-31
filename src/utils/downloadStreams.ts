/**
 * Downloads a file from an Axios response stream
 * @param {Object} response - The Axios response object
 * @param {string} [defaultFilename] - Optional default filename if not provided in response
 * @returns {Promise<void>}
 */
export function downloadFileFromStream(response, defaultFilename = 'downloaded-file') {
  // Get content type and disposition from headers
  const contentType = response.headers['content-type'];
  const contentDisposition = response.headers['content-disposition'];
  
  // Extract filename from Content-Disposition header if available
  let filename = defaultFilename;
  if (contentDisposition) {
    const filenameMatch = contentDisposition.match(/filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/);
    if (filenameMatch && filenameMatch[1]) {
      filename = filenameMatch[1].replace(/['"]/g, '');
    }
  }
  
  // Determine file extension based on content type if filename doesn't have one
  if (!filename.includes('.')) {
    const extensionMap = {
      'application/pdf': '.pdf',
      'application/json': '.json',
      'application/xml': '.xml',
      'text/csv': '.csv',
      'text/plain': '.txt',
      'text/html': '.html',
      'image/jpeg': '.jpg',
      'image/png': '.png',
      'image/gif': '.gif',
      'application/vnd.ms-excel': '.xls',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': '.xlsx',
      'application/vnd.ms-powerpoint': '.ppt',
      'application/vnd.openxmlformats-officedocument.presentationml.presentation': '.pptx',
      'application/msword': '.doc',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document': '.docx',
      'application/zip': '.zip'
    };
    
    const extension = extensionMap[contentType] || '';
    if (extension) {
      filename += extension;
    }
  }

  // Convert the response data to a Blob
  const blob = new Blob(
    [response.data], 
    { type: contentType || 'application/octet-stream' }
  );
  
  // Create a URL for the blob
  const url = window.URL.createObjectURL(blob);
  
  // Create a temporary link element to trigger the download
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', filename);
  link.style.display = 'none';
  
  // Add the link to the document, click it, then remove it
  document.body.appendChild(link);
  link.click();
  
  // Clean up
  window.URL.revokeObjectURL(url);
  document.body.removeChild(link);
}
