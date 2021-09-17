import {state} from "../../../store";
import {renderView} from "../../../index";

export function Clock ({ time }) {
    const isDay = time.getHours() >= 7 && time.getHours() <= 21

    setInterval(() => {
        state = {
            ...state,
            time: new Date(),
        }

        renderView(state)
    }, 1000)

    return {
        type: 'div',
        props: {
            className: 'clock',
            children: [
                {
                    type: 'span',
                    props: {
                        className: 'value',
                        children: [
                            time.toLocaleString()
                        ]
                    }
                },
                {
                    type: 'span',
                    props: {
                        className: isDay ? 'icon day' : 'icon night',
                    }
                }
            ]
        }
    }
}
