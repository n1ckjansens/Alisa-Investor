import { IAlisaResponse } from 'src/models/alisaResponse.model';

export const alisaResponse: IAlisaResponse = {
  response: {
    text: 'Здравствуйте! Это мы, хороводоведы.',
    tts: 'Здравствуйте! Это мы, хоров+одо в+еды.',
    buttons: [
      {
        title: 'Надпись на кнопке',
        payload: {},
        url: 'https://example.com/',
        hide: true,
      },
    ],
    end_session: false,
  },
  analytics: {
    events: [
      {
        name: 'custom event',
      },
      {
        name: 'another custom event',
        value: {
          field: 'some value',
          'second field': {
            'third field': 'custom value',
          },
        },
      },
    ],
  },
  version: '1.0',
};
