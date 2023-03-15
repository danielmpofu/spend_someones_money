import Vuex from 'vuex';
import Vue from "vue";


export const store = new Vuex.Store({
    state: {
        billionaires: [
            {
                id: 1,
                name: "Bill Gates",
                networthy: 1200000,
                picture: "https://imageio.forbes.com/specials-images/imageserve/62d599ede3ff49f348f9b9b4/0x0.jpg?format=jpg&crop=821,821,x155,y340,safe&height=416&width=416&fit=bounds"
            }, {
                id: 2,
                name: "Aleco Dangote",
                networthy: 1130000,
                picture: "https://cdn.punchng.com/wp-content/uploads/2018/04/09065641/Dangote.jpg"
            }, {
                id: 3,
                name: "Elon Musk",
                networthy: 1130000,
                picture: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg/1200px-Elon_Musk_Royal_Society_%28crop2%29.jpg"
            }, {
                id: 4,
                name: "Mark Zuckerberg",
                networthy: 1130000,
                picture: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg/1200px-Elon_Musk_Royal_Society_%28crop2%29.jpg"
            },
        ],
        selectedBillionaire: undefined,
        amountSpendable: 0,
        amountBalanceAvailable: 0,
        amountSpent: 0,

        //todo second number in the countdown for balance
        purchaseValue:0,

        allProducts: [
            {name: "yatch", price: 12000, picture: "", id: 1},
            {name: "tesla", price: 12000, picture: "", id: 2},
            {name: "lamboghini", price: 12000, picture: "", id: 3},
            {name: "mazda cx5", price: 120000, picture: "", id: 4},
            {name: "Lattest Iphone", price: 120000, picture: "", id: 4},
            {name: "Vaccation Tickets", price: 120000, picture: "", id: 4},
            {name: "Movie Ticketes", price: 120000, picture: "", id: 4},
        ],
        userCart: {
            products: []
        }

    },
    getters: {},

    mutations: {
        setSelectedBillionaire(state, selectedBillionaire) {
            state.selectedBillionaire = selectedBillionaire;
            state.amountBalanceAvailable = selectedBillionaire.networthy;
            state.amountSpendable = selectedBillionaire.networthy;
        },

        //set purchase value
        setAmountSpent(state, amountSpent){
            state.purchaseValue = amountSpent;
        },

        resetApp(state, _) {
            state.selectedBillionaire = undefined;
            state.amountBalanceAvailable = 0.0;
            state.amountSpendable = 0.0;
            state.userCart.products = [];
        },

        buyItems(state, deductAmount) {
            //todo add them to cart
            //check to see if it exsist and update its qty
            //otherwise just add it

            if (deductAmount < state.amountBalanceAvailable) {
                state.amountBalanceAvailable -= deductAmount;
            } else {
                //give a feedback
            }

        },

        sellItems(state, deductAmount) {
            //todo remove them to cart
            //check to see if it exsist and update its qty
            //otherwise just do nothing
            state.amountBalanceAvailable += deductAmount;


        }

    }
});
