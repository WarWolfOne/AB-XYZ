package br.com.equilibrium.main.usuario.profissional;

import br.com.equilibrium.main.consulta.Consulta;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

@Entity
@Table (name = "profissionaisSaude")
@Getter
@Setter

public class Profissional implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private long id;

    @OneToMany(mappedBy = "profissional")
    private List<Consulta> consultaList;


    @Column(name = "nome")
    private String nome;

    @Column(name = "nomeSocial")
    private String nomeSocial;

    @Column(name = "eMail")
    private String eMail;

    @Column(name = "telefone")
    private String telefone;

    @Column(name = "especialidade1")
    private String especialidade1;

    @Column(name = "especialidade2")
    private String especialidade2;

    @Column(name = "especialidade3")
    private String especialidade3;

    @Column(name = "especialidade4")
    private String especialidade4;

    @Column(name = "especialidade5")
    private String especialidade5;

    @Column(name = "valorHora")
    private Double valorHora;

}
