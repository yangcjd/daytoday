<template>
	<div id="home">
     <nav-bar class="home-nav">
       <div slot="center">购物街</div>
     </nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <home-Reco :recommend="recommend"></home-Reco>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar.vue'
  import HomeSwiper from './childHome/HomeSwiper.vue'
  import HomeReco from './childHome/HomeReco.vue'
  import { getHomeMultidata } from 'network/home/home.js'

  export default {
    name: 'Home',
    components: {
      NavBar,
      HomeSwiper,
      HomeReco
    },
    data() {
      return {
        banners: [],
        recommend: []
      }
    },
    created() {
      getHomeMultidata().then((res)=>{
        console.log(res)
        this.banners = res.data.banner.list;
        this.recommend = res.data.recommend.list;
      })
    }
  }
</script>

<style>
  .home-nav{
    background-color: var(--color-tint);
    color: #fff;
  }
</style>
