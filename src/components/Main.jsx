import '../styles/main.scss';
import avatar from '../styles/avatar.jpg'
import html from '../icons/html.png'
import css from '../icons/css.png'
import js from '../icons/js.png'
import react from '../icons/react.png'
import ts from '../icons/typescript.png'
import redux from '../icons/redux.png'
import tailwind from '../icons/tailwind.png'
import git from '../icons/git.png'
import {repos} from '../data/repos';
import {openInNewTab} from "../data/functions";


function Main() {

    return (
        <>
            <div className={'about'}>
               <div className={'info'}>
                   <h1>
                       Привет,
                   </h1>
                   <h1>
                       меня зовут Андрей
                   </h1>
                   <p>
                       Я учусь в университете РТУ МИРЭА на 3 курсе. Люблю изучать новые технологии. Хочу попасть в команду, которая поможет мне развиваться в том, что мне интересно.
                   </p>
               </div>
                <img  src={avatar} alt={'photo'}/>
            </div>
            <div className={'stack'}>
                <h1>
                    Стэк технологий
                </h1>
                <div className={'grid-stack'}>

                    <div className={'stack-item'}>
                        <img src={html} />
                        <p>HTML</p>
                    </div>
                    <div className={'stack-item'}>
                        <img src={css} />
                        <p>css/scss</p>
                    </div>
                    <div className={'stack-item'}>
                        <img src={js} />
                        <p>Javascript</p>
                    </div>
                    <div className={'stack-item'}>
                        <img src={react} />
                        <p>React</p>
                    </div>
                    <div className={'stack-item'}>
                        <img src={ts} />
                        <p>Typescript</p>
                    </div>
                    <div className={'stack-item'}>
                        <img src={redux} />
                        <p>Redux</p>
                    </div>
                    <div className={'stack-item'}>
                        <img src={tailwind} />
                        <p>Tailwind</p>
                    </div>
                    <div className={'stack-item'}>
                        <img src={git} />
                        <p>Git</p>
                    </div>
                </div>
            </div>
            <div className={'projects'}>
                <h1>
                    Проекты
                </h1>
                <div className={'projects-wrapper'}>
                    {repos.map(repo => (
                        <div key={repo.link} className={'repo'}>
                            <div>
                                <h3>
                                    {repo.name}
                                </h3>
                                <p>
                                    {repo.stack.map(tech => (
                                        <span key={tech}>
                                            {tech}
                                        </span>
                                    ))}
                                </p>
                            </div>
                            <p className={'prj-link'} onClick={() => openInNewTab(repo.link)}>
                                Открыть
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Main;