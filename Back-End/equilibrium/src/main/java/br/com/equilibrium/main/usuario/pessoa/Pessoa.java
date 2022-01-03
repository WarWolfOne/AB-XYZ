package br.com.equilibrium.main.usuario.pessoa;

import lombok.Data;

import javax.persistence.*;

@Entity
@Table(name = "pessoas")

public class Pessoa {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private long id;

    @Column(name = "nome")
    private String nome;

    @Column(name = "eMail")
    private String eMail;

    @Column(name = "telefone")
    private String telefone;

    @Column(name = "cpf")
    private String cpf;

}
