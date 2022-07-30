import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faPlay,
    faAngleRight,
    faAngleLeft,
    faPause,
} from "@fortawesome/free-solid-svg-icons";

const Player = ({
    isPlaying,
    setIsPlaying,
    currentSong,
    setCurrentSong,
    audioRef,
    songInfo,
    setSongInfo,
    songs,
}) => {
    //UseEffect
    useEffect(() => {
        //Toggle active song
        songs.map((s) => {
            return (s.active = false);
        });
        currentSong.active = true;
    }, [songs, currentSong]);
    //Event Handlers
    const playSongHandler = () => {
        if (isPlaying) {
            audioRef.current.pause();
            setIsPlaying(!isPlaying);
        } else {
            audioRef.current.play();
            setIsPlaying(!isPlaying);
        }
    };
    const getTime = (time) => {
        return (
            Math.floor(time / 60) +
            ":" +
            ("0" + Math.floor(time % 60)).slice(-2)
        );
    };
    const dragHandler = (e) => {
        const animPerc = Math.ceil(
            (Math.ceil(e.target.currentTime) / Math.ceil(e.target.duration)) * 100
        );
        setSongInfo({
            ...songInfo,
            currentTime: e.target.value,
            animationPercentage: animPerc,
        });
        audioRef.current.currentTime = e.target.value;
    };
    const skipTrackHandler = async (direction) => {
        let currentIndex = songs.findIndex(
            (song) => song.id === currentSong.id
        );

        if (direction === "skip-forward") {
            await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
        } else {
            if ((currentIndex - 1) % songs.length === -1) {
                await setCurrentSong(songs[songs.length - 1]);
            } else {
                await setCurrentSong(songs[currentIndex - 1]);
            }
        }

        if (isPlaying) audioRef.current.play();
    };
    //Add the styles
    const trackAnim = {
        transform: `translateX(${songInfo.animationPercentage}%)`,
    };

    return (
        <div className="player">
            <div className="time-control">
                <p>{getTime(songInfo.currentTime)}</p>
                <div
                    style={{
                        background: `linear-gradient(to right, ${currentSong.color[0]}, ${currentSong.color[1]})`,
                    }}
                    className="track"
                >
                    <input
                        min={0}
                        max={songInfo.duration || 0}
                        value={songInfo.currentTime}
                        onChange={dragHandler}
                        type="range"
                    />
                    <div style={trackAnim} className="animate-track"></div>
                </div>
                <p>{songInfo.duration ? getTime(songInfo.duration) : "0:00"}</p>
            </div>
            <div className="play-control">
                <FontAwesomeIcon
                    onClick={() => skipTrackHandler("skip-back")}
                    className="skip-back"
                    size="2x"
                    icon={faAngleLeft}
                />
                <FontAwesomeIcon
                    onClick={playSongHandler}
                    className="play"
                    size="3x"
                    icon={isPlaying ? faPause : faPlay}
                />
                <FontAwesomeIcon
                    onClick={() => skipTrackHandler("skip-forward")}
                    className="skip-forward"
                    size="2x"
                    icon={faAngleRight}
                />
            </div>
        </div>
    );
};

export default Player;
