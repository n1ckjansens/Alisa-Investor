import { IAlisaRequest } from 'src/models/alisaRequest.model';

export const alisaRequest: IAlisaRequest = {
  meta: {
    locale: 'ru-RU',
    timezone: 'Europe/Moscow',
    client_id: 'ru.yandex.searchplugin/5.80 (Samsung Galaxy; Android 4.4)',
    interfaces: {
      screen: {},
      account_linking: {},
    },
  },
  request: {
    command: 'закажи пиццу на улицу льва толстого 16 на завтра',
    original_utterance: 'закажи пиццу на улицу льва толстого, 16 на завтра',
    type: 'SimpleUtterance',
    markup: {
      dangerous_context: false,
    },
    payload: {},
    nlu: {
      tokens: [
        'закажи',
        'пиццу',
        'на',
        'льва',
        'толстого',
        '16',
        'на',
        'завтра',
      ],
      entities: [
        {
          tokens: {
            start: 2,
            end: 6,
          },
          type: 'YANDEX.GEO',
          value: {
            house_number: '16',
            street: 'льва толстого',
          },
        },
        {
          tokens: {
            start: 3,
            end: 5,
          },
          type: 'YANDEX.FIO',
          value: {
            first_name: 'лев',
            last_name: 'толстой',
          },
        },
        {
          tokens: {
            start: 5,
            end: 6,
          },
          type: 'YANDEX.NUMBER',
          value: 16,
        },
        {
          tokens: {
            start: 6,
            end: 8,
          },
          type: 'YANDEX.DATETIME',
          value: {
            day: 1,
            day_is_relative: true,
          },
        },
      ],
    },
  },
  session: {
    message_id: 0,
    session_id: '2eac4854-fce721f3-b845abba-20d60',
    skill_id: '3ad36498-f5rd-4079-a14b-788652932056',
    user_id: '47C73714B580ED2469056E71081159529FFC676A4E5B059D629A819E857DC2F8',
    user: {
      user_id:
        '6C91DA5198D1758C6A9F63A7C5CDDF09359F683B13A18A151FBF4C8B092BB0C2',
      access_token: 'AgAAAAAB4vpbAAApoR1oaCd5yR6eiXSHqOGT8dT',
    },
    application: {
      application_id:
        '47C73714B580ED2469056E71081159529FFC676A4E5B059D629A819E857DC2F8',
    },
    new: true,
  },
  version: '1.0',
};
