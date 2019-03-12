import IArticle from '../../domain/article/IArticle';
import { Loading } from '../../components/loading/Loading';

export default interface IHomeState {
    articles: IArticle[];
    loading: Loading;
};
