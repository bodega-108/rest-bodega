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
    urlDB = 'mongodb+srv://bodega108:oHnGdtpQqnky5UYS@cluster0-p5emg.mongodb.net/test?retryWrites=true&w=majority'

}

process.env.URLDB = urlDB;