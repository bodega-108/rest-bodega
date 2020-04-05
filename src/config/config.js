// =========================

// PUERTO

// =========================

process.env.PORT = process.env.PORT || 3000;

// =========================

// ENTORNO

// =========================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// =========================

// EXPIRACION DEL TOKEN

// =========================
process.env.CADUCIDAD_TOKEN =60 * 60 * 24 * 30
// =========================

// SEED DEL TOKEN

// =========================

process.env.SEED = process.env.SEED ||'este-es-el-seed-desarrollo';
// =========================

// DATABASE

// =========================

let urlDB;

if(process.env.NODE_ENV === 'dev'){
    urlDB = 'mongodb://localhost/bodega'
}else{
    urlDB = process.env.MONGO_URI;
}

process.env.URLDB = urlDB;