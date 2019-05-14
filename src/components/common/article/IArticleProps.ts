import IArticle from '../../../domain/article/IArticle';

export default interface IArticleProps {
    article: IArticle;
    btnContinueReading?: boolean;
}
