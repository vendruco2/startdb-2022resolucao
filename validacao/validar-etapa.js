const validarEtapa = (vidasEsperadas, palavraEsperada, letrasChutadasEsperadas, estadoEsperado, jogoForca) => {
    const { vidas, palavra: arrPalavra, letrasChutadas: arrLetrasChutadas } = jogoForca.buscarDadosDoJogo();
    const palavra = arrPalavra.join('');
    const letrasChutadas = arrLetrasChutadas.join('');
    const estado = jogoForca.buscarEstado();

    console.log("vidas:" + vidas + " // Vidas esperadas: " + vidasEsperadas);
    console.log("palavra:" + palavra + " // palavra esperadas: " + palavraEsperada);
    console.log("letrasChutadas:" + letrasChutadas + " // letrasChutadas esperadas: " + letrasChutadasEsperadas);
    console.log("estado:" + estado + " // estado esperadas: " + estadoEsperado);
    console.log(vidas === vidasEsperadas
        && palavra === palavraEsperada
        && letrasChutadas === letrasChutadasEsperadas
        && estado === estadoEsperado);
    console.log("  ");

    return vidas === vidasEsperadas
        && palavra === palavraEsperada
        && letrasChutadas === letrasChutadasEsperadas
        && estado === estadoEsperado;
}

module.exports = validarEtapa;