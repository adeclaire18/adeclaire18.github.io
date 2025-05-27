// Language translations
const translations = {
    'en': {
        'articles': 'Articles',
        'projects': 'Projects',
        'about': 'About Me',
        'switch_to_chinese': '中文',
        'copyright': 'Copyright © 2020'
    },
    'zh': {
        'articles': '文章',
        'projects': '作品',
        'about': '关于我',
        'switch_to_chinese': 'English',
        'copyright': '版权所有 © 2020'
    }
};

// Function to update the page content based on selected language
function updateLanguage(lang) {
    // Update navigation items
    document.querySelectorAll('.breadcrumb .ba').forEach(link => {
        const href = link.getAttribute('href');
        if (href === '/about' && link.textContent.includes('文章')) {
            link.innerHTML = `<b><i>${translations[lang].articles}</i></b>`;
        } else if (href === '/projects') {
            link.textContent = translations[lang].projects;
        } else if (href === '/about' && !link.textContent.includes('文章')) {
            link.textContent = translations[lang].about;
        }
    });

    // Update language switcher text
    const languageSwitch = document.getElementById('language-switch');
    languageSwitch.textContent = translations[lang].switch_to_chinese;

    // Update copyright text
    const footer = document.querySelector('.footer p');
    if (footer) {
        const copyrightText = footer.textContent.split('Hexo')[0];
        footer.innerHTML = `${translations[lang].copyright} <a class="flink" target="_blank" rel="noopener" href="https://hexo.io">Hexo</a>-<a class="flink" target="_blank" rel="noopener" href="https://github.com/sanjinhub/hexo-theme-geek">Geek</a>.`;
    }

    // Store the selected language in localStorage
    localStorage.setItem('preferred-language', lang);
}

// Initialize language based on stored preference or default to Chinese
document.addEventListener('DOMContentLoaded', () => {
    const storedLang = localStorage.getItem('preferred-language') || 'zh';
    updateLanguage(storedLang);

    // Add click event listener to language switcher
    document.getElementById('language-switch').addEventListener('click', (e) => {
        e.preventDefault();
        const currentLang = localStorage.getItem('preferred-language') || 'zh';
        const newLang = currentLang === 'zh' ? 'en' : 'zh';
        updateLanguage(newLang);
    });
}); 