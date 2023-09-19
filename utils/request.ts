import { ElMessage } from 'element-plus'

const fetch = (url: string, options?: any): Promise<any>  => {
    const token = useCookie("token");
    const headers = { // headers信息
        'Authorization' : `Bearer ${token.value}`
    }
    const { public: { baseUrl } } = useRuntimeConfig()
    const reqUrl = baseUrl + url
    return new Promise((resolve, reject) => {
        useFetch(reqUrl, { ...options, headers }).then(({ data }: any) => {
            const value = data.value
            if (!data._rawValue) {
                // 这里处理错误回调
                reject(value)
            }else if(data._rawValue.code !== '0'){
                ElMessage({
                    message: data._rawValue.msg,
                    type: 'error',
                })
            } else {
                console.log('40data', data._rawValue)
                resolve(ref(data))
            }
        }).catch((err: any) => {
            reject(err)
        })
    })
}

export default new class Http {

    get(url: string, params?: any): Promise<any> {
        return fetch(url, { method: 'get', params })
    }

    post(url: string, params?: any): Promise<any>  {
        return fetch(url, { method: 'post', params })
    }

    put(url: string, body?: any): Promise<any>  {
        return fetch(url, { method: 'put', body })
    }

    delete(url: string, body?: any): Promise<any>  {
        return fetch(url, { method: 'delete', body })
    }
}