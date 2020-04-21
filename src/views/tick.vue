<template>
  <svg width="100" height="100">
    <circle
      fill="none"
      stroke="#68E534"
      stroke-width="8"
      cx="50"
      cy="50"
      r="46"
      class="circle"
      stroke-linecap="round"
      transform="rotate(-90 50 50) "
    />
    <polyline
      fill="none"
      stroke="#68E534"
      stroke-width="10"
      points="22,53 43,71 76,34"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="tick"
    />
  </svg>
</template>

<script>
export default {};
</script>

<style>
template {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  flex-direction: column;
}

.circle {
  stroke-dasharray: 290;
  stroke-dashoffset: 290;
  animation: circle 1s ease-in-out;
  animation-fill-mode: forwards;
}

.tick {
  stroke-dasharray: 100;
  stroke-dashoffset: 100;
  animation: tick 0.8s ease-out;
  animation-fill-mode: forwards;
  animation-delay: 0.95s;
}

@keyframes circle {
  from {
    stroke-dashoffset: 290;
  }

  to {
    stroke-dashoffset: 580;
  }
}

@keyframes tick {
  from {
    stroke-dashoffset: 100;
  }

  to {
    stroke-dashoffset: 0;
  }
}
</style>