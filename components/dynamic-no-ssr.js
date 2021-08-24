import dynamic from 'next/dynamic'

const DynamicComponentWithNoSSR = dynamic(
    () => import('./slideshow'),
    { ssr: false }
)

export function Dynamic() {
    return (<DynamicComponentWithNoSSR />)
}
