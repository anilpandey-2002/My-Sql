// Subqueries
// SELECT column1 FROM table_name WHERE column2 = (SELECT column2 FROM table_name WHERE condition);
// SELECT column1 FROM table_name WHERE column2 IN (SELECT column2 FROM table_name WHERE condition);
// SELECT column1 FROM table_name WHERE EXISTS (SELECT * FROM table_name WHERE condition);
// SELECT column1 FROM table_name WHERE column2 NOT IN (SELECT column2 FROM table_name WHERE condition);
// SELECT column1, (SELECT AVG(column2) FROM table_name WHERE condition) AS avg_value FROM table_name;
