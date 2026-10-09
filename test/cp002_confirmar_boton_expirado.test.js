// tests/cp002_confirmar_boton_expirado.test.js
const { confirmarReservaConTokenExpirado } = require('../src/cp002_confirmar_boton_expirado.js');

describe('CP-002: Intentar confirmar una reserva con botón expirado', () => {

    it('Debe rechazar la confirmación, mantener la reserva RES-002 en estado "Pendiente" y no notificar al admin', () => {
        // Arrange: Datos exactos del PDF del TP5
        const reservaPendiente = {
            idReserva: 'RES-002',
            usuario: 'invitado@test.com',
            tipoEvento: 'Consulta inicial',
            fecha: '17/07/2026',
            horario: '09:00 hs',
            estado: 'Pendiente'
        };
        const tokenExpirado = 'token-vencido-999';
        const listaTokensVigentes = ['token-activo-100', 'token-activo-101'];

        // Act
        const resultado = confirmarReservaConTokenExpirado(reservaPendiente, tokenExpirado, listaTokensVigentes);

        // Assert
        expect(resultado.exito).toBe(false);
        expect(resultado.error).toBe('El token no es válido o ha expirado');
        expect(resultado.reserva.estado).toBe('Pendiente'); // La reserva permanece Pendiente
        expect(resultado.notificacionAdmin).toBeNull(); // No se notifica al administrador
    });

});