"use client";

import { useState, useEffect } from "react";
import style from "@/styles/videoShowcase.module.css";
import Image from "next/image";
import Script from "next/script";

const VideoShowcase = () => {
  // Video showcase data with Vimeo IDs
  const videoProjects = [
    {
      id: "OMFLOW",
      title: "OM - SA3A",
      client: "OM",
      director: "Mohamed Guarouani",
      thumbnail: "/images/bg/sa3a.jpg",
      vimeoId: "819660205",
      category: "Music Video"
    },
    {
      id: "wardd-music-promo",
      title: "Gitex Best Of",
      client: "Wardd Music",
      director: "WARDD STUDIOS",
      thumbnail: "/images/bg/gitex.jpg",
      vimeoId: "1086572392",
      category: "Promotional"
    },
    // {
    //   id: "documentary",
    //   title: "Between here and there",
    //   client: "doha",
    //   director: "WARDD STUDIOS",
    //   thumbnail: "https://res.cloudinary.com/decjm9mmr/image/upload/q_30,f_auto/post_tleq2p.jpg",
    //   vimeoId: "1086572392",
    //   category: "Documentary"
    // },
    {
      id: "Short Film ",
      title: "Love and Choice ",
      client: "someone",
      director: "Mohamed Guarouani",
      thumbnail: "https://i.vimeocdn.com/video/1767747598-f855930c20d2468902665796fa4360ce908cd5dd4384dbeadf1b367f2bea3678-d_1920x1080?region=us",
      vimeoId: "812091616",
      category: "Short Film"
    },
    {
      id: "Cuftan/jelabat",
      title: "Eljami couture",
      client: "Eljami couture",
      director: "WARDD STUDIOS",
      thumbnail: "https://res.cloudinary.com/decjm9mmr/image/upload/q_80/banner_ucstdf.jpg",
      cloudinaryId: "Header_Video_2_elhpdi",
      cloudName: "dylpck2et",
      videoType: "cloudinary",
      category: "Commercial"
    },
    {
      id: "AD jihan",
      title: "Maybelline's lipstick gloss, Jihane Baya",
      client: "Jihane baya",
      director: "Mohamed Guarouani",
      thumbnail: "https://i.vimeocdn.com/video/1975238432-e36e6d4ec8b48cfd7c4c560cb7811432cd7a9ce2c09382a4d6425be577c9e2b7-d_1920x1080?region=us",
      vimeoId: "1053135698",
      category: "Promotional"
    },
    {
      id: "Kelma",
      title: "Kelma Rachid Goudi",
      client: "Rchid Goudi",
      director: "Mohamed Guarouani",
      thumbnail: "https://i.vimeocdn.com/video/1974994049-53d29a452be3c49e53fdfc0280a471d537cfd70fa366c8815a9814a39ef2038b-d_1920x1080?region=us",
      vimeoId: "1050359128",
      category: "Music Video"
    }
  ];

  const [selectedVideo, setSelectedVideo] = useState(null);

  const openVideoModal = (video) => {
    setSelectedVideo(video);
    if (typeof document !== 'undefined') {
      document.body.style.overflow = "hidden";
    }
  };

  const closeVideoModal = (e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    console.log("Closing modal");
    setSelectedVideo(null);
    if (typeof document !== 'undefined') {
      document.body.style.overflow = "auto";
    }
  };

  // Handle escape key to close modal
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && selectedVideo) {
        closeVideoModal();
      }
    };

    if (selectedVideo) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [selectedVideo]);

  return (
    <>
      <Script src="https://player.vimeo.com/api/player.js" strategy="afterInteractive" />
      
      <section className={style.content}>
        <div className={style.container}>
          <div className={style.bold_text}>
            <div className={style.text}>
              <h1>Production.</h1>
            </div>
          </div>

          <div className={style.cross_line}></div>

          <div className={style.video_grid}>
            {videoProjects.map((video, index) => (
              <div 
                key={video.id} 
                className={style.video_card} 
                onClick={() => openVideoModal(video)}
              >
                <div className={style.inner_container}>
                  <div className={style.thumbnail}>
                    <Image
                      src={video.thumbnail}
                      alt={video.title}
                      width={1200}
                      height={675}
                      loading="lazy"
                    />
                    <div className={style.play_button}>
                      <svg viewBox="0 0 24 24" fill="white" width="48" height="48">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                  <div className={style.video_info}>
                    <h3>{video.title.toUpperCase()}</h3>
                    <p>// {video.director}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Video Modal with better responsive design */}
          {selectedVideo && (
            <div 
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                backgroundColor: 'rgba(0,0,0,0.95)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 9993098765434567898,
                padding: '20px',
                overflow: 'hidden'
              }}
              onClick={() => closeVideoModal()}
            >
              <div 
                onClick={(e) => e.stopPropagation()}
                style={{ 
                  width: '90%', 
                  maxWidth: '1200px',
                  backgroundColor: '#111',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  position: 'relative'
                }}
              >
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    closeVideoModal();
                  }}
                  type="button"
                  style={{
                    position: 'absolute',
                    top: '20px',
                    right: '20px',
                    backgroundColor: 'rgba(0,0,0,0.7)',
                    border: '2px solid rgba(255,255,255,0.4)',
                    color: 'white',
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '28px',
                    cursor: 'pointer',
                    zIndex: 9999
                  }}
                >
                  ×
                </button>
                
                {/* Container for the video with padding-based aspect ratio */}
                <div style={{ 
                  width: '100%', 
                  height: '0',
                  paddingBottom: '56.25%', 
                  position: 'relative',
                  backgroundColor: '#000'
                }}>
                  {selectedVideo.videoType === 'cloudinary' ? (
                    <iframe 
                      src={`https://player.cloudinary.com/embed/?cloud_name=${selectedVideo.cloudName}&public_id=${selectedVideo.cloudinaryId}&profile=cld-default`}
                      frameBorder="0" 
                      allow="autoplay; fullscreen; encrypted-media; picture-in-picture" 
                      allowFullScreen
                      style={{ 
                        position: 'absolute', 
                        top: 0, 
                        left: 0, 
                        width: '100%', 
                        height: '100%' 
                      }}
                      title={selectedVideo.title}
                    ></iframe>
                  ) : (
                    <iframe 
                      src={`https://player.vimeo.com/video/${selectedVideo.vimeoId}?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&autoplay=1`}
                      frameBorder="0" 
                      allow="autoplay; fullscreen; picture-in-picture" 
                      style={{ 
                        position: 'absolute', 
                        top: 0, 
                        left: 0, 
                        width: '100%', 
                        height: '100%' 
                      }}
                      title={selectedVideo.title}
                    ></iframe>
                  )}
                </div>
                
                {/* Video info below the player */}
                <div style={{ 
                  padding: '20px 30px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                  <h2 style={{ 
                    margin: 0, 
                    fontSize: '24px',
                    textTransform: 'uppercase',
                    fontWeight: 500
                  }}>{selectedVideo.title}</h2>
                  <p style={{ 
                    margin: 0,
                    color: 'rgba(255,255,255,0.7)'
                  }}>// {selectedVideo.director}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default VideoShowcase;