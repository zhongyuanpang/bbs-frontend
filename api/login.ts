import Http from '@/utils/request'

/**
 * 用户注册
 */
export const register = (params: any) => {
    return Http.post('/user/register', params)
}

/**
 * 发送验证码
 */
export const sendCode = (params: any) => {
    return Http.post('/user/sendCode', params)
}

/**
 * 用户登录
 */
export const login = (params: any) => {
    return Http.post('/user/login', params)
}