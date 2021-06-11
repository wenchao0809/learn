export class Ajax {
  Interceptors: {
    request: any[],
    response: any[]
  } = {
    request: [],
    response: []
  }
  request(url: string, config: {[k in string]: any}) {
    const req = new XMLHttpRequest()
    req.open(config.method, url)
    req.setRequestHeader('content-type', 'application/json')
    req.responseType = 'json'
    req.onabort = () => {
      console.log('request abort')
    }
    req.onerror = () => {
      console.log('request error')
    }
    req.ontimeout = () => {
      console.log('request timeout')
    }
    
    if (config.method === 'GET') {
    } else {

    }
    return new Promise((resolve, reject) => {
      req.onreadystatechange = () => {
        if (req.status === 200) {
          resolve(req.response)
        } else {
          reject(req.response)
        }
      }
      req.send(config.data)
    })
  }
  post(url: string, data: Record<string, any>, config: Record<string, any>) {
    this.request(url, { method: 'POST', data, ...config })
  }
  get(url: string, params: Record<string, any>, config: Record<string, any>) {
    this.request(url, { method: 'GET', params, ...config })
  }
}
