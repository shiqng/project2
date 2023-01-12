<template>
      <div class="div">
        <div class="btn">
          <span>123456</span>
        </div>
      </div>
</template>
<script>
  export default {
    data(){
      return{
      }
    },
    components:{
    },
    mounted(){
      this.move()
    },
    methods: {
      move(){
        let btn = document.querySelector('.btn')
        btn.addEventListener('mousemove',(e)=>{
          let rect = e.target.getBoundingClientRect()
          console.log(e.clientX);
          let x = e.clientX - rect.left
          let y = e.clientY - rect.top
          btn.style.setProperty('--x',x +'px')
          btn.style.setProperty('--y',y +'px')
        })
      },
      jump(){
        this.$router.push('/about')
      },
      
    }
  }
</script>
<style lang="less" scoped>

.div{
  width: 100px;
  height: 50px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50% -50%);
  .btn{
    width: 100%;
    height: 100%;
    color: white;
    background-color: rgb(70, 70, 236);
    position: relative;
    cursor: pointer;
    overflow: hidden;
    span{
      width: 100%;
      height: 100%;
      display: inline-block;
      text-align: center;
      line-height: 50px;
      position: absolute;
      left: 0;
      top: 0;
      z-index: 11;
      user-select: none;
    }
    &::before{
      content: '';
      // border-radius: 50%;
      width: 0px;
      height: 0px;
      position: absolute;
      left: var(--x);
      top: var(--y);
      background-image: radial-gradient(rgba(219, 174, 219,1) 0%, rgba(149, 214, 222,0.1) 100%);
      // z-index: 10;
      transition: all 0.1s;
      translate: -50% -50%;
    }
    &:hover::before{
      width: 200px;
      height: 100px;
    }
  }

}

</style>
