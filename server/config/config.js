//=======================
// puerto
//======================
process.env.PORT = process.env.PORT || 3000;

//=======================
// Entorno
//======================

process.env.NODE_ENV = process.env.NODE_ENV || 'dev'

//=======================
// Vencimiento del token
//======================

process.env.SEED = process.env.SEED || 'este-es-el-seed-desarrollo';

//=======================
// SEED de autenticación
//======================

process.env.CADUCIDAD_TOKEN = '48h';

//=======================
// BD
//=======================

let urlBD;

if (process.env.NODE_ENV === 'dev') {
    urlBD = 'mongodb://localhost:27017/cafe';
} else {
    urlBD = process.env.MONGO_URI;
}
process.env.URLDB = urlBD;

//=======================
// Google Client Id
//=======================

process.env.CLIENT_ID = process.env.CLIENT_ID || '1070183507321-n59f9mggkejjseuok6di9s47p8buec4l.apps.googleusercontent.com';