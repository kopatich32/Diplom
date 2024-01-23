<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="styles/style.css">
    <title>Document</title>
</head>
<body>

<div class="wrapper">
<div class="player">

    <aside class="aside-left">
        <nav class="links">
            <ul>
                <li><span><img src="icons/house-chimney.svg" alt="main-page"></span>Home</li>
                <li><span><img src="icons/flame.svg" alt="tranding"></span>Trending</li>
                <li><span><img src="icons/following.svg" alt="following"></span>Following</li>
            </ul>
        </nav>

        <ul class="playlists">
            <li class="head-list">
                <div><img src="icons/list-music.svg" alt="list-music"></div>
                <span>Your playlist (<span>4</span>)</span>
                <div class="left-navigation">
                    <div><img src="icons/search.svg" alt="search"></div>
                    <div><img src="icons/plus.svg" alt="add-playlist"></div>
                </div>
            </li>
            <li class="playing">
                <div class="wrapper"><img src="icons/Rectangle2.png" alt="test"></div>
                <div>
                    <p>How to Start Podcast</p>
                    <p>31 tracks</p>
                </div>
                <div><img src="icons/pause.svg" alt="pause"></div>
            </li>
            <li>
                <div class="wrapper"><img src="icons/Rectangle1.png" alt="test"></div>
                <div>
                    <p>Late Night Horror</p>
                    <p>1 track</p>
                </div>
<!--                <div><img src="icons/pause.svg" alt="pause"></div>-->
            </li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>5</li>
            <li>5</li>
            <li>5</li>
            <li>5</li>
            <li>5</li>
            <li>5</li>
            <li>5</li>

        </ul>

    </aside>
    <div class="cnt">
        <header>
            <label>
                <img src="icons/search.svg" alt="search">
                <input type="text" placeholder="i want to listen...">
            </label>
            <div class="notification"><img src="icons/bell.svg" alt="notification"></div>
            <div class="profile"><img src="icons/vse-ochen-ploho.jpg" alt="user-photo "></div>
        </header>
        <main>
            <div class="podcast-img"><img src="icons/podcast.png" alt="podcast-picture"></div>
        </main>
    </div>
</div>
    <footer>
        <div class="track">
<div class="current-cover">
    <img src="covers/Deafheaven_-_Sunbather_2013.png" alt="Deafheaven">
</div>
    <div class="current-track">
        <p>Sunbather</p>
        <p>Deafheaven</p>
    </div>
        </div>
    <div class="track-control">
        <div><img src="icons/shuffle.svg" alt="shuffle"></div>
        <div><img src="icons/step-forward2.svg" alt="shuffle"></div>
        <div class="main-pause"><img src="icons/play.svg" alt="pause"></div>
        <div><img src="icons/step-forward1.svg" alt="next track"></div>
        <div><img src="icons/repeat.svg" alt="repeat"></div>
    </div>
        <div class="duration">
            <p class="gone-time">03:41</p>
            <div class="duration-track">
                <div class="left-track"></div>
            </div>
            <p class="left-time">12:11</p>
        </div>
        <div class="volume">
            <div><img src="icons/volume.svg" alt="volume"></div>
            <div class="volume-track">
                <div class="left-volume"></div>

            </div>
        </div>
    </footer>
</div>
<audio style="display:none;"  id="track" controls>
    <source  src="tracks/Deafheaven_-_The_Gnashing.mp3" type="audio/mpeg">
</audio>
<script>
    let playBtn = document.querySelector('.main-pause');
    let track = document.querySelector('#track');
    playBtn.addEventListener('click', ()=>{
        let srcSvg = playBtn.querySelector('img');
        let attr = srcSvg.getAttribute('src');
        if(attr == 'icons/play.svg'){
            srcSvg.setAttribute('src','icons/main-pause.svg');
            track.play();
        }else{

            track.pause()
            srcSvg.setAttribute('src','icons/play.svg');
        }

    })
</script>

<?php /*https://proweb63.ru/help/js/html5-audio-js
https://stackoverflow.com/questions/4126708/is-it-possible-to-style-html5-audio-tag/4126871#4126871
*/?>

</body>
</html>