import React from "react";

const LibrarySong = ({ song, songs, setCurrentSong, isPlaying, audioRef }) => {
    const songSelectHandler = async () => {
        await setCurrentSong(song);

        //Toggle active song
        songs.map((s) => {
            return (s.active = false);
        });
        song.active = true;

        audioRef.current.currentTime = 0;
        if (isPlaying) audioRef.current.play();
    };

    return (
        <div
            onClick={songSelectHandler}
            className={`library-song ${song.active ? "selected" : ""}`}
        >
            <img src={song.cover} alt={song.name} />
            <div className="song-description">
                <h3>{song.name}</h3>
                <h4>{song.artist}</h4>
            </div>
        </div>
    );
};

export default LibrarySong;
