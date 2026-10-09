// src/cp003_modificar_plantilla.js

/**
 * CP-003: Valida y guarda los cambios de una plantilla si contiene todas las variables dinámicas obligatorias.
 * 
 * @param {string} plantillaTexto - Texto con el contenido editable de la plantilla.
 * @param {Array<string>} variablesObligatorias - Lista de variables requeridas.
 * @returns {Object} { exito: boolean, mensaje: string|null, error: string|null }
 */
function modificarPlantillaExitoso(plantillaTexto, variablesObligatorias = ['[Nombre_Invitado]', '[Nombre_Prof]', '[Fecha]', '[Hora]']) {
    if (!plantillaTexto || typeof plantillaTexto !== 'string') {
        return {
            exito: false,
            mensaje: null,
            error: 'Texto de plantilla inválido o vacío.'
        };
    }

    // Verificar que todas las variables dinámicas obligatorias estén presentes
    const faltantes = variablesObligatorias.filter(variable => !plantillaTexto.includes(variable));

    if (faltantes.length > 0) {
        return {
            exito: false,
            mensaje: null,
            error: `Faltan variables dinámicas obligatorias: ${faltantes.join(', ')}`
        };
    }

    return {
        exito: true,
        mensaje: 'Plantilla actualizada de forma correcta.',
        error: null
    };
}

module.exports = {
    modificarPlantillaExitoso
};