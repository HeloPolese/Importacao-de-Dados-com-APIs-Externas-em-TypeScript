
async function fetchCNPJ(cnpj: string) {

    try {

        const response = await fetch(`https://receitaws.com.br/v1/cnpj/${cnpj}`);
        const responseJSON = await response.json();
        const responseCEP = responseJSON.cep;

        type Empresa  =  {
            endereco: responseJSON.cep;
        };


        /* ====== mostrando ====== */
        console.log(responseJSON);
        console.log(responseCEP);

        /* ====== retornando o objeto empresa em formato JSON ===== */
        return responseJSON;

    } catch (error) {
        console.error('Erro ao buscar CNPJ:', error);
    }
}

const fiore: JSON = fetchCEP('19900689000139');

//const fiore:string = '19900689000139';
const shein: string = '45814425000172';
const ifesST: string = '1083865300151';
const cocacola: string = '45997418000153';
const jequiti: string = '07278350000163';
const razer: string = '59717553000102';
const iphone: string = '00623904000173';
const vetEmpresa: Array<JSON> = [];
vetEmpresa.push(fiore)




/* =================================================== CEP ============================================================== */

async function fetchCEP(cep: string) {

    try {

        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const responseJSON = await response.json();

        console.log(responseJSON);

    } catch (error) {

    }

}