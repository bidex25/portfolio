/* ================================================
   MAIN.JS — Nav, Animations, Counters, Tilt, Form
   ================================================ */
(function () {
    'use strict';

    document.addEventListener('DOMContentLoaded', function () {

        /* ---- Navbar scroll ---- */
        const navbar = document.getElementById('navbar');
        if (navbar) {
            window.addEventListener('scroll', () => {
                navbar.classList.toggle('scrolled', window.scrollY > 40);
            }, { passive: true });
        }

        /* ---- Active nav link by current page ---- */
        const path = window.location.pathname.split('/').pop() || 'index.html';
        document.querySelectorAll('.nav-links a, .nav-mobile a').forEach(a => {
            const href = a.getAttribute('href').split('/').pop();
            const isHome = (path === 'index.html' || path === '') && (href === 'index.html' || href === '');
            if (href === path || isHome) {
                a.classList.add('active');
            }
        });

        /* ---- Mobile menu ---- */
        const ham = document.querySelector('.nav-ham');
        const mobileNav = document.querySelector('.nav-mobile');
        let menuOpen = false;
        let lastToggle = 0;

        function openMenu() {
            menuOpen = true;
            ham?.classList.add('open');
            mobileNav?.classList.add('open');
            document.body.style.overflow = 'hidden';
            ham?.setAttribute('aria-expanded', 'true');
        }

        function closeMenu() {
            menuOpen = false;
            ham?.classList.remove('open');
            mobileNav?.classList.remove('open');
            document.body.style.overflow = '';
            ham?.setAttribute('aria-expanded', 'false');
        }

        // Debounce to prevent double-fire from touch + click
        function toggleMenu(e) {
            e.preventDefault();
            e.stopPropagation();
            const now = Date.now();
            if (now - lastToggle < 300) return;
            lastToggle = now;
            menuOpen ? closeMenu() : openMenu();
        }

        ham?.addEventListener('click', toggleMenu);

        // Close when a nav link is tapped — use click only, no touchend
        document.querySelectorAll('.nav-mobile a').forEach(a => {
            a.addEventListener('click', function (e) {
                closeMenu();
                // Allow navigation to proceed naturally
            });
        });

        // Close button inside mobile menu
        document.querySelector('.nav-mobile-close')?.addEventListener('click', closeMenu);

        // Close on Escape
        document.addEventListener('keydown', e => {
            if (e.key === 'Escape' && menuOpen) closeMenu();
        });

        /* ---- CV download ---- */
        document.getElementById('btn-cv')?.addEventListener('click', () => {
            const isInnerPage = window.location.pathname.includes('/pages/');
            const cvPath = isInnerPage ? '../assets/resume.pdf' : 'assets/resume.pdf';
            // Check if CV exists before downloading
            fetch(cvPath, { method: 'HEAD' })
                .then(res => {
                    if (res.ok) {
                        const a = document.createElement('a');
                        a.href = cvPath;
                        a.download = 'BidexTech-CV.pdf';
                        a.click();
                    } else {
                        alert('CV will be available soon. Please check back shortly or contact me on WhatsApp.');
                    }
                })
                .catch(() => {
                    alert('CV will be available soon. Please contact me on WhatsApp.');
                });
        });

        /* ---- Scroll Reveal ---- */
        const revealObs = new IntersectionObserver((entries) => {
            entries.forEach(e => {
                if (e.isIntersecting) { e.target.classList.add('visible'); revealObs.unobserve(e.target); }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -48px 0px' });

        document.querySelectorAll('.reveal, .stagger').forEach(el => revealObs.observe(el));

        /* ---- Counter animation ---- */
        const counterObs = new IntersectionObserver((entries) => {
            entries.forEach(e => {
                if (e.isIntersecting && !e.target.dataset.done) {
                    e.target.dataset.done = '1';
                    const target = parseInt(e.target.dataset.target, 10);
                    const suffix = e.target.dataset.suffix || '';
                    const duration = 1800;
                    const start = performance.now();
                    const tick = (now) => {
                        const p = Math.min((now - start) / duration, 1);
                        const eased = 1 - Math.pow(1 - p, 4);
                        e.target.textContent = Math.round(eased * target) + suffix;
                        if (p < 1) requestAnimationFrame(tick);
                    };
                    requestAnimationFrame(tick);
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px 50px 0px' });

        document.querySelectorAll('[data-target]').forEach(el => counterObs.observe(el));

        /* ---- Cursor glow (desktop) ---- */
        if (window.matchMedia('(pointer: fine)').matches) {
            const glow = document.createElement('div');
            Object.assign(glow.style, {
                position: 'fixed', width: '420px', height: '420px',
                borderRadius: '50%', pointerEvents: 'none', zIndex: '0',
                background: 'radial-gradient(circle, rgba(212,175,55,0.055) 0%, transparent 70%)',
                transform: 'translate(-50%,-50%)', top: '0', left: '0', opacity: '0',
                transition: 'opacity 0.3s', willChange: 'left, top',
            });
            document.body.appendChild(glow);
            let mx = 0, my = 0, gx = 0, gy = 0;
            document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; glow.style.opacity = '1'; });
            document.addEventListener('mouseleave', () => { glow.style.opacity = '0'; });
            (function lerp() {
                gx += (mx - gx) * 0.07;
                gy += (my - gy) * 0.07;
                glow.style.left = gx + 'px';
                glow.style.top = gy + 'px';
                requestAnimationFrame(lerp);
            })();
        }

        /* ---- Card tilt ---- */
        document.querySelectorAll('.tilt').forEach(card => {
            card.addEventListener('mousemove', e => {
                const r = card.getBoundingClientRect();
                const dx = (e.clientX - (r.left + r.width / 2)) / (r.width / 2);
                const dy = (e.clientY - (r.top + r.height / 2)) / (r.height / 2);
                card.style.transform = `perspective(700px) rotateX(${-dy * 6}deg) rotateY(${dx * 6}deg) translateY(-4px)`;
                card.style.transition = 'transform 0.08s ease';
            });
            card.addEventListener('mouseleave', () => {
                card.style.transform = '';
                card.style.transition = 'transform 0.55s cubic-bezier(0.16,1,0.3,1)';
            });
        });

        /* ---- Magnetic buttons ---- */
        document.querySelectorAll('.mag').forEach(btn => {
            btn.addEventListener('mousemove', e => {
                const r = btn.getBoundingClientRect();
                const dx = (e.clientX - (r.left + r.width / 2)) * 0.3;
                const dy = (e.clientY - (r.top + r.height / 2)) * 0.3;
                btn.style.transform = `translate(${dx}px, ${dy}px)`;
                btn.style.transition = 'transform 0.1s ease';
            });
            btn.addEventListener('mouseleave', () => {
                btn.style.transform = '';
                btn.style.transition = 'transform 0.5s cubic-bezier(0.16,1,0.3,1)';
            });
        });

        /* ---- Contact Form ---- */
        const form = document.getElementById('contact-form');
        const sendBtn = document.getElementById('btn-send');

        const rules = {
            cf_name: v => v.trim().length >= 2 || 'Please enter your full name.',
            cf_email: v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) || 'Please enter a valid email.',
            cf_service: v => v.trim().length >= 2 || 'Please select a service.',
            cf_message: v => v.trim().length >= 20 || 'Please write at least 20 characters.',
        };

        function showErr(id, msg) {
            const f = document.getElementById(id);
            if (!f) return;
            let e = f.parentNode.querySelector('.ferr');
            if (!e) {
                e = document.createElement('span');
                e.className = 'ferr';
                Object.assign(e.style, { fontSize: '12px', color: 'var(--gold)', marginTop: '5px', display: 'block', fontFamily: 'var(--font-body)' });
                f.parentNode.appendChild(e);
            }
            e.textContent = msg;
            f.style.outlineColor = 'rgba(212,175,55,0.6)';
        }

        function clearErr(id) {
            const f = document.getElementById(id);
            if (!f) return;
            const e = f.parentNode.querySelector('.ferr');
            if (e) e.textContent = '';
            f.style.outlineColor = '';
        }

        function validate(id) {
            if (!rules[id]) return true;
            const v = document.getElementById(id)?.value || '';
            const r = rules[id](v);
            if (r !== true) { showErr(id, r); return false; }
            clearErr(id); return true;
        }

        if (form) {
            Object.keys(rules).forEach(id => {
                document.getElementById(id)?.addEventListener('blur', () => validate(id));
            });

            form.addEventListener('submit', async function (e) {
                e.preventDefault();
                const valid = Object.keys(rules).map(id => validate(id)).every(Boolean);
                if (!valid) return;

                const orig = sendBtn.textContent;
                sendBtn.textContent = 'Sending…';
                sendBtn.disabled = true;

                const data = {
                    name: document.getElementById('cf_name').value.trim(),
                    email: document.getElementById('cf_email').value.trim(),
                    service: document.getElementById('cf_service').value,
                    message: document.getElementById('cf_message').value.trim(),
                };

                try {
                    if (typeof emailjs !== 'undefined') {
                        /*
                         * TODO: Replace these 3 values with your EmailJS credentials
                         * 1. Sign up free at https://www.emailjs.com
                         * 2. Create a Service (Gmail works) → copy the Service ID
                         * 3. Create a Template → copy the Template ID
                         * 4. Go to Account → copy your Public Key
                         * 5. Uncomment the EmailJS script tag in each HTML file
                         */
                        await emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
                            from_name: data.name, from_email: data.email,
                            service: data.service, message: data.message,
                        }, 'YOUR_PUBLIC_KEY');
                    } else {
                        window.open(`mailto:abolajiabidemi2000@gmail.com?subject=${encodeURIComponent('New enquiry: ' + data.service)}&body=${encodeURIComponent('Name: ' + data.name + '\nEmail: ' + data.email + '\n\n' + data.message)}`);
                    }
                    sendBtn.textContent = '✓ Message Sent!';
                    sendBtn.style.background = '#22c55e';
                    form.reset();
                    setTimeout(() => { sendBtn.textContent = orig; sendBtn.disabled = false; sendBtn.style.background = ''; }, 4000);
                } catch (err) {
                    sendBtn.textContent = 'Failed — Try Again';
                    sendBtn.style.background = '#ef4444';
                    sendBtn.disabled = false;
                    setTimeout(() => { sendBtn.textContent = orig; sendBtn.style.background = ''; }, 3000);
                }
            });
        }

        /* ---- Footer year ---- */
        const yr = document.getElementById('year');
        if (yr) yr.textContent = new Date().getFullYear();

    });
})();