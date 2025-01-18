import React, { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import ReactHowler from 'react-howler';
import 'swiper/css';
import 'swiper/css/autoplay';
import './App.css';

// Importa componentes e ícones do Material-UI
import { IconButton, Slider } from '@mui/material';
import { PlayArrow, Pause, SkipNext, SkipPrevious, VolumeUp } from '@mui/icons-material';

function App() {
  const [playing, setPlaying] = useState(false); // Inicialmente pausado
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1); // Volume padrão (100%)
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0); // Índice da música atual
  const audioRef = useRef(null); // Referência ao ReactHowler
  const intervalRef = useRef(null); // Intervalo para progresso dinâmico

  const images = [
    '/img/IMG_1138.jpg',
    '/img/IMG_3963.jpg',
    '/img/IMG_4148.jpg',
    '/img/IMG_4336.jpg',
    '/img/IMG_4387.jpg',
    '/img/IMG_6499.jpg',
    '/img/IMG_6974.jpg',
    '/img/IMG_8002.jpg',
    '/img/IMG_8049.jpg',
    '/img/IMG_9004.jpg',
    '/img/IMG_9729.jpg',
    '/img/IMG_8269.jpg',
    '/img/IMG_8273.jpg',
    '/img/IMG_8438.jpg',
    '/img/IMG_8609.jpg',
    '/img/IMG_9667.jpg',
    '/img/IMG_9738.jpg',
  ];

  const tracks = [
    { src: '/audio/Christina Perri - A Thousand Years.mp3', 
      title: ' A Thousand Years', 
      artist: 'Christina Perri',
      albumImg: '/img/album_img_2.jpg', 
    },
    { src: '/audio/New West - Those Eyes (Lyrics).mp3', 
      title: 'Those Eyes', 
      artist: 'New West',
      albumImg: '/img/album_img.jpg',
    },
  ];

  // Atualiza o progresso da música periodicamente
  useEffect(() => {
    if (playing && audioRef.current) {
      intervalRef.current = setInterval(() => {
        const currentTime = audioRef.current.seek() || 0;
        const totalDuration = audioRef.current.duration() || 0;
        setProgress((currentTime / totalDuration) * 100);
        setDuration(totalDuration);
      }, 500);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [playing]);

  // Atualiza o progresso ao mudar de música
  useEffect(() => {
    setProgress(0);
    if (audioRef.current) {
      audioRef.current.seek(0);
    }
  }, [currentTrackIndex]);

  const handleSeek = (value) => {
    if (audioRef.current) {
      audioRef.current.seek((value / 100) * duration);
      setProgress(value);
    }
  };

  const handlePlayPause = () => {
    if (playing) {
      setPlaying(false);
    } else {
      const audioContext = ReactHowler.ctx;
      if (audioContext && audioContext.state === 'suspended') {
        audioContext.resume();
      }
      setPlaying(true);
    }
  };

  const handleNextTrack = () => {
    setCurrentTrackIndex((prevIndex) => (prevIndex + 1) % tracks.length);
  };

  const handlePreviousTrack = () => {
    setCurrentTrackIndex((prevIndex) =>
      prevIndex === 0 ? tracks.length - 1 : prevIndex - 1
    );
  };

  const handleTrackEnd = () => {
    // Avança automaticamente para a próxima música
    handleNextTrack();
  };

  return (
    <div className="app-container">
      <main className="main-content">
        <div className="content">
          <div className="text-container">
            <p>
            "Carrego seu coração comigo
            <br></br>
            Eu o carrego no meu coração
            <br></br>
            Nunca estou sem ele
            <br></br>
            Onde quer que vá, você vai comigo
            <br></br>
            E o que quer eu que faça sozinho
            <br></br>
            Eu faço por você
            <br></br>
            Não temo meu destino
            <br></br>
            Você é meu destino, minha doçura
            <br></br>
            Eu não quero o mundo por mais belo que seja
            <br></br>
            Porque você é meu mundo, minha verdade.
            <br></br>
            <br></br>
            Eis o grande segredo que ninguém sabe.
            <br></br>
            Aqui está a raiz da raiz
            <br></br>
            O broto do broto e o céu do céu
            <br></br>
            De uma árvore chamada vida
            <br></br>
            Que cresce mais que a alma pode esperar
            <br></br>
            ou a mente pode esconder
            <br></br>
            E esse é o prodígio que mantém
            as estrelas à distância.
            <br></br>
            <br></br>
            Eu carrego seu coração comigo
            <br></br>
            Eu o carrego no meu coração."
            <br></br>
            <br></br>
            <br></br>
            Deixa eu contar uma coisa primeiro:
            <br></br>
            Essas fotos nossas são muito boas amor, sério!!
            <br></br>
            Fiquei bem emocionando escolhendo-as, 
            <br></br>
            cada uma mais linda que a outra.
            <br></br> 
            Consegui me senti novamente nesses momentos
            <br></br>
            e isso fez valer o meu dia.
            <br></br> 
            Só de lembra o quanto sou feliz ao seu lado e 
            <br></br>
            como temos tantos momentos incríveis, fico 
            <br></br>
            ansioso para saber como será nosso futuro, 
            <br></br>
            e tranquilo... 
            <br></br>
            pois vou construir uma família 
            <br></br>
            com uma companheira perfeita...
            <br></br>
            Eu não podia desejar algo melhor,
            <br></br>
            acho que nunca imaginei ter tamanha sorte.
            <br></br>
            O que seria de um desenvolvedor 
            <br></br>
            se ele não fizesse nada para a sua companheira né? Kkk
            <br></br>
            Meu amor, só queria agradecer novamente 
            <br></br>
            por esses 18 meses perfeitos.
            <br></br>
            Quero que você sempre se sinta muito 
            <br></br>
            amada e vou fazer o melhor para que isso aconteça.
            <br></br>
            Seu sorriso é minha moeda mais valioso
            <br></br>
            e sempre vou lutar por ele.
            <br></br>
            Te amo muito meu amor
            <br></br>
            e obrigado por fazer desse cara, 
            <br></br>
            o homem mais feliz do mundo.
            </p>
          </div>
          <div className="carousel-container">
            <Swiper
              spaceBetween={10}
              slidesPerView={1}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
            >
              {images.map((src, index) => (
                <SwiperSlide key={index}>
                  <img src={src} alt={`Foto ${index + 1}`} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </main>
      <footer className="footer">
        <ReactHowler
          src={tracks[currentTrackIndex].src}
          playing={playing}
          loop={false}
          volume={volume}
          ref={audioRef}
          onEnd={handleTrackEnd} // Chama handleTrackEnd ao final da música
        />
      <div className="footer-section info">
          <img 
            src={tracks[currentTrackIndex].albumImg} 
            alt="Álbum" 
            style={{ width: '60px', height: '60px', borderRadius: '8px' }} 
          />
          <div>
            <p className="title">{tracks[currentTrackIndex].title}</p>
            <p className="subtitle">{tracks[currentTrackIndex].artist}</p>
          </div>
        </div>
        <div className="footer-section controls">
          <div className="buttons">
            <IconButton onClick={handlePreviousTrack}>
              <SkipPrevious fontSize="large" />
            </IconButton>
            <IconButton onClick={handlePlayPause}>
              {playing ? <Pause fontSize="large" /> : <PlayArrow fontSize="large" />}
            </IconButton>
            <IconButton onClick={handleNextTrack}>
              <SkipNext fontSize="large" />
            </IconButton>
          </div>
          <Slider
            value={progress}
            onChange={(e, value) => handleSeek(value)}
            aria-labelledby="progress-slider"
            sx={{ width: 300, color: '#ffffff' }}
          />
        </div>
        <div className="footer-section volume">
          <VolumeUp sx={{ color: '#ffffff', marginRight: 1 }} />
          <Slider
            value={volume}
            onChange={(e, value) => setVolume(value)}
            step={0.01}
            min={0}
            max={1}
            aria-labelledby="volume-slider"
            sx={{ width: 150, color: '#ffffff' }}
          />
        </div>
      </footer>
    </div>
  );
}

export default App;
