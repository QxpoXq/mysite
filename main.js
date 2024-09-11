'use strict';

{
    // ナビゲーションのリストアイテムに対するツールチップ処理
    document.querySelectorAll('nav ul li').forEach(item => {
        item.addEventListener('mouseover', function () {
            const tooltipText = this.getAttribute('data-tooltip');

            // ツールチップ要素を作成
            const tooltip = document.createElement('div');
            tooltip.classList.add('tooltip');
            tooltip.innerText = tooltipText;

            // ツールチップをliに追加
            this.appendChild(tooltip);

            // 少し遅れてアニメーションのためにopacityを変化
            setTimeout(() => {
                tooltip.style.opacity = '1';
                tooltip.style.transform = 'translateX(-50%) translateY(-10px)';
            }, 100); // 少しの遅延を加える
        });

        item.addEventListener('mouseout', function () {
            const tooltip = this.querySelector('.tooltip');

            if (tooltip) {
                // ツールチップをフェードアウトさせて削除
                tooltip.style.opacity = '0';
                tooltip.style.transform = 'translateX(-50%) translateY(0)';
                setTimeout(() => {
                    tooltip.remove();
                }, 300); // アニメーション時間と合わせる
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
    
}
