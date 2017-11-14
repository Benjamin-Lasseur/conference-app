const template = `
<h1 id="title "></h1>
<div id="photo"></div>
<h6>Ses liens</h6>
<div class="offset-1" id="lien">
    <a id="lien1" class="row" href="#">Liens1</a>
</div>

<h6>Ses présentations</h6>
<div class="offset-1" id="presentation">
</div>
`

export default class SpeakerDetail {

    constructor(ts) {
        this.ts = ts
    }
    render(id) {
        this.ts.findSpeakerById(id).then(speaker => {
            $('#retour').html(`
            <a class="navbar-brand" href="#speakers-list">
                <img class="d-flex align-self-center mr-3" height="50" src="http://pixsector.com/cache/a8009c95/av8a49a4f81c3318dc69d.png"
                alt="retour">
            </a>`
            )
            $('#main-view').html(template)
            $('#title').html(speaker.lastname + " " + speaker.firstname)
            $('#photo').html(`<img id="photo" src="./src/images/${speaker.image}" class="rounded mx-auto d-block" alt="Photo">`)

            let str1=""
            speaker.socials.forEach(element => {
                str1=str1+`<a class="row" href="${element.link}">${element.class}</a>`
            })
            $('#lien').html(str1)

            this.ts.findAllSessions().then(sessions => {
                let str2 = ""
                sessions.forEach(session => {
                    if (session.speakers) {
                        session.speakers.forEach(speakerid => {
                            if (speakerid == id) {
                                str2 = str2 + ' ' + `<a class="row" href="#session-detail/${session.id}">${session.title}</a>`
                            }
                        })
                    }
                })
                $('#presentation').html(str2)
            })
        })
    }
}