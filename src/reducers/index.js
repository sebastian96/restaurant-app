const reducer = (state, action) => {
    switch(action.type) {
        case 'REGISTER_ANSWER':
            let newAnswer;
            
            const answerExist = state.userAnswer.filter(ans => {
                if(ans.id === action.payload.id && ans.answer === action.payload.answer) {
                    return ans;
                }
            });
            
            if(answerExist.length !== 1) {
                newAnswer = {
                    ...state,
                    userAnswer: [...state.userAnswer, action.payload]
                }
            } else {
                newAnswer = {
                    ...state
                }
            }
            return newAnswer;
        default:
            return state;
    }
}

export default reducer;