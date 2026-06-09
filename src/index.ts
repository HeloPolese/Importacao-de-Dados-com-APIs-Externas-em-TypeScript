import { PessoaJuridica } from "./PessoaJuridica";
import { Endereco } from "./Endereco";

function delay(ms: number) {
    return new Promise<void>((resolve) => {
        setTimeout(() => {
            resolve();
        }, ms);
    })
}

async function fetchCNPJ(cnpj: string): Promise<PessoaJuridica> {
    try {
        const cnpjFormatado = cnpj.replace(/\D/g,"");

        if (cnpjFormatado.length != 14) {
            throw new Error("O CNPJ deve conter 14 caracteres!");
        }

        await delay(21000);

        const response = await fetch(`https://receitaws.com.br/v1/cnpj/${cnpjFormatado}`);
        console.log(response.status);

        if (response.status == 429) {
            throw new Error("A API suporta somente três consultas por minuto!");
        }

        if (response.ok) {
            const responseJSON = await response.json();
            const endereco: Endereco = await fetchCEP(responseJSON.cep.replace(/\D/g,""));
            const obj = new PessoaJuridica(responseJSON.cnpj, responseJSON.fantasia, responseJSON.email, responseJSON.telefone, endereco);
            console.log(obj);
            return obj;

        } else {
            throw new Error("erro ao pegar dados da api!");
        }

    }
    catch (error) {
        throw new Error("Erro ao criar pessoa jurídica: " + error);
    }
}

fetchCNPJ("10.838653/0007-93");

/*
const shein: string = '45814425000172';
const ifesST: string = '1083865300151';
const cocacola: string = '45997418000153';
const jequiti: string = '07278350000163';
const razer: string = '59717553000102';
const iphone: string = '00623904000173';
*/

async function fetchCEP(cep: string): Promise<Endereco> {
    try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const responseJSON = await response.json();

        if (responseJSON.erro == true) {
            throw new Error("O CEP consultado não foi encontrado na base de dados");
        }

        const obj = new Endereco(responseJSON.cep.replace(/\D/g, ""),
            responseJSON.logradouro,
            responseJSON.bairro,
            responseJSON.uf,
            responseJSON.ddd);

        return obj;

    }
    catch (erro) {
        throw new Error("erro ao buscar cep" + erro);
    }
}

//fetchCEP("29010-030");
