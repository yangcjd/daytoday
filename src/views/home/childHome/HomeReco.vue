<template>
  <div class="recommend">
    <div v-for="item in recommend" class="recommendItem">
      <a :href="item.link">
        <img :src="item.image" />
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HomeReco',
    props: {
      recommend: {
        type: Array,
        default(){
          return []
        }
      }
    }
  }
</script>

<style>
  .recommend{
    display: flex;
    width: 100%;
    text-align: center;
    font-size: 12px;
    padding: 15px 0 15px;
    border-bottom: 5px solid #eee;
  }
  .recommendItem img{
    width: 65px;
    height: 65px;
    margin-bottom: 10px;
  }
  .recommendItem{
    flex: 1;
  }
</style>
