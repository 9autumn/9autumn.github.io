window.onload = function () {
    var btnPre = document.getElementById('btpre');
    var btnNext = document.getElementById('next');
    var list = document.getElementById('list');
    var aud = document.getElementById('aud');
    var li = list.getElementsByTagName('li');
    var mymusic = ['./menu/海阔天空.mp3', './menu/不再犹豫.mp3', './menu/大地.mp3', './menu/光辉岁月.mp3', './menu/冷雨夜.mp3', './menu/喜欢你.mp3', './menu/灰色轨迹.mp3'];//把地址存在一个数组里
    //点击播放
    for (var i = 0; i < li.length; i++) {
      li[i].onclick = function () {
        for (var i = 0; i < li.length; i++) {
          if (this == li[i]) {
            li[i].className = 'play';
            aud.src = mymusic[i];
            aud.play();
          } else {
            li[i].className = '';
  
          }
        }
      }
    }
    //获取正在播放的音乐
    function getPlay() {
      for (var r = 0; r < li.length; r++) {
        if (li[r].getAttribute('class') == 'play') {
          return r;
  
        }
      }
    }
    //循环播放
    aud.onended = function () {
      var a = getPlay();
      a++;
      if (a > li.length - 1) {
        a = 0;
      }
      for (var j = 0; j < li.length; j++) {
        li[j].className = '';
      }
      aud.src = mymusic[a];
      aud.play();
      li[a].className = 'play';
    }
    //下一首
    btnNext.onclick = function () {
      var musicIndex = getPlay();
      if (musicIndex == li.length - 1) {//判断是否为最后一首，然后循环播放
        musicIndex = -1;
      }
      aud.src = mymusic[musicIndex + 1];//切换到下一首
      aud.play();
      for (var j = 0; j < li.length; ++j) {
        li[j].className = '';
      }
      li[musicIndex + 1].className = 'play';
    }
    //上一首
    btnPre.onclick = function () {
      var musicIndex = getPlay();
      if (musicIndex == 0) {//判断是否为第一首，然后循环播放
        musicIndex = li.length;
      }
      aud.src = mymusic[musicIndex - 1];//切换到上一首
      aud.play();
      for (var j = 0; j < li.length; ++j) {
        li[j].className = '';
      }
      li[musicIndex - 1].className = 'play';
    }
  }
  