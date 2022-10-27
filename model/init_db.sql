DROP TABLE IF EXISTS enviro_data;

CREATE TABLE enviro_data (
    zip VARCHAR (5) NOT NULL,
    city VARCHAR (255),
    air INT,
    haz_cleanups INT,
    lead_paint INT,
    water DECIMAL(3,1)
);

LOAD DATA LOCAL INFILE '/Users/Zoe/Desktop/CodeOp/codeop-activities/MVP/my-express-app/data/enviro_data.csv' 
INTO TABLE enviro_data
FIELDS TERMINATED BY ',' 
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;
