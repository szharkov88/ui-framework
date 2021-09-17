import './style.css'

import {App} from "./components/app/App";
import {render} from "./framework/render/render";
import {state} from "./store";

export function renderView (state) {
    render(
        App({ state }),
        document.getElementById('root')
    )
}

renderView(state)
