// tests/cp001_confirmar_reserva.test.js
const { confirmarReservaDesdeEmail } = require('../src/cp001_confirmar_reserva.js');

describe('CP-001: Confirmar reserva desde el correo electrónico recibido', () => {

    it('Debe cambiar el estado de la reserva RES-001 a "Confirmada" y generar notificación al administrador', () => {
        // Arrange: Datos exactos del PDF del TP5
        const reservaInicial = {
            idReserva: 'RES-001',
            usuario: 'invitado@test.com',
            tipoEvento: 'Consulta inicial',
            fecha: '15/07/2026',
            horario: '10:00 hs',
            estado: 'Pendiente'
        };
        const tokenValido = 'token-vigente-res001';

        // Act
        const resultado = confirmarReservaDesdeEmail(reservaInicial, tokenValido);

        // Assert
        expect(resultado.exito).toBe(true);
        expect(resultado.reserva.estado).toBe('Confirmada');
        expect(resultado.notificacionAdmin).toEqual({
            destinatario: 'admin@agendaya.com',
            asunto: 'Reserva confirmada',
            mensaje: 'Reserva confirmada: RES-001 por el usuario invitado@test.com'
        });
        expect(resultado.error).toBeNull();
    });

});