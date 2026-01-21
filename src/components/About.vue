<template>
    <div class="about-wrapper">
        <h2 class="section-title">ABOUT ME</h2>
        <div class="about-content">
            <div class="left-column">
                <div class="badge-wrapper">
                    <div class="orbit-badge">
                        <svg viewBox="0 0 100 100" class="orbit-svg">
                            <defs>
                                <!-- Circle path centered at (50,50) radius 40 -->
                                <path id="circlePath" d="M50,50 m-40,0 a40,40 0 1,1 80,0 a40,40 0 1,1 -80,0" />
                            </defs>
                            <text class="orbit-text">
                                <textPath href="#circlePath">
                                    FULL STACK WEB DEVELOPER • FULL STACK WEB DEVELOPER
                                </textPath>
                            </text>
                        </svg>
                        <div class="center-icon">🧑‍💻</div>
                    </div>
                </div>
                <img src="@/assets/images/backgrounds/background.jpg" alt="Kevin Alexis" class="profile-pic" />
            </div>

            <div class="right-column">
                <p class="bio">
                    I'm Kevin Alexis. I am a software engineer, and I'm very passionate and dedicated to programming
                    tech solutions.
                    With over two years of experience as a full stack developer, I've partipated with leading
                    organizations
                    to help drive their success and growth.
                </p>

                <div class="info-boxes">
                    <div class="info-box">
                        <img class="img" src="@/assets/icons/code-icon.png" alt="code">
                        <h3>Languages</h3>
                        <p>PHP, HTML, CSS, JavaScript<br />Vue.js, Laravel, SwiftUI, Shell</p>
                    </div>
                    <div class="info-box">
                        <img class="img" src="@/assets/icons/edu-icon.png" alt="edu">
                        <h3>Education</h3>
                        <p>Computer Systems Engineering</p>
                    </div>
                    <div class="info-box">
                        <img class="img" src="@/assets/icons/project-icon.png" alt="project">
                        <h3>Projects</h3>
                        <p>Built more than 3 projects</p>
                    </div>
                </div>

                <div class="tools-section">
                    <h3>Tools I Use</h3>
                    <div class="tools">
                        <div class="tool-icon"><img src="@/assets/icons/vscode.png" alt="VS Code" /></div>
                        <div class="tool-icon"><img src="@/assets/icons/vue.png" alt="Vue" /></div>
                        <div class="tool-icon"><img src="@/assets/icons/github.png" alt="GitHub" /></div>
                        <div class="tool-icon"><img src="@/assets/icons/laravel.png" alt="Laravel" /></div>
                        <div class="tool-icon"><img src="@/assets/icons/mysql.png" alt="MySQL" /></div>
                        <div class="tool-icon"><img src="@/assets/icons/xcode.png" alt="Xcode" /></div>
                        <div class="tool-icon"><img src="@/assets/icons/firebase.png" alt="Firebase" /></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
.about-wrapper {
    padding: 4rem 2rem;
    background-color: var(--bg-main);
    color: var(--text-main);
    font-family: 'Helvetica Neue', sans-serif;
    padding-bottom: 160px;
    padding-top: 120px;
}

.img {
    width: 1.75rem;
    display: block;
}

.section-title {
    font-size: 2.5rem;
    text-align: center;
    margin-bottom: 3rem;
    color: var(--text-main);
}

.about-content {
    display: flex;
    flex-wrap: wrap;
    gap: 3rem;
    justify-content: center;
    align-items: center;
}

.profile-pic {
    width: 100%;
    max-width: 320px;
    height: auto;
    object-fit: cover;
    border-radius: 0.75rem;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

.left-column {
    flex: 1;
    min-width: 280px;
    text-align: center;
    position: relative;
}

/* Badge container positioned at top center */
.badge-wrapper {
    position: absolute;
    top: -30px;
    left: 20%;
    transform: translateX(-50%);
    z-index: 2;
}

.orbit-badge {
    position: relative;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: var(--orbit-badge-bg);
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.3);
    display: flex;
    align-items: center;
    justify-content: center;
}

.center-icon {
    position: absolute;
    font-size: 1.5rem;
    color: #fff;
    z-index: 2;
}

.orbit-svg {
    width: 100px;
    height: 100px;
    position: absolute;
    top: 0;
    left: 0;
}

.orbit-text {
    fill: var(--orbit-text);
    font-size: 6px;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 1px;
    transform-origin: 50% 50%;
    /* center of SVG */
    animation: spinText 10s linear infinite;
}

@keyframes spinText {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
}

.center-icon {
    position: absolute;
    font-size: 2.5rem;
    color: #fff;
    z-index: 2;
}

.badge {
    margin-top: 1rem;
    font-weight: bold;
    font-size: 1rem;
    background-color: #333;
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 20px;
    display: inline-block;
}

.right-column {
    flex: 2;
    min-width: 300px;
}

.bio {
    color: var(--text-muted);
    font-size: 1.1rem;
    line-height: 1.6;
    margin-bottom: 2rem;
}

.info-boxes {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    margin-bottom: 2rem;
}

.info-box {
    flex: 1;
    min-width: 180px;
    background-color: var(--card-bg);
    border-color: var(--text-main);
    border-radius: 0.75rem;
    border-style: solid;
    padding: 1.5rem;
}

.info-box:hover {
    transform: translateY(-4px);
    box-shadow: 4px 4px 0 var(--text-main);
}

.info-box h3 {
    margin-bottom: 0.5rem;
    font-size: 1.1rem;
    color: var(--text-main);
}

.tools {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    justify-content: flex-start;
}

.tool-icon {
    width: 60px;
    height: 60px;
    padding: 0.5rem;
    border-radius: 0.75rem;
    border: 2px solid var(--text-main);
    background-color: var(--tool-icon-bg);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: box-shadow 0.3s ease, transform 0.3s ease;
}

.tool-icon:hover {
    box-shadow: 4px 4px 0 var(--text-main);
    transform: translateY(-2px);
}

.tool-icon img {
    width: 100%;
    height: auto;
    object-fit: contain;
}
</style>
