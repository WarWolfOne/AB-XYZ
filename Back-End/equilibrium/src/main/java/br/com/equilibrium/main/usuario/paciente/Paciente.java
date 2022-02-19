package br.com.equilibrium.main.usuario.paciente;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "paciente")
@Getter
@Setter

public class Paciente implements Serializable { //Entender como o arquivo trata os dados

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

    /*@Column(name = "dataNascimento")
    private String dataNascimento;
    DateTimeFormatter format = DateTimeFormatter.ofPattern("dd/MM/yyyy");
    LocalDate d = LocalDate.parse(dataNascimento, format);*/

}
