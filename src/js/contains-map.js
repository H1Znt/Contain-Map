export default class ErrorRepository {
  constructor() {
    this.errors = new Map();
  }

  translate(code) {
    if (this.errors.has(code)) {
      return this.errors.get(code);
    } else {
      throw new Error(`Ошибка с кодом "${code}" не найдена`);
    }
  }

  addTranslation(code, description) {
    this.errors.set(code, description);
  }
}