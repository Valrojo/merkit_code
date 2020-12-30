-- Always reset db
DROP DATABASE IF EXISTS test_db;
CREATE DATABASE test_db;
\c test_db;

CREATE TABLE test_table (
  id SERIAL PRIMARY KEY,
  num INTEGER
);

-- Insert some items
INSERT INTO test_table VALUES(33);
INSERT INTO test_table VALUES(42);
INSERT INTO test_table VALUES(12);