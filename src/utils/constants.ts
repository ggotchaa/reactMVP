export const numbersDeclension = (number: number, words: string[]) => words[number % 100 > 4 && number % 100 < 20 ? 2 : [2, 0, 1, 1, 1, 2][number % 10 < 5 ? Math.abs(number) % 10 : 5]];

export const form_msg = {
  REQUIRED: 'Пожалуйста, заполните это поле',
  EMAIL: 'Пожалуйста, введите корректный e-mail',
  PHONE: 'Пожалуйста, введите корректный номер телефона',
  MIN_LENGTH: (length: number = 6) => `Минимальная длина - ${length} ${numbersDeclension(length, ['символ', 'символа', 'символов'])}`,
  PASSWORD_MISMATCH: 'Пароли не совпадают',
  SELECT_FROM_LIST: 'Пожалуйста, выберите из списка',
  SELECT_MIN_FROM_LIST: (count: number = 1, words: string[] = ['элемент', 'элемента', 'элементов']) => `Пожалуйста, выберите из списка не менее ${count} ${numbersDeclension(count, words)}`,
  SELECT_DATE: 'Пожалуйста, выберите дату',
  SELECT_YEAR: 'Пожалуйста, выберите год',
  LARGE_FILE: 'Вес файла не должен превышать 30мб',
  UNSUPPORTED_FILE_TYPE: 'Недопустимый формат файла',
  SELECT_AVATAR: 'Пожалуйста, выберите аватар',
  SELECT_FILE: 'Пожалуйста, выберите файл',
  INVALID_IP: 'Пожалуйста, введите корректный IP-адрес',
  INCORRECT_IP: 'IP-адрес должен быть меньше или равен 255',
  LARGE_TEXT: (length: number = 255) => `Максимальная длина текста - ${length} ${numbersDeclension(length, ['символ', 'символа', 'символов'])}`,
};
