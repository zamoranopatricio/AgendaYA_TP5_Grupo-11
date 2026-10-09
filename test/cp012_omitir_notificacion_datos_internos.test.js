// tests/cp012_omitir_notificacion_datos_internos.test.js
const { modificarCamposReserva } = require('../src/cp012_omitir_notificacion_datos_internos.js');

describe('CP-012: No notificar al usuario invitado cuando se modifica un dato que no es fecha, horario ni modalidad', () => {

    it('Debe guardar el cambio en "Nota interna", mostrar "Reserva confirmada con éxito" y no enviar ningún correo nuevo para RES-211', () => {
        // Arrange: Datos exactos del Informe TP5
        const reservaOriginal = {
            idReserva: 'RES-211',
            usuario: 'geronimobenavidez@gmail.com',
            tipoEvento: 'Consulta inicial',
            fecha: '21/10/2026',
            horario: '11:00 hs',
            modalidad: 'Presencial',
            estado: 'Confirmada',
            notaInterna: ''
        };

        const modificaciones = {
            notaInterna: 'Paciente llega con estudios'
        };

        // Act: El administrador completa la Nota interna sin modificar fecha, horario ni modalidad
        const resultado = modificarCamposReserva(reservaOriginal, modificaciones);

        // Assert: El cambio se guarda, la pantalla confirma el éxito, pero los logs y envíos confirman que NO se notifica
        expect(resultado.exito).toBe(true);
        expect(resultado.mensajePantalla).toBe('Reserva confirmada con éxito');
        expect(resultado.emailGenerado).toBe(false);
        expect(resultado.logNotificador).toBe('No se generó ningún envío por no haber cambios en la fecha, horario o modalidad.');
    });

});