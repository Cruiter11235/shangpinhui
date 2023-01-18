<template>
  <div>
    {{ this.$route.query.item }}
    {{ this.$route.params.item }}
    {{ item }}
  </div>
</template>

<script>
export default {
  props:['item'],
  mounted(){
    console.log(this.$route.query);
  }
}
</script>

<style>

</style>