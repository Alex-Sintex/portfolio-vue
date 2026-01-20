<template>
    <div class="wave">
        <svg viewBox="0 0 1440 320" preserveAspectRatio="none">
            <path
                d="M0,224L60,213.3C120,203,240,181,360,165.3C480,149,600,139,720,160C840,181,960,235,1080,240C1200,245,1320,203,1380,181.3L1440,160L1440,320L0,320Z"
                fill="#ffffff"></path>
        </svg>
    </div>
</template>

<style scoped>
.wave {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100px;
    overflow: hidden;
    z-index: 1;
}

.wave svg {
    width: 100%;
    height: 100%;
    display: block;
}
</style>
