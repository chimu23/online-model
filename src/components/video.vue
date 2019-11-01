 <template>
    <div class="test_two_box"  v-show="videoflag">
        <button @click="closeVideo" id="close" v-show="btnflag">X</button>
        <video
        id="myVideo"
        class="video-js"
       
        >
        <source
            src="https://meng.wuyou-zuida.com/20191028/20957_236e7a8e/index.m3u8"
            type="application/x-mpegURL"
        >
        </video>
    </div>
    </template>

    <script>
    /* eslint-disable */
    export default {
   
    data() {
        return {
            btnflag:true,
            videoflag:true,
            myPlayer:null,
            loadsrc:'',
          
        };
    },
    mounted() { 
        this.initVideo();
    },
    methods: {
        initVideo() {
        //初始化视频方法
        this.myPlayer = this.$video(myVideo, {
            //确定播放器是否具有用户可以与之交互的控件。没有控件，启动视频播放的唯一方法是使用autoplay属性或通过Player API。
            controls: "false",
            //自动播放属性,muted:静音播放
            autoplay: "muted",
            //建议浏览器是否应在<video>加载元素后立即开始下载视频数据。
            preload: "auto",
            //设置视频播放器的显示宽度（以像素为单位）
            width: "800px",
            //设置视频播放器的显示高度（以像素为单位）
            height: "400px"
        });
        },
        loadvideo(src){
            this.btnflag=true,
               this.videoflag=true
             this.myPlayer.src(src);
             this.myPlayer.play()
            
        },
        closeVideo(){
          this.btnflag=false;
          this.videoflag=false
          this.myPlayer.pause()

        }
    }
    };
    </script>

    <style scoped>
    #close{
        position: relative;
        top: 25px;
        left: 770px;
        z-index: 99;
    }
    </style>