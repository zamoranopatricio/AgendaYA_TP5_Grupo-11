// src/cp008_reintentar_cancelacion.js

/**
 * CP-008: Procesa el intento de cancelación sobre una reserva que ya fue cancelada.
 * 
 * @param {Object} reserva 
 * @returns {Object} { procesado: boolean, avisoInformativo: string, emailEnviado: boolean }
 */
function procesarReintentoCancelacion(reserva) {
    if (reserva && reserva.estado === 'Cancelada') {
        return {
            procesado: false,
            avisoInformativo: 'Esta reserva ya ha sido cancelada anteriormente',
            emailEnviado: false
        };
    }

    return {
        procesado: true,
        avisoInformativo: 'La reserva ha sido cancelada con éxito',
        emailEnviado: true
    };
}

module.exports = {
    procesarReintentoCancelacion
};