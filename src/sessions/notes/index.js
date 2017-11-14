const template = `
<div class="row col-12">
    <h1>Titre</h1>
</div>
<div class="row col-12">
<input type="button" class="btn btn-primary" value="Enregistrer" id="enregistrerButton">
</div>
<div class="row col-12">
<textarea class="form-control" id="noteArea" rows="10"></textarea>
</div>
`
export default class SessionNote {

    constructor(ts) {
        this.ts = ts
    }

    render(id) {
        this.ts.findSessionById(id).then(session => {
            $("#main-view").html(template)
            $('#retour').html(`
            <a class="navbar-brand" href="#sessions-list">
                <img class="d-flex align-self-center mr-3" height="50" src="http://pixsector.com/cache/a8009c95/av8a49a4f81c3318dc69d.png"
                alt="retour">
            </a>`
            )
            $('#noteArea').val(localStorage.getItem(`note${id}`))
            $("#enregistrerButton").attr('onclick',`localStorage['note${id}'] = document.getElementById('noteArea').value;`)
            $('h1').html(session.title)
        })
    }
}