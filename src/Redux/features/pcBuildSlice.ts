import {TProduct} from "@/Redux/features/productsSlice";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export const categoryList = ["cpu", "storage", "ram", "monitor", "power_supply", "motherboard"]

type TInitialState = {
    cpu: TProduct | null;
    power_supply: TProduct | null;
    motherboard: TProduct | null;
    storage: TProduct | null;
    ram: TProduct | null;
    monitor: TProduct | null;
}
const initialState: TInitialState = {
    cpu: null,
    power_supply: null,
    motherboard: null,
    storage: null,
    ram: null,
    monitor: null,
}

export const PcBuildSlice = createSlice({
    name: "PcBuildSlice",
    initialState,
    reducers: {
        loadState: (state, action: PayloadAction<TInitialState>) => {
            categoryList.forEach((category) => {
                // @ts-ignore
                const value = action.payload[category]
                if (value) {
                    // @ts-ignore
                    state[category] = value
                }
            })
        },
        addToList: (state: TInitialState, action: PayloadAction<TProduct>) => {
            const condition = categoryList.includes(action.payload.category)
            if (condition) {
                // @ts-ignore
                state[action.payload.category] = action.payload
            } else {
                // @ts-ignore
                state[action.payload.category] = null
            }
            localStorage.setItem('pcBuildData', JSON.stringify(state))
        },
        removeFromList: (state: TInitialState, action: PayloadAction<TProduct>) => {
            const condition = categoryList.includes(action.payload.category)
            if (condition) {
                // @ts-ignore
                state[action.payload.category] = null
            }
            localStorage.setItem('pcBuildData', JSON.stringify(state))
        },
    }
})

export const {loadState, addToList, removeFromList} = PcBuildSlice.actions

export default PcBuildSlice.reducer