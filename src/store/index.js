import {api, stream} from "../utils/apiClients";
import {renderView} from "../index";

export let state = {
    time: new Date(),
    lots: null
}

api.get('/lots').then((lots) => {
    state = {
        ...state,
        lots
    }
    renderView(state)

    const onPrice = (data) => {
        state = {
            ...state,
            lots: state.lots.map((lot) => {
                if (lot.id === data.id) {
                    return {
                        ...lot,
                        price: data.price
                    }
                }
                return lot
            })
        }
        return renderView(state)
    }

    lots.forEach((lot) => {
        stream.subscribe(`price-${lot.id}`, onPrice)
    })
})
