export function Loading () {
    return {
        type: 'div',
        props: {
            className: 'loading',
            children: [
                'Loading...'
            ]
        }
    }
}
