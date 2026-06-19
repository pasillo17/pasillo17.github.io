import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  ArrowLeft,
  Clock,
  Volume2,
  Heart,
  Share2,
  MoreHorizontal,
} from "lucide-react";
import { Link } from "react-router-dom";
import { RELEASES } from "../constants";

const PlaylistPage: React.FC = () => {
  const [currentTrack, setCurrentTrack] = useState(RELEASES[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.7);

  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current?.play().catch((e) => {
        console.error("Playback failed:", e);
        setIsPlaying(false);
      });
    } else {
      audioRef.current?.pause();
    }
  }, [isPlaying, currentTrack]);

  const handlePlay = (track: (typeof RELEASES)[0]) => {
    if (currentTrack.id === track.id) {
      setIsPlaying(!isPlaying);
    } else {
      setCurrentTrack(track);
      setIsPlaying(true);
    }
  };

  const onTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const onLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const onEnded = () => {
    const currentIndex = RELEASES.findIndex((r) => r.id === currentTrack.id);
    const nextIndex = (currentIndex + 1) % RELEASES.length;
    setCurrentTrack(RELEASES[nextIndex]);
    setIsPlaying(true);
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value);
    if (audioRef.current) {
      audioRef.current.currentTime = time;
      setCurrentTime(time);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVolume(parseFloat(e.target.value));
  };

  const formatTime = (time: number) => {
    if (isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  const handleNext = () => {
    const currentIndex = RELEASES.findIndex((r) => r.id === currentTrack.id);
    const nextIndex = (currentIndex + 1) % RELEASES.length;
    setCurrentTrack(RELEASES[nextIndex]);
    setIsPlaying(true);
  };

  const handlePrev = () => {
    const currentIndex = RELEASES.findIndex((r) => r.id === currentTrack.id);
    const prevIndex = (currentIndex - 1 + RELEASES.length) % RELEASES.length;
    setCurrentTrack(RELEASES[prevIndex]);
    setIsPlaying(true);
  };

  return (
    <div className="min-h-screen bg-[#030509] text-white font-sans selection:bg-brand-blue/30 pb-32">
      {/* Hidden Audio Element */}
      <audio
        ref={audioRef}
        src={currentTrack.audio}
        onTimeUpdate={onTimeUpdate}
        onLoadedMetadata={onLoadedMetadata}
        onEnded={onEnded}
      />

      {/* Dynamic Background Mesh */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] bg-brand-blue/10 blur-[150px] rounded-full mix-blend-screen animate-pulse-slow"></div>
        <div
          className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-cyan-600/10 blur-[150px] rounded-full mix-blend-screen animate-pulse-slow"
          style={{ animationDelay: "2s" }}
        ></div>
        <div className="absolute top-[20%] left-[30%] w-[40vw] h-[40vw] bg-blue-500/5 blur-[120px] rounded-full mix-blend-screen"></div>
      </div>

      {/* Navbar / Top Bar */}
      <div className="sticky top-0 z-40 bg-[#030509]/80 backdrop-blur-xl border-b border-white/5 px-6 py-4 flex items-center justify-between">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors group"
        >
          <div className="p-2 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors">
            <ArrowLeft size={18} />
          </div>
          <span className="font-medium text-sm tracking-wide hidden sm:inline">
            VOLVER AL INICIO
          </span>
        </Link>
        <div className="text-sm font-bold tracking-widest text-slate-500">
          PASILLO 17 STUDIO
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-8 md:py-12 relative z-10">
        {/* Mobile Hero Header (Centered) */}
        <div className="md:hidden flex flex-col items-center text-center mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-64 h-64 shadow-2xl shadow-brand-blue/20 rounded-2xl overflow-hidden relative group mb-8"
          >
            <img
              src={currentTrack.image}
              alt="Cover"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h5 className="text-xs font-bold text-brand-blue uppercase tracking-widest mb-2">
              Playlist Oficial
            </h5>
            <h1 className="text-4xl font-display font-bold mb-4 tracking-tight">
              BY PASILLO17
            </h1>
            <p className="text-slate-400 text-sm mb-6 max-w-xs mx-auto">
              Selección de nuestras mejores producciones.
            </p>

            <div className="flex items-center justify-center gap-4">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="px-8 py-3 bg-brand-blue text-white rounded-full font-bold text-sm tracking-widest hover:scale-105 transition-transform shadow-[0_0_20px_rgba(0,123,255,0.4)] flex items-center gap-2"
              >
                {isPlaying ? (
                  <Pause size={18} fill="currentColor" />
                ) : (
                  <Play size={18} fill="currentColor" />
                )}
                {isPlaying ? "PAUSAR" : "REPRODUCIR"}
              </button>
              <button className="p-3 rounded-full border border-white/10 hover:bg-white/10 transition-colors">
                <Heart
                  size={20}
                  className={
                    isLiked ? "fill-brand-blue text-brand-blue" : "text-white"
                  }
                  onClick={() => setIsLiked(!isLiked)}
                />
              </button>
            </div>
          </motion.div>
        </div>

        {/* Desktop Hero Header (Side by Side) */}
        <div className="hidden md:flex flex-row items-end gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-64 h-64 shadow-2xl shadow-brand-blue/20 rounded-xl overflow-hidden relative group"
          >
            <img
              src={currentTrack.image}
              alt="Cover"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
          </motion.div>

          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h5 className="text-xs font-bold text-brand-blue uppercase tracking-widest mb-2">
                Playlist Oficial
              </h5>
              <h1 className="text-7xl font-display font-bold mb-4 tracking-tight">
                BY PASILLO17
              </h1>
              <p className="text-slate-400 text-lg max-w-2xl mb-6">
                Una selección curada de nuestras producciones más recientes.
                Grabación, mezcla y mastering con el sello de calidad de Pasillo
                17.
              </p>

              <div className="flex items-center gap-4">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="px-8 py-3 bg-brand-blue text-white rounded-full font-bold text-sm tracking-widest hover:scale-105 transition-transform shadow-[0_0_20px_rgba(0,123,255,0.4)] flex items-center gap-2"
                >
                  {isPlaying ? (
                    <Pause size={18} fill="currentColor" />
                  ) : (
                    <Play size={18} fill="currentColor" />
                  )}
                  {isPlaying ? "PAUSAR" : "REPRODUCIR TODO"}
                </button>
                <button className="p-3 rounded-full border border-white/10 hover:bg-white/10 transition-colors">
                  <Heart
                    size={20}
                    className={
                      isLiked ? "fill-brand-blue text-brand-blue" : "text-white"
                    }
                    onClick={() => setIsLiked(!isLiked)}
                  />
                </button>
                <button className="p-3 rounded-full border border-white/10 hover:bg-white/10 transition-colors">
                  <Share2 size={20} />
                </button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Tracklist */}
        <div className="bg-white/[0.02] rounded-3xl border border-white/5 overflow-hidden">
          {/* Header Row - Hidden on Mobile */}
          <div className="hidden md:grid grid-cols-[auto_2fr_1fr_auto] gap-4 px-6 py-4 border-b border-white/5 text-xs font-bold text-slate-500 uppercase tracking-wider">
            <div className="w-8 text-center">#</div>
            <div>Título</div>
            <div>Artista</div>
            <div className="w-12 text-center">
              <Clock size={14} className="mx-auto" />
            </div>
          </div>

          {/* List */}
          <div className="divide-y divide-white/5">
            {RELEASES.map((track, index) => {
              const isCurrent = currentTrack.id === track.id;
              return (
                <motion.div
                  key={track.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => handlePlay(track)}
                  className={`group grid grid-cols-[auto_1fr_auto] md:grid-cols-[auto_2fr_1fr_auto] gap-4 items-center px-4 md:px-6 py-3 md:py-4 cursor-pointer transition-colors hover:bg-white/5 ${
                    isCurrent ? "bg-white/[0.08]" : ""
                  }`}
                >
                  {/* Index / Play Icon - Hidden on Mobile */}
                  <div className="hidden md:block w-8 text-center text-sm font-mono text-slate-500">
                    {isCurrent && isPlaying ? (
                      <div className="flex items-end justify-center gap-[2px] h-4">
                        <span className="w-[2px] h-2 bg-brand-blue animate-[music-bar_0.5s_ease-in-out_infinite]"></span>
                        <span className="w-[2px] h-4 bg-brand-blue animate-[music-bar_0.5s_ease-in-out_infinite_0.1s]"></span>
                        <span className="w-[2px] h-3 bg-brand-blue animate-[music-bar_0.5s_ease-in-out_infinite_0.2s]"></span>
                      </div>
                    ) : (
                      <span className="group-hover:hidden">{index + 1}</span>
                    )}
                    <Play
                      size={14}
                      className={`hidden group-hover:block mx-auto ${isCurrent ? "text-brand-blue" : "text-white"}`}
                    />
                  </div>

                  {/* Mobile Index (Simple number) */}
                  <div className="md:hidden w-6 text-center text-xs font-mono text-slate-600">
                    {index + 1}
                  </div>

                  <div className="flex items-center gap-3 md:gap-4">
                    <img
                      src={track.image}
                      alt={track.title}
                      className="w-12 h-12 md:w-10 md:h-10 rounded md:rounded-sm shadow-sm object-cover"
                    />
                    <div className="min-w-0">
                      <h4
                        className={`font-bold text-sm md:text-base truncate ${isCurrent ? "text-brand-blue" : "text-white"}`}
                      >
                        {track.title}
                      </h4>
                      <p className="text-xs text-slate-400 truncate">
                        {track.artist}
                      </p>
                    </div>
                  </div>

                  <div className="hidden md:block text-sm text-slate-400 font-medium">
                    {track.artist}
                  </div>

                  <div className="w-12 text-center text-xs font-mono text-slate-500">
                    {isCurrent ? formatTime(duration) : "3:45"}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Persistent Bottom Player */}
      <div className="fixed bottom-0 left-0 right-0 bg-[#0a0a0a]/95 backdrop-blur-xl border-t border-white/10 px-4 md:px-6 py-3 md:py-4 z-50 pb-safe">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          {/* Current Track Info */}
          <div className="flex items-center gap-3 md:gap-4 flex-1 md:w-1/3 min-w-0">
            <img
              src={currentTrack.image}
              alt={currentTrack.title}
              className="w-10 h-10 md:w-14 md:h-14 rounded md:rounded-lg shadow-lg object-cover"
            />
            <div className="min-w-0">
              <h4 className="font-bold text-white text-sm md:text-base truncate">
                {currentTrack.title}
              </h4>
              <p className="text-xs text-slate-400 truncate">
                {currentTrack.artist}
              </p>
            </div>
            <button className="text-slate-400 hover:text-white ml-2 hidden sm:block">
              <Heart size={16} />
            </button>
          </div>

          {/* Player Controls - Mobile (Simplified) */}
          <div className="flex md:hidden items-center gap-4">
            <button
              onClick={handlePlay.bind(null, currentTrack)}
              className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center shadow-lg active:scale-95 transition-transform"
            >
              {isPlaying ? (
                <Pause fill="currentColor" size={18} />
              ) : (
                <Play fill="currentColor" size={18} className="ml-0.5" />
              )}
            </button>
          </div>

          {/* Player Controls - Desktop (Full) */}
          <div className="hidden md:flex flex-col items-center w-1/3">
            <div className="flex items-center gap-6 mb-2">
              <button
                onClick={handlePrev}
                className="text-slate-400 hover:text-white transition-colors"
              >
                <SkipBack size={20} />
              </button>
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:scale-105 transition-transform"
              >
                {isPlaying ? (
                  <Pause fill="currentColor" size={18} />
                ) : (
                  <Play fill="currentColor" size={18} className="ml-1" />
                )}
              </button>
              <button
                onClick={handleNext}
                className="text-slate-400 hover:text-white transition-colors"
              >
                <SkipForward size={20} />
              </button>
            </div>
            <div className="w-full max-w-md flex items-center gap-3 text-xs font-mono text-slate-500">
              <span>{formatTime(currentTime)}</span>
              <div className="flex-1 h-1 bg-white/10 rounded-full relative group">
                <input
                  type="range"
                  min={0}
                  max={duration || 0}
                  value={currentTime}
                  onChange={handleSeek}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                />
                <div
                  className="h-full bg-brand-blue rounded-full relative pointer-events-none"
                  style={{ width: `${(currentTime / duration) * 100}%` }}
                >
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full opacity-0 group-hover:opacity-100"></div>
                </div>
              </div>
              <span>{formatTime(duration)}</span>
            </div>
          </div>

          {/* Volume / Extras - Desktop Only */}
          <div className="flex items-center justify-end gap-4 w-1/3 hidden md:flex">
            <Volume2 size={18} className="text-slate-400" />
            <div className="w-24 h-1 bg-white/10 rounded-full relative group">
              <input
                type="range"
                min={0}
                max={1}
                step={0.01}
                value={volume}
                onChange={handleVolumeChange}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
              />
              <div
                className="h-full bg-slate-400 group-hover:bg-brand-blue transition-colors rounded-full pointer-events-none"
                style={{ width: `${volume * 100}%` }}
              ></div>
            </div>
            <MoreHorizontal
              size={18}
              className="text-slate-400 hover:text-white cursor-pointer"
            />
          </div>
        </div>

        {/* Mobile Progress Bar (Bottom Edge) */}
        <div className="md:hidden absolute bottom-0 left-0 right-0 h-[2px] bg-white/10">
          <div
            className="h-full bg-brand-blue"
            style={{ width: `${(currentTime / duration) * 100}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default PlaylistPage;
