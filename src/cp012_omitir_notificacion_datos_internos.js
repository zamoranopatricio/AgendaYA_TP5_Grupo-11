// src/cp012_omitir_notificacion_datos_internos.js

/**
 * CP-012: Modifica campos de una reserva y evalúa si corresponde generar una notificación por email.
 * Solo genera envío si cambian los campos clave: fecha, horario o modalidad.
 * 
 * @param {Object} reservaOriginal 
 * @param {Object} cambios 
 * @returns {Object} { exito: boolean, mensajePantalla: string, logNotificador: string, emailGenerado: boolean }
 */
function modificarCamposReserva(reservaOriginal, cambios) {
    if (!reservaOriginal) {
        return {
            exito: false,
            mensajePantalla: 'Reserva no encontrada.',
            logNotificador: 'Sin operación.',
            emailGenerado: false
        };
    }

    const reservaActualizada = { ...reservaOriginal, ...cambios };

    // Comprobar si hubo cambios en fecha, horario o modalidad
    const cambioClave = (
        (cambios.fecha && cambios.fecha !== reservaOriginal.fecha) ||
        (cambios.horario && cambios.horario !== reservaOriginal.horario) ||
        (cambios.modalidad && cambios.modalidad !== reservaOriginal.modalidad)
    );

    if (cambioClave) {
        return {
            exito: true,
            mensajePantalla: 'Reserva confirmada con éxito',
            logNotificador: 'Notificación enviada por cambio en datos clave.',
            emailGenerado: true
        };
    }

    return {
        exito: true,
        mensajePantalla: 'Reserva confirmada con éxito',
        logNotificador: 'No se generó ningún envío por no haber cambios en la fecha, horario o modalidad.',
        emailGenerado: false
    };
}

module.exports = {
    modificarCamposReserva
};
