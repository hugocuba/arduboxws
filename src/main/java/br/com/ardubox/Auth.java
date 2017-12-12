/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.com.ardubox;

import java.io.Serializable;
import java.security.GeneralSecurityException;
import javax.json.Json;
import javax.json.JsonObject;
import javax.json.JsonObjectBuilder;
import javax.security.auth.login.LoginException;
import javax.ws.rs.Consumes;
import javax.ws.rs.FormParam;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.HttpHeaders;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.Status;

/**
 *
 * @author hugo
 */
@Path("auth")
public class Auth implements Serializable {

    @POST
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_FORM_URLENCODED)
    public Response login(@Context HttpHeaders httpHeaders,
            @FormParam("username") String username,
            @FormParam("password") String password) {

        Authenticator authentication = Authenticator.getInstance();
        String key = httpHeaders.getHeaderString(Headers.KEY);

        try {
            String token = authentication.login(username, password, key);

            JsonObjectBuilder jsonObjectBuilder = Json.createObjectBuilder();
            jsonObjectBuilder.add("username", username);
            jsonObjectBuilder.add("token", token);

            JsonObject jsonObj = jsonObjectBuilder.build();

            return Response.ok(jsonObj.toString()).build();

        } catch (final LoginException ex) {
            JsonObjectBuilder jsonObjBuilder = Json.createObjectBuilder();
            jsonObjBuilder.add("message", "Problemas com usuario, senha ou chave");
            JsonObject jsonObj = jsonObjBuilder.build();
            return Response
                    .status(Status.UNAUTHORIZED)
                    .entity(jsonObj.toString())
                    .build();
        }
    }

    @POST
    @Path("logout")
    public Response logout(@Context HttpHeaders httpHeaders) {
        try {
            Authenticator authenticator = Authenticator.getInstance();
            String key = httpHeaders.getHeaderString(Headers.KEY);
            String token = httpHeaders.getHeaderString(Headers.TOKEN);
            authenticator.logout(key, token);
            return Response.ok().build();
        } catch (GeneralSecurityException ex) {
            return Response
                    .status(Status.INTERNAL_SERVER_ERROR)
                    .build();
        }
    }
}
