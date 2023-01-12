<template>
  <div class="preLoadVideo">
    <h1>preLoadVideo blob</h1>
    <video :src="src_" autoplay muted loop></video>
  </div>
</template>

<script>
export default {
  name:'preLoadVideo',
  data(){
    return{
      src_:''
    }
  },
  created(){
    this.preLoadVideo()
  },
  mounted(){
  },
  methods:{

    preLoadVideo(){
      const xhr = new XMLHttpRequest()
      xhr.open('GET',require('../assets/preloading.mp4'),true)
      xhr.responseType = 'blob'
      const that = this
      xhr.onload = function(res){
        if(this.status===200){
          let blob = this.response
          that.src_ = window.URL.createObjectURL(blob)
        }
      }
      xhr.send()
    }
  }
}
</script>

<style lang="less" scoped>
  .preLoadVideo{
    width: 100%;
    height: 100%;
    h1{
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50% -50%);
    }
    video{
      width: 100%;
      height: 100%;
    }
  }
</style>