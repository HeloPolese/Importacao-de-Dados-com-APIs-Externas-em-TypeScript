
export function verificaCnpj(_cnpj: string) {
    try {

        if (/[a-zA-Z]/.test(_cnpj)) {
            throw new Error("O CNPJ Não deve conter letras");
        }

        const cnpjFormatado = _cnpj.replace(/\D/g, "");

        if (cnpjFormatado.length != 14) {
            throw new Error("O CNPJ deve conter 14 digitos!");
        }

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

        if (cepFormatado.length != 8) {
            throw new Error("O CEP deve conter 8 digitos!");
        }

        return cepFormatado;
    }
    catch (error: any) {

        throw new Error(error.message);

    }
}