// tests/cp005_filtrar_turnos_disponibles.test.js
const { obtenerTurnosDisponibles } = require('../src/cp005_filtrar_turnos_disponibles.js');

describe('CP-005: Visualizar únicamente turnos disponibles en la selección de horarios', () => {

    it('Debe filtrar la grilla horaria y retornar únicamente los turnos con estado "Disponible" para la fecha 20/09/2026', () => {
        // Arrange: Datos exactos del Informe TP5
        const turnosBD = [
            { idTurno: 101, horaInicio: '09:00', horaFin: '09:30', estado: 'Reservado' },
            { idTurno: 102, horaInicio: '09:30', horaFin: '10:00', estado: 'Disponible' },
            { idTurno: 103, horaInicio: '10:00', horaFin: '10:30', estado: 'Reservado' },
            { idTurno: 104, horaInicio: '10:30', horaFin: '11:00', estado: 'Disponible' }
        ];

        // Act: El usuario selecciona la fecha 20/09/2026
        const turnosVisibles = obtenerTurnosDisponibles(turnosBD);

        // Assert: Se verifica que se omitan los reservados (101 y 103) y solo figuren 09:30-10:00 y 10:30-11:00
        expect(turnosVisibles.length).toBe(2);
        expect(turnosVisibles).toEqual([
            { idTurno: 102, horaInicio: '09:30', horaFin: '10:00', estado: 'Disponible' },
            { idTurno: 104, horaInicio: '10:30', horaFin: '11:00', estado: 'Disponible' }
        ]);
    });

});