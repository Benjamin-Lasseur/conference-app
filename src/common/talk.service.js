
export default class TalkService {

    constructor() {
        this.speakers = []
        this.sessions = []
    }

    findAllSpeakers() {
        return new Promise((resolve, reject) => {
            if (this.speakers.length == 0) {
                $.get("https://raw.githubusercontent.com/2017-d13/conference-data/master/speakers.json").then(data => {
                    this.speakers = JSON.parse(data)
                    resolve(JSON.parse(data))
                })
            } else {
                resolve(this.speakers)
            }
        })
    }

    findSpeakerById(id) {
        return this.findAllSpeakers().then(speakers => {
            return speakers.find(speaker => { return speaker.id == id })
        })
    }

    findAllSessions() {
        return new Promise((resolve, reject) => {
            if (this.sessions.length == 0) {
                $.get("https://raw.githubusercontent.com/2017-d13/conference-data/master/sessions.json").then(data => {
                    this.sessions = JSON.parse(data)
                    resolve(JSON.parse(data))
                })
            } else {
                resolve(this.sessions)
            }
        })
    }

    findSessionById(id) {
        return this.findAllSessions().then(sessions => {
            return sessions.find(session => { return session.id == id })
        })
    }
}