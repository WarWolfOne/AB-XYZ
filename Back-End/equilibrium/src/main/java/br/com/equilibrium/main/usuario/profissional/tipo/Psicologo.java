package br.com.equilibrium.main.usuario.profissional.tipo;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table (name = "Psicologos")
@Getter
@Setter

public class Psicologo implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private long id;

    @Column(name = "CRP")
    private String CRP;

    @Column (name = "estadoEmissao")
    private String estadoEmissao;
}
