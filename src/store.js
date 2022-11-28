import { legacy_createStore as createStore } from "redux";

const initState = {
    accounts: [
        {
            id: 1,
            customerName: "Israa Othman",
            accountNumber: "123456",
            accountType: "Savings"
        },
        {
            id: 2,
            customerName: "Ahmad Zahran",
            accountNumber: "987654",
            accountType: "Student accounts"
        },
        {
            id: 3,
            customerName: "Rhianna Fletcher",
            accountNumber: "123456",
            accountType: "Savings"
        },
        {
            id: 4,
            customerName: "Adrian Ball",
            accountNumber: "123456",
            accountType: "Savings"
        },
        {
            id: 5,
            customerName: "Mustafa Jarvis",
            accountNumber: "123456",
            accountType: "Savings"
        },
        {
            id: 6,
            customerName: "Ciara Allison",
            accountNumber: "123456",
            accountType: "Savings"
        },
        {
            id: 7,
            customerName: "Mohammed Barrera",
            accountNumber: "123456",
            accountType: "Savings"
        },
    ]

}

const reducer = (state = initState, action) => {
    return state;
}


const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;