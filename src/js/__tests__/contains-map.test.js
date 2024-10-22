import ErrorRepository from "../contains-map";

const errorRepository = new ErrorRepository();

test("Добавление элемента в map", () => {
  errorRepository.addTranslation(404, 'Not Found');
  expect(errorRepository.errors.size).toBe(1)
})

test("Поиск элемента в map", () => {
  const result = errorRepository.translate(404);
  expect(result).toBe('Not Found')
})

test("Проверка вывода ошибки", () => {
  expect(() => {
    errorRepository.translate(101)
  }).toThrow()
})