
export default interface IArticle {
    id: number;
    type: string;
    title: string;
    slug: string;
    date_posted: string;
    date_modified: string;
    content: string;
    user_id: number;
    user_username: string;
    user_fullName: string;
    user_bio: string;
    user_website: string;
    user_avatar: string;
}
