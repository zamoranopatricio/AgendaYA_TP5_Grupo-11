// src/cp006_validar_dia_sin_disponibilidad.js

/**
 * CP-006: Consulta la disponibilidad horaria para una jornada. Si no hay turnos disponibles,
 * retorna un arreglo vacío junto con el mensaje informativo exacto del sistema.
 * 
 * @param {Array<Object>} turnosConfigurados 
 * @returns {Object} { bloquesDisponibles: Array, mensajeInformativo: string|null }
 */
function consultarDisponibilidadJornada(turnosConfigurados = []) {
    const disponibles = turnosConfigurados.filter(turno => turno.estado === 'Disponible');

    if (disponibles.length === 0) {
        return {
            bloquesDisponibles: [],
            mensajeInformativo: 'No hay turnos disponibles para la fecha seleccionada. Por favor, elija otra fecha.'
        };
    }

    return {
        bloquesDisponibles: disponibles,
        mensajeInformativo: null
    };
}

module.exports = {
    consultarDisponibilidadJornada
};