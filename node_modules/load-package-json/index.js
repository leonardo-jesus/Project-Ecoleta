module.exports = function(maxDepth){
    var npm
    var path = 'package.json';
    maxDepth = maxDepth || 5;

    while (!npm && maxDepth--) {
        try {
            npm = require(path);
        } catch (e) {
            path = '../' + path;
            continue;
        }

        return npm;
    }
}
