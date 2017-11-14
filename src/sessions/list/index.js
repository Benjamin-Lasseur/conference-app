
const template = `
<div class="list-group">
    
</div>
`

export default class SessionsList {
    constructor(ts) {
        this.ts = ts
    }

    render() {

        this.ts.findAllSessions().then(sessions => {
            $('#retour').html('')
            $('#navSessions').addClass("active")
            $('#navPresentateurs').removeClass().addClass("nav-item nav-link")
            $("#main-view").html(template)
            let str = ''
            sessions.forEach(session => {
                str += this.newLine(session)
            })
            $(".list-group").html(str)
        })
    }

    newLine(session) {
        return `<a href="#session-detail/${session.id}" class="list-group-item list-group-item-action">${session.title}</a>`
    }
}