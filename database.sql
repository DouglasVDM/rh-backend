-- Drop the words table
DROP table IF EXISTs words;
-- Create the words table
CREATE TABLE IF NOT EXISTS words (
  id SERIAL PRIMARY KEY,
  word_type VARCHAR(100) NOT NULL,
  word VARCHAR(100) NOT NULL
);

-- Insert sample data into the words table
INSERT INTO words (word_type, word)
VALUES
  ('Noun', 'cat'),
  ('Noun', 'dog'),
  ('Noun', 'house'),
  ('Verb', 'run'),
  ('Verb', 'jump'),
  ('Adjective', 'beautiful'),
  ('Adjective', 'happy'),
  ('Adjective', 'red'),
  ('Adverb', 'quickly'),
  ('Adverb', 'loudly'),
  ('Pronoun', 'he'),
  ('Pronoun', 'she'),
  ('Preposition', 'on'),
  ('Preposition', 'under'),
  ('Conjunction', 'and'),
  ('Conjunction', 'but'),
  ('Determiner', 'the'),
  ('Determiner', 'a'),
  ('Exclamation', 'Wow'),
  ('Exclamation', 'Oh');

DROP table IF EXISTs sentences;
 -- Create the sentences table
CREATE TABLE IF NOT EXISTS sentences (
  id SERIAL PRIMARY KEY,
  sentence TEXT NOT NULL
);

-- Insert sample data into the sentences table
INSERT INTO sentences (sentence)
VALUES
  ('The cat runs quickly.'),
  ('She jumped and shouted happily.'),
  ('The red house is under the tree.'),
  ('He is a happy dog.'),
  ('Wow, the beautiful sunset!'),
  ('Oh, the loud music!'),
  ('A quick brown fox.'),
  ('The dog barks loudly.'),
  ('She dances gracefully.'),
  ('The cat and the dog play together.'),
  ('The book is on the table.'),
  ('He ran but tripped.'),
  ('I saw a cat and a dog.'),
  ('Wow, what a beautiful flower!'),
  ('Oh, I forgot my keys!');
 
 select * from words w ;

select * from sentences s
 ORDER BY id DESC;
