module.exports = {
    apps: [{
        name: 'github-proxy',
        script: './dist/index.js',
        node_args: '-r dotenv/config',
    }],
}
