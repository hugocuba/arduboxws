/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.com.ardubox.dao;

import br.com.ardubox.Usuario;
import java.util.List;

/**
 *
 * @author hugo
 */
public class UsuarioDAO extends DAO<Usuario>{

    public UsuarioDAO() {
    }
    
    @Override
    public List<Usuario> findAll() {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    public Usuario getById(String email) {
        Usuario u;
        u = entityManager.find(Usuario.class, email);
        return u;
    }

    @Override
    public boolean removeById(Integer id) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public Usuario getById(Integer id) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }
    
}
