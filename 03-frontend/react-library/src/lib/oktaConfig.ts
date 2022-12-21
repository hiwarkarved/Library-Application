export const oktaConfig = {
    clientId: '0oa7p7nwqcQArmt2M5d7',
    issuer: 'https://dev-04345890.okta.com/oauth2/default',
    redirectUri: 'http://localhost:3000/login/callback',
    scopes: ['openid', 'profile', 'email'],
    pkce: true,
    disableHttpsCheck: true,
}