import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface ObserverState {
    activeSection: string;
}

const initialState: ObserverState = {
    activeSection: "about",
}

const observerSlice = createSlice({
    name: "observer",
    initialState,
    reducers: {
        setActiveSection: (state, action: PayloadAction<{activeSection: string}>) => {
            state.activeSection = action.payload.activeSection;
        }
    }
})

export const { setActiveSection } = userSlice.actions;
export default observerSlice.reducer;