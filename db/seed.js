import db from "#db/client";
import { faker } from "@faker-js/faker";
import { createEmployee } from "./queries/employees.js";

await db.connect();
await seedEmployees();
await db.end();
console.log("🌱 Database seeded.");

async function seedEmployees() {
  // TODO
  for (let i = 0; i < 10; i++) {
    const employee = {
      name : faker.person.fullName(),
      birthday : faker.date.between({ from: '1970-01-01', to: '2030-01-01' }),
      salary : faker.number.int({ min: 1000, max: 18000 }),
    }
    await createEmployee(employee);

  }
}
