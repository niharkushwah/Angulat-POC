interface LoginInterface{
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
interface TokenResponseInterface{
  access: string;
  refresh: string;
  user: LoginInterface;
}

export {
  LoginInterface, TokenResponseInterface
}
