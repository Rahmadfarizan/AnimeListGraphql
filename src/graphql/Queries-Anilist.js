import {gql} from '@apollo/client'

export const GET_ANIME_LIST = gql`
  query AnimeList($page: Int, $perPage: Int, $search: String) {
    Page(page: $page, perPage: $perPage) {
      media(search: $search) {
        coverImage {
          large
          color
        }
        title {
          romaji
          english
          native
          userPreferred
        }
        type
        popularity
        averageScore
        id
        tags {
          id
          name
        }
      }
    }
  }
`;

export const GET_ANIME_DETAIL = gql`
  query AnimeDetail($search: String) {
    Media(search: $search){
      id
      title {
        romaji
        english
        native
        userPreferred
      }
      description
      type
      bannerImage 
      coverImage {
        extraLarge
        large
        medium
        color
      }
      popularity
      isAdult
      tags {
        id
        name
      }
    }
  }
`;

export const GET_ANIME_TRENDS = gql`
 query AnimeTrend( $page: Int, $perPage: Int) {
  Page (page: $page, perPage: $perPage) {
    pageInfo {
      total
      currentPage
      lastPage
      hasNextPage
      perPage
    }
    mediaTrends ( sort: TRENDING_DESC) {
      mediaId
      date
      trending
      popularity
      episode
      media{
        title{
          romaji
          english
        }
      }
    }
  }
}
`;