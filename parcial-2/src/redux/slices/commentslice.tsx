import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

interface Comment {
    id: number,
    name: string,
    email: string,
    body: string,
    favorite: boolean
}

interface commentsState {
    comments: Comment[]
}

const initialState: commentsState = {
    comments: [],
}

const commentsSlice = createSlice ({
    name: 'comments',
    initialState,
    reducers: {
        setComments(state, action: PayloadAction<Comment[]>) {
            state.comments = action.payload.map(c => ({ ...c, favorite: false}))
        },

        addComment(state, action: PayloadAction<Omit<Comment, 'id' | 'favorite'>>) {
            const newId = state.comments.length > 0
            ? Math.max(...state.comments.map(c => c.id)) + 1
                : 1;
        state.comments.push({ ...action.payload, id: newId, favorite: false });
        },

        editComment(state, action: PayloadAction<Comment>) {
            const index = state.comments.findIndex(c => c.id === action.payload.id);
            if (index !== -1) {
                state.comments[index] = { ...state.comments[index], ...action.payload };
                }
        },

        toggleFavorite(state, action: PayloadAction<number>) {
            const comment = state.comments.find(c => c.id === action.payload);
            if (comment) {
                comment.favorite = !comment.favorite
            }
        }
    }
})

export const { setComments, addComment, editComment, toggleFavorite } = commentsSlice.actions;

export default commentsSlice.reducer;