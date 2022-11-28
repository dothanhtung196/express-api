const redis = require('redis');
var createError = require('http-errors');

class RedisConnection {
    constructor() {
        this.client = redis.createClient({
            legacyMode: true,
            socket: {
                port: 6379,
                host: '202.158.246.41'
            }
        });

        this.client.connect();
        this.client.on('error', (err) => createError.InternalServerError(`Redis: ${err}`));
    }

    async setValue(key, value) {
        return new Promise((resolve, reject) => {
            this.client.set(key.toString(), value, (err, result) => {
                if(err) reject(err);
                resolve(result);
            });
        })
    }

    async setValueExpired(key, value, expired){
        return new Promise((resolve, reject) => {
            this.client.set(
                key.toString(),
                value,
                'EX',
                expired,
                (err, result) => {
                    if(err) reject(err);
                    resolve(result);
                }
            );
        })
    }

    async getValue(key){
        return new Promise((resolve, reject) => {
            this.client.get(key.toString(), (err, result) => {
                if(err) reject(err);
                resolve(result);
            })
        })
    }

    async removeValue(key) {
        return new Promise((resolve, reject) => {
            this.client.del(key.toString(), (err, result) => {
                if (err) reject(err);
                resolve(result);
            })
        });
    }

    ping() {
        return new Promise((resolve, reject) => {
            this.client.ping((error, pong) => {
                if (error) reject(error);
                resolve(pong);
            })
        })
    }
}

module.exports = new RedisConnection();