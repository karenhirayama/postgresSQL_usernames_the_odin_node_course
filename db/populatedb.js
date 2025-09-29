import { Client } from "pg"

const SQL = `
CREATE TABLE IF NOT EXISTS usernames (
    id INTERGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    username VARCHAR ( 255 )
);

INSERT INTO usernames (usernames)
VALUES
    ('Karen'),
    ('Odin');
`

async function main() {
  console.log("Seeding...")
  const client = new Client({
    connectionString: "postgresql://<role_name>:<role_password>@localhost:5432/top_users",
  })

  await client.connect()
  await client.query(SQL)
  await client.end()
  console.log("Done")
}

main()
