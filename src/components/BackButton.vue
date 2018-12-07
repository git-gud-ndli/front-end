<template>
  <fragment>
    <v-btn color="secondary" @click="goBack">❮ Back</v-btn>
  </fragment>
</template>

<script lang="js">
  export default  {
    name: 'back-button',
    props: [],
    mounted() {

    },
    data() {
      return {

      }
    },
    methods: {
      goBack() {
        window.history.back();
      }
    },
    computed: {

    }
}
</script>

<style scoped lang="less">
.back-button {
}
</style>
