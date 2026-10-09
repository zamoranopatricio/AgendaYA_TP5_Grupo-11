// src/cp007_cancelar_reserva_notificar.js

/**
 * CP-007: Procesa la cancelación de una reserva activa y genera la notificación de correo correspondiente.
 * 
 * @param {Object} reserva - Datos de la reserva a cancelar.
 * @returns {Object} { exito: boolean, reserva: Object, emailNotificacion: Object|null, mensajePantalla: string, error: string|null }
 */
function cancelarReservaYNotificar(reserva) {
    if (!reserva || reserva.estado !== 'Confirmada') {
        return {
            exito: false,
            reserva,
            emailNotificacion: null,
            mensajePantalla: '',
            error: 'No se puede cancelar una reserva que no esté en estado Confirmada.'
        };
    }

    const reservaCancelada = {
        ...reserva,
        estado: 'Cancelada'
    };

    const emailNotificacion = {
        destinatario: reserva.usuario,
        asunto: `Cancelación de reserva ${reserva.idReserva}`,
        mensaje: `La reserva ${reserva.idReserva} para ${reserva.tipoEvento} del ${reserva.fecha} a las ${reserva.horario} ha sido cancelada con éxito.`
    };

    return {
        exito: true,
        reserva: reservaCancelada,
        emailNotificacion,
        mensajePantalla: 'La reserva ha sido cancelada con éxito',
        error: null
    };
}

module.exports = {
    cancelarReservaYNotificar
};