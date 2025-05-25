-- land_records.sql

CREATE DATABASE IF NOT EXISTS land_db;
USE land_db;

CREATE TABLE IF NOT EXISTS land_records (
  id INT AUTO_INCREMENT PRIMARY KEY,
  parcel_id VARCHAR(50),
  plot_number VARCHAR(50),
  owner_name VARCHAR(100),
  location TEXT
);

INSERT INTO land_records (parcel_id, plot_number, owner_name, location)
VALUES 
('P123', '45B', 'Amit Singh', 'Sector 12, New Delhi'),
('P456', '78A', 'Ravi Kumar', 'Greater Noida, UP'),
('P789', '22C', 'Sunita Devi', 'Gurgaon, Haryana');
