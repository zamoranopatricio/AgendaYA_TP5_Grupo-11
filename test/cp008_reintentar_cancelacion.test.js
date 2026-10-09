// tests/cp008_reintentar_cancelacion.test.js
const { procesarReintentoCancelacion } = require('../src/cp008_reintentar_cancelacion.js');

describe('CP-008: Intentar cancelar una reserva previamente cancelada', () => {

    it('Debe detectar que la reserva RES-106 ya está "Cancelada", mostrar aviso informativo y no duplicar notificaciones', () => {
        // Arrange: Datos exactos del Informe TP5
        const reservaYaCancelada = {
            idReserva: 'RES-106',
            usuario: 'juan2003gmail.com',
            tipoEvento: 'Consulta inicial',
            fecha: '22/10/2026',
            horario: '16:00 hs',
            estado: 'Cancelada'
        };

        // Act: Clic por segunda vez en "Cancelar reserva"
        const resultado = procesarReintentoCancelacion(reservaYaCancelada);

        // Assert: No procesa una nueva cancelación, no envía correo y muestra la alerta correspondiente
        expect(resultado.procesado).toBe(false);
        expect(resultado.avisoInformativo).toBe('Esta reserva ya ha sido cancelada anteriormente');
        expect(resultado.emailEnviado).toBe(false);
    });

});