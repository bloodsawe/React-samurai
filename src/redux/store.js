import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, messages:"Hi, how are you?", likesCount: 12 },
                { id: 2, messages:"First post", likesCount: 11 }, 
            ],
            newPostText:"write",
        },    
        dialogsPage: {
            dialogs: [
                { id: 1, name:"Dimych" },
                { id: 2, name:"Andrew" }, 
                { id: 3, name:"Sveta" }, 
                { id: 4, name:"Sasha" }, 
                { id: 5, name:"Viktor" }, 
                { id: 6, name:"Valera" }
            ],
            messages: [
                { id: 1, message:"Hi" },
                { id: 2, message:"How are you?" }, 
                { id: 3, message:"Bye" }, 
                { id: 4, message:"You" }, 
                { id: 5, message:"You" }, 
                { id: 6, message:"You" }
            ],
            newMessageBody: ""
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log("state changed")
    },

    getState() {
        return  this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._callSubscriber(this._state);

    }
}



export default store;
window.store = store;