<template>
  <div :class="$style.app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
};
</script>

<style module>
.app {
  display: flex;
  justify-content: center;
}
</style>

<style>
* {
  user-select: none;
}

html {
  -webkit-tap-highlight-color: rgba(0,0,0,0);
  -webkit-text-size-adjust: none;
}

button {
  outline: none;
}

.blind {
  overflow:hidden;
  visibility:hidden;
  position:absolute;
  top:-100000px;
  left:-100000px;
  height:0;
  font-size:0;
  line-height:0
}
</style>
