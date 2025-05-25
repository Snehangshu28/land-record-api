const express = require('express');
const router = express.Router();
const db = require('../db/connection');
const generatePDF = require('../utils/pdfGenerator');

router.post('/search', (req, res) => {
  const query = req.body.query;
  const sql = `
    SELECT * FROM land_records 
    WHERE parcel_id = ? OR plot_number = ? OR owner_name LIKE ? 
    LIMIT 1`;

  db.query(sql, [query, query, `%${query}%`], (err, result) => {
    if (err) return res.status(500).send('Database Error');
    if (result.length === 0) return res.status(404).send('No record found');
    generatePDF(result[0], res);
  });
});

module.exports = router;
