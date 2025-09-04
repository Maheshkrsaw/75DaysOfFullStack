# 🚀 Day 12 — Locomotive Scroll + GSAP (with 4 Mini Projects)
Part of my #75DaysFullStackAI journey — today I combined **Locomotive Scroll** (buttery smooth scrolling) with **GSAP** (pro-grade animation engine) and built **4 focused mini-projects** to cement the concepts.

---

## 🎯 Objectives
- Integrate Locomotive Scroll for smooth, inertia-based scrolling.
- Use GSAP Tweens & Timelines for performant, choreographed animations.
- Build reusable animation utilities (toaster, hover, reveal).
- Ship 4 mini-projects that demonstrate real-world UI motion patterns.

---

## 🧰 Tech Stack
- **HTML5 / CSS3 / JavaScript (ES6+)**
- **GSAP 3** (`gsap`, `ScrollTrigger`)
- **Locomotive Scroll** (smooth scrolling + data-scroll attributes)
- **RemixIcon** (icons) — optional
- **CDN** for quick prototyping

---

## 📦 Setup (Quick Start)

### 1) Base HTML Skeleton with Locomotive & GSAP
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Day 12 — Loco + GSAP</title>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <!-- Locomotive Scroll CSS -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/locomotive-scroll/dist/locomotive-scroll.min.css">
  <style>
    /* minimal styles */
    html, body { height: 100%; margin: 0; font-family: system-ui, Arial, sans-serif; }
    .section { min-height: 100vh; padding: 8rem 2rem; display: grid; place-items: center; }
    .hero { background:#0f172a; color:#e2e8f0; }
    .light { background:#f8fafc; color:#0f172a; }
    .card { padding:2rem; border-radius:1rem; box-shadow:0 10px 30px rgba(0,0,0,.1); background:#fff; }
    .pin { width:min(900px, 92vw); }
    .btn { padding:.9rem 1.2rem; border-radius:999px; border:none; cursor:pointer; }
    .btn-dark { background:#0f172a; color:#fff; }
    .toast {
      position: fixed; z-index: 9999; padding:.75rem 1rem; border-radius:.75rem;
      box-shadow: 0 12px 40px rgba(0,0,0,.15);
    }
  </style>
</head>
<body>
  <div data-scroll-container id="scroll-container">

    <section class="section hero" data-scroll-section>
      <div class="pin">
        <h1 data-scroll data-scroll-speed="1.2">Locomotive + GSAP</h1>
        <p data-scroll data-scroll-delay="0.1" data-scroll-speed="1">Smooth scroll + pro animations for delightful UX.</p>
        <button id="showToastBtn" class="btn btn-dark">Show Toast</button>
      </div>
    </section>

    <section class="section light" data-scroll-section>
      <div class="card" id="card-1">Card Reveal on Enter</div>
    </section>

    <section class="section light" data-scroll-section>
      <div class="card" id="card-2">ScrollTrigger + Timeline</div>
    </section>

    <section class="section hero" data-scroll-section>
      <div class="pin">
        <h2>End</h2>
        <p>That’s a wrap for Day 12 🎬</p>
      </div>
    </section>

  </div>

  <!-- GSAP + ScrollTrigger -->
  <script src="https://cdn.jsdelivr.net/npm/gsap@3/dist/gsap.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/gsap@3/dist/ScrollTrigger.min.js"></script>
  <!-- Locomotive Scroll -->
  <script src="https://cdn.jsdelivr.net/npm/locomotive-scroll/dist/locomotive-scroll.min.js"></script>
  <script>
    // 1) Initialize Locomotive
    const loco = new LocomotiveScroll({
      el: document.querySelector('#scroll-container'),
      smooth: true,
      lerp: 0.08,       // inertia (0→1)
      multiplier: 1.1,  // scroll speed
      smartphone: { smooth: true },
      tablet: { smooth: true }
    });

    // 2) Hook Locomotive with ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.scrollerProxy('#scroll-container', {
      scrollTop(value) { return arguments.length ? loco.scrollTo(value, 0, 0) : loco.scroll.instance.scroll.y; },
      getBoundingClientRect() { return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight }; },
      pinType: document.querySelector('#scroll-container').style.transform ? 'transform' : 'fixed'
    });

    loco.on('scroll', ScrollTrigger.update);
    ScrollTrigger.addEventListener('refresh', () => loco.update());
    ScrollTrigger.refresh();

    // 3) Small GSAP demos
    gsap.from('#card-1', {
      scrollTrigger: {
        trigger: '#card-1',
        scroller: '#scroll-container',
        start: 'top 85%'
      },
      y: 60, opacity: 0, duration: 0.8, ease: 'power2.out'
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#card-2',
        scroller: '#scroll-container',
        start: 'top 80%'
      }
    });
    tl.from('#card-2', { y: 80, opacity: 0, duration: 0.6 })
      .to('#card-2', { scale: 1.03, duration: 0.4 })
      .to('#card-2', { scale: 1, duration: 0.3 });

    // 4) Reusable Toaster (Closure-based)
    function createToaster(config) {
      return function (message) {
        const div = document.createElement('div');
        const isDark = config.theme === 'dark';
        const px = 16, py = 12;

        div.className = 'toast';
        div.style[config.positionX === 'left' ? 'left' : 'right'] = '24px';
        div.style[config.positionY === 'top' ? 'top' : 'bottom'] = '24px';
        div.style.background = isDark ? '#0f172a' : '#e2e8f0';
        div.style.color = isDark ? '#fff' : '#0f172a';
        div.style.padding = `${py}px ${px}px`;

        div.textContent = message;
        document.body.appendChild(div);

        setTimeout(() => div.remove(), (config.duration || 3) * 1000);
      }
    }
    const toast = createToaster({ positionX: 'right', positionY: 'top', theme: 'dark', duration: 3 });
    document.getElementById('showToastBtn').addEventListener('click', () => toast('Day 12: Loco + GSAP ✅'));
  </script>
</body>
</html>
