import { criarVetorPessoaJuridica } from "./criarVetorPessoaJuridica";
import { fetchCEP } from "./services/viaCep";

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
    
    //console.log("\n - - - - - - Teste cep inválido - - - - - - \n")
    //await fetchCEP("123456v-78");

    const vetPessoaJuridica = await criarVetorPessoaJuridica(vetCnpj);

    console.log("\n - - - - - - Método toString() - - - - - -\n")
    vetPessoaJuridica.forEach(objeto => {
        console.log(objeto.toString());
    });

}

mostrarResultado();