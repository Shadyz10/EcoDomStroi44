document.addEventListener('DOMContentLoaded', () => {
    // Примеры проектов
    const projects = [
        {
            id: 1,
            title: 'Уютный бревенчатый дом «Лесной»',
            material: 'brevno',
            foundation: 'lentochniy',
            area: 95,
            floors: 1,
            price: '4 200 000 ₽',
            image: 'data:image/svg+xml,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="400" height="240" viewBox="0 0 400 240"><rect fill="#8B7355" width="400" height="240"/><polygon fill="#6B3A2A" points="200,20 380,160 20,160"/><rect fill="#A0825A" x="60" y="160" width="280" height="70" rx="2"/><rect fill="#5C3A2E" x="160" y="180" width="60" height="50" rx="3"/><rect fill="#87CEEB" x="80" y="170" width="30" height="24"/><rect fill="#87CEEB" x="290" y="170" width="30" height="24"/></svg>'),
            badge: 'Бревно'
        },
        {
            id: 2,
            title: 'Просторный дом из бруса «Семейный»',
            material: 'brus',
            foundation: 'svayniy',
            area: 140,
            floors: 2,
            price: '5 800 000 ₽',
            image: 'data:image/svg+xml,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="400" height="240" viewBox="0 0 400 240"><rect fill="#D4C4A8" width="400" height="240"/><polygon fill="#8B5E3C" points="200,10 390,150 10,150"/><rect fill="#C4A882" x="30" y="150" width="340" height="40" rx="1"/><rect fill="#B8956E" x="40" y="190" width="320" height="40" rx="1"/><rect fill="#6B4226" x="150" y="190" width="50" height="40" rx="2"/><rect fill="#87CEEB" x="60" y="160" width="28" height="22"/><rect fill="#87CEEB" x="310" y="160" width="28" height="22"/><rect fill="#87CEEB" x="60" y="200" width="28" height="22"/><rect fill="#87CEEB" x="310" y="200" width="28" height="22"/></svg>'),
            badge: 'Брус'
        },
        {
            id: 4,
            title: 'Бревенчатая баня «Парная»',
            material: 'brevno',
            foundation: 'svayniy',
            area: 35,
            floors: 1,
            price: '1 150 000 ₽',
            image: 'data:image/svg+xml,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="400" height="240" viewBox="0 0 400 240"><rect fill="#9E9E9E" width="400" height="240"/><polygon fill="#5D4037" points="200,20 360,160 40,160"/><rect fill="#8D6E63" x="70" y="160" width="260" height="70" rx="3"/><rect fill="#4E342E" x="160" y="180" width="50" height="50" rx="2"/><rect fill="#FFCC80" x="90" y="170" width="24" height="20"/></svg>'),
            badge: 'Бревно'
        },
        {
            id: 5,
            title: 'Дом из бруса «Дачный»',
            material: 'brus',
            foundation: 'plitniy',
            area: 85,
            floors: 1,
            price: '3 450 000 ₽',
            image: 'data:image/svg+xml,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="400" height="240" viewBox="0 0 400 240"><rect fill="#C9B99A" width="400" height="240"/><polygon fill="#6D4C41" points="200,12 380,150 20,150"/><rect fill="#BCAA8E" x="40" y="150" width="320" height="80" rx="2"/><rect fill="#4E342E" x="160" y="180" width="55" height="50" rx="3"/><rect fill="#81D4FA" x="65" y="162" width="28" height="22"/><rect fill="#81D4FA" x="310" y="162" width="28" height="22"/></svg>'),
            badge: 'Брус'
        },
        {
            id: 7,
            title: 'Двухэтажный бревенчатый «Премиум»',
            material: 'brevno',
            foundation: 'plitniy',
            area: 190,
            floors: 2,
            price: '8 900 000 ₽',
            image: 'data:image/svg+xml,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="400" height="240" viewBox="0 0 400 240"><rect fill="#6D4C41" width="400" height="240"/><polygon fill="#3E2723" points="200,8,390,140,10,140"/><rect fill="#8D6E63" x="25" y="140" width="350" height="45" rx="2"/><rect fill="#795548" x="25" y="185" width="350" height="45" rx="2"/><rect fill="#4E342E" x="150" y="185" width="55" height="45" rx="2"/><rect fill="#A5D6A7" x="50" y="150" width="30" height="24"/><rect fill="#A5D6A7" x="320" y="150" width="30" height="24"/><rect fill="#A5D6A7" x="50" y="195" width="30" height="24"/><rect fill="#A5D6A7" x="320" y="195" width="30" height="24"/></svg>'),
            badge: 'Бревно'
        },
        {
            id: 8,
            title: 'Хозпостройка «Мастерская»',
            material: 'hoz',
            foundation: 'lentochniy',
            area: 40,
            floors: 1,
            price: '750 000 ₽',
            image: 'data:image/svg+xml,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="400" height="240" viewBox="0 0 400 240"><rect fill="#BDBDBD" width="400" height="240"/><rect fill="#9E9E9E" x="80" y="60" width="240" height="170" rx="3"/><polygon fill="#757575" points="200,20,310,60,90,60"/><rect fill="#616161" x="160" y="140" width="70" height="90" rx="2"/></svg>'),
            badge: 'Хозпостройка'
        },
        {
            id: 9,
            title: 'Баня',
            material: 'banya',
            foundation: 'lentochniy',
            area: 40,
            floors: 1,
            price: '750 000 ₽',
            image: 'data:image/svg+xml,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="400" height="240" viewBox="0 0 400 240"><rect fill="#BDBDBD" width="400" height="240"/><rect fill="#9E9E9E" x="80" y="60" width="240" height="170" rx="3"/><polygon fill="#757575" points="200,20,310,60,90,60"/><rect fill="#616161" x="160" y="140" width="70" height="90" rx="2"/></svg>'),
            badge: 'Баня'
        }
    ];

    // Элементы домов
    const projectsGrid = document.getElementById('projectsGrid');
    const projectsEmpty = document.getElementById('projectsEmpty');
    const resetFiltersBtn = document.getElementById('resetFilters');
    const burgerBtn = document.getElementById('burgerBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const header = document.getElementById('header');
    const contactForm = document.getElementById('contactForm');
    const successModal = document.getElementById('successModal');
    const closeModalBtn = document.getElementById('closeModal');

    // Элементы калькулятора
    const calcTypeButtons = document.querySelectorAll('#calcType .calc-option');
    const calcFloorsButtons = document.querySelectorAll('#calcFloors .calc-option');
    const calcFoundationButtons = document.querySelectorAll('#calcFoundation .calc-option');
    const calcAreaInput = document.getElementById('calcArea');
    const calcAreaValue = document.getElementById('calcAreaValue');
    const calcResult = document.getElementById('calcResult');

    // Фильтр хелпер
    const filterState = {
        material: 'all',
        foundation: 'all',
        area: 'all',
        floors: 'all'
    };

    // Рендер проектов
    function renderProjects() {
        const filtered = projects.filter(project => {
            if (filterState.material !== 'all' && project.material !== filterState.material) return false;
            if (filterState.foundation !== 'all' && project.foundation !== filterState.foundation) return false;
            if (filterState.floors !== 'all' && project.floors !== parseInt(filterState.floors)) return false;
            if (filterState.area === 'small' && project.area >= 80) return false;
            if (filterState.area === 'medium' && (project.area < 80 || project.area > 150)) return false;
            if (filterState.area === 'large' && project.area < 150) return false;
            return true;
        });

        if (filtered.length === 0) {
            projectsGrid.innerHTML = '';
            projectsEmpty.style.display = 'block';
        } else {
            projectsEmpty.style.display = 'none';
            projectsGrid.innerHTML = filtered.map(p => `
                <div class="project-card" data-id="${p.id}">
                    <div class="project-card__image">
                        <img src="${p.image}" alt="${p.title}" loading="lazy">
                        <span class="project-card__badge">${p.badge}</span>
                    </div>
                    <div class="project-card__body">
                        <h3 class="project-card__title">${p.title}</h3>
                        <div class="project-card__specs">
                            <span class="project-card__spec">
                                <svg viewBox="0 0 16 16" fill="currentColor"><rect x="2" y="2" width="12" height="12" rx="1" fill="none" stroke="currentColor" stroke-width="1.5"/></svg>
                                ${p.area} м²
                            </span>
                            <span class="project-card__spec">
                                <svg viewBox="0 0 16 16" fill="currentColor"><rect x="3" y="1" width="10" height="4" rx="0.5" fill="none" stroke="currentColor" stroke-width="1.2"/><rect x="3" y="5" width="10" height="4" rx="0.5" fill="none" stroke="currentColor" stroke-width="1.2"/></svg>
                                ${p.floors} эт.
                            </span>
                            <span class="project-card__spec">
                                <svg viewBox="0 0 16 16" fill="currentColor"><circle cx="8" cy="8" r="6" fill="none" stroke="currentColor" stroke-width="1.5"/></svg>
                                ${p.foundation === 'lentochniy' ? 'Ленточный' : p.foundation === 'svayniy' ? 'Свайный' : 'Плитный'}
                            </span>
                        </div>
                        <span class="project-card__price">${p.price}</span>
                    </div>
                </div>
            `).join('');
        }
    }

    // Фильтр хелпер
    document.querySelectorAll('.filter-buttons').forEach(group => {
        group.addEventListener('click', (e) => {
            const btn = e.target.closest('.filter-btn');
            if (!btn) return;

            group.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filterType = group.dataset.filter;
            filterState[filterType] = btn.dataset.value;

            renderProjects();
        });
    });

    resetFiltersBtn.addEventListener('click', () => {
        filterState.material = 'all';
        filterState.foundation = 'all';
        filterState.area = 'all';
        filterState.floors = 'all';

        document.querySelectorAll('.filter-buttons').forEach(group => {
            group.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            group.querySelector('.filter-btn[data-value="all"]').classList.add('active');
        });

        renderProjects();
    });

    // КАЛЬКУЛЯТОР
    let calcConfig = {
        typePrice: 26000,
        floorsCoef: 1,
        foundationCoef: 1,
        area: 100
    };

    function updateCalculator() {
        const baseCost = calcConfig.area * calcConfig.typePrice;
        const totalCost = Math.round(baseCost * calcConfig.floorsCoef * calcConfig.foundationCoef);
        const formatted = totalCost.toLocaleString('ru-RU') + ' ₽';
        calcResult.textContent = formatted;
    }

    calcTypeButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            calcTypeButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            calcConfig.typePrice = parseInt(btn.dataset.price);
            updateCalculator();
        });
    });

    calcFloorsButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            calcFloorsButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            calcConfig.floorsCoef = parseFloat(btn.dataset.coef);
            updateCalculator();
        });
    });

    calcFoundationButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            calcFoundationButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            calcConfig.foundationCoef = parseFloat(btn.dataset.coef);
            updateCalculator();
        });
    });

    calcAreaInput.addEventListener('input', () => {
        calcConfig.area = parseInt(calcAreaInput.value);
        calcAreaValue.textContent = calcConfig.area + ' м²';
        updateCalculator();
    });

    // Мобильное меню
    burgerBtn.addEventListener('click', () => {
        burgerBtn.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
    });

    mobileMenu.querySelectorAll('.mobile-menu__link').forEach(link => {
        link.addEventListener('click', () => {
            burgerBtn.classList.remove('active');
            mobileMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // Эффект скрола
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Форма обратной связи
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('formName').value.trim();
        const phone = document.getElementById('formPhone').value.trim();
        const service = document.getElementById('formService').value;

        if (!name || !phone) {

            if (!name) document.getElementById('formName').style.borderColor = '#E74C3C';
            if (!phone) document.getElementById('formPhone').style.borderColor = '#E74C3C';
            setTimeout(() => {
                document.getElementById('formName').style.borderColor = '';
                document.getElementById('formPhone').style.borderColor = '';
            }, 2000);
            return;
        }

        console.log('Заявка:', { name, phone, service });

        // Успех заполнения формы
        successModal.classList.add('active');
        document.body.style.overflow = 'hidden';
        contactForm.reset();
    });

    closeModalBtn.addEventListener('click', () => {
        successModal.classList.remove('active');
        document.body.style.overflow = '';
    });

    successModal.addEventListener('click', (e) => {
        if (e.target === successModal) {
            successModal.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    document.getElementById('formName').addEventListener('focus', function() {
        this.style.borderColor = '';
    });
    document.getElementById('formPhone').addEventListener('focus', function() {
        this.style.borderColor = '';
    });

    document.getElementById('formPhone').addEventListener('input', function(e) {
        let value = this.value.replace(/\D/g, '');
        if (value.length > 11) value = value.slice(0, 11);
        let formatted = '+7 (';
        if (value.length > 1) formatted += value.slice(1, 4);
        if (value.length > 4) formatted += ') ' + value.slice(4, 7);
        if (value.length > 7) formatted += '-' + value.slice(7, 9);
        if (value.length > 9) formatted += '-' + value.slice(9, 11);
        this.value = formatted;
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                const headerHeight = header.offsetHeight;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight - 20;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    renderProjects();
    updateCalculator();
});