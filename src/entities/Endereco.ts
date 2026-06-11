export class Endereco {
    private _cep: string;
    private _logradouro: string;
    private _bairro: string;
    private _estado: string;
    private _ddd: string;

    constructor(cep: string, logradouro: string, bairro: string, estado: string, ddd: string) {
        this._cep = cep;
        this._logradouro = logradouro;
        this._bairro = bairro;
        this._estado = estado;
        this._ddd = ddd;
    }

    public get cep(): string {
        return this._cep;
    }

    public get logradouro(): string {
        return this._logradouro;
    }

    public get bairro(): string {
        return this._bairro;
    }

    public get estado(): string {
        return this._estado;
    }

    public get ddd(): string {
        return this._ddd;
    }

    public set cep(novoCep: string) {
            this._cep = novoCep;
    }

    public set logradouro(novoLogradouro: string) {
        this._logradouro = novoLogradouro;
    }

    public set bairro(novoBairro: string) {
        this._bairro = novoBairro;
    }

    public set estado(novoEstado: string) {
        this._estado = novoEstado;
    }

    public set ddd(novoDdd: string) {
        this._ddd = novoDdd;
    }

    public toString(): string {
        return "Cep: " + this.cep +
            "\nLogradouro: " + this.logradouro +
            "\nBairro: " + this.bairro +
            "\nEstado: " + this.estado +
            "\nDDD: " + this.ddd;
    }
}