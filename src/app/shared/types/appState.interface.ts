import {AuthStateInterface} from "../../auth/types/authState.interface";
import {FeedStateInterface} from "../modules/feed/types/feedState.interface";
import {PopularTagsStateInterface} from "../modules/popularTags/types/popularTagsState.interface";
import {CreateArticleStateInterface} from "../../createArticle/types/createArticleState.interface";

export interface AppStateInterface {
  auth: AuthStateInterface,
  feed: FeedStateInterface,
  popularTags: PopularTagsStateInterface
  article: AppStateInterface,
  createArticle: CreateArticleStateInterface
}
