DROP table IF EXISTs sentences;
CREATE TABLE IF NOT EXISTS sentences (
  id SERIAL PRIMARY KEY,
  sentence TEXT NOT NULL
);
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
DROP table IF EXISTs prepositions;
CREATE TABLE IF NOT EXISTS prepositions (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL
);
DROP table IF EXISTs conjunctions;
CREATE TABLE IF NOT EXISTS conjunctions (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL
);
DROP table IF EXISTs determiners;
CREATE TABLE IF NOT EXISTS determiners (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL
);
DROP table IF EXISTs exclamations;
CREATE TABLE IF NOT EXISTS exclamations (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL
);
INSERT INTO exclamations (name)
VALUES ('Wow!'),
  ('Oh no!'),
  ('Bravo!'),
  ('Yay!'),
  ('Ouch!'),
  ('Awesome!'),
  ('Fantastic!'),
  ('Incredible!'),
  ('Phew!'),
  ('Oops!'),
  ('Hooray!'),
  ('Oh dear!'),
  ('Oh my!'),
  ('Oh wow!'),
  ('Oh well!'),
  ('Amazing!'),
  ('Unbelievable!'),
  ('Terrific!'),
  ('Gosh!'),
  ('Oh no way!'),
  ('Oh yeah!'),
  ('Oh boy!'),
  ('Oh golly!'),
  ('Oh snap!'),
  ('Oh goodness!'),
  ('Oh heavens!');
INSERT INTO determiners (name)
VALUES ('the'),
  ('a'),
  ('an'),
  ('this'),
  ('that'),
  ('these'),
  ('those'),
  ('my'),
  ('your'),
  ('his'),
  ('her'),
  ('its'),
  ('our'),
  ('their'),
  ('some'),
  ('any'),
  ('no'),
  ('each'),
  ('every'),
  ('all'),
  ('both'),
  ('neither'),
  ('either'),
  ('somebody'),
  ('nobody'),
  ('everyone');
INSERT INTO conjunctions (name)
VALUES ('and'),
  ('but'),
  ('or'),
  ('so'),
  ('yet'),
  ('for'),
  ('nor'),
  ('after'),
  ('although'),
  ('because'),
  ('before'),
  ('if'),
  ('once'),
  ('since'),
  ('though'),
  ('unless'),
  ('until'),
  ('when'),
  ('where'),
  ('whether'),
  ('while'),
  ('as'),
  ('since'),
  ('that'),
  ('while');
INSERT INTO prepositions (name)
VALUES ('about'),
  ('above'),
  ('across'),
  ('after'),
  ('against'),
  ('along'),
  ('among'),
  ('around'),
  ('at'),
  ('before'),
  ('behind'),
  ('below'),
  ('beneath'),
  ('beside'),
  ('between'),
  ('beyond'),
  ('by'),
  ('despite'),
  ('during'),
  ('except'),
  ('for'),
  ('from'),
  ('in'),
  ('inside'),
  ('into'),
  ('like'),
  ('near');
INSERT INTO pronouns (name)
VALUES ('I'),
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
VALUES ('very'),
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
VALUES ('good'),
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
INSERT INTO sentences (sentence)
VALUES ('The cat runs quickly.'),
  ('Oh, I forgot my keys!');
select *
from sentences s
ORDER BY id DESC;
select *
from types;