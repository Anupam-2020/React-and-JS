import { useContext } from 'react'
import './App.css'
import Display from './components/Display'
import Player from './components/Player'
import Sidebar from './components/Sidebar'
import { SpotifyContext } from './context/SpotifyContext'

function App() {

  const {audioRef, track} = useContext(SpotifyContext);

  return (
    <div className='h-screen bg-black'>
      <div className='h-[90%] flex'>
        <Sidebar />
        <Display />
      </div>
      <Player />
      <audio src={track.file} ref={audioRef} preload='auto'></audio>
    </div>
  )
}

export default App
