'use strict';

{
    document.querySelectorAll('nav ul li').forEach(item => {
        item.addEventListener('mouseover', function() {
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
    
        item.addEventListener('mouseout', function() {
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
    
}