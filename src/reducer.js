export const initialState = {
    basket:[
        // {
        //     id:"12321341",
        //     title:"The lean startup:Now Constant innovation creates",
        //     price:11.96,
        //     rating:5,
        //     image: "https://www.amazon.in/images/I/41Um2UPO1yL._SX325_BO1,204,203,200_.jpg"
        // },
        // {
        //     id:"12321341",
        //     title:"The lean startup:Now Constant innovation creates",
        //     price:11.96,
        //     rating:5,
        //     image: "https://www.amazon.in/images/I/41Um2UPO1yL._SX325_BO1,204,203,200_.jpg"
        // },
    ],
    user:null,
};

export const getBasketTotal = (basket) => 
basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
    console.table(action);
    switch(action.type){
        case 'SET_USER':
            return{
                ...state,
                user:action.user,
            }
        case 'ADD_TO_BASKET':
            // Logic for adding item to basket
            return {...state,
                basket:[...state.basket, action.item]
            };
        case 'REMOVE_FROM_BASKET':
            // Logic for Removing item from basket
            
            // We cloned the basket
            let newBasket =[...state.basket];
            
            // We check to see if product excists
            const index =state.basket.findIndex((basketItem) => basketItem.id === action.id);
            if(index >= 0)
            {
                // item excist in basket, remove it...
                newBasket.splice(index, 1);
            }else{
                console.warn(
                    `cant remove product id: ${action.id}` 
                );
            }
            // ...state means return all the stae value with the new basket value
            return { ...state, basket: newBasket };
        default:
            return state;
    }
}

export default reducer;