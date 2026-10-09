# AgendaYA - TP5: Casos y Datos de Prueba (Grupo 11)

Este repositorio contiene la implementación en JavaScript y los tests unitarios automatizados con **Jest** para los 12 casos de prueba (CP-001 a CP-012) del módulo **M04 (Proceso de Reserva Público)** y **M06 (Notificaciones y Comunicaciones)** del sistema AgendaYA.

## 👥 Integrantes - Grupo 11 (4k09)

* **Araya, Selene** (50768)

* **Fernandez, Bruno** (50891)

* **Retamales, Juan** (51053)

* **Richard, Facundo** (51055)

* **Zamorano, Patricio** (51157)

* **Puerta, Juan Manuel** (48926)

## 📁 Estructura del Proyecto

```
AgendaYA_TP5_Grupo-11/
├── src/                                   # Lógica de negocio de los casos de prueba
│   ├── cp001_confirmar_reserva.js
│   ├── cp002_confirmar_boton_expirado.js
│   ├── cp003_modificar_plantilla.js
│   ├── cp004_validar_plantilla_incompleta.js
│   ├── cp005_filtrar_turnos_disponibles.js
│   ├── cp006_validar_dia_sin_disponibilidad.js
│   ├── cp007_cancelar_reserva_notificar.js
│   ├── cp008_reintentar_cancelacion.js
│   ├── cp009_recordatorio_turno.js
│   ├── cp010_omitir_recordatorio_cancelado.js
│   ├── cp011_notificar_modificacion_reserva.js
│   └── cp012_omitir_notificacion_datos_internos.js
├── test/                                  # Suites de tests unitarios en Jest
│   ├── cp001_confirmar_reserva.test.js
│   ├── cp002_confirmar_boton_expirado.test.js
│   ├── cp003_modificar_plantilla.test.js
│   ├── cp004_validar_plantilla_incompleta.test.js
│   ├── cp005_filtrar_turnos_disponibles.test.js
│   ├── cp006_validar_dia_sin_disponibilidad.test.js
│   ├── cp007_cancelar_reserva_notificar.test.js
│   ├── cp008_reintentar_cancelacion.test.js
│   ├── cp009_recordatorio_turno.test.js
│   ├── cp010_omitir_recordatorio_cancelado.test.js
│   ├── cp011_notificar_modificacion_reserva.test.js
│   └── cp012_omitir_notificacion_datos_internos.test.js
├── .gitignore
├── package.json
└── README.md

```

## 📋 Lista de Casos de Prueba Cubiertos

| Identificador | Título del Caso de Prueba | 
| ----- | ----- | 
| **CP-001** | Confirmar reserva desde el correo electrónico recibido | 
| **CP-002** | Intentar confirmar una reserva con botón expirado | 
| **CP-003** | Modificar una plantilla de confirmación, cancelación o recordatorio | 
| **CP-004** | Modificar una plantilla sin colocar todas las variables dinámicas | 
| **CP-005** | Visualizar únicamente turnos disponibles en la selección de horarios | 
| **CP-006** | Visualizar día sin disponibilidad horaria | 
| **CP-007** | Cancelar reserva y notificar por correo al usuario invitado | 
| **CP-008** | Intentar cancelar una reserva previamente cancelada | 
| **CP-009** | Recordar al Usuario invitado su turno agendado | 
| **CP-010** | Omitir envío de recordatorio para una reserva previamente cancelada | 
| **CP-011** | Notificar al usuario invitado la modificación de fecha y horario de su reserva | 
| **CP-012** | No notificar al usuario invitado cuando se modifica un dato que no es fecha, horario ni modalidad | 

##  🚀Requisitos Previos e Instalación

### 1. Requisitos

* [Node.js](https://nodejs.org/) (Versión 18 o superior)

* npm (incluido con Node.js)

### 2. Instalación de dependencias

Clonar el repositorio e instalar los paquetes necesarios:

```
git clone https://github.com/zamoranopatricio/AgendaYA_TP5_Grupo-11.git
cd AgendaYA_TP5_Grupo-11
npm install

```

## 🧪 Ejecución de Pruebas Unitarias

### Ejecutar toda la suite de tests (CP-001 al CP-012):

```
npm test

```

### Ejecutar un caso de prueba individual:

```
npx jest test/cp001_confirmar_reserva.test.js
npx jest test/cp007_cancelar_reserva_notificar.test.js

```