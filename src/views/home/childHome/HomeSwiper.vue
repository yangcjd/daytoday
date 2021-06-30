<template>
  <div class="Mine-categories-swipe">
    <van-swipe class="my-swipe"  :autoplay="3000">
      <van-swipe-item v-for="(item, index) in banners" :key="index">
        <img :src="item.image" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
  export default {
    name: 'HomeSwiper',
    props: {
      banners: {
        type: Array,
        default(){
          return []
        }
      }
    },
  }
</script>

<style>
  .my-swipe .van-swipe-item {
      width: 100%;
      /* height: 100px; */
      color: #fff;
      font-size: 20px;
      text-align: center;
      background-color: #fff;
    }
   .Mine-categories-swipe img{
       display: inline-block;
       width: 100%;
       /* height: 100px; */
   }
</style>
