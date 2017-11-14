import "./sp.css"
const template = `
<div class="list-group">

</div>
`

export default class SpeakerList {
    constructor(ts) {
        this.ts = ts
    }

    render() {

        this.ts.findAllSpeakers().then(speakers => {
            $("#main-view").html(template)
            let str = template
            speakers.forEach(speaker => {
                str = str + this.newLine(speaker)
            })
            $(".list-group").html(str)

            $(".list-group-item-action").mouseover(function(){
            })
        })
    }
    newLine(speaker) {
        return `<a id="${speaker.id}" href="#speaker-detail/${speaker.id}" class="list-group-item list-group-item-action">${speaker.firstname} ${speaker.lastname}</a>`
    }
}


