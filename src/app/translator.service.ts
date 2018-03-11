import {Injectable} from '@angular/core';
import {translate as Translate} from 'google-translate';

@Injectable()
export class TranslatorService {
    translate: Translate;
    projectId = 'translator-197719';

    constructor() {
        this.translate = new Translate({
            projectId: this.projectId,
        });

    }

    translateSentence(message: string, language: string) {
        this.translate
            .translate(message, language)
            .then(results => {
                return results[0];
            })
            .catch(err => {
                console.error('ERROR:', err);
            });
    }
}
