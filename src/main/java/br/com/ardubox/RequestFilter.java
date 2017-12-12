/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.com.ardubox;

import java.io.IOException;
import java.util.logging.Logger;
import javax.ws.rs.container.ContainerRequestContext;
import javax.ws.rs.container.ContainerRequestFilter;
import javax.ws.rs.container.PreMatching;
import javax.ws.rs.core.Response;
import javax.ws.rs.ext.Provider;

/**
 *
 * @author hugo
 */
/**
 *
 * @author joao.rodrigo
 */
@Provider
@PreMatching
public class RequestFilter implements ContainerRequestFilter{
 
    private final static Logger LOG = Logger.getLogger( RequestFilter.class.getName() );
 
    @Override
    public void filter( ContainerRequestContext requestCtx ) throws IOException {
 
        String path = requestCtx.getUriInfo().getPath();
        LOG.info("Filtrando path: " + path );
 
        if ( requestCtx.getRequest().getMethod().equals("OPTIONS") ) {
            requestCtx.abortWith(Response.status( Response.Status.OK ).build() );
            return;
        }
 
        Authenticator authenticator = Authenticator.getInstance();
        String serviceKey = requestCtx.getHeaderString( Headers.KEY );
 
        if ( !authenticator.isKeyValid(serviceKey) ) {
            LOG.info("Key ERRO: " + serviceKey);
            requestCtx.abortWith( Response.status( Response.Status.UNAUTHORIZED ).build() );
            return;
        }
        LOG.info("Key OK: " + serviceKey);
 
        if ( !path.startsWith("auth") ) {
            String authToken = requestCtx.getHeaderString( Headers.TOKEN );
 
            if ( !authenticator.isTokenValid( authToken ) ) {
                LOG.info("Token ERRO: " + authToken);
                requestCtx.abortWith( Response.status( Response.Status.UNAUTHORIZED ).build() );
                return;
            }
            LOG.info("Token OK: " + authToken);
        }
    }
}