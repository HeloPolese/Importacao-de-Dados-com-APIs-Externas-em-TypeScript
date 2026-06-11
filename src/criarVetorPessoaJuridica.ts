import { RepositorioPessoaJuridica } from "./repositories/RepositorioPessoaJuridica";
import { PessoaJuridica } from "./entities/PessoaJuridica";
import { fetchCNPJ } from "./services/receitaWs";


function delay(ms: number) {
    return new Promise<void>((resolve) => {
        setTimeout(() => {
            resolve();
        }, ms);
    })
}

const repositorio = new RepositorioPessoaJuridica();

export async function criarVetorPessoaJuridica(_vetor: Array<string>): Promise<Array<PessoaJuridica>> {

    console.log("Iniciando a requisição\n");
    console.log(new Date().toLocaleTimeString());



    for (let i = 0; i < _vetor.length; i++) {
        await delay(61000);
        const cpnj = _vetor[i];

        try {

            //if (i > 0 && i % 3 == 0) {
            //await delay(21000);
            //}

            const resultadoEmpresa: PessoaJuridica = await fetchCNPJ(cpnj!);

            repositorio.adicionar(resultadoEmpresa);

            console.log("\n" + (i + 1) + " - Consulta ");
            console.log(resultadoEmpresa);

        }
        catch (error: any) {
            console.log(error.message);
        }

        await delay(21000);

    }
    console.log(new Date().toLocaleTimeString());
    return repositorio.listar();
}
