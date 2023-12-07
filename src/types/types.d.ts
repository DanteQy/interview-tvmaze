interface SearchedShow {
    score: number
    show: Show
}

interface Show{
    averageRuntime: number
    dvdCountry?: any
    ended: string
    externals: External
    genres: string[]
    id: number
    image: Image | null
    language: string
    name: string
    network: Network
    officialSite: string
    premiered: string
    rating: Rating
    runtime: number
    schedule: Schedule
    status: string
    summary: string
    type: string
    updated: number
    url: string
    webChannel?: any
    weight: number
    _links: _link
}

interface Schedule {
    time: string
    days: string[]
}

interface Rating {
    average: number
}

interface Country {
    name: string
    code: string
    timezone: string
}

interface Network {
    id: number
    name: string
    country: Country
    officialSite: string
}

interface External {
    tvrage: number
    thetvdb: number
    imdb: string
}

interface Image {
    medium: string
    original: string
}

interface Self {
    href: string
}

interface Previousepisode {
    href: string
}

interface _link {
    self: Self
    previousepisode: Previousepisode
}

interface Schedule {
    time: string
    days: string[]
}
type Genres =
    | 'Action'
    | 'Adult'
    | 'Adventure'
    | 'Anime'
    | 'Children'
    | 'Comedy'
    | 'Crime'
    | 'DIY'
    | 'Drama'
    | 'Espionage'
    | 'Family'
    | 'Fantasy'
    | 'Food'
    | 'History'
    | 'Horror'
    | 'Legal'
    | 'Medical'
    | 'Music'
    | 'Mystery'
    | 'Nature'
    | 'Romance'
    | 'Science-Fiction'
    | 'Sports'
    | 'Supernatural'
    | 'Thriller'
    | 'Travel'
    | 'War'
    | 'Western'

export { Show, Genres }