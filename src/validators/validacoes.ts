
export function verificaCnpj(_cnpj: string) {
    try {

        if (/[a-zA-Z]/.test(_cnpj)) {
            throw new Error("O CNPJ Não deve conter letras");
        }

        const cnpjFormatado = _cnpj.replace(/\D/g, "");

        return cnpjFormatado;

    } catch (error: any) {

        throw new Error("CNPJ inválido: " + error.message);

    }

}

export function verificaCep(cep: string) {
    try {

        if (/[a-zA-Z]/.test(cep)) {
            throw new Error("O CEP Não deve conter letras");
        }

        const cepFormatado = cep.replace(/\D/g, "");

        return cepFormatado;
    }
    catch (error: any) {

        throw new Error(error.message);

    }
}