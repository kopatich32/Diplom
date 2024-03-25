<?php
	session_start();
	//require_once ('tracks_data.php')
	require_once('get_tracks.php');
//    include 'registrationForm.php';
	//require ('change_track.php');

	$ley = "123";
?>
<?
	$width = "<script>
document.addEventListener('DOMContentLoaded',()=>{
	return document.write(window.innerWidth)
})
</script>";
	$str = (int)$width;
?>
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="styles/style.css">
    <link rel="icon" href="icons/play.svg" type="image/svg+xml">
    <link rel="stylesheet" href="dragula-master/dist/dragula.css">
    <script src="dragula-master/dist/dragula.js"></script>
    <title>Мой плейлист</title>
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
            <div class="wrapper-aside">
                <div class="head-list">
                    <div><img src="icons/list-music.svg" alt="list-music"></div>
                    <span>Your playlist (<span>4</span>)</span>
                    <div class="left-navigation">
                        <div><img src="icons/search.svg" alt="search"></div>
                        <div><img src="icons/plus.svg" alt="add-playlist"></div>
                    </div>
                </div>
                <ul class="playlists">

                    <li class="playing">
                        <div class="wrapper"><img src="icons/Rectangle2.png" alt="test"></div>
                        <div>
                            <p>How to Start Podcast</p>
                            <p><span class="tracks-amount">31</span> tracks</p>
                        </div>
                        <div><img loading="lazy" src="icons/pause.svg" alt="pause"></div>
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
            </div>
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
                <div class="control-row">
                    <div class="share"><img src="icons/share.svg" alt="share"></div>
                    <div class="download"><img src="icons/download.svg" alt="share"></div>
                    <div class="filter">
                        <p>orded by<span><img src="icons/filter_arrow.svg" alt="arrow"></span></p>
                        <ul class="filter-list">
                            <li>Artist</li>
                            <li>Track</li>
                            <li>Last open</li>
                        </ul>
                    </div>
                </div>
                <div class="track-stat">
                    <div>#</div>
                    <div>Title</div>
                    <div class="track-duration"><img src="icons/clock-three.svg" alt="duration"></div>
                    <div class="listening"><img src="icons/listening.svg" alt="listening"></div>
                    <div></div>
                </div>
                <div class="track-area">
					<?php
						global $query;
						global $connect;
                        global $pagination;
						$cursor = 0;
						while ($track_data = $query->fetch_assoc()):
							$trackCover = $track_data['cover'] != "" ? $track_data['cover'] : '/icons/no_cover.svg';
							if ($cursor == 0) {
								$ley = $track_data;
								$cursor++;
							}
							?>
                            <div id="<?= $track_data['id'] ?>" class="current-track-main cursor-grab" data-track_id="<?= $track_data['id'] ?>">
                                <div class="track-number play_now"><?= $track_data['id'] ?></div>
                                <div class="track-main">
                                    <div class="main-cover">
                                        <img class="track-cover"  style="width: 45px; height: 45px" src="<?= $trackCover ?>" alt="cover">
                                    </div>
                                    <div class="current-track-cover">
                                        <div class="track-name-main play_now"><?= $track_data['track_name'] ?></div>
                                        <div class="artist-main"><?= $track_data['artist'] ?></div>
                                    </div>
                                </div>
                                <div class="duration-main play_now"><?= $track_data['duration'] ?></div>
                                <div class="listening-main play_now"><?= $track_data['listening'] ?></div>
                                <div class="is_play">
                                    <img loading="lazy" class="play_now_list" src="icons/play_list.svg" alt="">
                                </div>
                                <div class="track-detail">
                                    <img src="icons/track_info.svg" alt="">
                                </div>
                                <input class="track-link" type="text" value="<?= $track_data['link'] ?>" hidden>
                            </div>
						<?php endwhile ?>
                </div>
            </main>
        </div>
    </div>
    <footer>
		<?php
			//        echo print_r($data, true) .'<br>';
			
		?>
        <div class="track">
            <div class="current-cover">
                <img class="player-cover" src="covers/Infinite_Granite_2021.png" alt="Deafheaven">
            </div>
            <div class="current-track">
                <p class="track-player">
<!--                    --><?php //= $ley['track-name'] ?>
                </p>
                <p class="artist-player">
