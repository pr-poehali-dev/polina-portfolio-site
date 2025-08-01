import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  // Gallery photos with generated images
  const photos = [
    { id: 1, src: '/img/ca7449e1-98ef-4e54-b9d6-b22201038613.jpg', alt: 'Полина - профессиональная фотосессия' },
    { id: 2, src: '/img/8760e66e-5018-4458-8e7d-09c011c66f46.jpg', alt: 'Полина на сцене' },
    { id: 3, src: '/img/cdaa3592-ba7d-46c5-8aab-9d7f7d13538d.jpg', alt: 'Полина в студии' },
    ...Array.from({ length: 27 }, (_, i) => ({
      id: i + 4,
      src: `https://images.unsplash.com/photo-${1493225457124 + i}?w=400&h=400&fit=crop&crop=face`,
      alt: `Полина ${i + 4}`
    }))
  ];

  const videos = [
    {
      id: 1,
      title: 'Последний сингл',
      thumbnail: '/img/8760e66e-5018-4458-8e7d-09c011c66f46.jpg',
      videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
    },
    {
      id: 2,
      title: 'Живой концерт',
      thumbnail: '/img/cdaa3592-ba7d-46c5-8aab-9d7f7d13538d.jpg',
      videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
    },
    {
      id: 3,
      title: 'Акустическая версия',
      thumbnail: '/img/ca7449e1-98ef-4e54-b9d6-b22201038613.jpg',
      videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-teal-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-pink-100">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="font-display text-2xl font-bold bg-gradient-to-r from-pink-500 to-teal-400 bg-clip-text text-transparent">
              POLINA
            </h1>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-pink-500 transition-colors">Главная</a>
              <a href="#about" className="text-gray-700 hover:text-pink-500 transition-colors">Биография</a>
              <a href="#videos" className="text-gray-700 hover:text-pink-500 transition-colors">Видео</a>
              <a href="#gallery" className="text-gray-700 hover:text-pink-500 transition-colors">Галерея</a>
              <a href="#contact" className="text-gray-700 hover:text-pink-500 transition-colors">Контакты</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-400/20 to-teal-400/20" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 text-center lg:text-left">
              <h2 className="font-display text-6xl lg:text-8xl font-bold text-gray-900 mb-6">
                ПОЛИНА
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Певица, автор песен и исполнитель.<br />
                Создаю музыку, которая трогает сердца.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" className="bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700">
                  <Icon name="Play" className="mr-2" size={20} />
                  Слушать музыку
                </Button>
                <Button variant="outline" size="lg" className="border-teal-400 text-teal-600 hover:bg-teal-50">
                  <Icon name="Mail" className="mr-2" size={20} />
                  Связаться
                </Button>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-pink-400 to-teal-400 rounded-full blur-lg opacity-30" />
                <img
                  src="/img/ca7449e1-98ef-4e54-b9d6-b22201038613.jpg"
                  alt="Полина"
                  className="relative w-80 h-80 object-cover rounded-full border-4 border-white shadow-2xl mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="font-display text-4xl font-bold text-gray-900 mb-8">Биография</h3>
            <div className="text-lg text-gray-600 leading-relaxed space-y-6">
              <p>
                Полина начала свой музыкальный путь в раннем возрасте, изучая классическое пение 
                в музыкальной школе. Её голос обладает удивительной эмоциональностью и техникой, 
                которые покоряют слушателей с первых нот.
              </p>
              <p>
                За последние годы она выпустила несколько успешных синглов, которые получили 
                признание как критиков, так и поклонников. Её музыка сочетает в себе современные 
                тренды и классические мотивы, создавая уникальное звучание.
              </p>
              <p>
                Сегодня Полина активно гастролирует, записывает новую музыку и работает над 
                своим дебютным альбомом, который обещает стать настоящим событием в музыкальном мире.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Videos Section */}
      <section id="videos" className="py-24 bg-gradient-to-r from-gray-50 to-pink-50">
        <div className="container mx-auto px-6">
          <h3 className="font-display text-4xl font-bold text-center text-gray-900 mb-12">Видео</h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {videos.map((video) => (
              <Dialog key={video.id}>
                <DialogTrigger asChild>
                  <Card className="group cursor-pointer hover:shadow-xl transition-all duration-300 overflow-hidden">
                    <div className="relative">
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                        <div className="bg-white/90 rounded-full p-4 group-hover:scale-110 transition-transform">
                          <Icon name="Play" size={24} className="text-pink-500" />
                        </div>
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-gray-900">{video.title}</h4>
                    </CardContent>
                  </Card>
                </DialogTrigger>
                <DialogContent className="max-w-4xl">
                  <div className="aspect-video">
                    <iframe
                      src={`https://www.youtube.com/embed/dQw4w9WgXcQ`}
                      className="w-full h-full rounded-lg"
                      allowFullScreen
                    />
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <h3 className="font-display text-4xl font-bold text-center text-gray-900 mb-12">Фотогалерея</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-7xl mx-auto">
            {photos.map((photo) => (
              <Dialog key={photo.id}>
                <DialogTrigger asChild>
                  <div className="group cursor-pointer overflow-hidden rounded-lg">
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-4xl">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-auto rounded-lg"
                  />
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gradient-to-r from-pink-500 to-teal-400">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="font-display text-4xl font-bold text-white mb-8">Контакты</h3>
            <p className="text-xl text-white/90 mb-12">
              Готова к сотрудничеству и новым проектам
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-pink-600 hover:bg-gray-100">
                <Icon name="Mail" className="mr-2" size={20} />
                polina@music.com
              </Button>
              <Button size="lg" variant="secondary" className="bg-white text-pink-600 hover:bg-gray-100">
                <Icon name="Phone" className="mr-2" size={20} />
                +7 (999) 123-45-67
              </Button>
              <Button size="lg" variant="secondary" className="bg-white text-pink-600 hover:bg-gray-100">
                <Icon name="Instagram" className="mr-2" size={20} />
                @polina_singer
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h4 className="font-display text-2xl font-bold bg-gradient-to-r from-pink-400 to-teal-400 bg-clip-text text-transparent mb-4">
              POLINA
            </h4>
            <p className="text-gray-400">
              © 2024 Полина. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;