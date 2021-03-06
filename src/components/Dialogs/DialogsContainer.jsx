import { updateNewMessageBodyCreator, sendMessageCreator } from "../../redux/dialogs-reducer"
import Dialogs from './Dialogs';
import { connect } from 'react-redux';


let mapStateToProps =(state) => {
    return {
       dialogsPage: state.dialogsPage
    }
}

let mapDispatchTopProps =(dispatch) => {
    return {
        updateNewMessageBody: (body) => {
            dispatch(updateNewMessageBodyCreator(body))
        },
        
        sendMessage: () => {
            dispatch(sendMessageCreator())
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchTopProps)(Dialogs);

export default DialogsContainer;