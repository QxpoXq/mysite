'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const loadBar = document.querySelector('.load');
    const links = {
        about: document.getElementById('about-link'),
        works: document.querySelector('li:nth-child(2) a'),
        contact: document.querySelector('li:nth-child(3) a')
    };
    const contents = {
        profile: loadBar.querySelector('.profile-content'),
        works: loadBar.querySelector('.works-content'),
        contact: loadBar.querySelector('.contact-content')
    };

    let isExpanded = false;
    let currentContent = null;
    let isAnimating = false;

    const toggleContent = (content) => {
        if (isAnimating) return;
        isAnimating = true;

        if (isExpanded) {
            if (currentContent === content) {
                hideContent(content);
                setTimeout(closeLoadBar, 500);
            } else {
                hideContent(currentContent);
                setTimeout(() => showContent(content), 300);
            }
        } else {
            openLoadBar();
            setTimeout(() => showContent(content), 300);
        }
        currentContent = content;
    };

    const showContent = (content) => {
        content.classList.add('show');
        setTimeout(() => isAnimating = false, 500);
    };

    const hideContent = (content) => {
        if (content) content.classList.remove('show');
    };

    const openLoadBar = () => {
        loadBar.classList.add('expanded');
        isExpanded = true;
    };

    const closeLoadBar = () => {
        loadBar.classList.remove('expanded');
        isExpanded = false;
        isAnimating = false;
    };

    const handleLinkClick = (event, content) => {
        event.preventDefault();
        toggleContent(content);
    };

    links.about.addEventListener('click', (event) => handleLinkClick(event, contents.profile));
    links.works.addEventListener('click', (event) => handleLinkClick(event, contents.works));
    links.contact.addEventListener('click', (event) => handleLinkClick(event, contents.contact));

    loadBar.addEventListener('click', (event) => {
        if (event.target === loadBar && isExpanded) {
            hideContent(currentContent);
            setTimeout(closeLoadBar, 500);
        } else if (['profile-content', 'works-content', 'contact-content'].includes(event.target.classList[0])) {
            hideContent(currentContent);
            setTimeout(closeLoadBar, 500);
        }
    });

    // ツールチップ関連のコードを関数化
    const handleTooltip = (item) => {
        let tooltip = null;

        item.addEventListener('mouseover', function () {
            if (!tooltip) {
                tooltip = document.createElement('div');
                tooltip.classList.add('tooltip');
                tooltip.innerText = this.getAttribute('data-tooltip');
                this.appendChild(tooltip);

                setTimeout(() => {
                    tooltip.style.opacity = '1';
                    tooltip.style.transform = 'translateX(-50%) translateY(-10px)';
                }, 100);
            }
        });

        item.addEventListener('mouseout', () => {
            if (tooltip) {
                tooltip.style.opacity = '0';
                tooltip.style.transform = 'translateX(-50%) translateY(0)';
                setTimeout(() => {
                    tooltip.remove();
                    tooltip = null;
                }, 300);
            }
        });
    };

    document.querySelectorAll('nav ul li').forEach(handleTooltip);
});
