import React, {Component} from 'react'
import { Alert, Badge } from 'reactstrap'

class ChatConversa extends Component {
    render(){
        return (
            <div className='chat-conversa'>
                <Badge color="primary">
                    você disse:
                </Badge>
                <Alert color="primary">
                    Bom dia
                </Alert>

                <Badge color="warning">
                    chatbot disse:
                </Badge>
                <Alert>
                    Olá, como posso te ajudar?
                </Alert>
            </div>
        )
    }
}

export default ChatConversa