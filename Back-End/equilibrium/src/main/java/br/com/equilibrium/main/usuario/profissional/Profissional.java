package br.com.equilibrium.main.usuario.profissional;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table (name = "profissionaisSaude")
@Getter
@Setter

public class Profissional {

    @Column(name = "nome")
    private String nome;

    @Column(name = "nomeSocial")
    private String nomeSocial;

    @Column(name = "eMail")
    private String eMail;

    @Column(name = "telefone")
    private String telefone;

    @Column(name = "especialidade1")
    public String especialidade1;

    @Column(name = "especialidade2")
    public String especialidade2;

    @Column(name = "especialidade3")
    public String especialidade3;

    @Column(name = "especialidade4")
    public String especialidade4;

    @Column(name = "especialidade5")
    public String especialidade5;

    @Column(name = "valorHora")
    public Double valorHora;

}
