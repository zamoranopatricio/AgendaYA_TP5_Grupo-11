// src/cp005_filtrar_turnos_disponibles.js

/**
 * CP-005: Filtra los turnos de una jornada retornando únicamente los que tienen estado "Disponible".
 * 
 * @param {Array<Object>} turnosConfigurados - Lista completa de turnos en BD
 * @returns {Array<Object>} Lista de turnos con estado "Disponible"
 */
function obtenerTurnosDisponibles(turnosConfigurados = []) {
    if (!Array.isArray(turnosConfigurados)) {
        return [];
    }

    return turnosConfigurados.filter(turno => turno.estado === 'Disponible');
}

module.exports = {
    obtenerTurnosDisponibles
};