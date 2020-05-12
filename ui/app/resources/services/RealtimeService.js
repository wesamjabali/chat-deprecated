import Ws from '@adonisjs/websocket-client';

export default class RealtimeService {
    constructor() {
        this.connection = Ws('ws://127.0.0.1:3333');
        this.connection.on('open', () => {
            console.log('connected');
        });

        this.connection.on('ready', () => {
            console.log('disconnected');
        });

        this.connection.on('test', () => {
            console.log('yeup');
        });

        this.connect();
    }

    connect() {
        this.connection.connect();
    }

    sendIt() {
        this.chat.emit('message', 'hello');
    }

    sub() {
        this.chat = this.connection.subscribe('chat');
        this.chat.on('response', payload => {
            console.log('response', payload);
        });

    }
}
