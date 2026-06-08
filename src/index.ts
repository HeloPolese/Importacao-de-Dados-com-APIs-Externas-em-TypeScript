import { PessoaJuridica } from "./PessoaJuridica";
import { Endereco } from "./Endereco";

async function fetchCNPJ(cnpj: string) {
    try {
     
        const response = await fetch(`https://receitaws.com.br/v1/cnpj/${cnpj}`);
        const responseJSON = await response.json();
        const cep = responseJSON.cep.replace(/\D/g,"");
        await takeData(cep);

    }
    catch (error) {
        console.log('Erro ao buscar CNPJ:', error);
    }
}

fetchCNPJ("45814425000172");
/*
const shein: string = '45814425000172';
const ifesST: string = '1083865300151';
const cocacola: string = '45997418000153';
const jequiti: string = '07278350000163';
const razer: string = '59717553000102';
const iphone: string = '00623904000173';
*/
type endereco = {
    cep: string,
    logradouro:string,
    bairro: string,
    estado: string,
    ddd: string
}
async function fetchCEP(cep: string):Promise<endereco> {
    try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const responseJSON = await response.json();

        if (responseJSON.erro == "true") {
            throw new Error("O CEP consultado não foi encontrado na base de dados");
        }

        return new Promise<endereco>((resolve) => {
            resolve(responseJSON);
        });
    }
    catch (erro) {
        console.log('Erro ao buscar Cep:', erro);
        throw new Error("cuu");
    }
}
async function takeData(_cep:string) {
    let endereco = await fetchCEP(_cep);
    let obj = new Endereco(endereco.cep.replace(/\D/g,""), endereco.logradouro, endereco.bairro, endereco.estado, endereco.ddd);
    console.log(obj);
    return obj;
}

const obj1 = takeData("01001000");
console.log(obj1);


