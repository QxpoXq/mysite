'use strict';

document.addEventListener('DOMContentLoaded', function () {
    const loadBar = document.querySelector('.load');
    const aboutLink = document.getElementById('about-link');
    const worksLink = document.querySelector('li:nth-child(2) a'); // works のリンク
    const contactLink = document.querySelector('li:nth-child(3) a'); // contact のリンク

    const profileContent = loadBar.querySelector('.profile-content');
    const worksContent = loadBar.querySelector('.works-content');
    const contactContent = loadBar.querySelector('.contact-content');

    let isExpanded = false;
    let currentContent = null;  // 現在表示中のコンテンツを記憶
    let isAnimating = false;    // アニメーション中かどうかを管理

    function toggleContent(content) {
        if (isAnimating) return;  // アニメーション中は処理を無視
        isAnimating = true;       // アニメーション開始

        if (isExpanded) {
            if (currentContent === content) {
                // 同じコンテンツをクリックした場合は閉じる
                hideContent(content);
                setTimeout(() => {
                    loadBar.classList.remove('expanded');  // バーを閉じる
                    isAnimating = false;                   // アニメーション終了
                }, 500);
                isExpanded = false;
            } else {
                // 違うコンテンツをクリックした場合はコンテンツを切り替え
                hideContent(currentContent);
                setTimeout(() => {
                    showContent(content);
                    setTimeout(() => isAnimating = false, 500);  // アニメーション終了
                }, 300); // 現在のコンテンツが完全に隠れた後に表示する
            }
        } else {
            loadBar.classList.add('expanded');
            setTimeout(() => {
                showContent(content);
                setTimeout(() => isAnimating = false, 500);  // アニメーション終了
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

    // メインの div をクリックして開閉できるようにする
    loadBar.addEventListener('click', (event) => {
        const target = event.target;
        if (target === loadBar) {
            // メインの div をクリックした場合は閉じる
            if (isExpanded) {
                hideContent(currentContent);
                setTimeout(() => {
                    loadBar.classList.remove('expanded');
                    isAnimating = false;
                }, 500);
                isExpanded = false;
            }
        } else if (target.classList.contains('profile-content') || 
                   target.classList.contains('works-content') || 
                   target.classList.contains('contact-content')) {
            // コンテンツをクリックした場合は閉じる
            hideContent(currentContent);
            setTimeout(() => {
                loadBar.classList.remove('expanded');
                isAnimating = false;
            }, 500);
            isExpanded = false;
        }
    });

    // ツールチップのコード
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
});
