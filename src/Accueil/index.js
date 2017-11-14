const template = `
<img id="photo" src="https://i0.wp.com/diginamic.fr/wp-content/uploads/2016/04/logo-DTA.png" class="rounded mx-auto d-block" alt="Logo">
<h1 class="text-center">Conférence</h1>
<h5 class="text-center">Mardi 13 Octobre 2015 à 20h - Mercredi 14 Octobre 2015 à 1h</h5>
<button type="button" class="btn btn-primary btn-lg btn-block" onclick="location.href='#speakers-list'">Voir les présentateurs</button>
<button type="button" class="btn btn-primary btn-lg btn-block" onclick="location.href='#sessions-list'">Voir les sessions</button>

`

export default class Accueil{

    render(){
        $('.navbar-nav > a').removeClass().addClass("nav-item nav-link")
        $("#main-view").html(template)
    }
}