const OktaJwtVerifier = require('@okta/jwt-verifier')

const oktaJwtVerifier = new OktaJwtVerifier({ issuer: process.env.ISSUER })

module.exports = async(req, res, next) => {
    try {
        var response = {};
        const { authorization } = req.headers

        if (!authorization) {
            response.success = "0";
            response.msg = "Athorization error"
            res.json({ response })
        }


        const [authType, token] = authorization.trim().split(' ')
        if (authType !== 'Bearer') {
            response.success = "0";
            response.msg = "Expected a Bearer token"
            res.json({ response })
        }


        const { claims } = await oktaJwtVerifier.verifyAccessToken(token)
        if (!claims.scp.includes(process.env.SCOPE)) {
            response.success = "0";
            response.msg = "Could not verify the proper scope"
            res.json({ response })

        }
        next()
    } catch (error) {
        next(error.message)
    }
}