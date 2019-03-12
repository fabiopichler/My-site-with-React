import axios from 'axios';

import IArticle from './IArticle';
import MyApp from '../../MyApp';

export default class ArticleService {

    async index(type: string): Promise<IArticle[]> {
        this.loading();

        try {
            const res = await axios.get<IArticle[]>(`${type}s`);
            MyApp.updateTitle();

            return res.data;

        } catch (err) {
            this.error();

            throw "";
        }
    }

    async show(type: string, slug: string): Promise<IArticle> {
        this.loading();

        try {
            const res = await axios.get<IArticle>(`${type}s?slug=${slug}`);
            MyApp.updateTitle(res.data.title);

            return res.data;

        } catch (err) {
            this.error();

            throw "";
        }
    }

    loading(): void {
        MyApp.updateTitle('Carregando...');
    }

    error(): void {
        MyApp.updateTitle('Página não encontrada');
    }
}
