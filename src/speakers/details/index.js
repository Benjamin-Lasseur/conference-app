const template = `
<h1 id="title "></h1>
<div id="photo"></div>
<h6>Ses liens</h6>
<div class="offset-1">
    <a id="lien1" class="row" href="#">Liens1</a>
    <a id="lien2" class="row" href="#">Liens2</a>
</div>

<h6>Ses présentations</h6>
<div class="offset-1">
<a id="presentation1" class="row" href="#">Presentation1</a>
<a id="presentation2" class="row" href="#">Presentation2</a>
</div>
`

export default class SpeakerDetail {

    constructor(ts) {
        this.ts = ts
    }
    render(id){
        this.ts.findSpeakerById(id).then(speaker =>{
            $('#retour').html(`
            <a class="navbar-brand" href="#speakers-list">
                <img class="d-flex align-self-center mr-3" height="50" src="http://pixsector.com/cache/a8009c95/av8a49a4f81c3318dc69d.png"
                alt="retour">
            </a>`
            )
            $('#main-view').html(template)
            $('#title').html(speaker.lastname+" "+speaker.firstname)
            $('#photo').html(`<img id="photo" src="./src/images/${speaker.image}" class="rounded mx-auto d-block" alt="Photo">`)
            this.ts.findAllSessions().then(sessions => {
                let str = ""
                sessions.foreach(session => {
                    session.speakers.foreach(speaker => {
                        if (speaker.id == id){
                            str = str+' '+""
                        }
                    })
                })
            })
        })
    }
}