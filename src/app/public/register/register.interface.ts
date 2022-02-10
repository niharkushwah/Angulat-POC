interface RegisterInterface{
  id: number,
  mobile: string,
  role: number,
  email: string,
  last_login: string | null,
  is_superuser: boolean,
  name: string,
  is_active: boolean,
  clg_name: string | null,
  roll_no: string,
}

export {
  RegisterInterface
}
