import IArticle from '../../../domain/article/IArticle';
import { Loading } from '../../share/loading/Loading';

export default interface IPostState {
    article?: IArticle;
    loading: Loading;
};
