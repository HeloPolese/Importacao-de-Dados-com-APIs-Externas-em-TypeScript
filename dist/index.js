"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function fetchCNPJ(cnpj) {
    try {
        const response = await fetch(`https://receitaws.com.br/v1/cnpj/${cnpj}`);
        const responseJSON = await response.json();
        console.log(responseJSON);
    }
    catch (error) {
        console.error('Erro ao buscar CNPJ:', error);
    }
}
//const fiore:string = '19900689000139';
const shein = '45814425000172';
const ifesST = '1083865300151';
const cocacola = '45997418000153';
const jequiti = '07278350000163';
const razer = '59717553000102';
const iphone = '00623904000173';
/* =================================================== CEP ============================================================== */
async function fetchCEP(cep) {
    try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const responseJSON = await response.json();
        console.log(responseJSON);
    }
    catch (error) {
    }
}
fetchCEP("29000000");
