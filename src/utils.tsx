import * as jose from 'jose'


export function ParseJWTToken(token: string): any {
    return jose.decodeJwt(token) as any
}
