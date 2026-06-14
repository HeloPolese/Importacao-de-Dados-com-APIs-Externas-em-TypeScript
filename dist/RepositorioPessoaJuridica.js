"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RepositorioPessoaJuridica = void 0;
class RepositorioPessoaJuridica {
    _listaPessoaJuridica = [];
    adicionar(empresa) {
        this._listaPessoaJuridica.push(empresa);
        return true;
    }
    listar() {
        return this._listaPessoaJuridica;
    }
}
exports.RepositorioPessoaJuridica = RepositorioPessoaJuridica;
