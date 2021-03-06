import IArticle from '../../../domain/article/IArticle';
import { LoadingStatus } from '../../common/loading/LoadingStatus';

export default interface IPageViewState {
    article?: IArticle;
    loading: LoadingStatus;
};
