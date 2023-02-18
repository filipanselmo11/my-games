import { Card } from '../Card/Card';
import './Cover.css';
import { GameInterface } from '../../gameInterface';

const game1: GameInterface = {
    title: 'Devil May Cry 5',
    description: 'Jogo de hack And slash/ação/aventura',
    image: 'https://images6.alphacoders.com/926/926723.jpg',
};

const game2: GameInterface = {
    title: 'Doom',
    description: 'Jogo de tiro em primeira pessoa',
    image: 'https://images3.alphacoders.com/686/686773.jpg',
};

const game3: GameInterface = {
    title: 'Tekken 7',
    description: 'Jogo de luta',
    image: 'https://images6.alphacoders.com/854/854838.jpg',
};

const game4: GameInterface = {
    title: 'Crash Bandicoot 4',
    description: 'Jogo de plataforma/aventura',
    image: 'https://images6.alphacoders.com/108/1083054.png',
};

const game5: GameInterface = {
    title: 'God Of War (2018)',
    description: 'Jogo de aventura/ação',
    image: 'https://images3.alphacoders.com/843/843016.jpg',
};

const game6: GameInterface = {
    title: 'Far Cry 6',
    description: 'Jogo de tiro em primeira pessoa',
    image: 'https://images3.alphacoders.com/108/1087064.jpg',
};

const game7: GameInterface = {
    title: 'Assassins Creed Unit',
    description: 'Jogo de mundo aberto/ação/aventura',
    image: 'https://images8.alphacoders.com/566/566159.jpg',
};

const game8: GameInterface = {
    title: 'King of Fighters 200 Unlimited Match',
    description: 'Jogo de luta',
    image: 'https://wallpapercave.com/wp/wp7423092.png',
};

const game9: GameInterface = {
    title: 'Call of Duty Ghosts',
    description: 'Jogo de tiro em primeira pessoa',
    image: 'https://c4.wallpaperflare.com/wallpaper/53/445/188/call-of-duty-ghosts-call-of-duty-video-games-wallpaper-preview.jpg',
};

const game10: GameInterface = {
    title: 'Dragon Ball Xenoverse 2',
    description: 'Jogo de luta',
    image: 'https://c4.wallpaperflare.com/wallpaper/581/560/853/dragon-ball-dragon-ball-z-goku-wallpaper-preview.jpg',
};

const game11: GameInterface = {
    title: 'Fifa 19',
    description: 'Jogo de futebol',
    image: 'https://c4.wallpaperflare.com/wallpaper/744/912/31/video-game-fifa-19-cristiano-ronaldo-wallpaper-preview.jpg',
};

const game12: GameInterface = {
    title: 'Donkey Kong Country 2',
    description: 'Jogo de plataforma/aventura',
    image: 'https://upload.wikimedia.org/wikipedia/pt/thumb/0/00/Donkey_Kong_Country_2_capa.png/280px-Donkey_Kong_Country_2_capa.png',
};





export function Cover() {
    return (
        <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
            <header className="mb-auto">
                <div>
                    <h3 className="float-md-start mb-10 title">Bem Vindo ao My Games</h3>
                </div>
            </header>
            <br></br>
            <br></br>
            <br></br>
            <div className="container text-center">
                <div className="row justify-content-md-center">
                    <div className="col-5">
                        <Card title={game1.title} description={game1.description} image={game1.image}/>
                    </div>
                    <div className="col-5">
                        <Card title={game2.title} description={game2.description} image={game2.image}/>
                    </div>
                    <p></p>
                    <div className="col-5">
                        <Card title={game3.title} description={game3.description} image={game3.image}/>
                    </div>
                    <div className="col-5">
                        <Card title={game4.title} description={game4.description} image={game4.image}/>
                    </div>
                    <p></p>
                    <div className="col-5">
                        <Card title={game5.title} description={game5.description} image={game5.image}/>
                    </div>
                    <div className="col-5">
                        <Card title={game6.title} description={game6.description} image={game6.image}/>
                    </div>
                    <p></p>
                    <div className="col-5">
                        <Card title={game7.title} description={game7.description} image={game7.image}/>
                    </div>
                    <div className="col-5">
                        <Card title={game8.title} description={game8.description} image={game8.image}/>
                    </div>
                    <p></p>
                    <div className="col-5">
                        <Card title={game9.title} description={game9.description} image={game9.image}/>
                    </div>
                    <div className="col-5">
                        <Card title={game10.title} description={game10.description} image={game10.image}/>
                    </div>
                    <p></p>
                    <div className="col-5">
                        <Card title={game11.title} description={game11.description} image={game11.image}/>
                    </div>
                    <div className="col-5">
                        <Card title={game12.title} description={game12.description} image={game12.image}/>
                    </div>
                    <p></p>
                </div>
            </div>
        </div>
    )
}