// src/cp001_confirmar_reserva.js

/**
 * CP-001: Procesa la confirmación de una reserva desde el enlace o botón del correo electrónico recibido.
 * 
 * @param {Object} reserva - Objeto con datos de la reserva
 * @param {string} token - Token/enlace de confirmación recibido en el mail
 * @returns {Object} { exito: boolean, reserva: Object|null, notificacionAdmin: Object|null, error: string|null }
 */
function confirmarReservaDesdeEmail(reserva, token) {
    if (!reserva || !token) {
        return {
            exito: false,
            reserva: null,
            notificacionAdmin: null,
            error: 'Solicitud inválida: Falta token o datos de reserva'
        };
    }

    if (reserva.estado !== 'Pendiente') {
        return {
            exito: false,
            reserva,
            notificacionAdmin: null,
            error: `La reserva no se encuentra en estado Pendiente. Estado actual: ${reserva.estado}`
        };
    }

    const reservaConfirmada = {
        ...reserva,
        estado: 'Confirmada'
    };

    const notificacionAdmin = {
        destinatario: 'admin@agendaya.com',
        asunto: 'Reserva confirmada',
        mensaje: `Reserva confirmada: ${reserva.idReserva} por el usuario ${reserva.usuario}`
    };

    return {
        exito: true,
        reserva: reservaConfirmada,
        notificacionAdmin,
        error: null
    };
}

module.exports = {
    confirmarReservaDesdeEmail
};