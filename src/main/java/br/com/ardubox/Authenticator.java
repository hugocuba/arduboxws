/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.com.ardubox;

import java.math.BigInteger;
import java.security.GeneralSecurityException;
import java.security.SecureRandom;
import java.util.HashMap;
import java.util.Map;
import java.util.Objects;
import java.util.Random;
import javax.security.auth.login.LoginException;

public class Authenticator {

    private final Map<String, String> keys = new HashMap();
    private final Map<String, String> tokens = new HashMap<>();    

    private static Authenticator authenticator = null;

    private Authenticator() {
        /**
         * keys são geradas antecipadamente e disponibilizadas para os clientes
         * da API Aqui estamos representando as keys para os dois users pré
         * cadastrados.
         */
        keys.put("arduboxkey", "ardubox");
    }

    public static Authenticator getInstance() {
        if (Objects.isNull(authenticator)) {
            authenticator = new Authenticator();
        }
        return authenticator;
    }

    public String login(String username, String password, String key) throws LoginException {        
        if (isKeyValid(key)) {
            
            Usuario u = new Usuario("hscuba@gmail.com", "9a080999e01cce6ada0702924ad28b1bcbcaf7497155517bacb80855722bb2d0637f03f34b027d23fa23ea28ad88ff81d6e364a4a0a2e380d5ee59f71d100554", "Hugo Cuba");
            
            if (u.getEmail().equals(username) && u.getSenha().equals(password)) {
                Random random = new SecureRandom();
                String stoken = new BigInteger(256, random).toString();
                Token token = new Token();
                token.setToken(stoken);
                token.setUsuario(u);
                tokens.put(stoken, username);
                return stoken;
            }
        }
        throw new LoginException();
    }

    public boolean isKeyValid(String key) {
        return keys.containsKey(key);
    }

    public boolean isTokenValid(String token) {
        return tokens.containsKey(token);
    }

    public void logout(String key, String token) throws GeneralSecurityException {
        if (isKeyValid(key)) {
            if (isTokenValid(token)) {
                tokens.remove(token);
                return;
            }
        }
        throw new GeneralSecurityException("TOKEN E KEY INVALIDOS.");
    }

}
