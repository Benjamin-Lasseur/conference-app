const template = `
<div class="row">
<h1>Titre</h1>
</div>
<div class="row">
<p>Description</p>
</div>
<div class="row" id="presentateurs">

</div>

`
export default class SessionDetails {
    constructor(ts) {
        this.ts = ts
    }

    render(id) {

        this.ts.findSessionById(id).then(session => {
            $("#main-view").html(template)
            $('h1').html(session.title)
            $('p').html(session.desc)
            let str = ''
            session.speakers.forEach(speaker => {
                this.ts.findSpeakerById(speaker).then(speakerDetail => {
                    str += this.newPres(speakerDetail)
                })
            })
            $("#presentateurs").html(str)
        })
    }

    newPres(speaker) {
        return `
        <div class="row">
            <div class="col-4">
                <img src="${speaker.image}" alt="Photo de ${speaker.firstname} ${speaker.lastname}" height="42" width="42">
            </div>
            <div class="col-6">
                ${speaker.firstname} ${speaker.lastname}
            </div>
        </div>
        `
    }
}