use music_db;
INSERT INTO playlists (title) VALUES ("Drive"), ("Workout"), ("Relax");

INSERT INTO songs (title, artist, genre, yearOfRelease) 
VALUES 
("Yellow", "Coldplay", "Indie", 2010),
("Blue", "Warmplay", "Indie", 2000),
("Pink", "Warmplay", "Indie", 2011),
("Green", "Foo Fighters", "Indie", 2020),
("Orange", "Bob Smith", "Indie", 2014),
("Black", "Alice Smith", "Indie", 2016);

INSERT INTO playlistSongs (playlist_id, song_id) 
VALUES 
(1,2),
(1,4),
(2,1),
(2,4),
(2,3),
(3,2);

