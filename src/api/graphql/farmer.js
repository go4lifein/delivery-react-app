import { gql } from '@apollo/client';
import {client} from './client';

export async function getFarmers() {
  return client.query({
    query: gql`
      query GetFarmers {
        getAllFarmers {
          id
          name
          image
          region
          subregion
          latitude
          longitude
        }
      }
    `
  });
}

// export async function addFarmer() {
//   return query(``
//   );
// }