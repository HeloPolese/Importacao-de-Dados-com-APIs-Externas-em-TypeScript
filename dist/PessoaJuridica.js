"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PessoaJuridica = void 0;
class PessoaJuridica {
    _cnpj;
    _razaoSocial;
    _email;
    _telefone;
    _endereco;
    constructor(cnpj, razaoSocial, email, telefone, endereco) {
        this._cnpj = cnpj;
        this._razaoSocial = razaoSocial;
        this._email = email;
        this._telefone = telefone;
        this._endereco = endereco;
    }
    get cnpj() {
        return this._cnpj;
    }
    get razaoSocial() {
        return this._razaoSocial;
    }
    get email() {
        return this._email;
    }
    get telefone() {
        return this._telefone;
    }
    get endereco() {
        return this._endereco.toString();
    }
    set cnpj(novoCnpj) {

            this._cnpj = novoCnpj;
    }
    set razaoSocial(novaRazaoSocial) {
        this._razaoSocial = novaRazaoSocial;
    }
    set email(novoEmail) {
        this._email = novoEmail;
    }
    set telefone(novoTelefone) {
        this._telefone = novoTelefone;
    }
    set endereco(novoEndereco) {
        this._endereco = novoEndereco;
    }
    toString() {
        return "CNPJ: " + this.cnpj +
            "\nRazão Social: " + this.razaoSocial +
            "\nEmail: " + this.email +
            "\nTelefone: " + this.telefone +
            "\nEndereço: " + this.endereco;
    }
}
exports.PessoaJuridica = PessoaJuridica;
