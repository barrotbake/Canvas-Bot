module.exports = {
    name: 'discussion',
    execute(message, args, Discord){
        const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
        fetch(`http://76.174.211.132:8080/whatever`)
    }
}