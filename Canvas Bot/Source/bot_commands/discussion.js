module.exports = {
    name: 'discussion',
    execute(message, args, Discord){
        const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
        fetch(`http://IP_ADDRESS:ds/endpoint`)
    }
}
