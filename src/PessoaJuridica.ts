import { Endereco } from "./Endereco";
export class PessoaJuridica {
    private _cnpj: string;
    private _razaoSocial: string;
    private _email: string;
    private _telefone: string;
    private _endereco: Endereco;

    constructor(cnpj: string, razaoSocial: string, email: string, telefone: string, endereco: Endereco) {
        if (cnpj.length == 14) {
            this._cnpj = cnpj;
        }
        else {
            throw new Error("O CNPJ deve conter 14 caracteres!");
        }
        this._razaoSocial = razaoSocial;
        this._email = email;
        this._telefone = telefone;
        this._endereco = endereco;
    }

    public get cnpj():string{
        return this._cnpj;
    }

    public get razaoSocial():string{
        return this._razaoSocial;
    }

    public get email():string{
        return this._email;
    }

    public get telefone():string{
        return this._telefone;
    }

    public get endereco():string{
        return this._endereco.toString();
    }

    public set cnpj(novoCnpj:string){
        if (novoCnpj.length == 14) {
            this._cnpj = novoCnpj;
        }
        else{
            throw new Error("O CNPJ deve conter 14 caracteres!");
        }
    }

    public set razaoSocial(novaRazaoSocial: string){
        this._razaoSocial = novaRazaoSocial;
    }

    public set email(novoEmail:string){
        this._email = novoEmail;
    }

    public set telefone(novoTelefone:string){
        this._telefone = novoTelefone;
    }

    public set endereco(novoEndereco:Endereco){
        this._endereco = novoEndereco;
    }

    public toString():string{
        return "CNPJ: " + this.cnpj +
        "\nRazão Social: " + this.razaoSocial +
        "\nEmail: " + this.email +
        "\nTelefone: " + this.telefone +
        "\nEndereço: " + this.endereco;
    }
}