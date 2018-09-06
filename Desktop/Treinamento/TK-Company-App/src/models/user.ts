//classe para criar modelos de objetos
export class Model {
    constructor(objeto?) {
        Object.assign(this, objeto);
    }
  }
  //classe usuario extendendo a classe Model
  export class User extends Model {
      id: number;
      name: string;
      email: string;
      birthDate: Date;
      createData: Date;
      password: string;
      gender: string;
      status: boolean;
      cpf: string;
  }