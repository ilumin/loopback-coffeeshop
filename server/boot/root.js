module.exports = function(server) {
    var router = server.loopback.Router();
    router.get('/server-status', server.loopback.status());
    server.use(router);
};
