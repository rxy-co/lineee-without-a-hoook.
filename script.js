const lyrics = [
    "‘Cause there is something, and there is nothing",
    "There is nothing in between",
    "And in my eyes, there is a tiny dancer",
    "Watching over me, he's singing",
    `"She's a, she's a lady, and I am just a boy"`,
    "He's singing,",
    `"She's a, she's a lady, and I am just a"`,
    `<span class="highlight">"line without a hook".</span>`
];

const delays = [4000, 3500, 5000, 3600, 6300, 1300, 6000, 2000];

function createLoveHearts() {
    const heart = document.createElement('div');
    heart.className = 'love-heart';
    heart.innerHTML = '✧'; 
    heart.style.position = 'absolute';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.top = Math.random() * 100 + 'vh';
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.style.opacity = '0';
        setTimeout(() => heart.remove(), 20000);
    }, 500);
}

function startLoveAnimation() {
    const interval = setInterval(createLoveHearts, 200); 
    setTimeout(() => clearInterval(interval), 15000);
}

function displayLyrics() {
    const lyricsContainer = document.getElementById('lyrics');
    let cumulativeDelay = 0;

    lyrics.forEach((line, index) => {
        const lineElement = document.createElement('p');
        lineElement.innerHTML = line;
        lineElement.style.setProperty('--delay', `${cumulativeDelay / 1000}s`);
        lyricsContainer.appendChild(lineElement);

        // Cek jika lirik saat ini adalah "line without a hook"
        if (index === lyrics.length - 1) {
            setTimeout(startLoveAnimation, cumulativeDelay + delays[index]);
        }

        cumulativeDelay += delays[index];
    });
}

window.onload = function() {
    displayLyrics();

    const backgroundMusic = document.getElementById('backgroundMusic');
    backgroundMusic.loop = false; // pastikan tidak looping
};
