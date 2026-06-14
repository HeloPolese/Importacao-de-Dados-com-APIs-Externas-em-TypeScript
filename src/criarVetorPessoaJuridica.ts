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

    //await delay(60000);

    for (let i = 0; i < _vetor.length; i++) {
        const cpnj = _vetor[i];

        try {

            if (i > 0 && i % 2 == 0) {
                await delay(21000);
            }

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

    console.log(" - - - - - - listagem de pessoa jurídica - - - - - - ");

    return repositorio.listar();
}
