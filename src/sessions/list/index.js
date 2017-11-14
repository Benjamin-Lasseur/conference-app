
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
            $('.navbar-nav > a').removeClass().addClass("nav-item nav-link")
            $('#navSessions').addClass("active")
           
            $("#main-view").html(template)
            let str = ''
            sessions.sort(this.compare)
            sessions.forEach(session => {
                str += this.newLine(session)
            })
            $(".list-group").html(str)
        })
    }

    newLine(session) {
        return `<a href="#session-detail/${session.id}" class="list-group-item list-group-item-action">${session.title}</a>`
    }

    compare(a,b) {
        if (a.title < b.title)
          return -1;
        if (a.title > b.title)
          return 1;
        return 0;
      }
}