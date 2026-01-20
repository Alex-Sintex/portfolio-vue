<template>
    <div class="wave-bottom">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
            <path d="M0,80
           C120,40 360,120 600,100
           840,80 1080,40 1440,80
           L1440,120 L0,120 Z" fill="#ffffff" />
        </svg>
    </div>
</template>

<style scoped>
.wave-bottom {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 150px;
    overflow: hidden;
    line-height: 0;
    z-index: 2;
}

.wave-bottom svg {
    display: block;
    width: 100%;
    height: 100%;
}
</style>
