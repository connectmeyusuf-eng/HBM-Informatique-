import React from 'react';
import { useTranslation } from 'react-i18next';
import { Play } from 'lucide-react';

const VideoShowcase = () => {
  const { t } = useTranslation();

  const videos = [
    {
      id: 1,
      title: 'Network Infrastructure',
      url: 'https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-a-server-room-4441-large.mp4',
      poster: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
      description: 'Professional server setup and network management solutions.'
    },
    {
      id: 2,
      title: 'CCTV & Monitoring',
      url: 'https://assets.mixkit.co/videos/preview/mixkit-security-camera-moving-in-a-parking-lot-4442-large.mp4',
      poster: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=800&q=80',
      description: 'Advanced security systems and 24/7 monitoring services.'
    }
  ];

  return (
    <section className="py-24 bg-slate-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Practical Video Showcase</h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            See our IT solutions in action. We provide high-end technology services for businesses and individuals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {videos.map((video) => (
            <div key={video.id} className="relative group">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 aspect-video bg-slate-800">
                <video 
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700"
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  poster={video.poster}
                >
                  <source src={video.url} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
                
                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center shadow-lg shadow-blue-600/40 group-hover:scale-110 transition-transform duration-300">
                      <Play className="h-6 w-6 text-white fill-current" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">{video.title}</h3>
                  </div>
                  <p className="text-slate-300 max-w-md transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    {video.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoShowcase;
