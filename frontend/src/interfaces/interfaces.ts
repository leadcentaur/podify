export interface ImageObject {
    height: number,
    url: string,
    width: number,
}

export interface QueryItem {
    name: string,
    iurl: string,
    desc: string,
    id: string,
    type: string,
}

export interface QueryResponse {
    available_markets?: [],
    copyrights?: [],
    description: string,
    explicit: boolean,
    id?: string,
    name: string,
    images: [ImageObject],
    type: string,
    external_urls?: {spotify: string}
}

export interface FormElements extends HTMLFormControlsCollection {
    //the input field needs a form tag with name userSearchQuery
    userSearchQuery: HTMLInputElement
}

export interface YourFormElement extends HTMLFormElement {
   readonly elements: FormElements
}
