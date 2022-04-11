package br.com.equilibrium.main.consulta;

import br.com.equilibrium.main.usuario.paciente.Paciente;
import br.com.equilibrium.main.usuario.profissional.Profissional;
import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Getter;
import lombok.Setter;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;
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

    @ManyToOne
    @JoinColumn(name = "paciente_id")
    private Paciente paciente;

    @ManyToOne
    @JoinColumn(name = "profissional_id")
    private Profissional profissional;

    @Column(name = "historicoMedico")
    private String historicoMedico;

    @Column(name = "observacoes")
    private String observacoes;

    @Column(name = "recomendacoes")
    private String recomendacoes;

    @Column(name = "agendamentoData")
    @JsonFormat(pattern = "dd-MM-yyyy")
    @DateTimeFormat(pattern = "dd-MM-yyyy")
    private Date agendamentoData;

    @Column(name = "agendamentoHora")
    @JsonFormat(pattern = "HH:mm")
    @DateTimeFormat(pattern = "HH:mm")
    private Date agendamentoHora;

    @Column(name = "status")
    private String status;

}
