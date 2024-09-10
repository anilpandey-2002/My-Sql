// JSON Functions
// SELECT JSON_EXTRACT(json_column, '$.key') FROM table_name;
// SELECT JSON_UNQUOTE(JSON_EXTRACT(json_column, '$.key')) FROM table_name;
// UPDATE table_name SET json_column = JSON_SET(json_column, '$.key', 'value');
// SELECT JSON_ARRAYAGG(column1) FROM table_name;
// SELECT JSON_OBJECT('key1', column1, 'key2', column2) FROM table_name;

// Full-Text Search
// CREATE FULLTEXT INDEX index_name ON table_name (column_name);
// SELECT * FROM table_name WHERE MATCH (column_name) AGAINST ('search_term');
// ALTER TABLE table_name DROP INDEX index_name;
// ALTER TABLE table_name ADD FULLTEXT(column_name);
// SHOW FULLTEXT INDEXES FROM table_name;
