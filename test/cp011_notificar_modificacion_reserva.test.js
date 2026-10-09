// tests/cp011_notificar_modificacion_reserva.test.js
const { modificarFechaHorarioReserva } = require('../src/cp011_notificar_modificacion_reserva.js');

describe('CP-011: Notificar al usuario invitado la modificación de fecha y horario de su reserva', () => {

    it('Debe guardar la nueva fecha/horario para RES-210, mostrar "Reserva confirmada con éxito" y enviar el correo a geronimobenavidez@gmail.com', () => {
        // Arrange: Datos exactos del Informe TP5
        const reservaOriginal = {
            idReserva: 'RES-210',
            usuario: 'geronimobenavidez@gmail.com',
            tipoEvento: 'Consulta inicial',
            fecha: '20/10/2026',
            horario: '10:00 hs',
            modalidad: 'Presencial',
            estado: 'Confirmada'
        };

        const cambioSolicitado = {
            fechaNueva: '23/10/2026',
            horaNueva: '15:00 hs'
        };

        // Act: El administrador hace clic en "Guardar"
        const resultado = modificarFechaHorarioReserva(reservaOriginal, cambioSolicitado);

        // Assert: Actualización de datos, mensaje en pantalla y correo enviado
        expect(resultado.exito).toBe(true);
        expect(resultado.mensajePantalla).toBe('Reserva confirmada con éxito');
        expect(resultado.reservaActualizada.fecha).toBe('23/10/2026');
        expect(resultado.reservaActualizada.horario).toBe('15:00 hs');
        expect(resultado.emailEnviado.destinatario).toBe('geronimobenavidez@gmail.com');
        expect(resultado.emailEnviado.cuerpo).toContain('RES-210');
        expect(resultado.emailEnviado.cuerpo).toContain('Consulta inicial');
        expect(resultado.emailEnviado.cuerpo).toContain('23/10/2026');
        expect(resultado.emailEnviado.cuerpo).toContain('15:00 hs');
    });

});