interface RegisterInterface{
  id: Number,
  mobile: String,
  role: Number,
  email: String,
  last_login: String | null,
  is_superuser: Boolean,
  name: String,
  is_active: Boolean,
  clg_name: String | null,
  roll_no: String,
}

export {
  RegisterInterface
}
