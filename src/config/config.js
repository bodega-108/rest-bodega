// =========================

// PUERTO

// =========================

process.env.PORT = process.env.PORT || 3000;

// =========================

// ENTORNO

// =========================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

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