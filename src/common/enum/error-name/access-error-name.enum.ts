export enum AccessErrorName {
  // username/password invalid
  InvalidCredentials = 'invalid_credentials',

  // Token invalid. Eg: trying to use the token not generated by system.
  InvalidToken = 'invalid_token',

  // Token expired.
  ExpiredToken = 'expired_token',

  // Missing token
  MissingToken = 'missing_token',

  MissingInfo = 'missing_info',

  ResetTokenInvalid = 'reset_token_invalid',

  ResetTokenUsed = 'reset_token_used',

  ResetTokenExpired = 'reset_token_expired',

  NotAuthorised = 'not_authorised',

  NotFound = 'not_found',
}
