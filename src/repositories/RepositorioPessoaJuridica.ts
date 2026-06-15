import { PessoaJuridica } from "../entities/PessoaJuridica";

export class RepositorioPessoaJuridica {
    private _listaPessoaJuridica: Array<PessoaJuridica> = [];

    public adicionar(empresa: PessoaJuridica): boolean {

        for (let i = 0; i < this._listaPessoaJuridica.length; i++) {
            if (this._listaPessoaJuridica[i]?.cnpj == empresa.cnpj) {
                throw new Error("Esta empresa já está cadastrada!");
            }
        }

        this._listaPessoaJuridica.push(empresa);
        return true;
    }

    public listar(): Array<PessoaJuridica> {
        return this._listaPessoaJuridica;
    }

}