const config = {
    server: {
        port: process.env.PORT || 4000,
    },
    database: {
        url: process.env.DB_URL || 'mongodb://localhost:27017/',
    },
    jwt: {
        secret: process.env.JWT_SECRET || 'your-secret-key',
        expiresIn: '1d',
    },
    client: {
        url: 'http://localhost:3000'
    }
};

module.exports = config;