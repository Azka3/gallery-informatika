/* ══════════════════════════════════════════════
   Gallery Informatika 2024 — JavaScript
   ══════════════════════════════════════════════ */

/* ─── Data Anggota ─── 
   Ganti placeholder dengan info asli setiap anggota.
   Untuk signature, masukkan URL gambar PNG tanda tangan.
   Untuk foto, ganti src pada img di index.html sesuai member index.
*/
const MEMBERS = [
  {
    fullname: 'Wisnu Aji Dharma Mahmuda',
    firstname: 'Wisnu',
    photo: '/gallery/Wisnuu.png',
    bio: 'Seorang Fullstack Developer & Game Developer yang sedang mengarungi lautan teknik Informatika semester 5. Sehari-hari disibukkan dengan meracik logika backend, mendesain UI/UX yang estetik, hingga membangun dunia game sendiri.',
    label: 'Informatika – Semester 5',
    ig: { handle: '@_sterben_14', url: 'https://www.instagram.com/_sterben_14?igsh=MXdyaGJraTNlZ210Yg==' },
    gh: { handle: '@WisnuAji95', url: 'https://github.com/WisnuAji95' },
    li: { handle: '@wisnuaji', url: 'https://www.linkedin.com/in/wisnu-aji-dharma-mahmuda-113a17426' },
    signature: '/ttd/1.png',   /* URL gambar tanda tangan (PNG transparan) */
    portfolio: 'https://portofolio-wisnu-chi.vercel.app/',  /* URL portfolio */
  },
  {
    fullname: 'Azka Zakiyyan Khisbhan Ali',
    firstname: 'Azka',
    photo: '/gallery/azka.jpg',
    bio: 'Web developer dengan minat kuat di 3D art — saya membangun model dan environment 3D menggunakan software Blender, serta mengeksplorasi Unity dan Unreal Engine untuk proyek game. Di sisi web, saya fokus pada UI/UX design dan mockup landing page yang clean dan fungsional.',
    label: 'Informatika – Semester 5',
    ig: { handle: '@zk_1980p', url: 'https://www.instagram.com/zk_1980p?igsh=MTlzaDV3a2NubWEwNA==' },
    gh: { handle: '@azkazk', url: 'https://github.com/Azka3' },
    li: { handle: '@azkazakiyyan', url: 'https://www.linkedin.com/in/azka-zakiyyan-2926863b1?utm_source=share_via&utm_content=profile&utm_medium=member_android' },
    signature: '/ttd/2.png',
    portfolio: 'https://website-bootcamp.vercel.app/',
  },
  {
    fullname: 'Muhammad Farhan Al-Faqih',
    firstname: 'Alex',
    photo: 'https://placehold.co/400x500/0f3460/ffffff?text=Alex',
    bio: 'Passionate di bidang data science dan machine learning. Suka mengeksplorasi algoritma dan problem solving.',
    label: 'Informatika – Semester 5',
    ig: { handle: '@-', url: '#' },
    gh: { handle: '@-', url: '#' },
    li: { handle: '@-', url: '#' },
    signature: '',
    portfolio: '#',
  },
  {
    fullname: 'Rifky Dariyanto',
    firstname: 'Rifky',
    photo: '/gallery/rifky.jpeg',
    bio: 'Halo! Saya seorang mahasiswa Teknik Informatika yang berfokus pada Frontend Web Development, Saya memiliki ketertarikan kuat dalam membangun tampilan web yang interaktif, responsif, dan ramah pengguna. Saat ini saya telah menguasai dasar hingga pembuatan aplikasi web menggunakan HTML, CSS, JavaScript, PHP, dan MySQL.',
    label: 'Informatika – Semester 5',
    ig: { handle: '@rifky_dariyanto01', url: 'https://www.instagram.com/rifky_dariyanto01?igsh=MXc5eWV4azJ5Y3h2Ng==' },
    gh: { handle: '@-', url: '#' },
    li: { handle: '@-', url: '#' },
    signature: '/ttd/4.png',
    portfolio: '#',
  },
  {
    fullname: 'Sendi Nurhidayat',
    firstname: 'Sendi',
    photo: '/gallery/sendi.jpeg',
    bio: 'Web developer yang fokus di JavaScript & Html. Aktif membangun proyek dan senang berbagi ilmu lewat mentoring teman-teman sesama mahasiswa Informatika.',
    label: 'Informatika – Semester 5',
    ig: { handle: '@senz_nrhdyt308', url: 'https://www.instagram.com/senz_nrhdyt308?igsh=aHluaTBheTh3M2Iw' },
    gh: { handle: '@member5', url: '#' },
    li: { handle: '@member5', url: '#' },
    signature: '/ttd/3.png',
    portfolio: '#',
  },
  {
    fullname: 'Helsa Anzelika Kusumah',
    firstname: 'Helsa',
    photo: 'https://placehold.co/400x500/474787/ffffff?text=Helsa',
    bio: 'Menyukai game development dan pemrograman kreatif. Aktif mengikuti kompetisi coding tingkat nasional.',
    label: 'Informatika – Semester 5',
    ig: { handle: '@-', url: '#' },
    gh: { handle: '@-', url: '#' },
    li: { handle: '@-', url: '#' },
    signature: '',
    portfolio: '#',
  },
];

