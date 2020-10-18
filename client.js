require('dotenv').config()
const request = require('request-promise')
const btoa = require('btoa')

const { ISSUER, CLIENT_ID, CLIENT_SECRET, SCOPE } = process.env

const [, , uri, method, body] = process.argv

getToken = async(req, res) => {
    try {
        const token = btoa(`${CLIENT_ID}:${CLIENT_SECRET}`)
        console.log(token)
        const auth = await request({
            uri: `${ISSUER}/v1/token`,
            json: true,
            method: 'POST',
            headers: {
                authorization: `Basic ${token}`
            },
            form: {
                grant_type: 'client_credentials',
                scope: SCOPE
            }
        })
        var token_details = auth.token_type + " " + auth.access_token;
        res.json({ token: token_details })
    } catch (error) {
        console.error(`Error: ${error.message}`)
    }
}