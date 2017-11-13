import TalkService from '../../common/talk.service'
export default class SpeakerList {
    constructor() {
        this.ts = new TalkService()
    }

    render() {

        this.ts.findAllSpeakers().then(speakers => {
            let str = ""
            speakers.forEach(speaker => {
                str = str + speaker.lastname + " " + speaker.firstname
            })
            $("#main-view").html(str)
        })
    }
}