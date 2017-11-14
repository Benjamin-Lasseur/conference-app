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
            $('#retour').html('')
            $('#navPresentateurs').addClass("active")
            $('#navSessions').removeClass().addClass("nav-item nav-link")
            $("#main-view").html(template)
            let str = template
            speakers.sort(this.compare).forEach(speaker => {
                str = str + this.newLine(speaker)
            })
            $(".list-group").html(str)

            $(".list-group-item-action").mouseover(function () {
            })
        })
    }
    newLine(speaker) {
        return `<a id="${speaker.id}" href="#speaker-detail/${speaker.id}" class="list-group-item list-group-item-action">${speaker.lastname} ${speaker.firstname}</a>`
    }
    compare(a, b) {
        if (a.lastname < b.lastname)
            return -1;
        if (a.lastname > b.lastname)
            return 1;
        return 0;
    }
}


