export interface MovieListResponse {
  totalElements: number,
  totalPages: number,
  pageable: Pageable,
  numberOfElements: number,
  size: number,
  content: Movie[],
  number: number,
  sort: {
    unsorted: boolean,
    sorted: boolean,
    empty: boolean
  },
  first: boolean,
  last: boolean,
  empty: boolean
}

export interface Pageable {
  paged: boolean,
  unpaged: boolean,
  pageSize: number,
  pageNumber: number,
  offset: number,
  sort: {
    unsorted: boolean,
    sorted: boolean,
    empty: boolean
  }
}

export interface Movie {
  id: number,
  year: number,
  title: string,
  studios: string[],
  producers: string[],
  winner: boolean
}
