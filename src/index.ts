import { PessoaJuridica } from "./PessoaJuridica";
import { Endereco } from "./Endereco";
import { RepositorioPessoaJuridica } from "./RepositorioPessoaJuridica";

const avon: string = '56991441000157';
const shein: string = '45814425000172';
const ifesST: string = '10838653001501';
const cocacola: string = '45997418000153';
const jequiti: string = '07278350000163';
const razer: string = '59717553000102';
const iphone: string = '00623904000173';

var vetPessoaJuridica: Array<string> = [avon, shein, ifesST, cocacola, jequiti, razer, iphone];

const repositorio = new RepositorioPessoaJuridica();

function delay(ms: number) {
    return new Promise<void>((resolve) => {
        setTimeout(() => {
            resolve();
        }, ms);
    })
}

async function executar() {

    console.log("Iniciando a requisição - Aguarde antes de começar\n")
    console.log(new Date().toLocaleTimeString()); 
    //await delay(60000);
    for (let i = 0; i < vetPessoaJuridica.length; i++) {
        try {
            if (i > 0 && i % 3 == 0) {
                await delay(60000);
            }
            const resultadoEmpresa: PessoaJuridica = await fetchCNPJ(vetPessoaJuridica[i]!);
            repositorio.adicionar(resultadoEmpresa);

            console.log("\n" + (i + 1) + " - Consulta ");
            console.log(resultadoEmpresa);
            //console.log("aguardando 20 segundos");
            

        } catch (error: any) {
            console.log(error.message);
        }

    }
    console.log(new Date().toLocaleTimeString()); 
    console.log("todas as pessoas foram processadas!");
    repositorio.listar();
}

executar();

async function fetchCNPJ(cnpj: string): Promise<PessoaJuridica> {
    try {
        if (/[a-zA-Z]/.test(cnpj)) {
            throw new Error("O CNPJ Não deve conter letras");
        }
        const cnpjFormatado = cnpj.replace(/\D/g, "");

        if (cnpjFormatado.length != 14) {
            throw new Error("O CNPJ deve conter 14 caracteres!");
        }

        const response = await fetch(`https://receitaws.com.br/v1/cnpj/${cnpjFormatado}`);
        console.log("Status fetch cnpj " + response.status);

        if (response.status == 429) {
           throw new Error("A API suporta somente três consultas por minuto!");
        }

        if (response.ok) {
            const responseJSON = await response.json();
            console.log("dentro do fetch cnpj")
            const endereco: Endereco = await fetchCEP(responseJSON.cep.replace(/\D/g, ""));
            const obj: PessoaJuridica = new PessoaJuridica(responseJSON.cnpj, responseJSON.fantasia, responseJSON.email, responseJSON.telefone, endereco);
            return obj;

        } else {
            throw new Error("erro ao pegar dados da api!");
        }
    }
    catch (error: any) {
        throw new Error("Erro ao criar pessoa jurídica: " + error.message);
    }
}

async function fetchCEP(cep: string): Promise<Endereco> {
    try {
        const cepFormatado = cep.replace(/\D/g, "");
        console.log(cepFormatado);
        //console.log(`https://viacep.com.br/ws/${cepFormatado}/json/`);

        const response = await fetch(`https://viacep.com.br/ws/${cepFormatado}/json/`);
        console.log("Status fetch cep " + response.status)
        console.log("dentro do fetch cep");
        const responseJSON = await response.json();

        if (responseJSON.erro == true) {
            throw new Error("O CEP consultado não foi encontrado na base de dados");
        }
        console.log(responseJSON.cep);
        const obj = new Endereco(cepFormatado,
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

//fetchCEP("29010030");
//const INTERVAL_MS = 1 * 60 * 1000;
/* const tamanhoLote = 3;
  let index = 0;
 
  const intervalo = setInterval(async () => {
      const lote = vetPessoaJuridica.slice(index,index+tamanhoLote);
 
      for (let i = 0; i < lote.length; i++) {
         let resultado =  await fetchCNPJ(lote[i]!);
          repositorio.adicionar(resultado);
          console.log(repositorio.listar())
          console.log("dentro do for do set interval")
      }
 
      index += tamanhoLote;
 
      if (index >= vetPessoaJuridica.length) {
          clearInterval(intervalo);
          console.log("intervalo terminado");
      }
 
  }, INTERVAL_MS);*/
