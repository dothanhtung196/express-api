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

        this.client.on('error', (err) => createError.InternalServerError(`Redis: ${err}`));
    }

    async setValue(key, value) {
        return new Promise((resolve, reject) => {
            this.client.connect();
            this.client.set(key.toString(), value, (err, result) => {
                if (err) reject(err);
                resolve(result);
                this.client.disconnect();
            });
        })
    }

    async setValueExpired(key, value, expired) {
        return new Promise((resolve, reject) => {
            this.client.connect();
            this.client.set(
                key.toString(),
                value,
                'EX',
                expired,
                (err, result) => {
                    if (err) reject(err);
                    resolve(result);
                this.client.disconnect();
                }
            );
        })
    }

    async getValue(key) {
        return new Promise((resolve, reject) => {
            this.client.connect();
            this.client.get(key.toString(), (err, result) => {
                if (err) reject(err);
                resolve(result);
                this.client.disconnect();
            })
        })
    }

    async removeValue(key) {
        return new Promise((resolve, reject) => {
            this.client.connect();
            this.client.del(key.toString(), (err, result) => {
                if (err) reject(err);
                resolve(result);
                this.client.disconnect();
            })
        });
    }

    ping() {
        return new Promise((resolve, reject) => {
            this.client.connect();
            this.client.ping((error, pong) => {
                if (error) reject(error);
                resolve(pong);
                this.client.disconnect();
            })
        })
    }
}

module.exports = new RedisConnection();