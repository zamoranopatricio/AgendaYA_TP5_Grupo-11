// test/cp007_cancelar_reserva_notificar.test.js
const { cancelarReservaYNotificar } = require('../src/cp007_cancelar_reserva_notificar.js');

describe('CP-007: Cancelar reserva y notificar por correo al usuario invitado', () => {

    it('Debe cambiar el estado de la reserva RES-105 a "Cancelada", desplegar mensaje en pantalla y enviar email a roman12@gmail.com', () => {
        // Arrange
        const reservaConfirmada = {
            idReserva: 'RES-105',
            usuario: 'roman12@gmail.com',
            tipoEvento: 'Consulta odontológica',
            fecha: '18/10/2026',
            horario: '11:30 hs',
            estado: 'Confirmada'
        };

        // Act
        const resultado = cancelarReservaYNotificar(reservaConfirmada);

        // Assert
        expect(resultado.exito).toBe(true);
        expect(resultado.reserva.estado).toBe('Cancelada');
        expect(resultado.mensajePantalla).toBe('La reserva ha sido cancelada con éxito');
        expect(resultado.emailNotificacion.destinatario).toBe('roman12@gmail.com');
        expect(resultado.emailNotificacion.asunto).toContain('Cancelación');
        expect(resultado.emailNotificacion.mensaje).toContain('RES-105');
        expect(resultado.error).toBeNull();
    });

});