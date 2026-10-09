// src/cp009_recordatorio_turno.js

/**
 * CP-009: Procesa la tarea automática de envío de recordatorios de turno.
 * Verifica si falta exactamente 24 horas y si la reserva posee estado "Confirmada".
 * 
 * @param {Object} reserva - Objeto con datos de la reserva en BD.
 * @param {Date} fechaActualSimulada - Fecha y hora simulada del sistema.
 * @returns {Object} { enviado: boolean, log: string, email: Object|null }
 */
function procesarRecordatorioTurno(reserva, fechaActualSimulada) {
    if (!reserva || reserva.estado !== 'Confirmada') {
        return {
            enviado: false,
            log: `Reserva ${reserva?.idReserva} ignorada: el estado no es Confirmada.`,
            email: null
        };
    }

    // Convertir string de fecha/hora (ej: "9/10/2026", "17:00 hs") a objeto Date
    const [dia, mes, anio] = reserva.fecha.split('/');
    const horaLimpia = reserva.horario.replace(' hs', '');
    const fechaReservaDate = new Date(`${anio}-${mes.padStart(2, '0')}-${dia.padStart(2, '0')}T${horaLimpia}:00`);

    // Calcular la diferencia en horas entre la fecha del turno y la fecha actual
    const diferenciaMilisegundos = fechaReservaDate.getTime() - fechaActualSimulada.getTime();
    const diferenciaHoras = diferenciaMilisegundos / (1000 * 60 * 60);

    // Se envía únicamente si faltan exactamente 24 horas
    if (diferenciaHoras === 24) {
        return {
            enviado: true,
            log: `Correo de recordatorio enviado con éxito a ${reserva.usuario}`,
            email: {
                destinatario: reserva.usuario,
                asunto: `Recordatorio de turno - Reserva N.° ${reserva.idReserva}`,
                cuerpo: `Detalles del recordatorio: Reserva N.° ${reserva.idReserva}, ${reserva.tipoEvento}, fecha ${reserva.fecha} y horario ${reserva.horario}.`
            }
        };
    }

    return {
        enviado: false,
        log: `Sin envío: Faltan ${diferenciaHoras} horas para el turno.`,
        email: null
    };
}

module.exports = {
    procesarRecordatorioTurno
};