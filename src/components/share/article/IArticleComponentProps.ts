import IArticle from '../../../domain/article/IArticle';

export default interface IArticleComponentProps {
    article: IArticle;
    btnContinueReading?: boolean;
}
