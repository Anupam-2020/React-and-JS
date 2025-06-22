import { createContext, useEffect, useRef, useState } from "react";
import { songsData } from "../assets/assets";

export const SpotifyContext = createContext({
    audioRef: null,
    seekBar: null,
    seekBg: null,
    track: '',
    setTrack: () => {},
    playStatus: false,
    setPlayStatus: () => {},
    time: {},
    setTime: () => {},
    play: () => {},
    pause: () => {},
    playWithId: () => {},
    previous: () => {},
    next: () => {},
    seekSong: () => {}
});

const SpotifyProvider = ({ children }) => {
    const audioRef = useRef();
    const seekBar = useRef();
    const seekBg = useRef();
    const [track, setTrack] = useState(songsData[0]);
    const [playStatus, setPlayStatus] = useState(false);
    const [time, setTime] = useState({
        currentTime: {
            second: 0,
            minute: 0
        },
        totalTime: {
            second: 0,
            minute: 0
        }
    })


    const play = async () => {
        await audioRef.current.play();
        await setPlayStatus(true);
    }


    const pause = async () => {
        await audioRef.current.pause();
        await setPlayStatus(false);
    }

    const playWithId = async (songId) => {
        await setTrack(songsData[songId]);
        await audioRef.current.play();
        await setPlayStatus(true);
    }

    const previous = async () => {
        if(track.id > 0) {
            await setTrack(songsData[track.id - 1]);
            await audioRef.current.play();
            await setPlayStatus(true);
        } 
    }

    const next = async () => {
        if(track.id < songsData.length - 1) {
            await setTrack(songsData[track.id + 1]);
            await audioRef.current.play();
            await setPlayStatus(true);
        } 
    }


    const seekSong = async(e) => {
    audioRef.current.currentTime = ((e.nativeEvent.offsetX / seekBg.current.offsetWidth) * audioRef.current.duration);
    }

    useEffect(() => {
        setTimeout(() => {
            audioRef.current.ontimeupdate = () => {
                seekBar.current.style.width = (Math.floor(audioRef.current.currentTime/audioRef.current.duration*100) + '%');
                setTime({
                    currentTime: {
                        second: Math.floor(audioRef.current.currentTime % 60),
                        minute: Math.floor(audioRef.current.currentTime / 60)
                    },
                    totalTime: {
                        second: Math.floor(audioRef.current.duration % 60),
                        minute: Math.floor(audioRef.current.duration / 60)
                    }
                });
            }
        }, 1000);
    }, [audioRef])

    const contextValue = {
        audioRef,
        seekBar,
        seekBg,
        track,
        setTrack,
        playStatus,
        setPlayStatus,
        time,
        setTime,
        play,
        pause,
        playWithId,
        previous,
        next,
        seekSong
    };

    return (
        <SpotifyContext.Provider value={contextValue}>
            {children}
        </SpotifyContext.Provider>
    )
}

export default SpotifyProvider;