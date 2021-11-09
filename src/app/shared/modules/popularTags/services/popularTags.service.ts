import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'
import {map} from 'rxjs/operators'

import {PopularTagType} from 'src/app/shared/types/popularTag.type'
import {environment} from 'src/environments/environment'
import {GetPopularTagsResponseInterface} from '../types/getPopularTagsResponse.interface'

@Injectable()
export class PopularTagsService {
  constructor(private http: HttpClient) {}

  getPopularTags(): Observable<PopularTagType[]> {
    const url = environment.apiUrl + '/tags'

    return this.http.get<PopularTagType[]>(url).pipe(
      map((response: any) => {
        return response.tags;
      })
    )
  }
}
