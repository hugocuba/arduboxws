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

    /* Simula uma tabela do banco com os usuarios */
    private final Map<String, String> users = new HashMap();

    /* Simula uma tabela do banco com as chaves de acesso */
    private final Map<String, String> keys = new HashMap();

    /* Guarda os tokens gerados em tempo de execução */
    private final Map<String, String> tokens = new HashMap<>();

    private static Authenticator authenticator = null;

    private Authenticator() {
        /**
         * Guarda o usuário e senha dos clientes da API
         */
        users.put("walter", "white");

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
            if ("hugo".equals(username) && "cuba".equals(password)) {
                Random random = new SecureRandom();
                String token = new BigInteger(256, random).toString();
                tokens.put(token, username);
                return token;
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
