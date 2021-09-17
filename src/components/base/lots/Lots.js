import {api, stream} from "../../../utils/apiClients";
import {state} from "../../../store";
import {renderView} from "../../../index";
import {Lot} from "../lot/Lot"
import {Loading} from "../loading/Loading";

export function Lots ({ lots }) {
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


    if (!lots) {
        return {
            type: Loading,
            props: {}
        }
    }

    return {
        type: 'div',
        props: {
            className: 'lots',
            children: lots.map((lot) => ({
                type: Lot,
                props: { lot }
            }))
        }
    }
}
