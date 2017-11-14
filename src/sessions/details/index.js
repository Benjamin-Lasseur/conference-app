const template = `
<div class="row">
    <h1>Titre</h1>
</div>
<div class="row">
    <p>Description</p>
</div>
<div class="row" id="presentateurs">
</div>
<div class="row" id="note">   
</div>

`
export default class SessionDetails {
    constructor(ts) {
        this.ts = ts
    }

    render(id) {

        this.ts.findSessionById(id).then(session => {
            $('#retour').html(`
            <a class="navbar-brand" href="#sessions-list">
                <img class="d-flex align-self-center mr-3" height="50" src="http://pixsector.com/cache/a8009c95/av8a49a4f81c3318dc69d.png"
                alt="retour">
            </a>`
            )
            $('#navSessions').addClass("active")
            $('#navPresentateurs').removeClass().addClass("nav-item nav-link")
            $("#main-view").html(template)
            $('h1').html(session.title)
            $('p').html(session.desc)
            $("#note").html(`<input type="button" class="btn btn-primary" value="Notes" onclick="location.href = '#note/${id}'">`)
            let str = ''

            let reqs = session.speakers.map(id => this.ts.findSpeakerById(id))

            Promise.all(reqs).then((tabResultats) => {
                tabResultats.forEach(speaker => {
                    str += this.newPres(speaker)
                })
                $("#presentateurs").html(str)
            })
        })
    }

    newPres(speaker) {
        return `
        <div class="row col-12">
            <div class="media">
                <img class="align-self-center mr-3" src="./src/images/${speaker.image}" alt="Photo de ${speaker.firstname} ${speaker.lastname}" width=100px height=100px>
                 <div class="media-body">
                     <a href="#speaker-detail/${speaker.id}"<h3 class="mt-0">${speaker.firstname} ${speaker.lastname}</h3></a>
                 </div>
             </div>
        </div>       
        `
    }
}