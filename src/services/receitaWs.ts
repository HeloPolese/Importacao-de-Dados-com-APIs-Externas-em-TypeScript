import { PessoaJuridica } from "../entities/PessoaJuridica";
import { Endereco } from "../entities/Endereco";
import { verificaCnpj } from "../validators/validacoes";
import { fetchCEP } from "./viaCep";


export async function fetchCNPJ(_cnpj: string): Promise<PessoaJuridica> {
    try {

        const cnpj = verificaCnpj(_cnpj);

        const response = await fetch(`https://receitaws.com.br/v1/cnpj/${cnpj}`);


        if (response.status == 429) {
            throw new Error("A API suporta somente três consultas por minuto!");
        }



        if (response.ok) {
            const responseJSON = await response.json();

            const endereco: Endereco = await fetchCEP(responseJSON.cep.replace(/\D/g, ""));

            const obj: PessoaJuridica = new PessoaJuridica(responseJSON.cnpj,
                responseJSON.fantasia,
                responseJSON.email,
                responseJSON.telefone,
                endereco);

            return obj;

        }
        else {
            throw new Error("CPNJ não encontrado na base de dados!");
        }
    }
    catch (error: any) {
        throw new Error("Erro ao criar pessoa jurídica: " + error.message);
    }
}
