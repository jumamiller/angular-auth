export class User {
  public Id: number;
  public name: string;
  public password: string;
  public email: string;
  public phone: string;

  public constructor(Id: number, name: string, password: string, email: string, phone: string)
  {
    this.Id = Id;
    this.name = name;
    this.password = password;
    this.email  = email;
    this.phone  = phone;
  }
}
