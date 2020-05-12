'use strict';

class ChatController {
    constructor ({ socket, request }) {
        this.socket = socket;
        this.request = request;

        this.socket.on('message', () => {
            this.socket.emit('response', { message: 'hi' });
        });

    }

}

module.exports = ChatController;
