const jwt = require('jsonwebtoken');

// ============================
// Verificar Token
// ============================

let verificaToken = (req, res, next) => {

    //   let token = req.get('token');
    let token = req.query.token ? req.query.token : req.get('token');

    jwt.verify(token, process.env.SEED, (err, decoded) => {

        if (err) {
            return res.status(401).json({
                ok: false,
                err: {
                    message: 'Token no válido'
                }
            });
        }

        req.usuario = decoded.Usuario;

        next();

    });

};

// ============================
// Verificar adminRole
// ============================

let verificaAdmin_Role = (req, res, next) => {

    let usuario = jwt.decode(req.get('token')).Usuario;

    if (usuario.role === 'ADMIN_ROLE') {
        next();
    } else {
        return res.json({
            ok: false,
            err: {
                message: 'El usuario no es administrador'
            }
        })
    }

}

// ============================
// Verificar token para imagen
// ============================
let verificaTokenImg = (req, res, next) => {

    let token = req.query.token;
    jwt.verify(token, process.env.SEED, (err, decoded) => {

        if (err) {
            return res.status(401).json({
                ok: false,
                err: {
                    message: 'Token no válido'
                }
            });
        }

        req.usuario = decoded.Usuario;
        next();

    });

}


module.exports = {
    verificaToken,
    verificaAdmin_Role,
    verificaTokenImg
}