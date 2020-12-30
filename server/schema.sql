-- Always restart db
DROP DATABASE IF EXISTS test_db;
CREATE DATABASE IF NOT EXISTS test_db;
\c test_db;

CREATE TABLE IF NOT EXISTS test_table (
  id SERIAL PRIMARY KEY,
  num INTEGER
);

-- Insert some items
INSERT INTO test_table VALUES (33), (42), (31);