<template>
  <div id="app">
   <!-- <div class="screen-wrapper">
        <div class="screen" id="screen">
            <div class="demo-root">
                <header>头部</header>
                <main>
                    <div class="demo-left"></div>
                    <div class="demo-center"></div>
                    <div class="demo-right"></div>
                    <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
                    <label for="jack">Jack</label>
                    <input type="checkbox" id="john" value="John" v-model="checkedNames">
                    <label for="john">John</label>
                    <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
                    <label for="mike">Mike</label>
                    <p>Checked names: <pre>{{ checkedNames }}</pre></p>

                </main>
                <footer>底部</footer>
            </div>
        </div>
        <footer class="large-footer"></footer>
        <HelloWord/>
        <div class="div" @click="jump">跳转</div>
        <input class="div" v-focus>
      
    </div> -->
     <PreLoadVideo/>
  </div>
</template>
<script>
import HelloWord from './components/HelloWorld.vue'
import PreLoadVideo from './views/preLoadVideo.vue'
  export default {
    data(){
      return{
        checkedNames:['Jack'],
        a:['zhang','li']
      }
    },
    components:{
      HelloWord,
      PreLoadVideo
    },
    mounted(){
        //初始化自适应  ----在刚显示的时候就开始适配一次
        // this.handleScreenAuto();
        //绑定自适应函数   ---防止浏览器栏变化后不再适配
        // window.onresize = () => this.handleScreenAuto();
    },
    deleted(){
        window.onresize = null;
    },
    methods: {
      jump(){
        this.$router.push('/about')
      },
        //数据大屏自适应函数
        handleScreenAuto(){
            const designDraftWidth = 1920;//设计稿的宽度
            const designDraftHeight = 960;//设计稿的高度
            //根据屏幕的变化适配的比例
            console.log(document.documentElement.clientHeight);
            const scale = document.documentElement.clientWidth / document.documentElement.clientHeight < designDraftWidth / designDraftHeight ?
                (document.documentElement.clientWidth / designDraftWidth) :
                (document.documentElement.clientHeight / designDraftHeight);
            //缩放比例
            document.querySelector('#screen').style.transform = `scale(${scale})`;
        },
    }
  }
</script>
<style lang="less">
*{
  padding: 0;
  margin: 0;
}
body{
  width: 100vw;
  height: 100vh;
  
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  // background-color: black;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: hidden;
  .screen-wrapper {
    height: 100%;
    width: 100%;
    .screen {
        display: inline-block;
        width: 1920px;
        height: 960px;
        transform-origin: 0 0;
        position: absolute;
        left: 0;
        .demo-root{
            header{
                width: 1920px;
                height: 200px;
                background: rgba(53, 150, 206, 0.3);
                font-size: 40px;
                text-align: center;
                line-height: 200px;
            }
            main{
                display: flex;
                height: 660px;
                div{
                    width: 640px;
                    height: 100%;
                }
                .demo-left{
                    background: rgba(206, 52, 154, 0.3);
                }
                .demo-center{
                    background: rgba(13, 30, 179, 0.3);
                }
                .demo-right{
                    background: rgba(64, 163, 6, 0.849);
                }
            }
            footer{
                width: 100%;
                height: 100px;
                font-size: 40px;
                text-align: center;
                line-height: 100px;
                background: rgba(19, 211, 115, 0.3);
            }
        }
    }
}
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
