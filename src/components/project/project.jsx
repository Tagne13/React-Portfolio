import React from 'react';
import './project.css';
import app1 from '../../assets/spin-cycle.png';
import app2 from '../../assets/drinking-al-fresco.png';
import app3 from '../../assets/note-taker.png';
import app4 from '../../assets/work-day-scheduler.png';
import app5 from '../../assets/code-quiz.png';
import app6 from '../../assets/password-generator.png';

const data = [
    {
        id: 1,
        image: app1,
        title: 'Spin Cycle',
        github: 'https://github.com/Tagne13/Spin-Cycle',
        app: 'https://spin-cycle.herokuapp.com/'
    },
    {
        id: 2,
        image: app2,
        title: 'Drinking Al Fresco',
        github: 'https://github.com/cthibodeau09/Drinking_Al_Fresco',
        app: 'https://cthibodeau09.github.io/Drinking_Al_Fresco/'
    },
    {
        id: 3,
        image: app3,
        title: 'Note Taker',
        github: 'https://github.com/Tagne13/11-Note-taker',
        app: 'https://tagne13-note-taker.herokuapp.com/'
    },
    {
        id: 4,
        image: app4,
        title: 'Work Day Scheduler',
        github: 'https://github.com/Tagne13/5-Work-Day-Scheduler',
        app: 'https://tagne13.github.io/5-Work-Day-Scheduler/'
    },
    {
        id: 5,
        image: app5,
        title: 'JavaScript Code Quiz',
        github: 'https://github.com/Tagne13/Code-Quiz-4',
        app: 'https://tagne13.github.io/Code-Quiz-4/'
    },
    {
        id: 6,
        image: app6,
        title: 'Password Generator',
        github: 'https://github.com/Tagne13/Challenge-3',
        app: 'https://tagne13.github.io/Challenge-3/'
    }
];

function Project() {
    return (
        <section id='portfolio'>
            <h2>My Recent Work</h2>

            <div className='container project_container'>
                {data.map(({ id, image, title, github, app }) => {
                    return (
                        <article key={id} className='project_item'>
                            <div className='project_item-image'>
                                <img src={image} alt={title} />
                            </div>
                            <h3>{title}</h3>
                            <div className='project_item-links'>
                                <a 
                                  href={github}
                                  className='btn'
                                  target='_blank'
                                >
                                    GitHub
                                </a>
                                <a
                                  href={app}
                                  className='btn btn-primary'
                                  target='_blank'
                                >
                                    Deployed Application
                                </a>
                            </div>
                        </article>
                    );
                })}
            </div>
        </section>
    );
};

export default Project;