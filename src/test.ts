import { criarVetorPessoaJuridica } from "./criarVetorPessoaJuridica";

const vetCnpj = [
    '56991441000157',
    '45814425000172',
    '10838653001501',
    '45997418000153',
    '07278350000163',
    '59717553000102',
    '00623904000173'
];


async function mostrarResultado() {
    const vetPessoaJuridica = await criarVetorPessoaJuridica(vetCnpj);

    vetPessoaJuridica.forEach(objeto => {
        console.log(objeto.toString());
    });

}

mostrarResultado();