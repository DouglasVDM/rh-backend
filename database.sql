DROP table IF EXISTs nouns;
CREATE table nouns (
noun_id serial PRIMARY key,
noun_name VARCHAR(55) NOT null
);

DROP table IF EXISTs verbs;
CREATE table verbs (
verb_id serial PRIMARY key,
verb_name VARCHAR(55) NOT null
);

DROP table IF EXISTs determiners;
CREATE table determiners (
determiner_id serial PRIMARY key,
determiner_name VARCHAR(55) NOT null
);

DROP table IF EXISTs adjectives;
CREATE table adjectives (
adjective_id serial PRIMARY key,
adjective_name VARCHAR(55) NOT null
);

DROP table IF EXISTs sentences;
CREATE table sentences (
sentence_id serial PRIMARY key,
sentence_name VARCHAR(1000) NOT null
);