document.addEventListener('DOMContentLoaded', () => {

  /* ─── 1. NAVBAR: scroll styling + active link ─── */
  const navbar = document.getElementById('navbar');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = ['hero', 'people', 'rutinitas', 'university'];

  function onScroll() {
    navbar.classList.toggle('scrolled', window.scrollY > 20);

    let current = '';
    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el && el.getBoundingClientRect().top <= 100) current = id;
    });
    navLinks.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
    });
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ─── 2. HAMBURGER MENU ─── */
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');

  function closeMenu() {
    hamburger.classList.remove('open');
    mobileMenu.classList.remove('open');
    document.body.style.overflow = '';
  }
  hamburger.addEventListener('click', () => {
    const isOpen = hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });
  document.querySelectorAll('.mobile-link').forEach(l => l.addEventListener('click', closeMenu));

  /* ─── 3. SCROLL REVEAL ─── */
  const revealEls = document.querySelectorAll('.reveal');

  function revealIfVisible(el) {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      el.classList.add('visible');
      return true;
    }
    return false;
  }

  // Immediately reveal anything already in viewport (fixes blank hero on mobile)
  requestAnimationFrame(() => {
    revealEls.forEach(el => revealIfVisible(el));
  });

  // Use IntersectionObserver for below-fold elements
  if ('IntersectionObserver' in window) {
    const revealObs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObs.unobserve(entry.target);
        }
      });
      // threshold:0 = trigger as soon as any pixel is visible (more reliable on old browsers)
    }, { threshold: 0, rootMargin: '0px 0px 0px 0px' });
    revealEls.forEach(el => {
      if (!el.classList.contains('visible')) revealObs.observe(el);
    });
  } else {
    // Fallback for browsers without IntersectionObserver: reveal all immediately
    revealEls.forEach(el => el.classList.add('visible'));
  }

  /* ─── 4. PEOPLE GRID: center row-2 on desktop ─── */
  function buildPeopleGrid() {
    const grid = document.querySelector('.people-grid');
    if (!grid) return;

    function restructure() {
      const existing = grid.querySelector('.people-grid-row2');
      if (existing) {
        Array.from(existing.children).forEach(c => grid.appendChild(c));
        existing.remove();
      }

      if (window.innerWidth > 768) {
        const allCards = Array.from(grid.querySelectorAll('.person-card'));
        const row2Cards = allCards.slice(4, 6);
        const wrapper = document.createElement('div');
        wrapper.className = 'people-grid-row2';
        grid.appendChild(wrapper);
        row2Cards.forEach(c => wrapper.appendChild(c));
      }
    }

    restructure();
    window.addEventListener('resize', restructure);
  }
  buildPeopleGrid();

  /* ─── 5. MEMBER CARD MODAL ─── */
  const backdrop = document.getElementById('member-modal-backdrop');
  const mcPhoto = document.getElementById('mc-photo');
  const mcFullname = document.getElementById('mc-fullname');
  const mcFirstname = document.getElementById('mc-firstname');
  const mcBio = document.getElementById('mc-bio');
  const mcLabel = document.getElementById('mc-label');
  const mcIg = document.getElementById('mc-ig');
  const mcGh = document.getElementById('mc-gh');
  const mcLi = document.getElementById('mc-li');
  const mcIgHandle = document.getElementById('mc-ig-handle');
  const mcGhHandle = document.getElementById('mc-gh-handle');
  const mcLiHandle = document.getElementById('mc-li-handle');
  const mcSigImg = document.getElementById('mc-signature');
  const mcSigPlaceholder = document.getElementById('mc-sig-placeholder');
  const mcPortfolio = document.getElementById('mc-portfolio-btn');

  // Guard: skip modal setup if any required element is missing
  const modalReady = backdrop && mcPhoto && mcFullname && mcFirstname &&
    mcBio && mcLabel && mcIg && mcGh && mcLi &&
    mcSigImg && mcSigPlaceholder && mcPortfolio;

  function openMemberCard(index) {
    if (!modalReady) return;
    const m = MEMBERS[index];
    if (!m) return;

    // Populate
    mcFullname.textContent = m.fullname;
    mcFirstname.textContent = m.firstname;
    mcPhoto.src = m.photo;
    mcPhoto.alt = m.fullname;
    mcBio.textContent = m.bio;
    mcLabel.textContent = m.label;

    // Social pills
    if (mcIg && m.ig) { mcIg.href = m.ig.url; if (mcIgHandle) mcIgHandle.textContent = m.ig.handle; }
    if (mcGh && m.gh) { mcGh.href = m.gh.url; if (mcGhHandle) mcGhHandle.textContent = m.gh.handle; }
    if (mcLi && m.li) { mcLi.href = m.li.url; if (mcLiHandle) mcLiHandle.textContent = m.li.handle; }

    // Signature
    if (m.signature) {
      mcSigImg.src = m.signature;
      mcSigImg.style.display = 'block';
      mcSigPlaceholder.style.display = 'none';
    } else {
      mcSigImg.style.display = 'none';
      mcSigPlaceholder.style.display = 'block';
    }

    // Portfolio button
    mcPortfolio.href = m.portfolio || '#';

    // Open
    backdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeMemberCard() {
    if (!backdrop) return;
    backdrop.classList.remove('open');
    document.body.style.overflow = '';
  }

  // Trigger on person card click
  document.querySelectorAll('.person-card').forEach(card => {
    card.style.cursor = 'pointer';
    card.addEventListener('click', () => {
      const idx = parseInt(card.dataset.member, 10);
      if (!isNaN(idx)) openMemberCard(idx);
    });
  });

  if (backdrop) {
    backdrop.addEventListener('click', e => {
      if (e.target === backdrop) closeMemberCard();
    });
  }
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeMemberCard();
  });

  /* ─── 6. LIHAT LAINYA toggle ─── */
  const btnLihat = document.getElementById('btn-lihat-lainya');
  const hiddenCards = document.querySelectorAll('.hidden-card');
  let expanded = false;

  if (btnLihat) {
    btnLihat.addEventListener('click', () => {
      expanded = !expanded;
      hiddenCards.forEach((card, i) => {
        if (expanded) {
          card.classList.add('show');
          setTimeout(() => revealObs.observe(card), i * 80);
        } else {
          card.classList.remove('show', 'visible');
        }
      });

      // Update button text (preserve arrow spans)
      const textNode = Array.from(btnLihat.childNodes).find(n => n.nodeType === 3 && n.textContent.trim());
      if (textNode) {
        textNode.textContent = expanded ? ' Sembunyikan ' : ' Lihat Lainya ';
      }
    });
  }

});
