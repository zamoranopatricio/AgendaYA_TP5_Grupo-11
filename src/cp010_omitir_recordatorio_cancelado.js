// src/cp010_omitir_recordatorio_cancelado.js

/**
 * CP-010: Verifica que las reservas canceladas sean omitidas del proceso automático de recordatorios.
 * 
 * @param {Object} reserva 
 * @returns {Object} { enviado: boolean, log: string }
 */
function evaluarRecordatorioReservaCancelada(reserva) {
    if (reserva && reserva.estado === 'Cancelada') {
        return {
            enviado: false,
            log: `La reserva ${reserva.idReserva} fue ignorada por no cumplir con el estado requerido.`
        };
    }

    return {
        enviado: true,
        log: 'Recordatorio enviado.'
    };
}

module.exports = {
    evaluarRecordatorioReservaCancelada
};
