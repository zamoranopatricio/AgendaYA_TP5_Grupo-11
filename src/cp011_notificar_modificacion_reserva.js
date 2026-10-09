// src/cp011_notificar_modificacion_reserva.js

/**
 * CP-011: Modifica la fecha y horario de una reserva confirmada y notifica automáticamente al invitado por correo.
 * 
 * @param {Object} reserva - Objeto con datos originales de la reserva.
 * @param {Object} nuevosDatos - Objeto con la nueva fecha y hora.
 * @returns {Object} { exito: boolean, reservaActualizada: Object, mensajePantalla: string, emailEnviado: Object|null }
 */
function modificarFechaHorarioReserva(reserva, nuevosDatos) {
    if (!reserva || reserva.estado !== 'Confirmada') {
        return {
            exito: false,
            reservaActualizada: reserva,
            mensajePantalla: 'Error: La reserva no se encuentra confirmada.',
            emailEnviado: null
        };
    }

    const { fechaNueva, horaNueva } = nuevosDatos;

    const reservaActualizada = {
        ...reserva,
        fecha: fechaNueva,
        horario: horaNueva
    };

    const emailEnviado = {
        remitente: 'AgendaYa',
        destinatario: reserva.usuario,
        asunto: `Modificación de reserva ${reserva.idReserva}`,
        cuerpo: `Reserva N.° ${reserva.idReserva}, ${reserva.tipoEvento}, fecha ${fechaNueva} y horario ${horaNueva}.`
    };

    return {
        exito: true,
        reservaActualizada,
        mensajePantalla: 'Reserva confirmada con éxito',
        emailEnviado
    };
}

module.exports = {
    modificarFechaHorarioReserva
};