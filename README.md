# gin

Gin is a small yet powerful nginx configuration file generator, made for use in my old reverse proxy.

Sample configuration:

```js
const gin = require('./gin/');

const listener =
    (...args) =>
    (server) =>
        server.listen('443', 'ssl', 'http2', ...args).listen('[::]:443', 'ssl', 'http2', ...args);

const letsEncryptForDomain = (domain) => (server) =>
    server
        .sslCertificate(`/etc/letsencrypt/live/${domain}/fullchain.pem`)
        .sslCertificateKey(`/etc/letsencrypt/live/${domain}/privkey.pem`)
        .sslTrustedCertificate(`/etc/letsencrypt/live/${domain}/chain.pem`);

const ssl = letsEncryptForDomain('example.com');

const proxyHead = (location) =>
    location
        .proxySetHeader('Host', '$http_host')
        .proxySetHeader('X-Forwarded-For', '$remote_addr')
        .proxySetHeader('Upgrade', '$http_upgrade')
        .proxySetHeader('Connection', '$connection_upgrade');

const makeProxy = (name, target) => (server) =>
    server
        .use(listener())
        .serverName(name)
        .use(ssl)
        .location('/', (location) => location.proxyPass(target).use(proxyHead));

const makeProxyServer = (name, target) => (http) => http.server(makeProxy(name, target));

console.log(
    gin((file) =>
        file
            .events((events) => events)
            .http((http) =>
                http
                    .map('$http_upgrade', '$connection_upgrade', (map) => map.mapping('default', 'upgrade').mapping('""', 'close'))
                    .use(makeProxyServer('example.com', 'http://10.0.1.108:80'))
                    .use(makeProxyServer('other.example.com', 'http://10.0.1.108:8080'))
            )
    ).toString()
);
```
