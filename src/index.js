
// Intégration de bootstrap (partie JS)
import 'bootstrap';

// Intégration de boostrap (partie CSS)
import 'bootstrap/dist/css/bootstrap.css'
//Intégration des différents éléments
import TalkService from './common/talk.service'
import Layout from './layout/index'
import Speaker from './speakers/list/index'
import Session from './sessions/list/index'

// intégration JQuery
window.$ = window.jQuery = require('jquery');

const ts = new TalkService()
const speaker = new Speaker(ts)
const session = new Session(ts)
const layout = new Layout()
layout.render()

let routes = new Map();
routes.set('#speakers-list', speaker)
routes.set('#sessions-list', session)

var router = () => {

    if (routes.has(location.hash)) {
        routes.get(location.hash).render()
    }
}

window.addEventListener('load', () => {
    window.onhashchange = () => {
        router();
    };
    router();
});