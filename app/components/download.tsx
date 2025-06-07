'use client';

export default function DownloadCVButton() {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/pdf/ratnesh_singh_resume.pdf';
    link.download = 'Ratnesh_CV.pdf'; // optional custom file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button onClick={handleDownload} className="btn btn-primary rounded-full">
      Download CV
    </button>
  );
}
