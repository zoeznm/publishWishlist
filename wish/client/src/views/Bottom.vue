<template>
 <div class="shooting-stars">
      <div class="scope bigger">
        <div class="crosshair-vertical"></div>
        <div class="crosshair-horizontal"></div>
        <div class="center-dot"></div>
        <div id="random-points"></div>
      </div>
    </div>
    <h1 class="neon-text blinking">Hit the target!</h1>
    <a href="/main" class="back">Back</a>
    <div class="info-box" id="info-box"></div>
    <div class="controls">
      <button id="up" class="game-button">▲</button>
      <button id="left" class="game-button">◀</button>
      <button id="down" class="game-button">▼</button>
      <button id="right" class="game-button">▶</button>
      <button id="restart" class="restart-button">re</button>
      <button id="save" class="save-button">save</button>
    </div>
    <div class="saved-boxes-container" id="saved-boxes-container"></div>
</template>

<script>
export default {
  name: 'BottomComponent',
  mounted() {
    import('@/assets/js/bottom.js');
  }
};
</script>

<style src="@/assets/css/bottom.css"></style>