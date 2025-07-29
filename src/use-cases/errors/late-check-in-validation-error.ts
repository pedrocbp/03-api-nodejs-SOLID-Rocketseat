export class LateCheckInValidationError extends Error {
  constructor() {
    super('The check0in can only validated until 20 minutos of its creation')
  }
}
