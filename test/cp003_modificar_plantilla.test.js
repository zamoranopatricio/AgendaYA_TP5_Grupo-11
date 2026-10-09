// tests/cp003_modificar_plantilla.test.js
const { modificarPlantillaExitoso } = require('../src/cp003_modificar_plantilla.js');

describe('CP-003: Modificar una plantilla de confirmación, cancelación o recordatorio', () => {

    it('Debe permitir al Administrador guardar la plantilla cuando incluye todas las variables dinámicas correctamente', () => {
        // Arrange: Datos de prueba exactos del Informe TP5
        const variablesObligatorias = ['[Nombre_Invitado]', '[Nombre_Prof]', '[Fecha]', '[Hora]'];
        const plantillaConTodasLasVariables = 'Hola [Nombre_Invitado], confirmamos tu reserva con [Nombre_Prof] para el día [Fecha] a las [Hora].';

        // Act: El Administrador hace clic en "Guardar Cambios"
        const resultado = modificarPlantillaExitoso(plantillaConTodasLasVariables, variablesObligatorias);

        // Assert: El sistema guarda los cambios y confirma la acción
        expect(resultado.exito).toBe(true);
        expect(resultado.mensaje).toBe('Plantilla actualizada de forma correcta.');
        expect(resultado.error).toBeNull();
    });

});