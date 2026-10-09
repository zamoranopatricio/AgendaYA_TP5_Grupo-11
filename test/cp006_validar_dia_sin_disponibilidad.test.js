// tests/cp006_validar_dia_sin_disponibilidad.test.js
const { consultarDisponibilidadJornada } = require('../src/cp006_validar_dia_sin_disponibilidad.js');

describe('CP-006: Visualizar día sin disponibilidad horaria', () => {

    it('Debe desplegar el mensaje informativo y no mostrar bloques horarias cuando todos los turnos del 21/09/2026 están reservados', () => {
        // Arrange: Datos exactos del Informe TP5 para el 21/09/2026
        const turnosBD = [
            { idTurno: 201, horaInicio: '09:00', horaFin: '09:30', estado: 'Reservado' },
            { idTurno: 202, horaInicio: '09:30', horaFin: '10:00', estado: 'Reservado' }
        ];

        // Act: Selección de la fecha en el calendario
        const resultado = consultarDisponibilidadJornada(turnosBD);

        // Assert: No hay horarios seleccionables y se muestra la alerta correspondiente
        expect(resultado.bloquesDisponibles.length).toBe(0);
        expect(resultado.mensajeInformativo).toBe('No hay turnos disponibles para la fecha seleccionada. Por favor, elija otra fecha.');
    });

});