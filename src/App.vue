<template>
  <div id="app">
    <!-- <vue-particles color="#88c3ff"
        :particleOpacity="0.7"
        :particlesNumber="100"
        shapeType="star"
        :particleSize="4"
        linesColor="#88c3ff"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="150"
        :moveSpeed="3"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="remove" class="bg"></vue-particles> -->
        <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@import url(./assets/css/global.css);
#app {
  height: 100%;
  /* background-color: #2d6aa3; */
  /* background: url("./assets/img/bg.jpg") no-repeat; */
  /* background-image: radial-gradient(red 5%, yellow 15%, rgb(153, 245, 153) 60%); */
}
.bg {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
}
.btn-opera {
  background-color: #6cb9ff;
  border-color: #6cb9ff;
  padding: 8px 12px;
  color: #fff;
}
.btn-color {
  background-color: #6cb9ff;
  border-color: #6cb9ff;
  color: #fff;
}
</style>
