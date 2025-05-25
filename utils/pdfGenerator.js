const PDFDocument = require('pdfkit');

function generatePDF(data, res) {
  const doc = new PDFDocument();

  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', 'attachment; filename=land_record.pdf');

  doc.pipe(res);
  doc.fontSize(18).text('Land Record Summary', { align: 'center' });
  doc.moveDown();
  doc.text(`Owner Name: ${data.owner_name}`);
  doc.text(`Plot Number: ${data.plot_number}`);
  doc.text(`Parcel ID: ${data.parcel_id}`);
  doc.text(`Location: ${data.location}`);
  doc.end();
}

module.exports = generatePDF;
