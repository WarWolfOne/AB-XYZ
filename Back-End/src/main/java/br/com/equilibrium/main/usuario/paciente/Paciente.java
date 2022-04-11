package br.com.equilibrium.main.usuario.paciente;

import br.com.equilibrium.main.consulta.Consulta;
import br.com.equilibrium.main.usuario.profissional.Profissional;
import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Getter;
import lombok.Setter;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "pacientes")
@Getter
@Setter

public class Paciente implements Serializable { //Entender como o arquivo trata os dados

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private long id;

    @OneToMany(mappedBy = "paciente")
    private List<Consulta> consultaList;

    @Column(name = "nome")
    private String nome;

    @Column(name = "nomeSocial")
    private String nomeSocial;

    @Column(name = "eMail")
    private String eMail;

    @Column(name = "telefone")
    private String telefone;

    @Column(name = "cpf")
    private String cpf;

    @Column(name = "perfilPsicologico")
    private String perfilPsicologico;

    @Column(name = "dataNascimento")
    @JsonFormat(pattern = "dd-MM-yyyy")
    @DateTimeFormat(pattern = "dd-MM-yyyy")
    private Date dataNascimento;

}