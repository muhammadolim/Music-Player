import React from "react";
import LibrarySong from "./LibrarySong";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const Library = ({
    songs,
    setCurrentSong,
    isPlaying,
    audioRef,
    libraryStatus,
    setLibraryStatus,
}) => {
    return (
        <div className={`library ${libraryStatus ? "active-library" : ""}`}>
            <div className="library-nav">
                <h2>Library</h2>
                <FontAwesomeIcon
                    onClick={() => setLibraryStatus(!libraryStatus)}
                    className="close"
                    size="2x"
                    icon={faXmark}
                />
            </div>
            <div className="library-songs">
                {songs.map((song) => {
                    return (
                        <LibrarySong
                            isPlaying={isPlaying}
                            setCurrentSong={setCurrentSong}
                            songs={songs}
                            song={song}
                            key={song.id}
                            audioRef={audioRef}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default Library;
