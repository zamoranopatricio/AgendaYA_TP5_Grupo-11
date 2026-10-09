// tests/cp009_recordatorio_turno.test.js
const { procesarRecordatorioTurno } = require('../src/cp009_recordatorio_turno.js');

describe('CP-009: Recordar al Usuario invitado su turno agendado', () => {

    it('Debe enviar un correo de recordatorio a jijijija@gmail.com 24 horas antes del turno de la reserva RES-167', () => {
        // Arrange: Datos exactos del Informe TP5
        const reservaConfirmada = {
            idReserva: 'RES-167',
            usuario: 'jijijija@gmail.com',
            tipoEvento: 'Consulta inicial',
            fecha: '9/10/2026',
            horario: '17:00 hs',
            estado: 'Confirmada'
        };

        // Simulación temporal: Fecha actual configurada exactamente 24 horas antes (8/10/2026 a las 17:00 hs)
        const fechaSistemaSimulada = new Date('2026-10-08T17:00:00');

        // Act: Ejecución del proceso automático de recordatorios
        const resultado = procesarRecordatorioTurno(reservaConfirmada, fechaSistemaSimulada);

        // Assert: Log de éxito y contenido correcto del mensaje en la bandeja de entrada
        expect(resultado.enviado).toBe(true);
        expect(resultado.log).toBe('Correo de recordatorio enviado con éxito a jijijija@gmail.com');
        expect(resultado.email.destinatario).toBe('jijijija@gmail.com');
        expect(resultado.email.cuerpo).toContain('RES-167');
        expect(resultado.email.cuerpo).toContain('Consulta inicial');
        expect(resultado.email.cuerpo).toContain('9/10/2026');
        expect(resultado.email.cuerpo).toContain('17:00 hs');
    });

});