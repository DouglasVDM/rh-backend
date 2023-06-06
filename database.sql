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
VALUES ('Noun', 'cat'),
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
CREATE TABLE IF NOT EXISTS types (
  id SERIAL PRIMARY KEY,
  type TEXT NOT NULL
);
-- Insert sample data into the sentences table
INSERT INTO sentences (sentence)
VALUES ('The cat runs quickly.'),
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
DROP table IF EXISTs types;
CREATE TABLE IF NOT EXISTS types (
  id SERIAL PRIMARY KEY,
  type TEXT NOT NULL
);
DROP table IF EXISTs nouns;
CREATE TABLE IF NOT EXISTS nouns (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL
);
DROP table IF EXISTs verbs;
CREATE TABLE IF NOT EXISTS verbs (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL
);
DROP table IF EXISTs adjectives;
CREATE TABLE IF NOT EXISTS adjectives (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL
);
DROP table IF EXISTs adverbs;
CREATE TABLE IF NOT EXISTS adverbs (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL
);
DROP table IF EXISTs pronouns;
CREATE TABLE IF NOT EXISTS pronouns (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL
);
INSERT INTO pronouns (name)
VALUES
('I'),
('you'),
('he'),
('she'),
('it'),
('we'),
('they'),
('me'),
('him'),
('her'),
('us'),
('them'),
('my'),
('your'),
('his'),
('her'),
('its'),
('our'),
('their'),
('mine'),
('yours'),
('hers'),
('ours'),
('theirs'),
('myself'),
('yourself');
INSERT INTO adverbs (name)
VALUES
('very'),
('often'),
('always'),
('never'),
('really'),
('quickly'),
('well'),
('too'),
('also'),
('still'),
('just'),
('now'),
('there'),
('then'),
('here'),
('down'),
('up'),
('again'),
('away'),
('together'),
('back'),
('off'),
('so'),
('how'),
('as');
-- Insert sample data into the types table
INSERT INTO types (type)
VALUES ('Nouns'),
  ('Verbs'),
  ('Adjectives'),
  ('Adverbs'),
  ('Pronouns'),
  ('Prepositions'),
  ('Conjunctions'),
  ('Determiners'),
  ('Exclamations');
INSERT INTO nouns (name)
VALUES ('Dog'),
  ('Cat'),
  ('Chair'),
  ('Table'),
  ('Car'),
  ('Book'),
  ('House'),
  ('Tree'),
  ('River'),
  ('Sun'),
  ('Moon'),
  ('Flower'),
  ('Phone'),
  ('Computer'),
  ('Pen'),
  ('Paper'),
  ('Bed'),
  ('Door'),
  ('Window'),
  ('Street'),
  ('Cup'),
  ('Spoon'),
  ('Shirt'),
  ('Shoe'),
  ('Bird');
INSERT INTO verbs (name)
VALUES ('be'),
  ('have'),
  ('do'),
  ('say'),
  ('go'),
  ('get'),
  ('make'),
  ('know'),
  ('think'),
  ('take'),
  ('see'),
  ('come'),
  ('want'),
  ('look'),
  ('use'),
  ('find'),
  ('give'),
  ('tell'),
  ('work'),
  ('call'),
  ('try'),
  ('ask'),
  ('need'),
  ('feel'),
  ('become');
  INSERT INTO adjectives (name)
VALUES
('good'),
('new'),
('first'),
('last'),
('long'),
('great'),
('little'),
('own'),
('other'),
('old'),
('right'),
('big'),
('high'),
('different'),
('small'),
('large'),
('next'),
('early'),
('young'),
('important'),
('few'),
('public'),
('bad'),
('same'),
('able'),
('whole');
select *
from words w;
select *
from sentences s
ORDER BY id DESC;
select *
from types;