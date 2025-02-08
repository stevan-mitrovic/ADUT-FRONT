export const validationMessage = {
  REQUIRED: "Polje je obavezno!",
  INVALID: (validExample?: string) =>
    `Polje je nevalidno!${
      validExample ? ` Polje bi trebalo biti formata: ${validExample}.` : ""
    }`,
  MIN_LENGTH: (min: number) => `Polje ne može imati manje od ${min} karaktera!`,
  MAX_LENGTH: (max: number) => `Polje ne može imati više od ${max} karaktera!`,
  MIN_VAL: (min: number) => `Polje ne može biti vrijednosti manje od ${min}!`,
    MAX_VAL: (max: number) => `Polje ne može biti vrijednosti veće od ${max}!`,
  PASSWORDS_MATCH: 'Lozinke se moraju poklapati!'
};
