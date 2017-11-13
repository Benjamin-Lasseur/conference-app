
// Intégration de bootstrap (partie JS)
import 'bootstrap';

// Intégration de boostrap (partie CSS)
import 'bootstrap/dist/css/bootstrap.css'

import TalkService from './common/talk.service';
import Layout from './layout/index'
import Speaker from './speakers/list/index'

// intégration JQuery
window.$ = window.jQuery = require('jquery');

const talkService = new TalkService()

const tabSpeakers = talkService.findAllSpeakers()

let layout = new Layout()
layout.render()
const speaker = new Speaker()
speaker.render()
console.log(tabSpeakers)