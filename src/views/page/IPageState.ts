import IArticle from '../../domain/article/IArticle';
import { Loading } from '../../components/loading/Loading';

export default interface IPageState {
    article?: IArticle;
    loading: Loading;
};
