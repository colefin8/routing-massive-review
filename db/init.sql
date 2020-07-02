DROP TABLE IF EXISTS party;

CREATE TABLE party (
    character_id SERIAL PRIMARY KEY,
    character_name VARCHAR(100),
    character_class VARCHAR (50),
    character_level INT
);