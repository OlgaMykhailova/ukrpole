export const nameRegex = /^[a-zA-Zа-яА-ЯіІїЇґҐєЄ\s'"-]+$/;

export const emailRegex =
  /^([a-zA-Z0-9]+)([a-zA-Z0-9?'"`#$%&*+_./|^{}~]+)?@([a-zA-Z0-9_\-.]+)([.][a-zA-Z]{2,3})$/;

export const phoneRegex = /(\+38)(\d{3})(\d{3})(\d{2})(\d{2})/;

export const inputPhoneRegex = /^\d{2}\ \d{3} \d{2} \d{2}$/;

export const phoneMask = [
  /[0-9]/,
  /\d/,
  " ",
  /\d/,
  /\d/,
  /\d/,
  " ",
  /\d/,
  /\d/,
  " ",
  /\d/,
  /\d/,
];
