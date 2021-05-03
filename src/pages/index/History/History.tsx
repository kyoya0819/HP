import React from 'react';
import scss from './History.module.scss';

const History = () => {

    return (
        <div className={ scss.history }>
            <div className="inner">
                <h2>経歴 / History</h2>
                <ul className={ scss.list }>
                    <li>2003年 - 神奈川県生まれ</li>
                    <li>2010年 - 千葉県の公立小学校に入学</li>
                    <li>2016年 - 千葉県の公立中学校に入学</li>
                    <li>2017年 - 個人事業主2社の元でWordPressサイトの改修, 保守, SEO対策等を経験。</li>
                    <li>2019年 - 日本大学の附属高校に入学</li>
                    <li>2020年 - 高校1年生までの集大成としてLaravelを使って、良質な質問ができるようなプログラミング専用のQ&Aサイトを立ち上げ</li>
                    <li>2021年 - 株式会社FARMER'Sで、HP作成, Shopifyのテーマ作成, 独自のECプラットフォームの開発を経験</li>
                </ul>
            </div>
        </div>
    );
};

export default History;