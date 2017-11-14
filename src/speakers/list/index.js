

export default class SpeakerList {
    constructor(ts) {
        this.ts = ts
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