/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.com.ardubox;

import javax.json.Json;
import javax.json.JsonObject;
import javax.json.JsonObjectBuilder;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

/**
 *
 * @author hugo
 */
@Path("/projetos")
public class Projeto {
    
    private String codigo;
    private Usuario usuario;
    
     @GET
     @Produces(MediaType.APPLICATION_JSON)
     public Response teste(){
        JsonObjectBuilder jsonObjBuilder = Json.createObjectBuilder();
        jsonObjBuilder.add("message", "Get executed!");
        JsonObject jsonObj = jsonObjBuilder.build();

        return Response.ok(jsonObj.toString()).build();
     }
     
     
}
