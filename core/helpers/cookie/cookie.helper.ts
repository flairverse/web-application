export class Cookie {
  static set = (name: string, value: string, expireInDays: number) => {
    const d = new Date()
    d.setTime(d.getTime() + expireInDays * 24 * 60 * 60 * 1000)
    let expires = 'expires=' + d.toUTCString()
    document.cookie = name + '=' + value + ';' + expires + ';path=/'
  }

  static get<T>(cname: string): T | null {
    let name = cname + '='
    let ca = document.cookie.split(';')
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i]
      while (c.charAt(0) == ' ') {
        c = c.substring(1)
      }
      if (c.indexOf(name) == 0) {
        return <T>(<unknown>c.substring(name.length, c.length))
      }
    }
    return null
  }
}
