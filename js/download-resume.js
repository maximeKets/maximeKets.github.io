function downloadPDF() {
            // URL of the PDF file
            var pdfUrl = 'https://maximekets.github.io/CV_Maxime_Kets.pdf';

            // Create a new anchor element
            var downloadLink = document.createElement('a');
            downloadLink.href = pdfUrl;

            // Set the download attribute of the anchor element
            downloadLink.download = 'CV_Maxime_Kets.pdf';

            // Append the anchor element to the document
            document.body.appendChild(downloadLink);

            // Programmatically click the anchor to trigger the download
            downloadLink.click();

            // Remove the anchor element from the document
            document.body.removeChild(downloadLink);
        }