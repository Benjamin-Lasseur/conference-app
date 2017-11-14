export default class SessionsList {
    constructor(ts) {
        this.ts = ts
    }

    render() {

        this.ts.findAllSessions().then(sessions => {
            let str = ""
            sessions.forEach(session => {
                str = str + "\n" + session.title
            })
            $("#main-view").html(str)
        })
    }
}