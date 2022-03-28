package br.com.equilibrium.main.consulta;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table (name = "Consultas")
@Getter
@Setter

public class Consulta implements Serializable { //Entender como o arquivo trata os dados

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private long id;

    @Column(name = "historicoMedico")
    private String historicoMedico;

    @Column(name = "observacoes")
    private String observacoes;

    @Column(name = "recomendacoes")
    private String recomendacoes;

    @Column(name = "agenda")
    private String agenda;

    @Column(name = "status")
    private String status;


}
