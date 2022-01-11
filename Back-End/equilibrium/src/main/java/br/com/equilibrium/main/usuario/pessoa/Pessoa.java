package br.com.equilibrium.main.usuario.pessoa;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

@Entity
@Table(name = "pessoas")
@Getter
@Setter

public class Pessoa implements Serializable { //Entender como o arquivo trata os dados

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

    @Column(name = "dataNascimento")
    private String dataNascimento;
    DateTimeFormatter format = DateTimeFormatter.ofPattern("dd/MM/yyyy");
    LocalDate d = LocalDate.parse(dataNascimento, format);

}