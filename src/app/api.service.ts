import {Api} from './api.model';

export class ApiService {
    private apis: Api[] = [
        new Api('news', 'newsapi.org', 'https://newsapi.org/v2/top-headlines', '450ffc6d353d4287b2f644ada15bbb22'),
        new Api('news', 'newsapi.org', 'https://newsapi.org/v2/top-headlines', '450ffc6d353d4287b2f644ada15bbb22'),
    ];
}