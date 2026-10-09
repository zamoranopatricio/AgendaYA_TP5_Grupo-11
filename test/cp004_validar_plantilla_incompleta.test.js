// tests/cp004_validar_plantilla_incompleta.test.js
const { guardarPlantillaValidandoVariables } = require('../src/cp004_validar_plantilla_incompleta.js');

describe('CP-004: Modificar una plantilla sin colocar todas las variables dinámicas', () => {

    it('Debe mostrar un mensaje de error indicando la variable faltante y evitar guardar la modificación', () => {
        // Arrange: Se redacta el mensaje omitiendo [Nombre_Invitado] según los datos de prueba del TP5
        const variablesRequeridas = ['[Nombre_Invitado]', '[Nombre_Prof]', '[Fecha]', '[Hora]'];
        const plantillaIncompleta = 'Estimado usuario, su turno con [Nombre_Prof] fue programado para el [Fecha] a las [Hora].';

        // Act: Intento de hacer clic en "Guardar Cambios"
        const resultado = guardarPlantillaValidandoVariables(plantillaIncompleta, variablesRequeridas);

        // Assert: Se verifica que NO se haya guardado y retorne el mensaje de error correspondiente
        expect(resultado.guardado).toBe(false);
        expect(resultado.error).toBe('Error: No se han colocado todas las variables dinámicas. Faltante: [Nombre_Invitado]');
    });

});