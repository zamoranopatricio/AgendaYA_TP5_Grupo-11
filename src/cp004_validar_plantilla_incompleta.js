// src/cp004_validar_plantilla_incompleta.js

/**
 * CP-004: Valida el intento de guardado de una plantilla a la cual le falta alguna variable dinámica.
 * 
 * @param {string} plantillaTexto 
 * @param {Array<string>} variablesObligatorias 
 * @returns {Object} { guardado: boolean, error: string|null }
 */
function guardarPlantillaValidandoVariables(plantillaTexto, variablesObligatorias = ['[Nombre_Invitado]', '[Nombre_Prof]', '[Fecha]', '[Hora]']) {
    if (!plantillaTexto || typeof plantillaTexto !== 'string') {
        return {
            guardado: false,
            error: 'No se han colocado las variables dinámicas requeridas.'
        };
    }

    // Identificar las variables obligatorias faltantes
    const faltantes = variablesObligatorias.filter(variable => !plantillaTexto.includes(variable));

    if (faltantes.length > 0) {
        return {
            guardado: false,
            error: `Error: No se han colocado todas las variables dinámicas. Faltante: ${faltantes.join(', ')}`
        };
    }

    return {
        guardado: true,
        error: null
    };
}

module.exports = {
    guardarPlantillaValidandoVariables
};