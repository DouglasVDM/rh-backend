DROP table IF EXISTs nouns;
CREATE table nouns (
noun_id serial PRIMARY key,
noun_name VARCHAR(55) NOT null
);

insert 
into nouns(noun_name)
values ('time');

insert 
into nouns(noun_name)
values ('person');

insert 
into nouns(noun_name)
values ('year');

insert 
into nouns(noun_name)
values ('way');

insert 
into nouns(noun_name)
values ('day');

insert 
into nouns(noun_name)
values ('thing');

insert 
into nouns(noun_name)
values ('man');

insert 
into nouns(noun_name)
values ('world');

insert 
into nouns(noun_name)
values ('life');

insert 
into nouns(noun_name)
values ('hand');

insert 
into nouns(noun_name)
values ('part');

insert 
into nouns(noun_name)
values ('child');

select *
from nouns;


time
person
year
way
day
thing
man
world
life
hand
part
child
eye
woman
place
work
week
case
point
government
company
number
group
problem
fact

*********
*
*********