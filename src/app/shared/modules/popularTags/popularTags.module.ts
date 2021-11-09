import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {StoreModule} from '@ngrx/store'
import {EffectsModule} from '@ngrx/effects'
import {RouterModule} from '@angular/router'

import {reducers} from './store/reducers'
import {GetPopularTagsEffect} from './store/effects/getPopularTags.effect'
import {PopularTagsComponent} from './components/popularTags/popularTags.component'
import {LoadingModule} from 'src/app/shared/modules/loading/loading.module'
import {ErrorMessageModule} from 'src/app/shared/modules/errorMessage/errorMessage.module'
import {PopularTagsService} from './services/popularTags.service'

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('popularTags', reducers),
    EffectsModule.forFeature([GetPopularTagsEffect]),
    RouterModule,
    LoadingModule,
    ErrorMessageModule
  ],
  declarations: [PopularTagsComponent],
  exports: [PopularTagsComponent],
  providers: [PopularTagsService]
})
export class PopularTagsModule {}
