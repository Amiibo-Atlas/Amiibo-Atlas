export interface Amiibo {
    release: any;
    id: any;
    gameSeries: string;
    name: string;
    image: string;
    character: string;
    amiiboSeries: string;
    tail: string;
    head: string;
    addedAt: any;
}

export interface AmiiboState {
    amiibo: {
        selectedAmiibo: Amiibo | null;
    }
}