module.exports = {
    development: {
      client: 'postgresql',
      connection: {

        // ******local ***********//
        host: process.env.NEXT_PUBLIC_DB_HOST || 'localhost',       // Your database host
        port:process.env.NEXT_PUBLIC_DB_PORT || 5432,              // Your database port
        user: process.env.NEXT_PUBLIC_DB_USER || 'postgres',        // Your database username
        password: process.env.NEXT_PUBLIC_DB_PASSWORD || '1234',    // Your database password
        database: process.env.NEXT_PUBLIC_DB_NAME || 'maintenance', // Your database name

        //********production*********//
        //  host: 'ep-steep-snow-a45a6u9s-pooler.us-east-1.aws.neon.tech',       // Your database host
        //  port: 5432,              // Your database port
        //  user: 'default',        // Your database username
        //  password: 'q2oxBDan6POV',    // Your database password
        //  database: 'verceldb', // Your database name
        // ssl: { rejectUnauthorized: false }, // Enable SSL with rejection handling
      },
      migrations: {
        directory: './data/migrations', // Directory where migration files will be created
      },
      seeds:{
        directory: './data/seeds', // Directory where seeds files will be created
      },
      ssl: false, // Enable SSL
    },
  };
  