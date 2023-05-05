import React from "react"
import { Provider } from "react-redux"
import Counter from "./Counter"
import store from "../app/Store"
const Redux = () => {
    return (
        <div>
            <Provider store={store}>
                <Counter />
            </Provider>
        </div>
    )
}

export default Redux