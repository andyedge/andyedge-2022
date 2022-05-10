import Image from './image.model'

export default interface StepsContainer {
    title: string
    preTitle: string
    text: string
    image: Image | {}
}