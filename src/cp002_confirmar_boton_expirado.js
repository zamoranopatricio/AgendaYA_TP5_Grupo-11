// src/cp002_confirmar_boton_expirado.js

/**
 * CP-002: Valida el intento de confirmación cuando el token o botón está vencido o es inválido.
 * 
 * @param {Object} reserva 
 * @param {string} token 
 * @param {Array<string>} tokensValidosVigentes - Lista de tokens vigentes en el sistema
 * @returns {Object} { exito: boolean, reserva: Object, notificacionAdmin: null, error: string }
 */
function confirmarReservaConTokenExpirado(reserva, token, tokensValidosVigentes = []) {
    if (!token || !tokensValidosVigentes.includes(token)) {
        return {
            exito: false,
            reserva, // La reserva debe permanecer en su estado original
            notificacionAdmin: null,
            error: 'El token no es válido o ha expirado'
        };
    }

    return {
        exito: true,
        reserva: { ...reserva, estado: 'Confirmada' },
        notificacionAdmin: { asunto: 'Reserva confirmada' },
        error: null
    };
}

module.exports = {
    confirmarReservaConTokenExpirado
};