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
    

    // 棒が伸び縮みする処理
    const loadBar = document.querySelector('.load');  // loadバーを取得
    let isExpanded = false;

    loadBar.addEventListener('click', () => {
        if (isExpanded) {
            loadBar.classList.remove('expanded');  // 伸びた状態を解除
        } else {
            loadBar.classList.add('expanded');    // 伸びた状態にする
        }
        isExpanded = !isExpanded;  // 状態をトグル
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

    document.addEventListener('DOMContentLoaded', function () {
        const loadBar = document.querySelector('.load');
        let isExpanded = false;
    
        loadBar.addEventListener('click', () => {
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

}
