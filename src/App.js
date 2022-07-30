import React, { useState, useRef } from "react";

import "./styles/app.scss";
//Adding Components
import Player from "./components/Player";
import Song from "./components/Song";
import Library from "./components/Library";
import Nav from "./components/Nav";
//Import Util
import data from "./data";

function App() {
    //Ref
    const audioRef = useRef(null);
    //State
    const [songs, setSongs] = useState(data());
    const [currentSong, setCurrentSong] = useState(songs[0]);
    const [isPlaying, setIsPlaying] = useState(false);
    const [songInfo, setSongInfo] = useState({
        currentTime: 0,
        duration: 0,
        animationPercentage: 0,
    });
    const [libraryStatus, setLibraryStatus] = useState(false);
    //Event Handlers
    const timeUpdateHandler = (e) => {
        var current = e.target.currentTime;
        const duration = e.target.duration;
        //Calculate Percentage
        const roundedCurrent = Math.ceil(current);
        const roundedDuration = Math.ceil(duration);
        const animationPercentage = Math.ceil(
            (roundedCurrent / roundedDuration) * 100
        );
        if (current === duration) {
            current = 0;
            setIsPlaying(false);
        }
        setSongInfo({
            ...songInfo,
            currentTime: current,
            duration,
            animationPercentage,
        });
    };
    const songEndHandler = async () => {
        let currentIndex = songs.findIndex(
            (song) => song.id === currentSong.id
        );

        await setCurrentSong(songs[(currentIndex + 1) % songs.length]);

        setTimeout(() => {
            audioRef.current.play();
            setIsPlaying(true);
        }, 100);
    };

    return (
        <div className={`App ${libraryStatus ? "library-active" : ""}`}>
            <Nav
                libraryStatus={libraryStatus}
                setLibraryStatus={setLibraryStatus}
            />
            <Song currentSong={currentSong} />
            <Player
                isPlaying={isPlaying}
                setIsPlaying={setIsPlaying}
                currentSong={currentSong}
                setCurrentSong={setCurrentSong}
                audioRef={audioRef}
                songInfo={songInfo}
                setSongInfo={setSongInfo}
                songs={songs}
            />
            <Library
                isPlaying={isPlaying}
                songs={songs}
                setCurrentSong={setCurrentSong}
                audioRef={audioRef}
                libraryStatus={libraryStatus}
                setLibraryStatus={setLibraryStatus}
            />
            <audio
                onLoadedMetadata={timeUpdateHandler}
                onTimeUpdate={timeUpdateHandler}
                ref={audioRef}
                src={currentSong.audio}
                onEnded={songEndHandler}
            ></audio>
        </div>
    );
}

export default App;
