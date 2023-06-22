DROP table IF EXISTs words;
CREATE TABLE IF NOT EXISTS words (
  id SERIAL PRIMARY KEY,
  word TEXT NOT NULL,
  wordtype TEXT NOT NULL
);
DROP table IF EXISTs sentences;
CREATE TABLE IF NOT EXISTS sentences (
  id SERIAL PRIMARY KEY,
  sentence TEXT NOT NULL
);

INSERT INTO sentences (sentence)
VALUES ('The cat runs quickly.'),
  ('Oh, I forgot my keys!');
select *
from sentences s
ORDER BY id DESC;
select *
from types;