import React, { FC, useEffect } from "react";

import scss from "./First.module.scss";

import background from "images/background.webp";

const First: FC = () => {

    useEffect(() => {

        const first_tag = document.getElementsByClassName(scss.first)[0] as HTMLElement;
        first_tag.style.height = window.innerHeight + "px";
    });

    return (
        <div className={ scss.first }>
            <img src={ background } className={ scss.background } id="sky" alt="sky" />
            <div className="inner">
                <h1>kyoya0819</h1>
            </div>

            <div className={ scss.box } />
            <div className={ scss.more }>
                <div onClick={ scroll }>
                    <p>More Detail</p>
                    <div className={ scss.scroll_down }>
                        <span /><span /><span />
                    </div>
                </div>
            </div>
        </div>
    );
};


const easeInOut = (x: number) => {
    if (x > 1) return 1;
    if (0 > x) return 0;

    // https://gist.github.com/gre/1650294
    return x<.5 ? 4*x*x*x : (x-1)*(2*x-2)*(2*x-2)+1;
};


const scroll = () => {

    let count = 0;
    const first = window.pageYOffset;
    const height = window.innerHeight - window.pageYOffset;

    const move = function () {
        count++;

        const position = first + height * easeInOut(count / 100);
        window.scrollTo(0, position);

        if (position < window.innerHeight)
            requestAnimationFrame(move);
    };

    requestAnimationFrame(move);
};

export default First;