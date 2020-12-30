CREATE DATABASE IF NOT EXISTS test_db;
\c test_db;

CREATE TABLE IF NOT EXISTS test_table (
  id SERIAL PRIMARY KEY,
  num INTEGER
);

-- Insert some items
IF NOT EXISTS (SELECT FROM test_table) THEN
  INSERT INTO test_table VALUES(33);
  INSERT INTO test_table VALUES(42);
  INSERT INTO test_table VALUES(12);
END IF;