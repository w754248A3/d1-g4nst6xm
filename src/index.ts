export interface Env {
  // If you set another name in the Wrangler config file for the value for 'binding',
  // replace "DB" with the variable name you defined.
  database_name: D1Database;
}

export default {
  async fetch(request, env): Promise<Response> {


	try{
		// If you did not use `DB` as your binding name, change it here
      const { results } = await env.database_name.prepare(
        "SELECT * FROM images WHERE id = ?",
      )
        .bind(1)
        .run();
      return Response.json(results);}
	catch(e){
		return Response.json(e);
	}
    
  },
} satisfies ExportedHandler<Env>;