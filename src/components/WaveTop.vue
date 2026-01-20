<template>
    <div class="wave-top">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
            <path d="M0,40
           C120,80 360,0 600,20
           840,40 1080,80 1440,40
           L1440,0 L0,0 Z" fill="#ffffff" />
        </svg>
    </div>
</template>

<style scoped>
.wave-top {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 150px;
    overflow: hidden;
    line-height: 0;
    z-index: 2;
}

.wave-top svg {
    display: block;
    width: 100%;
    height: 100%;
}
</style>
