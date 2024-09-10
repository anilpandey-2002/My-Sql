// Partitioning
// CREATE TABLE table_name (column1 INT, column2 DATE) PARTITION BY RANGE (YEAR(column2)) (PARTITION p0 VALUES LESS THAN (1991), PARTITION p1 VALUES LESS THAN (1992));
// ALTER TABLE table_name PARTITION BY HASH (column1) PARTITIONS 4;
// ALTER TABLE table_name DROP PARTITION p0;
// SHOW CREATE TABLE table_name;
// SHOW PARTITIONS FROM table_name;

// Miscellaneous
// SHOW TABLES LIKE 'pattern%';
// SHOW COLUMNS FROM table_name;
// SHOW CREATE TABLE table_name;
// SHOW INDEX FROM table_name;
// SHOW VARIABLES;

// Data Import/Export
// LOAD DATA INFILE 'file_path' INTO TABLE table_name;
// SELECT * INTO OUTFILE 'file_path' FIELDS TERMINATED BY ',' FROM table_name;
// LOAD XML INFILE 'file_path' INTO TABLE table_name;
// `SELECT * INTO OUTFILE 'file_path' FIELDS TERMIN