<!--                    --><?php //= $ley['artist'] ?>
                </p>
            </div>
        </div>
        <div class="track-control">
	       
            <div><img src="icons/shuffle.svg" alt="" title="перемешать"></div>
            <?php if($str > 500): ?>
	        <div class="previous-track switch-track">
                <img src="icons/step-forward2.svg" alt="" title="предыдущий трек">
            </div>
	        <?php else: ?>
	            <div class="previous-track switch-track" style="width: 30px; height: 30px">
		            <img src="icons/step-forward2.svg" style="width: 100%; height:100%" alt="" title="предыдущий трек">
	            </div>
	        <?php endif;?>
	        <?php if ($str > 500): ?>
            <div class="main-pause">
	            <img src="icons/play.svg" alt="" title="воспроизведение/пауза">
            </div>
	        <?php else:?>
	        <div class="main-pause" style="width: 70px; height: 70px">
		        <img src="icons/play.svg" style="width: 100%; height:100%" alt="" title="воспроизведение/пауза">
	        </div>
	        <?php endif; ?>
	        <?php if($str > 500): ?>
            <div class="next-track switch-track">
                <img src="icons/step-forward1.svg" alt="" title="следующий трек">
            </div>
	        <?php else: ?>
		        <div class="next-track switch-track" style="width: 30px; height: 30px">
			        <img src="icons/step-forward1.svg" style="width: 100%; height:100%" alt="" title="следующий трек">
		        </div>
	        <?php endif;?>
            <?php if($width > 500): ?>
	        <div class="restart"><img src="icons/repeat.svg" alt="" title="начать с начала"></div>
	        <?php endif;?>
        </div>
	    
		    <div class="back-to-wrapper" style="display: none" title="к списку треков">
			    <div class="back-to-list">
				    <img src="icons/back_to_list.svg" alt="">
			    </div>
		    </div>
        <div class="duration">
            <p class="gone-time"><span class="minutes">00</span>:<span class="seconds">00</span></p>
            <div class="duration-track">
                <div class="gone-track"></div>
                <div class="left-track"></div>
            </div>
            <p class="left-time"></p>
        </div>
	    
        <div class="volume">
            <div class="mute">
                <svg class="play" width="24" height="24" viewBox="0 0 24 24" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_8_3247)">
                        <path d="M20.807 4.29C20.7141 4.19709 20.6038 4.12339 20.4824 4.07311C20.361 4.02283 20.2309 3.99695 20.0995 3.99695C19.9681 3.99695 19.838 4.02283 19.7166 4.07311C19.5952 4.12339 19.4849 4.19709 19.392 4.29C19.2991 4.38291 19.2254 4.49322 19.1751 4.61461C19.1248 4.736 19.0989 4.86611 19.0989 4.9975C19.0989 5.1289 19.1248 5.25901 19.1751 5.3804C19.2254 5.50179 19.2991 5.61209 19.392 5.705C21.059 7.37591 21.9951 9.63977 21.9951 12C21.9951 14.3602 21.059 16.6241 19.392 18.295C19.2044 18.4826 19.0989 18.7371 19.0989 19.0025C19.0989 19.2679 19.2044 19.5224 19.392 19.71C19.5796 19.8976 19.8341 20.0031 20.0995 20.0031C20.3649 20.0031 20.6194 19.8976 20.807 19.71C22.8488 17.6636 23.9954 14.8908 23.9954 12C23.9954 9.1092 22.8488 6.33643 20.807 4.29Z"
                              fill="white"/>
                        <path d="M18.1 7.29098C18.0071 7.19774 17.8967 7.12372 17.7752 7.07313C17.6537 7.02254 17.5234 6.99639 17.3918 6.99616C17.2602 6.99592 17.1298 7.02162 17.0081 7.07178C16.8864 7.12193 16.7758 7.19557 16.6825 7.28848C16.5893 7.38139 16.5153 7.49176 16.4647 7.61327C16.4141 7.73479 16.3879 7.86509 16.3877 7.99671C16.3875 8.12834 16.4132 8.25872 16.4633 8.38042C16.5135 8.50212 16.5871 8.61274 16.68 8.70598C17.5528 9.58007 18.043 10.7648 18.043 12C18.043 13.2352 17.5528 14.4199 16.68 15.294C16.5871 15.3872 16.5135 15.4978 16.4633 15.6195C16.4132 15.7412 16.3875 15.8716 16.3877 16.0032C16.3879 16.1349 16.4141 16.2652 16.4647 16.3867C16.5153 16.5082 16.5893 16.6186 16.6825 16.7115C16.8708 16.8991 17.126 17.0043 17.3918 17.0038C17.5234 17.0036 17.6537 16.9774 17.7752 16.9268C17.8967 16.8762 18.0071 16.8022 18.1 16.709C19.3473 15.4592 20.0479 13.7657 20.0479 12C20.0479 10.2343 19.3473 8.54072 18.1 7.29098Z"
                              fill="white"/>
                        <path d="M13.82 0.199989C10.7793 0.771257 8.07468 2.48984 6.266 4.99999H5C3.67457 5.0021 2.40403 5.52957 1.4668 6.46679C0.529579 7.40402 0.00211562 8.67456 0 9.99999L0 14C0.00211562 15.3254 0.529579 16.596 1.4668 17.5332C2.40403 18.4704 3.67457 18.9979 5 19H6.266C8.07504 21.5098 10.7795 23.2282 13.82 23.8C13.8796 23.8116 13.9403 23.8173 14.001 23.817C14.2662 23.817 14.5206 23.7116 14.7081 23.5241C14.8956 23.3366 15.001 23.0822 15.001 22.817V1.18599C15.0014 1.03912 14.9694 0.893979 14.9073 0.760871C14.8453 0.627764 14.7546 0.509962 14.6419 0.415837C14.5292 0.321712 14.3971 0.253576 14.255 0.21627C14.113 0.178965 13.9644 0.173406 13.82 0.199989ZM13 21.535C10.7944 20.8319 8.89788 19.3912 7.629 17.455C7.53834 17.3155 7.41432 17.2009 7.26817 17.1214C7.12201 17.042 6.95835 17.0002 6.792 17H5C4.20435 17 3.44129 16.6839 2.87868 16.1213C2.31607 15.5587 2 14.7956 2 14V9.99999C2 9.20434 2.31607 8.44128 2.87868 7.87867C3.44129 7.31606 4.20435 6.99999 5 6.99999H6.8C6.96617 6.99997 7.12971 6.95854 7.27585 6.87945C7.42198 6.80035 7.54611 6.68609 7.637 6.54699C8.90329 4.61123 10.7969 3.16993 13 2.46499V21.535Z"
                              fill="white"/>
                        <line class="mute-line" x1="29.9914" y1="29.9914" x2="1.29292" y2="2.70714" stroke="#EC4C4C"
                              stroke-width="3" style="display: none"/>
                        <line class="mute-line" x1="1.29289" y1="29.8614" x2="29.29292" y2="1.5771" stroke="#EC4C4C"
                              stroke-width="3" style="display: none"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_8_3247">
                            <rect width="24" height="24" fill="white"/>
                        </clipPath>
                    </defs>
                </svg>
            </div>
            <div class="volume-wrapper">
                <div class="volume-track"></div>
                <div class="left-volume"></div>
            </div>
        </div>
    </footer>
</div>

<audio style="display: none" class="audioTag" id="" src="tracks/Deafheaven_-_The_Gnashing.mp3" controls></audio>
<script type="module" src="duration.js"></script>
<script type="module" src="filter.js"></script>
<script type="module" src="choose_tracks.js"></script>
<script src="dragula.js"></script>
<script src="mobile_script.js"></script>
<!--<script src="registration_form.js"></script>-->

<?php /*https://proweb63.ru/help/js/html5-audio-js
https://stackoverflow.com/questions/4126708/is-it-possible-to-style-html5-audio-tag/4126871#4126871
https://packagist.org/packages/wapmorgan/mp3info
 */ ?>


<!--<h1>https://yandex.ru/dev/audio/jsapi/doc/dg/concepts/load.html</h1>-->
<?/*
beget
Логин: r93987lp
Пароль: dKojXS3cuA9P

FTP
host r93987lp.beget.tech
login r93987lp_r93987lp
password GzKBud7&

https://github.com/kopatich32/Diplom
*/?>
</body>
</html