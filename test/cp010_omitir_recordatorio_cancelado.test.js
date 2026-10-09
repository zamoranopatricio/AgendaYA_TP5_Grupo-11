// tests/cp010_omitir_recordatorio_cancelado.test.js
const { evaluarRecordatorioReservaCancelada } = require('../src/cp010_omitir_recordatorio_cancelado.js');

describe('CP-010: Omitir envío de recordatorio para una reserva previamente cancelada', () => {

    it('Debe ignorar la reserva RES-168 en los logs y no enviar ningún correo nuevo al usuario por estar "Cancelada"', () => {
        // Arrange: Datos exactos del Informe TP5
        const reservaCancelada = {
            idReserva: 'RES-168',
            usuario: 'jijijija@gmail.com',
            tipoEvento: 'Consulta inicial',
            fecha: '9/10/2026',
            horario: '17:00 hs',
            estado: 'Cancelada'
        };

        // Act: Simulación de la ejecución del proceso automático 24 horas antes
        const resultado = evaluarRecordatorioReservaCancelada(reservaCancelada);

        // Assert: Se corrobora que no se envía email y el log confirma que fue ignorada
        expect(resultado.enviado).toBe(false);
        expect(resultado.log).toBe('La reserva RES-168 fue ignorada por no cumplir con el estado requerido.');
    });

});