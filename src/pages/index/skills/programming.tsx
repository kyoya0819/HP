import React from 'react';
import skills from '../../../data/skills.json';
import scss from './skills.module.scss';

const ProgrammingSkills = () => {

    return (
        <section>
            <h2>PROGRAMMING SKILLS</h2>
            <ul className={ scss.skills }>
                { skills.programming.map((name, i) => <li key={ i }><span>{ name }</span></li>) }
            </ul>
        </section>
    );
}

export default ProgrammingSkills;