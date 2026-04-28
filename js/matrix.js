/* ================================================
   MATRIX.JS — Falling Code Canvas Animation
   Gold & green matrix rain, dev aesthetic
   ================================================ */
(function () {
    'use strict';

    function initMatrix() {
        const canvas = document.getElementById('matrix-canvas');
        if (!canvas) return;

        const ctx = canvas.getContext('2d');

        // Characters — mix of code symbols, numbers, latin
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789<>{}[]()=/\\|;:.,!@#$%^&*+-αβγδεζηθλμπρστφψω∑∏∫√∞';
        const charArr = chars.split('');

        const FONT_SIZE = 14;
        let columns, drops;
        let rafId;
        let lastTime = 0;
        const FPS = 30;
        const INTERVAL = 1000 / FPS;

        function resize() {
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
            columns = Math.floor(canvas.width / FONT_SIZE);
            drops = new Array(columns).fill(0).map(() => Math.random() * -50);
        }

        resize();
        window.addEventListener('resize', () => {
            resize();
        }, { passive: true });

        // Color palette — gold primary, occasional green, rare purple
        function getColor(drop, col) {
            // Lead character (brightest)
            const isLead = Math.floor(drops[col]) === Math.floor(drop) + 1;
            if (isLead) return '#FFFFFF'; // white lead char

            // Random color distribution
            const rand = (col * 7 + Math.floor(drop)) % 10;
            if (rand < 6) return 'rgba(212,175,55,ALPHA)';   // gold — dominant
            if (rand < 8) return 'rgba(157,80,187,ALPHA)';   // purple — accent
            return 'rgba(34,197,94,ALPHA)';                   // green — rare
        }

        function draw(timestamp) {
            rafId = requestAnimationFrame(draw);

            const elapsed = timestamp - lastTime;
            if (elapsed < INTERVAL) return;
            lastTime = timestamp - (elapsed % INTERVAL);

            // Dark semi-transparent overlay — creates trail/fade effect
            ctx.fillStyle = 'rgba(5, 5, 5, 0.065)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.font = `${FONT_SIZE}px 'Courier New', monospace`;

            for (let i = 0; i < drops.length; i++) {
                const char = charArr[Math.floor(Math.random() * charArr.length)];
                const x = i * FONT_SIZE;
                const y = drops[i] * FONT_SIZE;

                // Vary alpha based on position in stream
                const streamPos = (drops[i] % 25) / 25;
                const alpha = Math.max(0.15, streamPos);

                // Lead char is white/bright
                const isLead = streamPos > 0.92;
                if (isLead) {
                    ctx.fillStyle = 'rgba(255,255,255,0.95)';
                } else {
                    const base = getColor(drops[i], i);
                    ctx.fillStyle = base.replace('ALPHA', alpha.toFixed(2));
                }

                ctx.fillText(char, x, y);

                // Reset drop when it goes off screen
                if (y > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }

                drops[i] += 0.5;
            }
        }

        // Pause when tab hidden — save resources
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                cancelAnimationFrame(rafId);
            } else {
                lastTime = 0;
                rafId = requestAnimationFrame(draw);
            }
        });

        rafId = requestAnimationFrame(draw);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initMatrix);
    } else {
        initMatrix();
    }
})();