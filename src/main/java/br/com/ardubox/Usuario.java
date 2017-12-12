/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.com.ardubox;

import java.util.ArrayList;
import java.util.Base64;
import java.util.List;

/**
 *
 * @author hugo
 */
public class Usuario {
    
    private String email;
    private String senha;
    private List<Projeto> projetos = new ArrayList<>();

    public Usuario(String email, String senha) {
        this.email = email;
        this.senha = senha;
    }
    
}
