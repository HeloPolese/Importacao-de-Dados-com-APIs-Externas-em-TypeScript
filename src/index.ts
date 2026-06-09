import { PessoaJuridica } from "./PessoaJuridica";
import { RepositorioPessoaJuridica } from "./RepositorioPessoaJuridica";
import { Endereco } from "./Endereco";

function delay(ms: number) {
    return new Promise<void>((resolve) => {
        setTimeout(() => {
            resolve();
        }, ms);
    })
}

const repositorio = new RepositorioPessoaJuridica();

async function fetchCNPJ(cnpj: string): Promise<PessoaJuridica> {
    try {
        await delay(20000);
        const response = await fetch(`https://receitaws.com.br/v1/cnpj/${cnpj}`);

        if (response.status == 429) {
            throw new Error("A API suporta somente três consultas por minuto!");
        }

        if (response.ok) {
            const responseJSON = await response.json();
            const cepEmpresa = responseJSON.cep;

            const enderecoFormatado = await fetchCEP(cepEmpresa.replace(/\D/g, ""));
            //chamo a função fetchCEP para criar um objeto do tipo Endereco, passando o cep da empresa, que é extraído do responseJSON 

            const empresa = new PessoaJuridica(responseJSON.cnpj, responseJSON.fantasia, responseJSON.email, responseJSON.telefone, enderecoFormatado);
            console.log(empresa);

            
            repositorio.adicionar(empresa); //add no new repositorio, criado lá em cima na primeira linha da função
            console.log("Empresas cadastradas:\n" + repositorio.listar());

            return empresa; // TEM QUE RETORNAR EMPRESA, POIS A PROMESSA É QUE RETORNARIAMOS UMA PESSOA JURIDICA.(PROMISE<PESSOAJURIDICA>)

        } else {
            throw new Error("erro ao pegar dados da api!");
        }

    }
    catch (error) {
        throw new Error("Erro ao criar pessoa jurídica");
    }
}


fetchCNPJ("45997418000153");
delay(21000); // slaaaaaaaaaaaaa
fetchCNPJ("59717553000102");


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
        console.log("URL:", `https://viacep.com.br/ws/${cep}/json/`);

        const responseJSON = await response.json();

        if (responseJSON.erro == "true") {
            throw new Error("O CEP consultado não foi encontrado na base de dados");
        }

        const ENDERECO = new Endereco(responseJSON.cep.replace(/\D/g, ""),
            responseJSON.logradouro,
            responseJSON.bairro,
            responseJSON.estado,
            responseJSON.ddd);

        console.log("objeto Endereço criado = \n" + ENDERECO)
        return ENDERECO;

    }
    catch (erro) {
        throw new Error("erro ao buscar cep" + erro);
    }
}
//fetchCEP("29010-030");
