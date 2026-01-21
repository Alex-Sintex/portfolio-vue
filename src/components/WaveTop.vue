<template>
    <div class="wave-top">
        <svg viewBox="0 0 1440 140" preserveAspectRatio="none">
            <!-- back layer -->
            <path d="M0,60
           C120,100 360,20 600,40
           840,60 1080,100 1440,60
           L1440,0 L0,0 Z" fill="var(--wave-shadow)" />

            <!-- front layer -->
            <path d="M0,40
           C120,80 360,0 600,20
           840,40 1080,80 1440,40
           L1440,0 L0,0 Z" fill="var(--wave-main)" />
        </svg>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'

const offset = ref(0)

const onScroll = () => {
    offset.value = window.scrollY * 0.15 // smooth, not aggressive
}

onMounted(() => {
    window.addEventListener('scroll', onScroll, { passive: true })
})

onUnmounted(() => {
    window.removeEventListener('scroll', onScroll)
})
</script>

<style scoped>
.wave-top {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 140px;
    overflow: hidden;
    line-height: 0;
    z-index: 2;
    will-change: transform;
}

.wave-top svg {
    width: 100%;
    height: 100%;
}
</style>
