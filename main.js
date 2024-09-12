'use strict';

{
    document.querySelectorAll('nav ul li').forEach(item => {
        let tooltip;  // ツールチップの参照を保持
    
        item.addEventListener('mouseover', function () {
            // すでにツールチップが存在する場合、新しく作成しない
            if (!tooltip) {
                const tooltipText = this.getAttribute('data-tooltip');
                
                // ツールチップ要素を作成
                tooltip = document.createElement('div');
                tooltip.classList.add('tooltip');
                tooltip.innerText = tooltipText;
    
                // ツールチップをliに追加
                this.appendChild(tooltip);
            }
    
            // ツールチップを表示
            setTimeout(() => {
                tooltip.style.opacity = '1';
                tooltip.style.transform = 'translateX(-50%) translateY(-10px)';
            }, 100);
        });
    
        item.addEventListener('mouseout', function () {
            // ツールチップが存在する場合のみ処理
            if (tooltip) {
                // ツールチップをフェードアウト
                tooltip.style.opacity = '0';
                tooltip.style.transform = 'translateX(-50%) translateY(0)';
    
                // アニメーション後に削除
                setTimeout(() => {
                    tooltip.remove();
                    tooltip = null;  // ツールチップの参照をクリア
                }, 300);
            }
        });
    });
    

    

    document.addEventListener('DOMContentLoaded', function () {
        const loadBar = document.querySelector('.load');
        let isExpanded = false;
    
        loadBar.addEventListener('click', () => {
            if (isExpanded) {
                loadBar.classList.remove('expanded');
            } else {
                loadBar.classList.add('expanded');
            }
            isExpanded = !isExpanded;  // 状態をトグル
        });
    });

    
    
    // 既存のコード...

document.addEventListener('DOMContentLoaded', function () {
    const loadBar = document.querySelector('.load');
    const aboutLink = document.getElementById('about-link');
    let isExpanded = false;

    // loadBarクリックでプロフィールをトグル
    loadBar.addEventListener('click', () => {
        toggleProfile();
    });

    // aboutリンククリックでプロフィールをトグル
    aboutLink.addEventListener('click', (event) => {
        event.preventDefault(); // ページ遷移を防ぐ
        toggleProfile();
    });

    function toggleProfile() {
        const profileContent = loadBar.querySelector('.profile-content');

        if (isExpanded) {
            profileContent.style.opacity = '0';  // フェードアウト
            setTimeout(() => {
                loadBar.classList.remove('expanded');  // サイズを縮小
            }, 500);  // フェードアウトが完了してから縮小
        } else {
            loadBar.classList.add('expanded');
            setTimeout(() => {
                profileContent.style.opacity = '1';  // フェードイン
            }, 300);  // サイズが広がってから表示
        }
        isExpanded = !isExpanded;
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const loadBar = document.querySelector('.load');
    const aboutLink = document.getElementById('about-link');
    const worksLink = document.querySelector('li:nth-child(2) a'); // works のリンク
    const contactLink = document.querySelector('li:nth-child(3) a'); // contact のリンク
    let isExpanded = false;
    let currentContent = null;  // 現在表示中のコンテンツを記憶

    const profileContent = loadBar.querySelector('.profile-content');
    const worksContent = loadBar.querySelector('.works-content');
    const contactContent = loadBar.querySelector('.contact-content');

    // about クリックでプロフィールを表示
    aboutLink.addEventListener('click', (event) => {
        event.preventDefault();
        toggleContent(profileContent);
    });

    // works クリックでワークスを表示
    worksLink.addEventListener('click', (event) => {
        event.preventDefault();
        toggleContent(worksContent);
    });

    // contact クリックでコンタクトを表示
    contactLink.addEventListener('click', (event) => {
        event.preventDefault();
        toggleContent(contactContent);
    });

    function toggleContent(content) {
        if (isExpanded) {
            if (currentContent === content) {
                // 同じコンテンツをクリックした場合は閉じる
                hideContent(content);
                setTimeout(() => {
                    loadBar.classList.remove('expanded');  // バーを閉じる
                }, 500);
                isExpanded = false;
            } else {
                // 違うコンテンツをクリックした場合はコンテンツを切り替え
                hideContent(currentContent);
                showContent(content);
            }
        } else {
            loadBar.classList.add('expanded');
            setTimeout(() => {
                showContent(content);
            }, 300);
            isExpanded = true;
        }
        currentContent = content;  // 現在表示中のコンテンツを更新
    }

    function showContent(content) {
        content.classList.add('show');
    }

    function hideContent(content) {
        if (content) {
            content.classList.remove('show');
        }
    }
});


}
