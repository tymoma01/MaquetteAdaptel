// Barre d'onglets chantiers (#chantier-tabs), commune aux pages qui filtrent par chantier.
// Quand les chantiers ne tiennent pas sur une ligne (ex. 10 chantiers sur un site), la barre défile
// horizontalement (molette, trackpad, glisser au doigt) et des flèches permettent de passer de chantier en chantier.

(function () {
  const tabs = document.getElementById('chantier-tabs');
  if (!tabs) return;

  const style = document.createElement('style');
  style.textContent = `
    #chantier-tabs { scrollbar-width: none; }
    #chantier-tabs::-webkit-scrollbar { display: none; }
  `;
  document.head.appendChild(style);

  const CHEVRON = d => `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4"><path d="${d}"></path></svg>`;

  // Le cadre blanc passe sur un wrapper ; #chantier-tabs devient la zone qui défile.
  const wrap = document.createElement('div');
  wrap.className = 'relative inline-flex max-w-full min-w-0 bg-white p-1.5 rounded-xl border border-gray-200 shadow-sm';
  tabs.parentNode.insertBefore(wrap, tabs);
  wrap.appendChild(tabs);
  tabs.classList.remove('bg-white', 'p-1.5', 'rounded-xl', 'border', 'border-gray-200', 'shadow-sm', 'inline-flex', 'flex-wrap');
  tabs.classList.add('relative', 'flex', 'flex-nowrap', 'min-w-0', 'overflow-x-auto');
  tabs.querySelectorAll('.chantier-tab').forEach(b => b.classList.add('whitespace-nowrap', 'flex-shrink-0'));

  function makeArrow(side) {
    const holder = document.createElement('div');
    holder.className = `absolute inset-y-0 ${side === 'left' ? 'left-0 pl-1.5 pr-6 rounded-l-xl bg-gradient-to-r' : 'right-0 pr-1.5 pl-6 rounded-r-xl bg-gradient-to-l'} from-white via-white to-transparent hidden items-center z-10`;
    holder.innerHTML = `
      <button type="button" aria-label="${side === 'left' ? 'Chantiers précédents' : 'Chantiers suivants'}" class="w-8 h-8 rounded-lg bg-white border border-gray-200 shadow-sm text-gray-600 hover:text-[#A63629] hover:border-[#A63629]/40 flex items-center justify-center transition-colors">
        ${CHEVRON(side === 'left' ? 'm15 18-6-6 6-6' : 'm9 18 6-6-6-6')}
      </button>`;
    wrap.appendChild(holder);
    return holder;
  }
  const leftArrow = makeArrow('left');
  const rightArrow = makeArrow('right');
  const ARROW_SPACE = 48; // place occupée par une flèche + son dégradé

  function updateArrows() {
    const max = tabs.scrollWidth - tabs.clientWidth;
    leftArrow.classList.toggle('hidden', tabs.scrollLeft <= 1);
    leftArrow.classList.toggle('flex', tabs.scrollLeft > 1);
    rightArrow.classList.toggle('hidden', tabs.scrollLeft >= max - 1);
    rightArrow.classList.toggle('flex', tabs.scrollLeft < max - 1);
  }

  const scrollToX = x => tabs.scrollTo({ left: x, behavior: 'smooth' });

  // Flèche droite : amène le premier chantier masqué à droite entièrement en vue (et inversement à gauche).
  function step(dir) {
    const list = [...tabs.querySelectorAll('.chantier-tab')];
    const viewLeft = tabs.scrollLeft;
    const viewRight = viewLeft + tabs.clientWidth;
    if (dir > 0) {
      const next = list.find(b => b.offsetLeft + b.offsetWidth > viewRight - ARROW_SPACE + 1);
      if (next) scrollToX(next.offsetLeft + next.offsetWidth - tabs.clientWidth + ARROW_SPACE);
    } else {
      const prev = list.reverse().find(b => b.offsetLeft < viewLeft + ARROW_SPACE - 1);
      if (prev) scrollToX(prev.offsetLeft - ARROW_SPACE);
    }
  }
  leftArrow.querySelector('button').addEventListener('click', () => step(-1));
  rightArrow.querySelector('button').addEventListener('click', () => step(1));

  // Le chantier cliqué est toujours ramené entièrement en vue.
  tabs.addEventListener('click', e => {
    const b = e.target.closest('.chantier-tab');
    if (!b) return;
    if (b.offsetLeft < tabs.scrollLeft + ARROW_SPACE) scrollToX(b.offsetLeft - ARROW_SPACE);
    else if (b.offsetLeft + b.offsetWidth > tabs.scrollLeft + tabs.clientWidth - ARROW_SPACE) scrollToX(b.offsetLeft + b.offsetWidth - tabs.clientWidth + ARROW_SPACE);
  });

  // Molette verticale de la souris → défilement horizontal.
  tabs.addEventListener('wheel', e => {
    if (tabs.scrollWidth <= tabs.clientWidth || Math.abs(e.deltaX) > Math.abs(e.deltaY)) return;
    e.preventDefault();
    tabs.scrollLeft += e.deltaY;
  }, { passive: false });

  tabs.addEventListener('scroll', updateArrows, { passive: true });
  window.addEventListener('resize', updateArrows);
  new ResizeObserver(updateArrows).observe(tabs);
  // Chantiers ajoutés / retirés dynamiquement.
  new MutationObserver(() => {
    tabs.querySelectorAll('.chantier-tab').forEach(b => b.classList.add('whitespace-nowrap', 'flex-shrink-0'));
    updateArrows();
  }).observe(tabs, { childList: true });
  updateArrows();
})();
