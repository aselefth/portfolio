import React from 'react';
import '../styles/links.scss'
import github from '../icons/github.png'
import vk from '../icons/vk.png'
import tg from '../icons/telegram.png'
import { openInNewTab } from "../data/functions";

function Links() {

    return (
        <div className={'links'}>
            <img src={vk} onClick={() => openInNewTab('https://www.vk.com/mafioznik30')}/>
            <img src={tg} onClick={() => openInNewTab('https://t.me/aselefth')}/>
            <img src={github} onClick={() => openInNewTab('https://github.com/aselefth/')}/>
        </div>
    );
}

export default Links;