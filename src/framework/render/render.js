import {evaluate} from "./evaluate";
import {sync} from "./sync";

export function render (virtualDom, realDomRoot) {
    const evaluatedVirtualDom = evaluate(virtualDom)

    const virtualDomRoot = {
        type: realDomRoot.tagName.toLowerCase(),
        props: {
            id: realDomRoot.id,
            ...realDomRoot.attributes,
            children: [
                evaluatedVirtualDom
            ]
        }
    }

    sync(virtualDomRoot, realDomRoot)
}
