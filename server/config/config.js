//=======================
// puerto
//======================
process.env.PORT = process.env.PORT || 3000;

//=======================
// Entorno
//======================

process.env.NODE_ENV = process.env.NODE_ENV || 'dev'

//=======================
// BD
//======================

let urlBD;

if (process.env.NODE_ENV === 'dev') {
    urlBD = 'mongodb://localhost:27017/cafe';
} else {
    urlBD = 'mongodb://cafe-user:solrak123456@ds139341.mlab.com:39341/cafe';
}
process.env.URLDB = urlBD;