import IArticle from '../../../domain/article/IArticle';
import { LoadingStatus } from '../../common/loading/LoadingStatus';

export default interface IHomeViewState {
    articles: IArticle[];
    loading: LoadingStatus;
};
