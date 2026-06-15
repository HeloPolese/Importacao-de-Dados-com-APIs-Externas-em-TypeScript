import { PessoaJuridica } from "../entities/PessoaJuridica";

export class RepositorioPessoaJuridica {
    private _listaPessoaJuridica: Array<PessoaJuridica> = [];

    public adicionar(empresa: PessoaJuridica): boolean {
        this._listaPessoaJuridica.push(empresa);
        return true;
    }

    public listar(): Array<PessoaJuridica> {
        return this._listaPessoaJuridica.slice();
    }

}//fazer verificação se empresas repetem cnpj