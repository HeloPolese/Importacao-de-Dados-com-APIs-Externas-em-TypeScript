"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Endereco = void 0;
class Endereco {
    _cep;
    _logradouro;
    _bairro;
    _estado;
    _ddd;
    constructor(cep, logradouro, bairro, estado, ddd) {
        if (cep.length == 8) {
            this._cep = cep;
        }
        else {
            throw new Error("O cep deve conter 8 dígitos!");
        }
        this._logradouro = logradouro;
        this._bairro = bairro;
        this._estado = estado;
        this._ddd = ddd;
    }
    get cep() {
        return this._cep;
    }
    get logradouro() {
        return this._logradouro;
    }
    get bairro() {
        return this._bairro;
    }
    get estado() {
        return this._estado;
    }
    get ddd() {
        return this._ddd;
    }
    set cep(novoCep) {
        if (novoCep.length == 8) {
            this._cep = this.cep;
        }
        else {
            throw new Error("O cep deve conter 8 dígitos!");
        }
    }
    set logradouro(novoLogradouro) {
        this._logradouro = novoLogradouro;
    }
    set bairro(novoBairro) {
        this._bairro = novoBairro;
    }
    set estado(novoEstado) {
        this._estado = novoEstado;
    }
    set ddd(novoDdd) {
        this._ddd = novoDdd;
    }
    toString() {
        return "Cep: " + this.cep +
            "\nLogradouro: " + this.logradouro +
            "\nBairro: " + this.bairro +
            "\nEstado: " + this.estado +
            "\nDDD: " + this.ddd;
    }
}
exports.Endereco = Endereco;
