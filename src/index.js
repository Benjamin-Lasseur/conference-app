
// Intégration de bootstrap (partie JS)
import 'bootstrap';

// Intégration de boostrap (partie CSS)
import 'bootstrap/dist/css/bootstrap.css'
//Intégration des différents éléments
import TalkService from './common/talk.service'
import Layout from './layout/index'
import Speaker from './speakers/list/index'
import Session from './sessions/list/index'
import SessionDetail from './sessions/details/index'
import SpeakerDetail from './speakers/details/index'

// intégration JQuery
window.$ = window.jQuery = require('jquery');

const ts = new TalkService()
const speaker = new Speaker(ts)
const session = new Session(ts)
const layout = new Layout()
const sessionDetail = new SessionDetail(ts)
layout.render()

let routes = new Map();
routes.set('#speakers-list', speaker)
routes.set('#sessions-list', session)
routes.set('#session-detail', sessionDetail)
routes.set('#speaker-detail', speakerDetail)



var router = () => {
    let route = location.hash.split('/')
    console.log("route[0]="+route[0])
    console.log("route[1]="+route[1])
    routes.get(route[0]).render(route[1])
}


window.addEventListener('load', () => {
    window.onhashchange = () => {
        router();
    };
    router();
});