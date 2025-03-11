import { NextResponse } from "next/server";

/*
Ejemplo de como documentar, lo hice en inglés para no perder la práctica. Esta línea si borrala 🫡
The `let datos` declaration is creating an array of objects representing tasks. Each object in the
array has three properties: `id` (a unique identifier for the task), `nombre` (the name or
description of the task), and `completado` (a boolean indicating whether the task is completed or
not).

*/

let datos = [
  { id: 1, nombre: "Tarea 1", completado: false },
  { id: 2, nombre: "Tarea 2", completado: true },
  { id: 3, nombre: "Tarea 3", completado: false },
  { id: 4, nombre: "Tarea 4", completado: true },
  { id: 5, nombre: "Tarea 5", completado: false },
];

export async function GET() {
  /* Aquí hay un error aproposito, espero lo sepas solucionar */
  return NextResponse.json(datos);
}

export async function POST(req: Request) {
  const body = await req.json();
  if (!body.nombre) {
    return NextResponse.json({ error: "Nombre es requerido" }, { status: 400 });
  }

  const nuevoDato = {
    id: datos.length + 1,
    nombre: body.nombre,
    completado: false,
  };
  datos.push(nuevoDato);

  return NextResponse.json(nuevoDato, { status: 201 });
}

export async function PUT(req: Request) {
  const body = await req.json();
  const index = datos.findIndex((item) => item.id === body.id);
  if (index === -1) {
    return NextResponse.json(
      { error: "Elemento no encontrado" },
      { status: 404 }
    );
  }

  //El método PUT es utilizado para modificar datos en una API, vendría siendo la U en CRUD, que significa UPDATE.

  datos[index] = { ...datos[index], ...body };

  return NextResponse.json(datos[index]);
}

export async function DELETE(req: Request) {
  const body = await req.json();
  datos = datos.filter((item) => item.id !== body.id);

  return NextResponse.json({ message: "Elemento eliminado" });
}

//El método DELETE, como su nombre lo menciona, nos sirve para eliminar datos de una API. Vendría siendo la D en CRUD. DELETE.
