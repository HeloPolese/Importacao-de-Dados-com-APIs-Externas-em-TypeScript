import { Endereco } from "../entities/Endereco";
import { verificaCep } from "../validators/validacoes";

export async function fetchCEP(_cep: string): Promise<Endereco> {
    try {
        const cep = verificaCep(_cep);

        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);

        const responseJSON = await response.json();

        if (responseJSON.erro == true) {
            throw new Error("O CEP consultado não foi encontrado na base de dados");
        }

        const obj = new Endereco(cep,
            responseJSON.logradouro,
            responseJSON.bairro,
            responseJSON.uf,
            responseJSON.ddd);

        return obj;

    }
    catch (erro: any) {
        throw new Error(erro.message);
    }
}

