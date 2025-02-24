export const GREETING = 'Привет, я Культурный Бот,\n' +
  'я всегда помогу вам найти достойный и вежливый ответ.\n\n' +
  'Просто напишите мне и я вам отвечу как гопник.';

export const HELP = 'Привет, я Культурный Бот,\n' +
  'просто напишите мне и я вам отвечу как гопник.';

export const NO_ANSWERS = [
  'Давай, давай, нападай!',
  'Чё самый умный?',
  'Чё охуел?',
  'Чё?',
  'Бред не неси',
  'Будешь умничать, наложу бан (или хуй на лицо, тут уже по желанию)',
  'Давай, давай, нападай!',
  'Всё, вызываю Людовика, доигрались, суки',
  'Сейчас я сниму штаны, и ты увидишь, какой бан я на тебя наложу',
  'Тупица',
  'Полурослик',
  'Давай, давай, нападай!',
  'Отстань от меня',
  'Я так устал от вас, господи',
  'Не знаю, что и сказать...',
];

export const SPEED_TOO_OK = [
  'Общаетесь? Ну хорошо, продолжайте.',
  'Вы хорошо себя тут ведёте? Молодцы, не балуйте',
  'Одобряю общение в чате (без секса)',
  'Любо дорого посмотреть на ваш диалог',
  'Любите ли вы секс так, как люблю его я?',
];

export const SPEED_TOO_FAST = [
  'Вот настрочили! Ввожу лимит на минуту минимум',
  'Кто тут не унимается? Я не для того создавал этот чат!',
  'Блядь, не успеваю читать',
  'Пиздец вы говорливые сегодня',
  'А можно помедленнее пиздеть?',
];

export const SPEED_TOO_LOW = [
  'Почему никто не пишет? Мне скучно',
  'Замолкли, как в рот воды набрали...',
  'Не спать!!!',
  'Создайте хотя бы видимость беседы, пожалуйста',
  'Предлагаю обсудить секс. Что думаете?',
];

export const TRIGGERS = [
  [/^кирич?$/i, 'Кто опять упоминает меня всуе? Я занят, поток удаляю'],
  [/^пох(у[йи])?$/i, 'Похуй пидору чулки!'],
  [/^к[оа]роч[ье]?$/i, 'У кого короче, тот дома сидит!'],
  [/^ч[еоё]$/i, 'Хуй в очо!'],
  [/^300$/i, 'Отсоси у тракториста!'],
  [/^трист[ао]$/i, 'Отсоси у тракториста!'],
  [/^нет$/i, 'Пидора ответ!'],
  [/^да$/i, 'Манда!'],
  [/^хо(чу|тим|тят|тел|тела)$/i, 'Хотеть не вредно!'],
  [/^я$/i, 'Головка от хуя!'],
];

export const ANSWER_TO_QUESTION = [
  'И ты думаешь, я буду отвечать тебе? Кто ты, и кто я!',
  'Пока не могу сказать, посмотрим',
  'Не думаю, что тебе понравится ответ',
  'Перенаправляю вопрос Диме',
  'Перенаправляю вопрос Артёму',
  'Как ты надоел мне, честно',
  'И ты смеешь ещё об этом спрашивать?..',
  'Ну почему ваши вопросы такие тупые, господи...',
  'Ещё раз такое спросишь, - бан',
  'Людовика жаль нет, он бы ответил тебе!',
  'Просто ничтожество, тьфу',
  'Не собираюсь тратить на тебя своё драгоценное время',
  'Не знаю что и сказать... Я думал, ты умнее',
  'Давай, давай, нападай!',
];

export const VOWELS = 'аеёиоуэюя'.split('');

export const VOWEL_TO_RHYME = {
  'а': 'хуя',
  'е': 'хуе',
  'ё': 'хуё',
  'и': 'хуи',
  'о': 'хуё',
  'у': 'хую',
  'э': 'хуе',
  'ю': 'хую',
  'я': 'хуя',
};
