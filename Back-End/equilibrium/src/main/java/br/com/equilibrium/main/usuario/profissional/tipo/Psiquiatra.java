package br.com.equilibrium.main.usuario.profissional.tipo;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table (name = "psiquiatras")
@Getter
@Setter

public class Psiquiatra implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private long id;

    @Column (name = "CRM")
    private String CRM;

    @Column (name = "estadoEmissao")
    private String estadoEmissao;
}
