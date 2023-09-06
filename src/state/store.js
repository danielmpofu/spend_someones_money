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
                id: 5,
                name: "Jeff Bezos",
                networthy: 1200000,
                picture: "https://media.cnn.com/api/v1/images/stellar/prod/221114115514-jeff-bezos-lauren-sanchez-intv-extra.jpg?c=original"
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
                picture: "https://i.insider.com/64d230ea7d2e900019460827?width=700"
            },
            {
                id: 4,
                name: "Daniel Tanaka Mpofu",
                networthy: 1130000,
                picture: "https://media.licdn.com/dms/image/D4D03AQFA5fjMmtWWRg/profile-displayphoto-shrink_800_800/0/1690823340761?e=2147483647&v=beta&t=MHJ3TsT7DjfxPdOhgp4BwnG8NeYzmla8P2cEKDwNI8Q"
            },
        ],
        selectedBillionaire: undefined,
        amountSpendable: 0,
        amountBalanceAvailable: 0,
        amountSpent: 0,

        //todo second number in the countdown for balance
        purchaseValue: 0,

        allProducts: [
            {
                name: "yatch",
                price: 120000,
                picture: "https://media.cntraveler.com/photos/633465b708c8c4ac97ede225/16:9/w_2992,h_1683,c_limit/four%20seasons%20yacht-sept22-pr4.jpg",
                id: 1
            },
            {
                name: "tesla model x",
                price: 65000,
                picture: "https://hips.hearstapps.com/autoweek/assets/s3fs-public/press00-model-x-rear-three-quarter-with-doors-open.jpg",
                id: 2
            },
            {
                name: "lamborghini urus",
                price: 92000,
                picture: "https://images.drive.com.au/driveau/image/upload/c_fill,f_auto,g_auto,h_675,q_auto:good,w_1200/cms/uploads/bi36meqa62rhbghgdrkh",
                id: 3
            },
            {
                name: "mazda cx5",
                price: 45000,
                picture: "https://www.topgear.com/sites/default/files/cars-car/image/2021/02/cx-5-skyactiv-g-awd-gt-sport-auto-action-3.jpg",
                id: 4
            },
            {
                name: "Apple Iphone 14 Pro Max",
                price: 1350,
                picture: "https://specials-images.forbesimg.com/imageserve/6321aca5df0a9fa9eee9950b/IMG-2758/960x0.jpg?cropX1=63&cropX2=1519&cropY1=104&cropY2=1074",
                id: 4
            },
            {
                name: "Vacation Tickets",
                price: 1200,
                picture: "https://www.templatables.com/cdn/shop/products/Boarding-Pass-Template-EDITABLE-Boarding-Ticket-Surprise-Vacation-Plane-Ticket-Airline-Trip-Flight-Gift-Holiday-Destination-Fake.jpg?v=1657892682",
                id: 4
            },
            {
                name: "Movie Tickets",
                price: 120000,
                picture: "https://storage.googleapis.com/kami-uploads-public/library-resource-bLYWNaS8SfHV-WkT5LH-movie-ticket-template_orange_blank-png",
                id: 4
            },
            {
                name: "Apple Macbook Pro",
                price: 120000,
                picture: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp-spacegray-select-202206?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1664497359481",
                id: 4
            },
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
        setAmountSpent(state, amountSpent) {
            state.purchaseValue = amountSpent;
        },

        resetApp(state, _) {
            state.selectedBillionaire = undefined;
            state.amountBalanceAvailable = 0.0;
            state.amountSpendable = 0.0;
            state.userCart.products = [];
        },

        buyItems(state, item) {
            //todo add them to cart
            //check to see if it exsist and update its qty
            //otherwise just add it

            if (item.price < state.amountBalanceAvailable) {
                if(!this.itemIsInCart(item)){
                  state.userCart.push(item);
                }else{
               //     find a way to increment the qty.
                }
                state.amountBalanceAvailable = state.amountBalanceAvailable - item.price;
            } else {
                //give a feedback
            }

        },

        sellItems(state, deductAmount) {
            //todo remove them to cart
            //check to see if it exsist and update its qty
            //otherwise just do nothing
            state.amountBalanceAvailable = state.amountBalanceAvailable + deductAmount;
        },
        itemIsInCart(obj,state) {
            for (let i = 0; i < state.userCart.length; i++) {
                if (state.userCart[i] === obj) {
                    return true;
                }
            }
            return false;
        }

    }
});
