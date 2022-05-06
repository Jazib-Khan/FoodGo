let defaultState = {
    theme: "Light"
};
    
let themeReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "SWITCH_THEME": {
            let newState = { ...state };

            newState.theme = action.payload.theme;

            return newState;
        }

        default:
            return state;
    }
};  

export default themeReducer;